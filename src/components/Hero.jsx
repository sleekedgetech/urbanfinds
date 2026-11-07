import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowDown, ChevronRight, CheckCircle2, PackageCheck, Sparkles } from 'lucide-react';
import { BUY_NOW_LINK } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
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
];

export default function Hero() {
  const [activeView, setActiveView] = useState(0);

  return (
    <section className="relative overflow-hidden min-h-[92dvh] flex items-center pt-4 pb-16 lg:py-20">
      {/* Dynamic background lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-black-deep to-black-deep pointer-events-none" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-brand/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Copy Side (7 cols on desktop) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Trust badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2.5 bg-navy-light/70 border border-navy-lighter/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm"
            >
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-green-brand fill-green-brand" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-slate-light font-medium tracking-wide">
                Rated 4.9/5 by 1,420+ Nigerian Women
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading text-4xl sm:text-5xl lg:text-[3.65rem] font-bold leading-[1.12] tracking-tight mb-6"
            >
              End Menstrual Pain in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-brand to-emerald-300">
                3 Seconds Flat
              </span>{' '}
              — Without Swallowing Another Pill.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg lg:text-xl text-slate-text leading-relaxed mb-8 max-w-2xl"
            >
              The Urban Finds™ Wearable Heat & Vibration Therapy Belt is precision-engineered
              to keep you active, comfortable, and in full control of your schedule. 
              No drugs. No grogginess. Just fast, deep thermal relief right where cramps strike.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <a
                href={BUY_NOW_LINK}
                className="group relative inline-flex items-center justify-center gap-3 bg-green-brand hover:bg-green-hover text-black-deep font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-lg shadow-green-brand/20 cursor-pointer"
              >
                <span>Order Now — Pay On Delivery</span>
                <ChevronRight size={20} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 text-sm text-slate-text hover:text-white-off py-3 px-4 rounded-xl border border-transparent hover:border-navy-lighter/40 transition-colors"
              >
                <ArrowDown size={15} className="text-green-brand animate-bounce" />
                <span>See How It Works</span>
              </a>
            </motion.div>

            {/* Micro-guarantees */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-x-6 gap-y-2.5 pt-4 border-t border-navy-lighter/25 text-xs sm:text-sm text-slate-text"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-brand shrink-0" />
                100% Drug-Free Relief
              </span>
              <span className="flex items-center gap-2">
                <PackageCheck size={16} className="text-green-brand shrink-0" />
                Pay on Delivery Across Nigeria
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={16} className="text-green-brand shrink-0" />
                30-Day Zero-Risk Guarantee
              </span>
            </motion.div>
          </div>

          {/* Product Media Column (5 cols on desktop) */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center"
          >
            <div className="relative w-full max-w-md">
              {/* Soft ambient backlight */}
              <div className="absolute inset-0 bg-green-brand/10 rounded-3xl blur-[70px] scale-95" />
              
              {/* Product Card Container */}
              <div className="relative bg-black-card border border-navy-lighter/40 rounded-3xl p-4 sm:p-5 shadow-2xl shadow-black/80 backdrop-blur-sm">
                
                {/* Main View with smooth crossfade */}
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

                  {/* Floating badge */}
                  <div className="absolute top-3 left-3 bg-black-deep/80 backdrop-blur-md border border-navy-lighter/40 rounded-lg px-3 py-1 text-xs font-medium text-slate-light">
                    {views[activeView].caption}
                  </div>
                </div>

                {/* Thumbnails / View Switcher with tactile feedback */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {views.map((v, idx) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setActiveView(idx)}
                      className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 ${
                        activeView === idx
                          ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/30'
                          : 'border-navy-lighter/30 bg-navy/30 hover:border-navy-lighter/60'
                      }`}
                    >
                      <img
                        src={v.src}
                        alt=""
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <p className={`text-xs font-semibold truncate ${activeView === idx ? 'text-green-brand' : 'text-slate-light'}`}>
                          {v.label}
                        </p>
                        <p className="text-[11px] text-slate-text truncate">
                          {idx === 0 ? 'In Gift Box' : 'Belt Profile'}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Price anchor highlight */}
                <div className="mt-4 pt-4 border-t border-navy-lighter/25 flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-text font-medium">One-Time Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-2xl sm:text-3xl font-bold text-green-brand">&#8358;22,500</span>
                      <span className="text-xs text-slate-text line-through">&#8358;35,000</span>
                    </div>
                  </div>
                  <span className="bg-green-brand/10 border border-green-brand/30 text-green-brand text-xs font-bold px-3 py-1.5 rounded-full">
                    Save 35% Today
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
