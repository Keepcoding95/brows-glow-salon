# Brows & Glow by R

One-page website for a brow and lash salon (brows, makeup, with focus on brows). Built for a local business in Romania.

## About

A responsive landing page featuring services, packages, gallery, contact info, and WhatsApp integration for booking. Content in Romanian (target audience: local customers).

## Tech Stack

- **Backend:** Laravel
- **Frontend:** Vue 3, Inertia.js, Tailwind CSS, Vite
- **Layout:** Single Blade layout (`app.blade.php`) – main UI is built with Vue
- **Other:** Leaflet (map), AOS (animations), Google Analytics 4 (optional)

## Features

- Hero section with background video
- Packages section (API-driven, Gold/Silver tiers)
- Image gallery
- Services list with WhatsApp booking links
- Contact section with map (Leaflet + OpenStreetMap)
- WhatsApp integration: direct links for services and packages (no cart, simple flow)
- GA4 event tracking for WhatsApp clicks (optional)
- Responsive, mobile-friendly layout

## How to Run Locally

**Prerequisites:** PHP 8.x, Composer, Node.js

### Option A: SQLite (easiest – no XAMPP or MySQL required)

1. Clone the repository
2. `composer install`
3. `cp .env.example .env`
4. `php artisan key:generate`
5. **Database:** In `.env` set `DB_CONNECTION=sqlite`. Ensure `database/database.sqlite` exists (create an empty file if needed, or Laravel may create it on migrate)
6. `php artisan migrate`
7. (Optional) `php artisan db:seed` – if you have a seeder for services/packages
8. `npm install`
9. Run in two terminals: `npm run dev` and `php artisan serve`
10. Open http://localhost:8000

### Option B: MySQL (e.g. via XAMPP)

1. Clone the repository
2. Install and start XAMPP (or MySQL), create database `laravue` (e.g. via phpMyAdmin: http://localhost/phpmyadmin)
3. `composer install`
4. `cp .env.example .env`
5. `php artisan key:generate`
6. **Database:** In `.env` set:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravue
   DB_USERNAME=root
   DB_PASSWORD=
   ```
7. `php artisan migrate`
8. (Optional) `php artisan db:seed`
9. `npm install`
10. Run in two terminals: `npm run dev` and `php artisan serve`
11. Open http://localhost:8000

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
