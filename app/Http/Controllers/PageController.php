<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Experience;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        $experiences = Experience::all();
        return Inertia::render('index', [
            'experiences' => $experiences
        ]);
    }
}
