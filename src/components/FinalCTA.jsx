import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { BUY_NOW_LINK, scrollToSection } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function FinalCTA() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-gradient-to-t from-black-deep via-navy/50 to-black-deep overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-brand/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart size={15} className="text-green-brand" />
            <span className="text-xs font-bold text-green-brand uppercase tracking-widest">
              Your Daily Comfort Matters
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold leading-tight mb-6 text-white-off">
            Stop sacrificing your month to cramps.
          </h2>

          <p className="text-slate-text font-normal text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join over 1,420 Nigerian women who took back their rhythm.
            Instant thermal relief in 3 seconds. 100% drug-free. Reusable for years.
          </p>

          <button
            type="button"
            onClick={() => {
              if (BUY_NOW_LINK && BUY_NOW_LINK.startsWith('http')) {
                window.location.href = BUY_NOW_LINK;
              } else {
                scrollToSection('order');
              }
            }}
            className="group inline-flex items-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-extrabold text-xs sm:text-sm uppercase tracking-wider px-9 py-4.5 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer"
          >
            <span>Claim Yours Now — Pay &#8358;22,500 On Delivery</span>
            <ChevronRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </button>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs sm:text-sm text-slate-text font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-green-brand" />
              Pay on Delivery Available Nationwide
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-green-brand" />
              Free Insured Delivery on All Orders
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-green-brand" />
              30-Day Zero-Risk Guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
