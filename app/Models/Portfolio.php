<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image',
        'url_demo',
        'url_github',
        'skill_ids',
    ];
    protected $casts = [
        'skill_ids' => 'array',
    ];

    protected $appends = ['skills'];
    public function getSkillsAttribute()
    {
        return Skill::whereIn('id', $this->skill_ids ?? [])
            ->pluck('name')
            ->toArray();
    }
}
