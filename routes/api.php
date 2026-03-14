<?php

use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\PackageController;
use Illuminate\Support\Facades\Route;

// Public read-only endpoints
Route::get('services', [ServiceController::class, 'index']);
Route::get('services/{service}', [ServiceController::class, 'show']);
Route::get('packages', [PackageController::class, 'index']);
Route::get('packages/{package}', [PackageController::class, 'show']);

// Protected write endpoints (require auth)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('services', [ServiceController::class, 'store']);
    Route::match(['put', 'patch'], 'services/{service}', [ServiceController::class, 'update']);
    Route::delete('services/{service}', [ServiceController::class, 'destroy']);
    Route::post('packages', [PackageController::class, 'store']);
    Route::match(['put', 'patch'], 'packages/{package}', [PackageController::class, 'update']);
    Route::delete('packages/{package}', [PackageController::class, 'destroy']);
});
