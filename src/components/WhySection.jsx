import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronRight } from 'lucide-react';
import { BUY_NOW_LINK, scrollToSection, PRICE_PROMO } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function WhySection() {
  const [ref, inView] = useInView();

  const handleOrder = () => {
    if (BUY_NOW_LINK && BUY_NOW_LINK.startsWith('http')) {
      window.location.href = BUY_NOW_LINK;
    } else {
      scrollToSection('order');
    }
  };

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-navy/30">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-green-brand" />
            <span className="text-green-brand font-bold text-xs tracking-widest uppercase">
              The Reality
            </span>
            <span className="w-6 h-px bg-green-brand" />
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-8 text-white-off">
            Sis, your period didn't come to ask for permission.
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-6 text-slate-text text-base sm:text-lg font-normal leading-relaxed text-left sm:text-center">
            <p>
              It shows up every month. Whether you're in the middle of a
              presentation, chasing a deadline, or just trying to rest. And
              somewhere between the cramps that grip you at 6am and the warmth
              you have to perform at noon, something is almost forfeited —{' '}
              <strong className="text-white-off font-bold">
                your goals, your rhythm, yourself.
              </strong>
            </p>

            <p>
              We know that feeling. The one where you manage the pain with
              gritted teeth and Ibuprofen and sheer stubbornness. Where you
              push through, not because you're okay — but because life
              doesn't pause and you know that.
            </p>

            <p>
              That knowing is why we brought the{' '}
              <strong className="text-green-brand font-bold">
                Urban Finds Menstrual Cramp Relief Belt
              </strong>{' '}
              to you. Not to pretend your period isn't real. But to sit with you
              in it — and carry some of the weight.
            </p>

            <p className="text-white-off font-bold text-lg sm:text-xl pt-2">
              Because you deserve to show up in full, every week of every month.
              <span className="text-green-brand font-black"> Period.</span>
            </p>

            <div className="pt-6">
              <button
                type="button"
                onClick={handleOrder}
                className="group inline-flex items-center justify-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-lg shadow-green-brand/20 cursor-pointer"
              >
                <span>Experience Instant Relief — Pay &#8358;{PRICE_PROMO}</span>
                <ChevronRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
