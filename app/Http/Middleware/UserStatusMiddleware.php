<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class UserStatusMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $status): Response
    {
        $user = $request->user();

        if (! $user) {
            abort(401, 'Unauthenticated');
        }

        if (!$user->status || $user->status->slug !== $status) {
            auth()->logout();
            abort(403, 'Unauthorized: Your account status has not been approved by the administrator.');
        }

        return $next($request);
    }
}
