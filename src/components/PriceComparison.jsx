import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { X, Check, Repeat, Zap, ArrowRight } from 'lucide-react';
import { BUY_NOW_LINK } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function PriceCounter({ value, inView }) {
  const count = useCountUp(value, 1200, inView);
  return <>{count.toLocaleString()}</>;
}

export default function PriceComparison() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="text-green-brand font-semibold text-sm tracking-widest uppercase mb-3">
            The Real Cost
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-snug">
            You've already been spending{' '}
            <span className="text-green-brand">
              &#8358;<PriceCounter value={22500} inView={inView} />
            </span>{' '}
            on pads every single year.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Old way */}
          <motion.div
            variants={fadeUp}
            className="bg-navy/60 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
              Every Year
            </div>
            <div className="flex items-center gap-3 mb-6 mt-4">
              <Repeat size={20} className="text-red-400" />
              <h3 className="font-heading font-bold text-xl text-white-off">
                Regular Pads + Painkillers
              </h3>
            </div>
            <p className="font-heading text-4xl font-bold text-red-400 mb-4">
              &#8358;<PriceCounter value={22500} inView={inView} />
              <span className="text-lg text-slate-text font-normal">/year</span>
            </p>
            <ul className="space-y-3 text-slate-text text-sm">
              {[
                'Recurring monthly expense forever',
                'Ibuprofen and Felvin stress your liver',
                'Hot water bottle leaks and cools in 20 min',
                'Still leaves you in pain during the day',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <X size={16} className="text-red-400 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* New way */}
          <motion.div
            variants={fadeUp}
            className="bg-navy/60 border border-green-brand/30 rounded-2xl p-8 relative overflow-hidden ring-1 ring-green-brand/20"
          >
            <div className="absolute top-0 right-0 bg-green-brand/10 text-green-brand text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
              One Time
            </div>
            <div className="flex items-center gap-3 mb-6 mt-4">
              <Zap size={20} className="text-green-brand" />
              <h3 className="font-heading font-bold text-xl text-white-off">
                Urban Finds CycleRelief Belt
              </h3>
            </div>
            <p className="font-heading text-4xl font-bold text-green-brand mb-4">
              &#8358;<PriceCounter value={22500} inView={inView} />
              <span className="text-lg text-slate-text font-normal"> once</span>
            </p>
            <ul className="space-y-3 text-slate-text text-sm">
              {[
                'One-time purchase — reusable for years',
                '100% drug-free, zero side effects',
                'Consistent 50-60 degree targeted heat',
                'Wear it all day under any outfit',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check size={16} className="text-green-brand mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom hook */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mt-12"
        >
          <p className="font-heading text-2xl sm:text-3xl font-bold mb-6">
            Don't manage it.{' '}
            <span className="text-green-brand">Fix it.</span>
          </p>
          <a
            href={BUY_NOW_LINK}
            className="group inline-flex items-center gap-2 bg-green-brand hover:bg-green-hover text-black-deep font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-lg shadow-green-brand/20 cursor-pointer"
          >
            <span>Order Yours Now — Pay on Delivery</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

