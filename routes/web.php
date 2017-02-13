<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/**
 * Admin routes
 */
Route::group(['prefix' => 'my-travel-admin-101'
], function () {
    Route::get('/', 'Admin\AdminController@getLogin');
    Route::get('/login', 'Admin\AdminController@getLogin');
    Route::get('/logout', 'Admin\AdminController@getLogout');
});

Route::group([
    'middleware' => 'adminLoginValidator', 'prefix' => 'my-travel-admin-101'
], function () {
    Route::get('/dashboard', 'Admin\AdminController@getDashBoard');
});

Route::group([
    'prefix' => 'pages'
], function () {
    Route::get('/home', 'Admin\AdminController@getHome');
});

Route::group(
    ['prefix' => 'my-travel-admin-101/api'],
    function () {
        Route::post('/login', 'Admin\AdminController@postLogin');
    }
);
