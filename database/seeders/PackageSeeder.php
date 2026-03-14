<?php

namespace Database\Seeders;

use App\Models\Package;
use App\Models\Service;
use Illuminate\Database\Seeder;

class PackageSeeder extends Seeder
{
    public function run(): void
    {
        $gold = Package::create([
            'name' => 'Gold package',
            'price' => 180,
            'description' => 'Stilizare, laminare, vopsire, tratament, cosmetizare',
        ]);

        $silver = Package::create([
            'name' => 'Silver package',
            'price' => 150,
            'description' => 'Gomaj, hidratare profundă, pensare formă, tratamentul firului de păr, epilare buza superioară',
        ]);
    }
}
