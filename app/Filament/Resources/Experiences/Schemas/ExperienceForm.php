<?php

namespace App\Filament\Resources\Experiences\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;

class ExperienceForm
{
    public static function configure(Schema $schema): Schema
    {
        $months = [
            '01' => 'January',
            '02' => 'February',
            '03' => 'March',
            '04' => 'April',
            '05' => 'May',
            '06' => 'June',
            '07' => 'July',
            '08' => 'August',
            '09' => 'September',
            '10' => 'October',
            '11' => 'November',
            '12' => 'December',
        ];

        $years = array_combine(
            range(date('Y'), 1990),
            range(date('Y'), 1990)
        );

        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),

                TextInput::make('company')
                    ->required(),

                Select::make('start_month')
                    ->options($months)
                    ->label('Start Month')
                    ->required(),

                Select::make('start_year')
                    ->options($years)
                    ->label('Start Year')
                    ->required(),


                Select::make('end_month')
                    ->options($months)
                    ->label('End Month')
                    ->hidden(fn($get) => $get('is_current'))
                    ->required(fn($get) => !$get('is_current')),

                Select::make('end_year')
                    ->options($years)
                    ->label('End Year')
                    ->hidden(fn($get) => $get('is_current'))
                    ->required(fn($get) => !$get('is_current')),
                Checkbox::make('is_current')
                    ->label('Still working here')
                    ->reactive(),

                Textarea::make('description')
                    ->columnSpanFull(),

                FileUpload::make('logo')
                    ->image()
                    ->directory('experience-logos')
                    ->disk('public')
                    ->columnSpanFull(),
            ]);
    }
}
