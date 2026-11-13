# PakQuiz - Agent Guide & Project Architecture

> **Notice for AI Agents:**  
> This project has transitioned from manual human development to AI-driven model development. Any agent working on this repository must read and adhere to the guidelines, conventions, and architectural patterns detailed below.

---

## 1. Project Introduction

**PakQuiz** is a comprehensive educational and exam preparation platform tailored for competitive examinations in Pakistan (such as CSS, PPSC, FPSC, PMS, NTS, and general academic tests).

The platform serves two primary user experiences:
1. **Public & Community Portal:** Practice MCQs, past papers, test categories, job listings, and testing services.
2. **LMS (Learning Management System):** A modern, personalized learning experience providing study plans, progress tracking, academic dashboards, provincial rankings, subject syllabus breakdown, and mock exams.

---

## 2. Technology Stack & Architecture

PakQuiz utilizes a modern hybrid architecture:

### Backend
* **Framework:** Laravel 13 (PHP 8.3+)
* **Authentication & Security:** Laravel Fortify (with 2FA, verified email, and custom approval status middleware `status:approved`)
* **Routing & Type Generation:** Laravel Wayfinder (`@laravel/vite-plugin-wayfinder`)
* **Blade & Livewire:** Used across public views, admin utilities, and components

### Frontend (LMS & Modern Portal)
* **SPA Engine:** [Inertia.js v2](https://inertiajs.com/) (`@inertiajs/react`)
* **UI Library:** React 19 with TypeScript
* **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom typography
* **Component Primitives:** Radix UI / `@base-ui/react` (shadcn/ui block style)
* **Icons:** `lucide-react`
* **Form & State Management:** `@tanstack/react-form`, `@tanstack/react-query`, `@tanstack/react-table`

---

## 3. Core Development Principles for Agents

### Rule 1: Reuse Before Creating (Strictly Enforced)
**Always check existing components before generating new ones.**  
The repository already contains a rich set of 38+ pre-built, production-ready UI components in `resources/js/components/ui/`:
* `button.tsx`, `card.tsx`, `checkbox.tsx`, `circle-progress.tsx`, `dialog.tsx`, `input.tsx`, `select.tsx`, `sheet.tsx`, `sidebar.tsx`, `table.tsx`, `tabs.tsx`, etc.
* Do **not** install redundant libraries or duplicate basic primitives.
* Always import and compose existing UI primitives from `@/components/ui/*`.

### Rule 2: Block-Based, Professional UI Design
Follow a modular, block-based UI approach. Dashboards and subject pages are assembled from distinct, self-contained cards and blocks:
* **Dark Hero / Welcome Card:** `#3E3129` background with high-contrast text and `#B94B1B` accent action buttons.
* **Metric / Stat Blocks:** Rounded cards (`rounded-2xl`) with clear typography, status chips (`+2 today`, `Top 5%`), and bottom color-indicator strips.
* **Warm Neutral Surfaces:** Soft background surfaces such as `#F5EBE7` and `#FDF7F5`.
* **Primary Brand Colors:**
  * Terracotta / Rust: `#B94B1B` (hover: `#A03E14`)
  * Deep Brown: `#3E3129` / `#2D2A26`
  * Sky Accent: `#0284c7`
* **Responsive Layouts:** Desktop uses standard split layouts (e.g. `grid-cols-[1fr_350px]`) that collapse cleanly to single-column on mobile.

### Rule 3: Layout Hierarchy
* All LMS pages **must** be wrapped inside `<LmsLayout>` from `@/layouts/lms/lms-layout`.
* The LMS sidebar is located in `resources/js/components/lms/lms-sidebar.tsx`.

---

## 4. Key Directory Structure

```text
pakquiz/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── LMSController.php        # Core LMS controller
│   │   │   ├── lms/                     # Modular LMS sub-controllers
│   │   │   ├── Admin/                   # Admin controllers & Wayfinder actions
│   │   │   └── Frontend/                # Public controllers
│   │   └── Middleware/
│   │       ├── HandleInertiaRequests.php # Global Inertia shared props
│   │       └── UserStatusMiddleware.php # User account approval verification
├── resources/
│   ├── css/
│   │   └── app.css                      # Tailwind v4 configuration & styles
│   ├── js/
│   │   ├── components/
│   │   │   ├── ui/                      # 38+ shared UI primitives (buttons, cards, inputs)
│   │   │   └── lms/                     # LMS specific reusable blocks & sidebars
│   │   ├── layouts/
│   │   │   └── lms/
│   │   │       └── lms-layout.tsx       # LMS standard layout wrapper
│   │   ├── pages/
│   │   │   ├── lms/
│   │   │   │   ├── home/index.tsx       # Main Academic Dashboard
│   │   │   │   └── subjects/show.tsx    # Subject Detail & Topics view
│   │   │   └── auth/                    # Fortify/Inertia auth pages
│   │   ├── config/                      # Nav menus and global configuration
│   │   └── types/                       # Shared TypeScript definitions
│   └── views/                           # Blade templates & Livewire components
└── routes/
    └── web.php                          # Web and LMS route definitions
```

---

## 5. Routing & Controller Workflow

### LMS Routes
LMS routes in `routes/web.php` are grouped under the `lms.` name and `/lms` prefix:
```php
Route::name('lms.')
    ->prefix('lms')
    ->middleware(['auth', 'verified', 'status:approved', HandleInertiaRequests::class])
    ->group(function () {
        Route::get('/', [LMSController::class, 'index'])->name('lms');
        // Register additional LMS resource routes here
    });
```

### Rendering Inertia Views
LMS views are rendered via standard Inertia controller responses:
```php
return Inertia::render('lms/subjects/show', [
    // pass props here
]);
```

---

## 6. How Future Agents Should Work on This Repository

1. **Inspect Before Modifying:** Check existing controllers, types, and components before writing new features.
2. **Keep Working Tree Clean:** Review `git status` when finishing discrete tasks. Avoid staging cache files or IDE temporary files (such as `storage/framework/lsp-*.php`).
3. **Preserve Coding Style:** Prettier and ESLint are configured. Maintain TypeScript type safety (`npm run types`) and run formatting where appropriate.
4. **Incremental & Non-Destructive:** When adding features or pages, maintain backward compatibility with existing Blade/Livewire endpoints while expanding modern Inertia/React components.
