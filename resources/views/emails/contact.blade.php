<x-mail::message>
# New Contact Form Submission

You have received a new message from your portfolio contact form.

**From:** {{ $contactData['name'] }}  
**Email:** {{ $contactData['email'] }}  
**Subject:** {{ $contactData['subject'] }}

---

**Message:**

{{ $contactData['message'] }}

---

<x-mail::button :url="'mailto:' . $contactData['email']">
Reply to {{ $contactData['name'] }}
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
