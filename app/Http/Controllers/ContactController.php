<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use App\Mail\ContactFormMail;

class ContactController extends Controller
{
  public function store(Request $request)
  {
    $validated = $request->validate([
      'name' => 'required|string|max:255',
      'email' => 'required|email|max:255',
      'subject' => 'required|string|max:255',
      'message' => 'required|string|max:5000',
    ]);

    try {
      // Log the contact form submission
      Log::info('Contact form submission', [
        'name' => $validated['name'],
        'email' => $validated['email'],
        'subject' => $validated['subject'],
      ]);

      // Send email notification
      $recipientEmail = config('mail.from.address', 'dmsandhika87@gmail.com');
      Mail::to($recipientEmail)->send(new ContactFormMail($validated));

      return back()->with('success', 'Message sent successfully!');
    } catch (\Exception $e) {
      Log::error('Contact form error: ' . $e->getMessage());
      return back()->withErrors(['error' => 'Failed to send message. Please try again.']);
    }
  }
}
