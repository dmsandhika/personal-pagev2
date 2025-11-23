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
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                Textarea::make('description')
                    ->columnSpanFull(),
                FileUpload::make('image')
                    ->image()
                    ->directory('portfolio-images') 
                    ->columnSpanFull(),
                TextInput::make('url')
                    ->url(),
                Select::make('skill_ids')
                    ->multiple()
                    ->options(Skill::all()->pluck('name', 'id'))
                    ->preload()
                    ->searchable()
                    ->columnSpanFull(),
            ]);
    }
}
