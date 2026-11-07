import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { BUY_NOW_LINK, scrollToSection, PRICE_PROMO, PROMO_EXPIRY_DATE } from '../config/links';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const orderEl = document.getElementById('order');
      const orderTop = orderEl ? orderEl.getBoundingClientRect().top : Infinity;
      const scrollY = window.scrollY;

      setVisible(scrollY > 400 && orderTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOrder = () => {
    if (BUY_NOW_LINK && BUY_NOW_LINK.startsWith('http')) {
      window.open(BUY_NOW_LINK, '_blank');
    } else {
      scrollToSection('order');
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 inset-x-0 z-40 p-3 bg-black-deep/90 backdrop-blur-md border-t border-navy-lighter/30 sm:hidden"
        >
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            <div>
              <p className="text-[10px] text-green-brand font-bold uppercase tracking-wider">30% Off Till Dec 30</p>
              <p className="font-heading font-black text-lg text-green-brand leading-none">
                &#8358;{PRICE_PROMO}
              </p>
            </div>
            <button
              type="button"
              onClick={handleOrder}
              className="flex-1 flex items-center justify-center gap-1.5 bg-green-brand active:bg-green-hover text-black-deep font-black text-xs uppercase tracking-wider py-3 px-3 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-md shadow-green-brand/20 cursor-pointer"
            >
              <span>Claim 30% Off</span>
              <ChevronRight size={15} strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
