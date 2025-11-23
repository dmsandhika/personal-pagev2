<?php

namespace App\Filament\Resources\Education\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;

class EducationForm
{
    public static function configure(Schema $schema): Schema
    {
        $years = array_combine(
            range(date('Y'), 1990),
            range(date('Y'), 1990)
        );
        return $schema
            ->components([
                TextInput::make('degree')
                    ->required(),
                TextInput::make('institution')
                    ->required(),
                Select::make('start_year')
                    ->options($years)
                    ->label('Start Year')
                    ->required(),
                Select::make('end_year')
                    ->options($years)
                    ->label('End Year')
                    ->required(),
                TextInput::make('description'),
                FileUpload::make('logo')
                    ->image()
                    ->directory('experience-logos')
                    ->disk('public')
                    ->columnSpanFull(),
            ]);
    }
}
