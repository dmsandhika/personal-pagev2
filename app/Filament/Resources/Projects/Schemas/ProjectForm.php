<?php

namespace App\Filament\Resources\Projects\Schemas;

use App\Models\Skill;
use Filament\Schemas\Schema;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        $years = array_combine(
            range(date('Y'), 1990),
            range(date('Y'), 1990)
        );
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->columnSpanFull(),
                TextInput::make('client')
                    ->required(),
                FileUpload::make('image')
                    ->image()
                    ->disk('public')
                    ->directory('project-images')
                    ->columnSpanFull(),
                TextInput::make('url')
                    ->url(),
                Select::make('year')
                    ->options($years)
                    ->label('Year')
                    ->required(),
                Select::make('skill_ids')
                    ->label('Skills')
                    ->multiple()
                    ->options(Skill::all()->pluck('name', 'id'))
                    ->preload()
                    ->searchable()
                    ->columnSpanFull(),
            ]);
    }
}
