<template>
  <div id="contact" class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-1/2 -z-10 aspect-[1155/678] w-[36rem] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>

    <div class="mx-auto max-w-7xl text-center mb-12">
      <h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Contact & Programări
      </h2>
      <p class="mt-2 text-lg text-gray-600 max-w-xl mx-auto">
        Scrie-ne pentru programări sau întrebări și vezi mai jos locația salonului
      </p>
    </div>

    <div class="mx-auto max-w-6xl">
      <!-- Contact & Booking card + Map -->
      <div
        class="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-sm"
      >

        <div class="grid gap-8 lg:grid-cols-2 lg:items-start">
          <!-- Left column: contact info + WhatsApp -->
          <div class="space-y-4 text-sm text-gray-700">
            <div class="flex items-start gap-3">
            <span class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <!-- Location icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
                <circle cx="12" cy="11" r="2.5" stroke-width="2" />
              </svg>
            </span>
            <div>
              <p class="font-semibold text-gray-900">Adresă</p>
              <p class="mt-1 text-gray-600">
                Strada Exemplu, nr. 1<br />
                București
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <!-- Mail icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16v12H4z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 8l8 5 8-5" />
              </svg>
            </span>
            <div>
              <p class="font-semibold text-gray-900">Email</p>
              <p class="mt-1 text-gray-600">
                <a href="mailto:contact@company.com" class="text-indigo-600 underline">
                  contact@company.com
                </a>
              </p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <!-- Phone icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5a2 2 0 012-2h1.28a1 1 0 01.94.66l1.6 4.26a1 1 0 01-.27 1.09l-1.2 1.08a11 11 0 006.01 6.01l1.08-1.2a1 1 0 011.09-.27l4.26 1.6a1 1 0 01.66.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div>
              <p class="font-semibold text-gray-900">Telefon</p>
              <p class="mt-1 text-gray-600">
                <a :href="`tel:+${WHATSAPP_NUMBER}`" class="hover:text-gray-900">
                  +40 741 33x xxx
                </a>
              </p>
              <p class="mt-1 text-xs text-gray-500">
                Disponibilă pentru programări în intervalul 09:00 – 18:00
              </p>
            </div>
          </div>

          <div class="pt-3">
            <a
              :href="`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Salut, as dori o programare pentru sprancene')}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-emerald-600 hover:shadow-lg"
              @click="trackWhatsAppClick({ location: 'contact' })"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12.04 2C6.58 2 2.21 6.37 2.21 11.83c0 2.08.61 3.99 1.77 5.68L2 22l4.64-1.9a10.08 10.08 0 0 0 5.4 1.58h.01c5.46 0 9.83-4.37 9.83-9.83C21.88 6.37 17.5 2 12.04 2Zm0 17.87h-.01a8.03 8.03 0 0 1-4.1-1.13l-.29-.17-2.75 1.13.59-2.9-.19-.3a7.4 7.4 0 0 1-1.15-3.99c0-4.09 3.33-7.42 7.42-7.42 1.98 0 3.84.77 5.24 2.17a7.35 7.35 0 0 1 2.18 5.25c0 4.09-3.33 7.41-7.43 7.41Zm4.07-5.57c-.22-.11-1.29-.64-1.49-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.76-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.33.1-.44.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.69-1.64-.18-.44-.37-.38-.5-.39h-.43c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.86 0 1.1.8 2.17.9 2.32.11.15 1.57 2.4 3.8 3.36.53.23.94.37 1.26.48.53.17 1.01.15 1.39.09.42-.06 1.29-.53 1.47-1.04.18-.5.18-.93.13-1.02-.05-.09-.2-.15-.42-.26Z"
                />
              </svg>
              Scrie-ne pe WhatsApp
            </a>
          </div>
        </div>

          <!-- Right column: map -->
          <div class="space-y-3">
            <h4 class="text-sm font-semibold text-gray-900">Vezi locația pe hartă</h4>
            <div class="h-64 md:h-72">
              <GoogleMap :lat="44.4268" :lng="26.1025" :zoom="14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import GoogleMap from '@/Components/GoogleMap.vue'
import { trackWhatsAppClick } from '@/utils/analytics'
import { WHATSAPP_NUMBER } from '@/config/contact'
</script>

