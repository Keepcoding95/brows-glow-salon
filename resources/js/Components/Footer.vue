<template>
  <footer class="bg-gray-50 text-gray-600">
    <!-- Social -->
    <div class="border-b border-gray-200 px-6 py-8">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p class="text-sm text-gray-500">
          Urmărește-ne pentru inspirație și rezultate noi.
        </p>
        <div class="flex items-center gap-4">
          <a
            href="https://www.instagram.com/browsandglowbyramona/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 text-white shadow-md transition hover:scale-105 hover:shadow-lg"
            aria-label="Instagram Brows&Glow by Ramona"
          >
            <!-- Instagram icon (SVG) -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
              <path
                d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.505 4.505 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.503 2.503 0 0 1 12 9.5zM17.75 6a1.25 1.25 0 1 0 1.25 1.25A1.252 1.252 0 0 0 17.75 6z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Links / info -->
    <div class="px-6 py-10">
      <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 text-sm sm:grid-cols-3 lg:gap-24">
        <!-- Brand -->
        <div class="space-y-4">
          <h6 class="text-lg font-semibold text-gray-900">
            Brows&Grow by R
          </h6>
          <p class="max-w-md text-base text-gray-500">
            Studio specializat în stilizarea și îngrijirea sprâncenelor, cu accent pe naturalețe, echilibru și detalii fine
          </p>
        </div>

        <!-- Navigation -->
        <div class="space-y-3">
          <h6 class="text-xs font-semibold uppercase tracking-wide text-gray-900">
            Navigație
          </h6>
          <ul class="space-y-2">
            <li><a href="#home" class="hover:text-gray-900 transition">Home</a></li>
            <li><a href="#packages" class="hover:text-gray-900 transition">Pachete</a></li>
            <li><a href="#gallery" class="hover:text-gray-900 transition">Galerie</a></li>
            <li><a href="#services" class="hover:text-gray-900 transition">Servicii</a></li>
            <li><a href="#contact" class="hover:text-gray-900 transition">Contact</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-3">
          <h6 class="text-xs font-semibold uppercase tracking-wide text-gray-900">
            Contact
          </h6>
          <ul class="space-y-1 text-gray-500">
            <li>Strada Exemplu, nr. 1</li>
            <li>București</li>
            <li>
              <a href="mailto:contact@company.com" class="hover:text-gray-900 transition">
                contact@company.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-200 bg-gray-50/95">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs text-gray-500">
        <span>© 2025 Brows&Grow by R. Toate drepturile rezervate.</span>
        <span class="hidden sm:inline">Creat cu grijă pentru detalii.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
