import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ChevronRight, CheckCircle2, Users, ShieldCheck } from 'lucide-react';
import { BUY_NOW_LINK, scrollToSection, PRICE_PROMO, PRICE_ORIGINAL, PROMO_EXPIRY_DATE } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const views = [
  {
    id: 'box',
    label: 'Gift Packaging',
    src: '/assets/pink_and_white_variant.jpg',
    caption: 'Official Box Edition',
  },
  {
    id: 'belt',
    label: 'Wearable Profile',
    src: '/assets/electric_heating_belt.jpg',
    caption: 'Ergonomic Body Fit',
  },
  {
    id: 'display',
    label: 'Digital Controls',
    src: '/assets/bizthom_2.webp',
    caption: 'Smart Display Unit',
  },
];

export default function Hero() {
  const [activeView, setActiveView] = useState(0);

  const handleOrderClick = () => {
    if (BUY_NOW_LINK && BUY_NOW_LINK.startsWith('http')) {
      window.open(BUY_NOW_LINK, '_blank');
    } else {
      scrollToSection('order');
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20">
      {/* Background illumination */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-black-deep to-black-deep pointer-events-none" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-brand/[0.04] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Copy Column (Centralized on mobile, left-aligned on desktop) */}
          <div className="lg:col-span-7 order-1 text-center lg:text-left">
            
            {/* Non-Capsule Eyebrow Header (No Capsule Pill, No AI Sparkles) */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-xs font-extrabold text-green-brand uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-xs bg-green-brand" />
              <span>30% Special Discount — Valid till {PROMO_EXPIRY_DATE}</span>
            </motion.div>

            {/* Main Headline in Ultra-Bold Raleway (font-black) */}
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading text-3xl sm:text-5xl lg:text-[3.85rem] font-black leading-[1.12] tracking-tight mb-5 sm:mb-6 text-white-off text-center lg:text-left"
            >
              End Menstrual Pain in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-brand via-lime-300 to-green-400">
                3 Seconds Flat
              </span>{' '}
              — Without Swallowing Another Pill.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg lg:text-xl text-slate-text font-normal leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
            >
              The Urban Finds™ Wearable Heat & Vibration Therapy Belt is precision-engineered
              to keep you active, comfortable, and in full control of your month. 
              No drugs. No grogginess. Just fast, deep thermal relief right where cramps strike.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                type="button"
                onClick={handleOrderClick}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-green-brand hover:bg-green-hover text-black-deep font-black text-sm sm:text-base uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer"
              >
                <span>Claim 30% Off — Pay &#8358;{PRICE_PROMO}</span>
                <ChevronRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('video-demo')}
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-text hover:text-white-off py-3 px-4 rounded-xl border border-transparent hover:border-navy-lighter/40 transition-colors cursor-pointer"
              >
                <ArrowDown size={14} className="text-green-brand animate-bounce" />
                <span>Watch Video Demo</span>
              </button>
            </motion.div>

            {/* Micro Guarantees (Clean, No AI Sparkles, No Capsules) */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2.5 pt-5 border-t border-navy-lighter/20 text-xs text-slate-text font-medium"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-green-brand shrink-0" />
                100% Drug-Free Relief
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={15} className="text-green-brand shrink-0" />
                Live VIP Delivery Group Updates
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-green-brand shrink-0" />
                30-Day Money-Back Guarantee
              </span>
            </motion.div>
          </div>

          {/* Product Media Column with Levitation */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 order-2 flex flex-col items-center"
          >
            {/* Smooth gravitation/floating motion */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[360px] sm:max-w-md lg:max-w-[450px] mx-auto"
            >
              {/* Backlight */}
              <div className="absolute inset-0 bg-green-brand/10 rounded-3xl blur-[60px] scale-95" />
              
              {/* Container Card */}
              <div className="relative bg-black-card border border-navy-lighter/40 rounded-3xl p-4 sm:p-5 shadow-2xl shadow-black/80 backdrop-blur-sm">
                
                {/* Main Image Frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-navy/40 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={views[activeView].id}
                      src={views[activeView].src}
                      alt={views[activeView].caption}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </AnimatePresence>

                  <div className="absolute top-2.5 left-2.5 bg-black-deep/85 border border-navy-lighter/40 rounded-md px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-slate-light tracking-wide">
                    {views[activeView].caption}
                  </div>
                </div>

                {/* View Switcher */}
                <div className="grid grid-cols-3 gap-2 mt-3.5 sm:mt-4">
                  {views.map((v, idx) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setActiveView(idx)}
                      className={`flex flex-col items-center p-2 rounded-xl border text-center transition-all duration-200 cursor-pointer active:scale-95 ${
                        activeView === idx
                          ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/30'
                          : 'border-navy-lighter/30 bg-navy/30 hover:border-navy-lighter/60'
                      }`}
                    >
                      <img
                        src={v.src}
                        alt=""
                        className="w-8 h-8 rounded-lg object-cover mb-1 shrink-0"
                      />
                      <p className={`text-[10px] font-bold truncate ${activeView === idx ? 'text-green-brand' : 'text-slate-light'}`}>
                        {v.label}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Price Bar */}
                <div className="mt-3.5 sm:mt-4 pt-3.5 sm:pt-4 border-t border-navy-lighter/25 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-text font-bold">Promo Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-2xl sm:text-3xl font-black text-green-brand">&#8358;{PRICE_PROMO}</span>
                      <span className="text-xs text-slate-text font-medium line-through">&#8358;{PRICE_ORIGINAL}</span>
                    </div>
                  </div>
                  <span className="border-l-2 border-green-brand pl-2.5 py-0.5 text-[11px] sm:text-xs font-bold text-green-brand tracking-wider uppercase">
                    30% Off Till Dec 30
                  </span>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
