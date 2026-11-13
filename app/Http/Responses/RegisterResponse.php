<?php

namespace App\Http\Responses;

use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;

class RegisterResponse implements RegisterResponseContract
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
                return response()->json(['message' => 'Account has been created. Now wait for admin approval. Once approved, you will be notified on your registered email.'], 201);
            }

            return redirect()->route('login')->with('status', 'Account has been created. Now wait for admin approval. Once approved, you will be notified on your registered email.');
        }

        if ($request->wantsJson()) {
            return response()->json('', 201);
        }

        return redirect()->intended('/admin/dashboard');
    }
}
