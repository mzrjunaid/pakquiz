# PakQuiz — Migration Plan

> **Laravel API (Oracle Cloud) + Supabase PostgreSQL + Next.js (Vercel)**

---

## Current Architecture

PakQuiz currently runs as a **Laravel 13 monolith**:

- **Backend:** Laravel 13 + PHP 8.3
- **Frontend:** Inertia.js v2 + React 19 + TypeScript + Tailwind v4 (served from same app)
- **Public pages:** Blade + Livewire (home, MCQs, subjects, papers, departments, search)
- **Database:** MySQL
- **Auth:** Laravel Fortify (2FA, role middleware, `status:approved`)
- **AI:** Ollama integration, chat streaming, MCQ generation
- **Jobs:** Sitemap generation, OG image generation (Browsershot + Intervention Image)
- **SEO:** IndexNow, sitemap, per-MCQ OG images
- **Admin:** Full CRUD — MCQs, Papers, Subjects, Topics, Departments, SEO Meta, Import tools
- **LMS:** Inertia/React pages for subject dashboard and progress tracking

---

## Target Architecture

| Layer | Technology | Host |
|---|---|---|
| Backend API | Laravel 13 (pure REST) | Oracle Cloud Free Tier |
| Database | PostgreSQL via Supabase | Supabase |
| Frontend | Next.js 15 + Tailwind + shadcn/ui | Vercel |
| Mobile (future) | React Native + Expo | App Store / Play Store |

### Why This Stack

- **Laravel stays** — 90% of backend code survives unchanged (Models, Services, Jobs, Filters). No rewrite.
- **Supabase PostgreSQL** — free 500MB, built-in Realtime, Row Level Security, more powerful than MySQL for complex queries.
- **Next.js 15 App Router** — SSG/ISR for MCQ and paper pages is a massive SEO improvement over Livewire. Edge rendering on Vercel. Same React skills.
- **Oracle Free Tier** — 2 vCPUs + 24GB RAM permanently free. Overkill for Laravel API.
- **Mobile path** — once the Laravel REST API exists, React Native (Expo) can be built with the same TypeScript types, TanStack Query hooks, and API client. Zero extra backend work.

---

## Migration Phases

### Phase 1 — Database: MySQL → Supabase PostgreSQL
**Timeline: Week 1–2**

