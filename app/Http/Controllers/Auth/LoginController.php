<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;


class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    public function login()
    {
         return view('auth.login');
    }


    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return response()->json([
                'msg' => 'Login successful'
            ], 200);
        }

        return response()->json([
            'msg' => 'Invalid credentials'
        ], 422);
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->route('login');
    }
}