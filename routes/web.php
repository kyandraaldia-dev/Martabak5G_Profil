<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Route utama untuk menampilkan halaman portfolio Kyandra Aldia.
|
*/

Route::get('/', function () {
    return view('home');
})->name('home');