1. **Create Supabase project**
   - Go to [supabase.com](https://supabase.com) → New Project → region: Singapore (closest to Pakistan)
   - Note: `DB_HOST`, `DB_PORT=5432`, `DB_DATABASE=postgres`, `DB_USERNAME`, `DB_PASSWORD`

2. **Update `.env`**
   ```env
   DB_CONNECTION=pgsql
   DB_HOST=db.xxxx.supabase.co
   DB_PORT=5432
   DB_DATABASE=postgres
   DB_USERNAME=postgres
   DB_PASSWORD=your-password
   ```

3. **Fix MySQL-specific migration syntax**

   | File | Issue | Fix |
   |---|---|---|
   | `create_papers_table` | `unsignedInteger('paper_year')` | Change to `integer('paper_year')` — PG has no unsigned ints |
   | `create_mcqs_table` | `enum('single','multiple','true_false')` | Works in PG — keep as-is |
   | `create_mcqs_table` | `enum('easy','medium','hard')` | Works in PG — keep as-is |
   | All migrations | `softDeletes()` | Works in PG ✓ |
   | All migrations | `cascadeOnDelete()` | Works in PG ✓ |

4. **Run migrations fresh on Supabase**
   ```bash
   php artisan migrate:fresh --database=pgsql
   ```
   Confirm all 23 migration files run without error.

5. **Export MySQL data → Import to Supabase**

   Option A — automated with `pgloader`:
   ```bash
   pgloader mysql://user:pass@localhost/pakquiz \
     postgresql://postgres:pass@db.xxx.supabase.co/postgres
   ```

   Option B — manual: export MySQL tables as CSV → import via Supabase Table Editor.

6. **Verify data integrity**
   - Check row counts match between MySQL and PG
   - Verify slugs are intact, foreign key relations are correct
   - Run the existing test suite: `php artisan test`

7. **Set up Supabase Row Level Security (recommended)**
   - Enable RLS on public tables (mcqs, papers, subjects, etc.) with open `SELECT` policies
   - Keep all write operations exclusively through the Laravel API — do not expose Supabase PostgREST for mutations

---

### Phase 2 — Laravel as Pure API on Oracle Cloud
**Timeline: Week 2–4**

#### 2.1 — Set up Oracle Cloud VM

1. Create account at [oracle.com/cloud/free](https://oracle.com/cloud/free)
2. Compute → Instances → Create Instance
   - Shape: `VM.Standard.A1.Flex` (Ampere ARM) → 2 OCPUs + 12GB RAM (always free)
   - OS: Ubuntu 22.04
3. Open ports 80, 443, 22 in Security List → Ingress Rules

#### 2.2 — Install Coolify (self-hosted deployment platform)

```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

Coolify handles Nginx, SSL (Let's Encrypt), GitHub auto-deploy, and process management. Access dashboard at `http://your-server-ip:8000`.

#### 2.3 — Restructure Laravel as pure API

**Add to `composer.json`:**
```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

**Remove from `composer.json`:**
```bash
composer remove inertiajs/inertia-laravel livewire/livewire masmerise/livewire-toaster laravel/wayfinder
```

**Remove from `package.json`** (no longer needed server-side):
```bash
npm uninstall @inertiajs/react @laravel/vite-plugin-wayfinder
```

#### 2.4 — Create `routes/api.php`

```php
<?php

use App\Http\Controllers\Frontend\McqController;
use App\Http\Controllers\Frontend\PaperController;
use App\Http\Controllers\Frontend\SubjectController;
use App\Http\Controllers\Frontend\DepartmentController;
use App\Http\Controllers\Frontend\TestingServiceController;
use App\Http\Controllers\Frontend\SearchController;
use App\Http\Controllers\lms\LMSController;
use App\Http\Controllers\Admin\McqController as AdminMcqController;
use App\Http\Controllers\Admin\PaperController as AdminPaperController;
use App\Http\Controllers\Admin\SubjectController as AdminSubjectController;
use App\Http\Controllers\Admin\DepartmentController as AdminDepartmentController;
use App\Http\Controllers\Admin\TestingServiceController as AdminTestingServiceController;
use App\Http\Controllers\Admin\TopicController as AdminTopicController;
use App\Http\Controllers\Admin\SeoMetaController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {

    // ── Public (no auth) ─────────────────────────────────────
    Route::get('/mcqs', [McqController::class, 'index']);
    Route::get('/mcqs/{mcq:slug}', [McqController::class, 'show']);
    Route::get('/papers', [PaperController::class, 'index']);
    Route::get('/papers/{paper:slug}', [PaperController::class, 'show']);
    Route::get('/subjects', [SubjectController::class, 'index']);
    Route::get('/subjects/{subject:slug}', [SubjectController::class, 'show']);
    Route::get('/subjects/{subject:slug}/topics', [SubjectController::class, 'topics']);
    Route::get('/subjects/{subject:slug}/{topic:slug}', [SubjectController::class, 'topicShow']);
    Route::get('/departments', [DepartmentController::class, 'index']);
    Route::get('/departments/{department:slug}', [DepartmentController::class, 'show']);
    Route::get('/testing-services', [TestingServiceController::class, 'index']);
    Route::get('/testing-services/{testingService:slug}', [TestingServiceController::class, 'show']);
    Route::get('/search', [SearchController::class, 'suggestions']);
    Route::get('/og/{mcq:slug}', [AdminMcqController::class, 'mcqOgImage']);

    // ── Auth ─────────────────────────────────────────────────
    Route::post('/auth/login', [AuthController::class, 'login']);
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::middleware('auth:sanctum')->post('/auth/logout', [AuthController::class, 'logout']);
    Route::middleware('auth:sanctum')->get('/auth/user', [AuthController::class, 'user']);

    // ── LMS (auth required) ───────────────────────────────────
    Route::middleware(['auth:sanctum', 'status:approved'])->prefix('lms')->group(function () {
        Route::get('/', [LMSController::class, 'index']);
        Route::get('/subjects', [LMSController::class, 'subjectShow']);
    });

    // ── Admin (auth + role) ───────────────────────────────────
    Route::middleware(['auth:sanctum', 'role:admin,super-admin,editor', 'status:approved'])
        ->prefix('admin')
        ->group(function () {
            Route::apiResource('mcqs', AdminMcqController::class);
            Route::apiResource('papers', AdminPaperController::class);
            Route::apiResource('subjects', AdminSubjectController::class);
            Route::apiResource('departments', AdminDepartmentController::class);
            Route::apiResource('testing-services', AdminTestingServiceController::class);
            Route::apiResource('topics', AdminTopicController::class);
            Route::apiResource('seo', SeoMetaController::class);
            Route::post('mcqs/import', [AdminMcqController::class, 'import']);
            Route::post('papers/{paper}/generate', [AdminPaperController::class, 'generate']);
        });
});
```

#### 2.5 — Add `AuthController`

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user = Auth::user();

        if ($user->status !== 'approved') {
            return response()->json(['message' => 'Account not approved yet'], 403);
        }

        $token = $user->createToken('pakquiz-app')->plainTextToken;

        return response()->json([
            'token' => $token,
            'user'  => $user,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
```

#### 2.6 — Update `config/cors.php`

```php
'allowed_origins' => [
    'https://pakquiz.com',
    'https://www.pakquiz.com',
    env('FRONTEND_URL', 'http://localhost:3000'),
],
'allowed_methods'     => ['*'],
'allowed_headers'     => ['*'],
'supports_credentials' => true,
```

#### 2.7 — What stays in Laravel (do NOT remove)

| Component | Reason |
|---|---|
| Laravel Fortify | User management, 2FA, password resets |
| Laravel Sanctum | Token-based API auth |
| Spatie Browsershot | OG image generation |
| Intervention Image | Image processing |
| Spatie Sitemap | Sitemap generation job |
| IndexNowService | SEO indexing |
| Cloudstudio Ollama | AI MCQ generation |
| All Models | Core data layer |
| All Services | Business logic |
| All Jobs | Queue workers |
| All Filters | Query filtering |
| All Http/Resources | Already JSON-ready |

#### 2.8 — Deploy to Oracle via Coolify

1. Connect your GitHub repo to Coolify → auto-deploy on push to `main`
2. Set all `.env` variables in Coolify's environment panel
3. Add a Queue Worker process in Coolify for `php artisan queue:work`
4. Point subdomain `api.pakquiz.com` to your Oracle VM IP

---

### Phase 3 — Next.js 15 Frontend on Vercel
**Timeline: Week 3–6**

#### 3.1 — Scaffold project

```bash
npx create-next-app@latest pakquiz-web \
  --typescript --tailwind --app --src-dir \
  --eslint --import-alias "@/*"

cd pakquiz-web
npx shadcn@latest init
```

#### 3.2 — Copy existing React components

Your `resources/js/components/ui/` files are already Radix-based and transfer directly:

```bash
# From the Laravel repo:
cp -r resources/js/components/ui/     pakquiz-web/src/components/ui/
cp -r resources/js/components/lms/    pakquiz-web/src/components/lms/
cp -r resources/js/types/             pakquiz-web/src/types/
cp -r resources/js/hooks/             pakquiz-web/src/hooks/
cp -r resources/js/lib/               pakquiz-web/src/lib/
```

**npm packages to install in Next.js (already familiar from Laravel repo):**
```bash
npm install @tanstack/react-query @tanstack/react-table @tanstack/react-form
npm install lucide-react sonner zod use-debounce next-themes
npm install react-markdown remark-gfm
```

#### 3.3 — App Router directory structure

```
src/app/
├── (public)/
│   ├── page.tsx                        ← Home (was Livewire pages::home.index)
│   ├── mcqs/
│   │   ├── page.tsx                    ← MCQ index (SSR — paginated)
│   │   └── [slug]/
│   │       └── page.tsx                ← Single MCQ (SSG + ISR)
│   ├── papers/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── subjects/
│   │   ├── page.tsx
│   │   ├── [subject]/page.tsx
│   │   └── [subject]/[topic]/page.tsx
│   ├── departments/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── testing-services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── jobs/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── search/page.tsx
├── (auth)/
│   ├── login/page.tsx
│   └── register/page.tsx
├── lms/
│   ├── layout.tsx                      ← LmsLayout wrapper
│   ├── page.tsx                        ← LMS dashboard
│   └── subjects/page.tsx
├── admin/
│   ├── layout.tsx
│   ├── mcqs/page.tsx
│   ├── papers/page.tsx
│   └── ...
└── layout.tsx                          ← Root layout (providers, fonts)
```

#### 3.4 — Rendering strategy per section

| Route | Strategy | Reason |
|---|---|---|
| `/mcqs/[slug]` | SSG + ISR (revalidate: 3600) | High SEO value, changes infrequently |
| `/mcqs` | SSR | Pagination and filters |
| `/papers/[slug]` | SSG + ISR | Past papers rarely change |
| `/subjects/[slug]` | SSG + ISR | Topic lists are mostly static |
| `/lms/*` | CSR (client-side) | Authenticated, personalized, no SEO needed |
| `/admin/*` | CSR | Authenticated admin, no SEO |
| `/search` | CSR | Real-time dynamic |

#### 3.5 — API client setup

```ts
// src/lib/api.ts
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(path: string, options?: RequestInit) {
  const token = typeof window !== 'undefined'
    ? localStorage.getItem('pakquiz_token')
    : null;

  const res = await fetch(`${API_BASE}/api/v1${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Accept':        'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options?.headers,
    },
  });

  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
