<template>
  <div
    id="gallery"
    class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-base font-semibold text-indigo-600">{{ $t('gallery.badge') }}</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ $t('gallery.title') }}
        </p>
        <p class="mt-4 text-lg text-gray-600">
          {{ $t('gallery.subtitle') }}
        </p>
      </div>

      <div
        class="mx-auto mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        style="grid-auto-rows: minmax(200px, auto);"
      >
        <div
          v-for="(img, index) in images"
          :key="index"
          :class="[
            'relative overflow-hidden rounded-2xl bg-gray-100 shadow-xl ring-1 ring-gray-900/5 transition duration-300 hover:shadow-2xl hover:ring-indigo-200',
            getCellClass(index),
          ]"
          data-aos="fade-up"
          :data-aos-delay="Math.min(index * 80, 400)"
        >
          <img
            :src="img.src"
            :alt="img.alt || $t('gallery.imageAlt')"
            class="h-full w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
            @error="onImageError($event, index)"
          />
        </div>
      </div>

      <p v-if="images.length === 0" class="mt-8 text-center text-gray-500">
        {{ $t('gallery.empty', { path: 'public/images/gallery/' }) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const images = ref([
  { src: '/images/gallery/pozare1.jpeg', alt: 'Pozare 1' },
  { src: '/images/gallery/pozare2.jpeg', alt: 'Pozare 2' },
  { src: '/images/gallery/pozare3.jpeg', alt: 'Pozare 3' },
  { src: '/images/gallery/pozare4.jpeg', alt: 'Pozare 4' },
  { src: '/images/gallery/pozare5.jpeg', alt: 'Pozare 5' },
  { src: '/images/gallery/pozare6.jpeg', alt: 'Pozare 6' },
  { src: '/images/gallery/pozare7.jpeg', alt: 'Pozare 7' },
])

function getCellClass(index) {
  if (index === 0) return 'sm:col-span-2 sm:row-span-2 min-h-[280px] sm:min-h-[420px]'
  if (index === 4 || index === 6) return 'sm:col-span-2 min-h-[260px] sm:min-h-[320px]'
  return 'min-h-[260px] sm:min-h-[280px]'
}

function onImageError(event, index) {
  event.target.style.display = 'none'
}

onMounted(() => {
  AOS.init()
})
</script>
