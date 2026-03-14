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
            <span class="sr-only">{{ $t('nav.openMenu') }}</span>
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
        <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
          <div class="flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1">
            <button
              type="button"
              :class="[locale === 'ro' ? 'bg-white/30 text-white font-semibold' : 'text-white/70 hover:text-white', 'rounded px-2 py-1 text-sm transition']"
              @click="setLocale('ro')"
            >
              RO
            </button>
            <button
              type="button"
              :class="[locale === 'en' ? 'bg-white/30 text-white font-semibold' : 'text-white/70 hover:text-white', 'rounded px-2 py-1 text-sm transition']"
              @click="setLocale('en')"
            >
              EN
            </button>
          </div>
          <a href="#" class="text-sm font-semibold leading-6 text-white/75 drop-shadow-md">
            {{ $t('nav.auth') }} <span aria-hidden="true">&rarr;</span>
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
              <span class="sr-only">{{ $t('nav.closeMenu') }}</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-4">
                <div class="flex items-center gap-2 px-3 py-2">
                  <span class="text-sm text-gray-500">{{ $t('nav.language') }}:</span>
                  <button
                    type="button"
                    :class="[locale === 'ro' ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-100', 'rounded px-2 py-1 text-sm']"
                    @click="setLocale('ro')"
                  >
                    RO
                  </button>
                  <button
                    type="button"
                    :class="[locale === 'en' ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-100', 'rounded px-2 py-1 text-sm']"
                    @click="setLocale('en')"
                  >
                    EN
                  </button>
                </div>
              </div>
              <div class="space-y-2 py-4">
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
                  {{ $t('nav.login') }}
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
        :aria-label="$t('hero.playVideo')"
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
            {{ $t('hero.title') }}
          </h1>
          <p
            class="mt-8 text-lg font-medium text-pretty text-white/75 drop-shadow sm:text-xl/8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {{ $t('hero.subtitle') }}
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
              {{ $t('hero.cta') }} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <section id="about" class="bg-white py-24 px-6 sm:px-12" data-aos="fade-up">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t('about.title') }}</h2>
        <p class="text-lg text-gray-600">
          {{ $t('about.text') }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { t, locale } = useI18n()
const mobileMenuOpen = ref(false)
const heroVideo = ref(null)
const videoPlaying = ref(false)
const videoError = ref(false)

const videoSrc = typeof window !== 'undefined'
  ? `${window.location.origin}/videos/clip1.mp4`
  : '/videos/clip1.mp4'

const navigation = computed(() => [
  { name: t('nav.home'), href: '#home' },
  { name: t('nav.packages'), href: '#packages' },
  { name: t('nav.gallery'), href: '#gallery' },
  { name: t('nav.services'), href: '#services' },
  { name: t('nav.contact'), href: '#contact' },
])

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
