import '../css/app.css'
import './bootstrap'

import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createApp, h } from 'vue'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

const appName = 'Brows&Grow by R'

createInertiaApp({
    title: (title) => `${title} ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        ),
    setup({ el, App, props, plugin }) {
        const vueApp = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)

        // Initialize AOS after app mount
        vueApp.mount(el)

        AOS.init() // 🔥 AOS ready!

        return vueApp
    },
    progress: {
        color: '#4B5563',
    },
})
