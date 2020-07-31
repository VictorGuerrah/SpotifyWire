<?php

namespace App\Http\Controllers;

class Artist extends Controller
{

    public function index()
    {
        return view('spotify/artist');
    }

}