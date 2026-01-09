<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GitController extends Controller
{
    public function gitlabContributions()
    {
        $user = Http::get('https://gitlab.com/api/v4/users', [
            'username' => env('GITLAB_USERNAME')
        ])->json()[0];

        $calendar = [];
        $page = 1;
        $perPage = 100;
        $oneYearAgo = now()->subYear();

        do {
            $events = Http::withHeaders([
                'PRIVATE-TOKEN' => env('GITLAB_TOKEN')
            ])->get("https://gitlab.com/api/v4/users/{$user['id']}/events", [
                'per_page' => $perPage,
                'page' => $page,
                'after' => $oneYearAgo->toDateString()
            ])->json();

            if (empty($events)) {
                break;
            }

            foreach ($events as $event) {
                $eventDate = substr($event['created_at'], 0, 10);

                // Stop if event is older than one year
                if ($eventDate < $oneYearAgo->toDateString()) {
                    break 2;
                }

                $calendar[$eventDate] = ($calendar[$eventDate] ?? 0) + 1;
            }

            $page++;

            // Limit to prevent infinite loop (max 10 pages = 1000 events)
            if ($page > 10) {
                break;
            }
        } while (count($events) === $perPage);

        return response()->json($calendar);
    }
}
