<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/spotify', 'BuscaController@index');
Route::get('/spotify/artist', 'Artist@index');