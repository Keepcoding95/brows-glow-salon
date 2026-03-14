<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            ['name' => 'Stilizare forma + Costmetizare', 'price' => 60, 'description' => 'Pensat și cosmetizare'],
            ['name' => 'Stilizare intretinere + Costmetizare', 'price' => 40, 'description' => 'Întreținere formă și cosmetizare'],
            ['name' => 'Stilizare cu vopsire gel', 'price' => 80, 'description' => 'Stilizare + vopsire gel/tint/SBTS Elan'],
            ['name' => 'Laminare + stilizare+ tratament botox', 'price' => 130, 'description' => 'Tratament complet pentru sprâncene'],
            ['name' => 'Laminare+ tonare + tratament botox', 'price' => 150, 'description' => 'Laminare, tonare și botox'],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
