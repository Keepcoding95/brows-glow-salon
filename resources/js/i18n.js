import { createI18n } from 'vue-i18n'
import ro from './locales/ro.json'
import en from './locales/en.json'

const LOCALE_KEY = 'brows-glow-locale'

function getStoredLocale() {
  if (typeof window === 'undefined') return 'ro'
  return localStorage.getItem(LOCALE_KEY) || 'ro'
}

export const i18n = createI18n({
  legacy: false,
  locale: getStoredLocale(),
  fallbackLocale: 'ro',
  messages: { ro, en },
})

export function setLocale(locale) {
  i18n.global.locale.value = locale
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCALE_KEY, locale)
  }
}
