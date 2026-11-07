import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronRight } from 'lucide-react';
import { BUY_NOW_LINK } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function WhySection() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-navy/40">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="text-green-brand font-semibold text-sm tracking-widest uppercase mb-4">
            Why Get It
          </motion.p>

          <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold leading-snug mb-8">
            Sis, your period didn't come to ask for permission.
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-6 text-slate-text text-base sm:text-lg leading-relaxed text-left sm:text-center">
            <p>
              It shows up every month. Whether you're in the middle of a
              presentation, chasing a deadline, or just trying to rest. And
              somewhere between the cramps that grip you at 6am and the warmth
              you have to perform at noon, something is almost forfeited —{' '}
              <span className="text-white-off font-medium">
                your goals, your rhythm, yourself.
              </span>
            </p>

            <p>
              We know that feeling. The one where you manage the pain with
              gritted teeth and Ibuprofen and sheer stubbornness. Where you
              push through, not because you're okay — but because life
              doesn't pause and you know that.
            </p>

            <p>
              That knowing is why we brought the{' '}
              <span className="text-green-brand font-semibold">
                Menstrual Cramp Relief Belt
              </span>{' '}
              to you. Not to pretend your period isn't real. But to sit with you
              in it — and carry some of the weight.
            </p>

            <p className="text-white-off font-medium text-lg sm:text-xl">
              Because you deserve to show up in full, every week of every month.
              <span className="text-green-brand"> Period.</span>
            </p>

            <div className="pt-6">
              <a
                href={BUY_NOW_LINK}
                className="group inline-flex items-center justify-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-lg shadow-green-brand/20 cursor-pointer"
              >
                <span>Experience Instant Relief — Pay on Delivery</span>
                <ChevronRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

