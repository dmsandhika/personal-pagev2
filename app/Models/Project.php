<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $table = 'project';

    protected $fillable = [
        'title',
        'description',
        'image',
        'url',
        'skill_ids',
        'year',
        'client',
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
