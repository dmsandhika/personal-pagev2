<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $table = 'experiences';
    protected $fillable = [
        'title',
        'company',
        'start_month',
        'start_year',
        'end_month',
        'end_year',
        'is_current',
        'description',
        'logo',
    ];
    protected $monthNames = [
        1 => 'Jan',
        2 => 'Feb',
        3 => 'Mar',
        4 => 'Apr',
        5 => 'May',
        6 => 'Jun',
        7 => 'Jul',
        8 => 'Aug',
        9 => 'Sep',
        10 => 'Oct',
        11 => 'Nov',
        12 => 'Dec',
    ];

    protected $appends = ['period'];

    public function getPeriodAttribute()
    {
        $startMonth = $this->monthNames[(int) $this->start_month] ?? $this->start_month;
        $endMonth = $this->monthNames[(int) $this->end_month] ?? $this->end_month;

        $start = "$startMonth {$this->start_year}";
        $end = $this->is_current ? 'Present' : "$endMonth {$this->end_year}";

        return "$start - $end";
    }
}
