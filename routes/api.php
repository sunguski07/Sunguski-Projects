<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    $userid = Auth::user()->id;
    $user = Auth::user();

    $user = Auth::user();
    $role = DB::table('roles')
            ->join('role_user','roles.id','=','role_user.role_id')
            ->join('users','role_user.user_id','=','users.id')
            ->select('roles.id','roles.name')
            ->where('users.id','=', $userid)
            ->get();


    return response()->json([
       'user' => $user,
       'role' => $role,
    ]);
});
