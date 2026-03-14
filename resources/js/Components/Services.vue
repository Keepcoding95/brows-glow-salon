<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32" id="services">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <!-- Text column -->
        <div class="lg:pt-4 lg:pr-8">
          <div class="lg:max-w-lg">
            <h2 class="text-base font-semibold text-indigo-600">{{ $t('services.badge') }}</h2>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {{ $t('services.title') }}
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ $t('services.subtitle') }}
            </p>

            <dl class="mt-8 max-w-xl space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
              <div
                v-for="(service, index) in displayServices"
                :key="index"
                class="relative rounded-xl border border-gray-100 bg-white/60 px-3 py-2.5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-lg"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
              >
                <div class="flex items-start justify-between gap-3">
                  <dt class="flex-1">
                    <p class="text-sm font-semibold text-gray-900">
                      {{ service.name }}
                    </p>
                    <p class="mt-1 text-sm text-gray-500 leading-6">
                      {{ service.description }}
                    </p>
                  </dt>
                  <dd class="shrink-0 flex flex-col items-end gap-1.5">
                    <span class="inline-flex items-center rounded-full bg-indigo-50/80 px-2.5 py-0.5 text-xs font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-100">
                      {{ service.price }} RON
                    </span>
                    <a
                      :href="whatsAppLink(service)"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-600 sm:py-1 sm:px-2.5"
                      @click="trackWhatsAppClick({ location: 'services', serviceName: service.name, servicePrice: service.price })"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-3 w-3" fill="currentColor">
                        <path d="M12.04 2C6.58 2 2.21 6.37 2.21 11.83c0 2.08.61 3.99 1.77 5.68L2 22l4.64-1.9a10.08 10.08 0 0 0 5.4 1.58h.01c5.46 0 9.83-4.37 9.83-9.83C21.88 6.37 17.5 2 12.04 2Zm0 17.87h-.01a8.03 8.03 0 0 1-4.1-1.13l-.29-.17-2.75 1.13.59-2.9-.19-.3a7.4 7.4 0 0 1-1.15-3.99c0-4.09 3.33-7.42 7.42-7.42 1.98 0 3.84.77 5.24 2.17a7.35 7.35 0 0 1 2.18 5.25c0 4.09-3.33 7.41-7.43 7.41Zm4.07-5.57c-.22-.11-1.29-.64-1.49-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.76-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.33.1-.44.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.69-1.64-.18-.44-.37-.38-.5-.39h-.43c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.86 0 1.1.8 2.17.9 2.32.11.15 1.57 2.4 3.8 3.36.53.23.94.37 1.26.48.53.17 1.01.15 1.39.09.42-.06 1.29-.53 1.47-1.04.18-.5.18-.93.13-1.02-.05-.09-.2-.15-.42-.26Z"/>
                      </svg>
                      {{ $t('services.book') }}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <!-- Image -->
        <div class="flex justify-center lg:justify-center lg:items-center">
          <img
            src="/images/pensat1.jpeg"
            :alt="$t('services.imageAlt')"
            class="w-full max-w-sm rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:max-w-md lg:max-w-lg xl:max-w-xl"
            width="2024"
            height="1200"
            data-aos="zoom-in-left"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { trackWhatsAppClick } from '@/utils/analytics'
import { WHATSAPP_NUMBER } from '@/config/contact'

const { t, locale } = useI18n()
const props = defineProps({
  services: { type: Array, default: () => [] },
})

function whatsAppLink(service) {
  const intro = locale.value === 'ro' ? 'Bună! Aș dori o programare pentru:' : 'Hi! I would like to book an appointment for:'
  const text = `${intro} ${service.name} - ${service.price} RON`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}

const servicesList = computed(() => props.services || [])

// Map service names to detailed display labels (from i18n)
const displayServices = computed(() =>
  servicesList.value.map((service) => {
    const name = service.name || ''
    const normalized = name.toLowerCase()

    if (normalized.includes('stilizare forma')) {
      return { ...service, name: t('services.items.stilizare_forma.name'), description: t('services.items.stilizare_forma.description') }
    }
    if (normalized.includes('intretinere')) {
      return { ...service, name: t('services.items.intretinere.name'), description: t('services.items.intretinere.description') }
    }
    if (normalized.includes('vopsire gel')) {
      return { ...service, name: t('services.items.vopsire_gel.name'), description: t('services.items.vopsire_gel.description') }
    }
    if (normalized.includes('laminare + stilizare')) {
      return { ...service, name: t('services.items.laminare_stilizare.name'), description: t('services.items.laminare_stilizare.description') }
    }
    if (normalized.includes('laminare+ tonare')) {
      return { ...service, name: t('services.items.laminare_tonare.name'), description: t('services.items.laminare_tonare.description') }
    }

    return service
  })
)

onMounted(() => {
  AOS.init()
})
</script>
