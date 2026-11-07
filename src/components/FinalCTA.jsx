import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { BUY_NOW_LINK } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function FinalCTA() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-gradient-to-t from-black-deep via-navy to-black-deep overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-brand/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 bg-green-brand/10 border border-green-brand/20 rounded-full px-4 py-1.5 mb-6">
            <Heart size={14} className="text-green-brand" />
            <span className="text-sm text-green-brand font-semibold">Your Comfort Matters</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Stop sacrificing your month to cramps.
          </h2>

          <p className="text-slate-text text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Join over 1,420 Nigerian women who took back their rhythm.
            Instant relief in 3 seconds. Drug-free. Reusable for years.
          </p>

          <a
            href={BUY_NOW_LINK}
            className="group inline-flex items-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-bold text-lg px-10 py-5 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer"
          >
            Claim Yours Now — Pay &#8358;22,500 On Delivery
            <ChevronRight size={22} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-slate-text">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-green-brand" />
              Pay on Delivery Available Nationwide
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-green-brand" />
              Free Delivery on 2-Packs
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-green-brand" />
              30-Day Money-Back Guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
