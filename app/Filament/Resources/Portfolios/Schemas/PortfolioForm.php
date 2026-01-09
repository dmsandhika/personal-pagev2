<?php

namespace App\Filament\Resources\Portfolios\Schemas;

use Filament\Schemas\Schema;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use App\Models\Skill;

class PortfolioForm
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
                TextInput::make('url_demo')
                    ->label('Demo URL')
                    ->url(),
                TextInput::make('url_github')
                    ->label('GitHub URL')
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
