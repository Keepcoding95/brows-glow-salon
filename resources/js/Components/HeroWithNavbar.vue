<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1"></div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white/75"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Deschide meniul</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-white/75 drop-shadow-md"
          >
            {{ item.name }}
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-white/75 drop-shadow-md">
            Autentificare <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-end">
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Închide meniul</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  @click="mobileMenuOpen = false"
                >
                  {{ item.name }}
                </a>
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

    <!-- Hero: background video with overlay text -->
    <div class="relative isolate min-h-[32rem] sm:min-h-[36rem] lg:min-h-[42rem] overflow-hidden bg-gray-800" id="home">
      <video
        ref="heroVideo"
        class="absolute inset-0 h-full w-full object-cover object-center"
        muted
        loop
        playsinline
        preload="auto"
        @loadeddata="tryPlayVideo"
        @error="videoError = true"
      >
        <source :src="videoSrc" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-gray-900/50" aria-hidden="true" />
      <button
        v-if="!videoPlaying && !videoError"
        type="button"
        class="absolute inset-0 z-[5] flex items-center justify-center bg-black/30 transition hover:bg-black/40"
        aria-label="Pornește video"
        @click="playVideo"
      >
        <span class="rounded-full bg-white/90 p-4 text-gray-900 shadow-lg transition hover:bg-white">
          <svg class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </span>
      </button>

      <div class="relative z-10 flex min-h-[32rem] sm:min-h-[36rem] lg:min-h-[42rem] items-center px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32 text-center" data-aos="fade-up">
          <h1
            class="text-5xl font-semibold tracking-tight text-balance text-white/80 drop-shadow-lg sm:text-7xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Arta pensatului perfect
          </h1>
          <p
            class="mt-8 text-lg font-medium text-pretty text-white/75 drop-shadow sm:text-xl/8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Descoperă frumusețea naturală a sprâncenelor tale printr-un pensat precis, profesional și personalizat.
            Armonie, expresivitate și eleganță – toate în mâinile potrivite.
          </p>
          <div
            class="mt-10 flex items-center justify-center"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <a
              href="#packages"
              class="rounded-lg border border-white/60 bg-white/30 px-5 py-2.5 text-sm font-semibold text-white/90 shadow-md transition hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Află mai mult <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <section id="about" class="bg-white py-24 px-6 sm:px-12" data-aos="fade-up">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Despre serviciile noastre</h2>
        <p class="text-lg text-gray-600">
          Folosim tehnici moderne și produse de calitate superioară pentru a evidenția forma naturală a sprâncenelor tale.
          Fiecare sesiune este personalizată în funcție de trăsăturile și preferințele tale.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import AOS from 'aos'
import 'aos/dist/aos.css'

const mobileMenuOpen = ref(false)
const heroVideo = ref(null)
const videoPlaying = ref(false)
const videoError = ref(false)

const videoSrc = typeof window !== 'undefined'
  ? `${window.location.origin}/videos/clip1.mp4`
  : '/videos/clip1.mp4'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Packages', href: '#packages' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

function tryPlayVideo() {
  if (!heroVideo.value) return
  try {
    heroVideo.value.muted = true
    heroVideo.value.play().then(() => { videoPlaying.value = true })
  } catch {}
}

function playVideo() {
  if (!heroVideo.value) return
  heroVideo.value.muted = true
  heroVideo.value.play()
    .then(() => { videoPlaying.value = true })
    .catch(() => { videoError.value = true })
}

onMounted(() => {
  AOS.init()
  setTimeout(() => {
    if (heroVideo.value) {
      heroVideo.value.muted = true
      heroVideo.value.play().then(() => { videoPlaying.value = true }).catch(() => {})
    }
  }, 100)
})
</script>
