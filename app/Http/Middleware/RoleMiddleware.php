<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {

        $user = $request->user();

        if (! $user) {
            abort(401, 'Unauthenticated');
        }

        if (!$user->role || ! in_array($user->role->slug, $roles)) {
            abort(403, 'Unauthorized: You do not have the required role to access this page.');
        }

        return $next($request);
    }
}
