<template>
  <div>
    <HeroWithNavbar />
    <Packages />
    <Gallery />
    <Services :services="services" />
    <Contact />
    <Footer />

    <!-- Back to top button -->
    <Transition name="fade">
      <button
        v-show="showBackToTop"
        type="button"
        class="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg ring-1 ring-gray-900/5 transition hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        aria-label="Înapoi sus"
        @click="scrollToTop"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import axios from 'axios'
import HeroWithNavbar from '@/Components/HeroWithNavbar.vue'
import Packages from '@/Components/Packages.vue'
import Gallery from '@/Components/Gallery.vue'
import Services from '@/Components/Services.vue'
import Contact from '@/Components/Contact.vue'
import Footer from '@/Components/Footer.vue'

const services = ref([])
const showBackToTop = ref(false)
const scrollThreshold = 400

function onScroll() {
  showBackToTop.value = window.scrollY > scrollThreshold
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(async () => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  try {
    const response = await axios.get('/api/services')
    services.value = response.data
  } catch (error) {
    console.error('Error on loading the services:', error)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
