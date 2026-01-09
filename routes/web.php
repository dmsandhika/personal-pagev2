<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GitController;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ContactController;

Route::get('/', [PageController::class, 'index'])->name('home');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// Serve private storage files
Route::get('/files/{path}', function ($path) {
  if (!Storage::exists($path)) {
    abort(404);
  }
  return response()->file(Storage::path($path));
})->where('path', '.*')->name('files.show');

Route::get('/api/gitlab-contributions', [GitController::class, 'gitlabContributions']);
