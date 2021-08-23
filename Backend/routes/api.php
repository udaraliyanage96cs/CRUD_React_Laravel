<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('dailytask', 'DailyTaskController@index');
Route::get('dailytask/{id}', 'DailyTaskController@show');
Route::post('dailytask', 'DailyTaskController@store');
Route::put('dailytask/{id}', 'DailyTaskController@update');
Route::delete('dailytask/{id}', 'DailyTaskController@delete');