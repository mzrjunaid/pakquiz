<?php

namespace App\Http\Responses;

use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Laravel\Fortify\Contracts\TwoFactorLoginResponse as TwoFactorLoginResponseContract;

class LoginResponse implements LoginResponseContract, TwoFactorLoginResponseContract
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function toResponse($request)
    {
        $user = $request->user();
        $statusSlug = is_object($user?->status) ? $user->status->slug : null;

        if (! $statusSlug || $statusSlug !== 'approved') {
            Auth::guard('web')->logout();

            if ($request->hasSession()) {
                $request->session()->invalidate();
                $request->session()->regenerateToken();
            }

            if ($request->wantsJson()) {
                return response()->json(['message' => 'Your account need approval from admin.'], 403);
            }

            return redirect()->route('login')->with('status', 'Your account need approval from admin.');
        }

        $roleSlug = is_object($user?->role) ? $user->role->slug : ($user?->role ?? null);

        if ($roleSlug === 'user') {
            $intended = session()->get('url.intended');
            if ($intended && str_contains($intended, '/admin')) {
                session()->forget('url.intended');
            }

            $target = '/lms';
        } else {
            $target = '/admin/dashboard';
        }

        if ($request->wantsJson()) {
            return response()->json(['two_factor' => false]);
        }

        return redirect()->intended($target);
    }
}
