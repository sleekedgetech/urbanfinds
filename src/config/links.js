/**
 * Centralized link configuration for Urban Finds.
 * 
 * Replace BUY_NOW_LINK with your external checkout/payment link if needed.
 * Leave as '' (empty string) to enable pure on-page smooth scrolling to the
 * checkout form with zero hashtags appearing in the URL.
 */
export const BUY_NOW_LINK = '';

export const WHATSAPP_SUPPORT_LINK = 'https://wa.me/2348000000000?text=Hello%20Urban%20Finds,%20I%20have%20a%20question%20about%20the%20Menstrual%20Relief%20Belt';

/**
 * Pure smooth scrolling helper that never adds a hashtag (#) to the browser URL.
 */
export function scrollToSection(sectionId) {
  if (typeof window === 'undefined') return;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
