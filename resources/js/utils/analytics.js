/**
 * Google Analytics 4 event utilities.
 * gtag is defined in app.blade.php only when GA4_MEASUREMENT_ID is set in .env.
 */

/**
 * Send a GA4 event on WhatsApp link click.
 * @param {Object} options
 * @param {string} options.location - 'services' | 'packages' | 'contact'
 * @param {string} [options.serviceName] - service name (when location === 'services')
 * @param {number} [options.servicePrice] - service price (when location === 'services')
 * @param {string} [options.packageName] - package name (when location === 'packages')
 * @param {number} [options.packagePrice] - package price (when location === 'packages')
 */
export function trackWhatsAppClick(options) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  const { location, serviceName, servicePrice, packageName, packagePrice } = options

  window.gtag('event', 'whatsapp_click', {
    event_category: 'engagement',
    event_label: location,
    section: location,
    ...(serviceName && { service_name: serviceName }),
    ...(servicePrice != null && { service_price: servicePrice }),
    ...(packageName && { package_name: packageName }),
    ...(packagePrice != null && { package_price: packagePrice }),
  })
}
