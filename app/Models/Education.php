<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'education';
    protected $fillable = [
        'degree',
        'institution',
        'start_year',
        'end_year',
        'description',
        'logo',
    ];
    protected $appends = ['period'];
    public function getPeriodAttribute()
    {
        return "{$this->start_year} - {$this->end_year}";
    }
}
