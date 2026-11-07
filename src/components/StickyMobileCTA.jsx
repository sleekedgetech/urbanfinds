import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { BUY_NOW_LINK, scrollToSection } from '../config/links';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px, hide when near order form
      const orderEl = document.getElementById('order');
      const orderTop = orderEl ? orderEl.getBoundingClientRect().top : Infinity;
      const scrollY = window.scrollY;

      setVisible(scrollY > 400 && orderTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              <p className="text-xs text-slate-text">One-time offer</p>
              <p className="font-heading font-bold text-lg text-green-brand leading-none">
                &#8358;22,500
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                if (BUY_NOW_LINK && BUY_NOW_LINK.startsWith('http')) {
                  window.location.href = BUY_NOW_LINK;
                } else {
                  scrollToSection('order');
                }
              }}
              className="flex-1 flex items-center justify-center gap-1.5 bg-green-brand active:bg-green-hover text-black-deep font-black text-xs uppercase tracking-wider py-3 px-3 rounded-xl transition-all duration-200 active:scale-[0.98] shadow-md shadow-green-brand/20 cursor-pointer"
            >
              <span>Pay on Delivery (₦22,500)</span>
              <ChevronRight size={15} strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
