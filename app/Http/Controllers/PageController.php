<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Skill;
use App\Models\Education;
use App\Models\Experience;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index()
    {
        $experiences = Experience::all();
        $skills = Skill::all();
        $educations = Education::all();
        return Inertia::render('index', [
            'experiences' => $experiences,
            'skills' => $skills,
            'educations' => $educations
        ]);
    }
}