```

#### 3.6 — Inertia → Next.js replacements

| Inertia (old) | Next.js (new) |
|---|---|
| `import { Link } from '@inertiajs/react'` | `import Link from 'next/link'` |
| `import { router } from '@inertiajs/react'` | `import { useRouter } from 'next/navigation'` |
| `router.visit('/path')` | `router.push('/path')` |
| `usePage().props.auth.user` | TanStack Query: `useQuery({ queryKey: ['user'], queryFn: () => apiFetch('/auth/user') })` |
| Inertia page props | `fetch()` in Server Components or TanStack Query in Client Components |
| `Inertia::render('page', $data)` | Controller returns `response()->json($data)` |

#### 3.7 — SEO metadata

```ts
// src/app/(public)/mcqs/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const mcq = await fetch(`${process.env.API_URL}/api/v1/mcqs/${params.slug}`)
    .then(r => r.json());

  return {
    title: mcq.question.slice(0, 60) + ' — PakQuiz',
    description: mcq.explanation ?? `MCQ from ${mcq.subject?.name}`,
    openGraph: {
      title:  mcq.question,
      images: [`${process.env.API_URL}/api/v1/og/${params.slug}`],
    },
  };
}
```

#### 3.8 — Environment variables

```env
# .env.local (Next.js)
NEXT_PUBLIC_API_URL=https://api.pakquiz.com
API_URL=https://api.pakquiz.com   # server-side only (no NEXT_PUBLIC_)
```

#### 3.9 — Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

Set `NEXT_PUBLIC_API_URL` and `API_URL` in Vercel dashboard → Project Settings → Environment Variables.

---

### Phase 4 — Cutover & Cleanup
**Timeline: Week 6–7**

1. **Point domain DNS to Vercel** — main domain hits Next.js frontend
2. **API subdomain** `api.pakquiz.com` hits Oracle VM
3. **Remove from Laravel** (no longer needed after cutover):
   - `inertiajs/inertia-laravel`
   - `livewire/livewire`
   - `masmerise/livewire-toaster`
   - `laravel/wayfinder`
   - All `resources/views/` Blade files (except keep `app.blade.php` if needed for fallback)
   - All `resources/js/` files (move to Next.js repo)
   - `vite.config.ts`, `package.json` (Vite no longer needed in Laravel)
4. **Monitor for 2 weeks**:
   - Vercel Analytics for frontend performance
   - Laravel logs on Oracle for API errors
   - Google Search Console for SEO impact
   - Verify IndexNow is still firing from Laravel jobs

---

## Mobile App (Future Phase)

Once the Laravel REST API is live, a mobile app requires **zero additional backend work**.

### Recommended: React Native + Expo

```bash
npx create-expo-app pakquiz-mobile --template
```

**What transfers from the web project:**
- Same TypeScript types (`src/types/`)
- Same API client (`apiFetch` function)
- Same TanStack Query hooks and query keys
- Same Sanctum token auth flow (store in `expo-secure-store` instead of `localStorage`)
- Same Zod validation schemas

**Mobile-specific additions:**
- NativeWind for Tailwind-like styling on React Native
- Expo Router (mirrors Next.js App Router — fast to learn)
- `expo-secure-store` for token storage
- Supabase Realtime for live quiz sessions and leaderboards

**What cannot transfer directly:**
- Radix UI / shadcn/ui components (web-only) → replace with React Native Paper or NativeBase
- Tailwind CSS → NativeWind (similar API, works with Expo)

---

## Migration Checklist

### Phase 1 — Database
- [ ] Create Supabase project (Singapore region)
- [ ] Fix `unsignedInteger` → `integer` in papers migration
- [ ] Run `php artisan migrate:fresh --database=pgsql` — confirm all 23 migrations pass
- [ ] Export MySQL data with pgloader or CSV
- [ ] Import data to Supabase — verify row counts
- [ ] Run `php artisan test` — confirm tests pass on PG
- [ ] Set up Supabase RLS policies on public tables

### Phase 2 — Laravel API
- [ ] Set up Oracle Cloud Free Tier VM (VM.Standard.A1.Flex, Ubuntu 22.04)
- [ ] Open ports 80, 443, 22 in Oracle Security List
- [ ] Install Coolify on Oracle VM
- [ ] Install `laravel/sanctum`
- [ ] Remove `inertiajs/inertia-laravel`, `livewire/livewire`, `laravel/wayfinder`
- [ ] Create `routes/api.php` with all API routes
- [ ] Add `AuthController` with Sanctum token login/logout
- [ ] Update `config/cors.php` with Vercel domain
- [ ] Convert all controllers to return JSON responses
- [ ] Connect GitHub repo to Coolify — set up auto-deploy
- [ ] Set all `.env` vars in Coolify environment panel
- [ ] Add Queue Worker process in Coolify
- [ ] Point `api.pakquiz.com` to Oracle VM IP
- [ ] Test all API endpoints with Postman or Hoppscotch

### Phase 3 — Next.js Frontend
- [ ] Scaffold Next.js 15 + Tailwind + shadcn in new repo `pakquiz-web`
- [ ] Copy `components/ui/`, `components/lms/`, `types/`, `hooks/`, `lib/` from Laravel repo
- [ ] Install TanStack Query, Lucide, Sonner, Zod, next-themes
- [ ] Build App Router directory structure
- [ ] Build public pages (home, mcqs, papers, subjects, departments) with SSG/ISR
- [ ] Build auth pages (login, register) using Sanctum token flow
- [ ] Build LMS pages with client-side rendering
- [ ] Set up `generateMetadata` for all SEO-critical pages
- [ ] Set up OG image meta pointing to Laravel `/api/v1/og/{slug}`
- [ ] Deploy to Vercel — set env vars
- [ ] Test all pages at Vercel preview URL

### Phase 4 — Cutover
- [ ] Point main domain DNS to Vercel
- [ ] Point `api.pakquiz.com` to Oracle VM
- [ ] Monitor Google Search Console for 2 weeks
- [ ] Verify IndexNow is firing correctly from Laravel jobs
- [ ] Remove Blade/Livewire/Vite from Laravel repo
- [ ] (Future) Scaffold React Native Expo mobile app

---

*Generated: November 2026 | Based on `mzrjunaid/pakquiz` repository analysis*
