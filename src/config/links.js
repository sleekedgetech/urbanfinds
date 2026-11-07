/**
 * Centralized link & pricing configuration for Urban Finds.
 * 
 * Target Checkout Store: https://urban-finds.mybizthom.com/menstrual-relief-belt
 */
export const BUY_NOW_LINK = 'https://urban-finds.mybizthom.com/menstrual-relief-belt';

export const WHATSAPP_SUPPORT_LINK = 'https://wa.me/2348000000000?text=Hello%20Urban%20Finds,%20I%20have%20a%20question%20about%20the%20Menstrual%20Relief%20Belt';

export const PROMO_EXPIRY_DATE = '30th December';
export const PRICE_ORIGINAL = '28,275';
export const PRICE_PROMO = '21,750';
export const PRICE_BUNDLE_2 = '39,500';

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
