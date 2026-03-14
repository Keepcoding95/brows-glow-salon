<template>
  <div
    id="packages"
    data-aos="fade-up"
    class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
  >
    <div
      class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      aria-hidden="true"
    >
      <div
        class="mx-auto aspect-1155/678 w-288.75 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>

    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base font-semibold text-indigo-600">Packages</h2>
      <p class="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
        Alege pachetul potrivit pentru tine
      </p>
    </div>

    <p
      class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl"
    >
      Toate pachetele includ servicii esențiale pentru o experiență completă
    </p>

    <div
      class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
    >
      <div
        v-for="(pkg, index) in packages"
        :key="pkg.id"
        data-aos="zoom-in-up"
        :class="[
          isGold(pkg) ? 'relative bg-amber-50 ring-amber-400/50 shadow-xl' : 'relative bg-gray-100 ring-gray-400/50 shadow-xl',
          index === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl sm:mx-8 lg:mx-0' : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
          'rounded-3xl p-8 ring-2 sm:p-10'
        ]"
      >
        <h3
          :id="`tier-${pkg.id}`"
          :class="[isGold(pkg) ? 'text-amber-700' : 'text-gray-600', 'text-base font-semibold']"
        >
          {{ pkg.name }}
        </h3>
        <p class="mt-4 flex items-baseline gap-x-2">
          <span
            :class="[isGold(pkg) ? 'text-amber-800' : 'text-gray-700', 'text-5xl font-semibold tracking-tight']"
          >
            {{ pkg.price }} RON
          </span>
        </p>

        <!-- Description as checklist -->
        <ul
          :class="[isGold(pkg) ? 'text-amber-900/90' : 'text-gray-700', 'mt-6 space-y-3 text-base']"
        >
          <li
            v-for="(line, i) in pkg.description.split('\n')"
            :key="i"
            class="flex gap-x-3"
          >
            <CheckIcon
              :class="[isGold(pkg) ? 'text-amber-600' : 'text-gray-500', 'h-6 w-5 flex-none']"
              aria-hidden="true"
            />
            {{ line }}
          </li>
        </ul>

        <!-- ✅ Serviciile -->
        <ul
          role="list"
          :class="[isGold(pkg) ? 'text-amber-900/80' : 'text-gray-600', 'mt-8 space-y-3 text-sm sm:mt-10']"
        >
          <li v-for="service in (pkg.services || [])" :key="service.id" class="flex gap-x-3">
            <CheckIcon
              :class="[isGold(pkg) ? 'text-amber-600' : 'text-gray-500', 'h-6 w-5 flex-none']"
              aria-hidden="true"
            />
            {{ service.name }} - {{ service.price }} RON
          </li>
        </ul>

        <a
          :href="whatsAppLink(pkg)"
          target="_blank"
          rel="noopener noreferrer"
          :aria-describedby="`tier-${pkg.id}`"
          @click="trackWhatsAppClick({ location: 'packages', packageName: pkg.name, packagePrice: pkg.price })"
          :class="[
            isGold(pkg)
              ? 'bg-amber-500 text-white shadow-md hover:bg-amber-600 focus-visible:outline-amber-500'
              : 'bg-gray-400 text-white shadow-md hover:bg-gray-500 focus-visible:outline-gray-500',
            'mt-8 flex min-h-[44px] items-center justify-center gap-2 rounded-md px-4 py-3 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
          ]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.21 6.37 2.21 11.83c0 2.08.61 3.99 1.77 5.68L2 22l4.64-1.9a10.08 10.08 0 0 0 5.4 1.58h.01c5.46 0 9.83-4.37 9.83-9.83C21.88 6.37 17.5 2 12.04 2Zm0 17.87h-.01a8.03 8.03 0 0 1-4.1-1.13l-.29-.17-2.75 1.13.59-2.9-.19-.3a7.4 7.4 0 0 1-1.15-3.99c0-4.09 3.33-7.42 7.42-7.42 1.98 0 3.84.77 5.24 2.17a7.35 7.35 0 0 1 2.18 5.25c0 4.09-3.33 7.41-7.43 7.41Zm4.07-5.57c-.22-.11-1.29-.64-1.49-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.76-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.33.1-.44.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.69-1.64-.18-.44-.37-.38-.5-.39h-.43c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.86 0 1.1.8 2.17.9 2.32.11.15 1.57 2.4 3.8 3.36.53.23.94.37 1.26.48.53.17 1.01.15 1.39.09.42-.06 1.29-.53 1.47-1.04.18-.5.18-.93.13-1.02-.05-.09-.2-.15-.42-.26Z"/>
          </svg>
          Alege pachetul (WhatsApp)
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { CheckIcon } from '@heroicons/vue/20/solid'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { trackWhatsAppClick } from '@/utils/analytics'
import { WHATSAPP_NUMBER } from '@/config/contact'

const packages = ref([])

function isGold(pkg) {
  return pkg.name?.toLowerCase().includes('gold') ?? false
}

function whatsAppLink(pkg) {
  const servicesList = (pkg.services || []).map(s => `${s.name} (${s.price} RON)`).join(', ')
  const text = `Bună! Aș dori să rezerv pachetul: ${pkg.name} - ${pkg.price} RON.${servicesList ? ` Servicii incluse: ${servicesList}` : ''}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

onMounted(async () => {
  try {
    const response = await axios.get('/api/packages')
    packages.value = response.data
  } catch (error) {
    console.error('Eroare la încărcarea pachetelor:', error)
  }

  AOS.refresh() // Reinitialize AOS animations after data loads
})
</script>
