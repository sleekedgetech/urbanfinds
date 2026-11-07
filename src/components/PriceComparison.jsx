import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';
import { X, Check, Repeat, Zap, ArrowRight } from 'lucide-react';
import { BUY_NOW_LINK, scrollToSection, PRICE_PROMO, PRICE_ORIGINAL, PROMO_EXPIRY_DATE } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

function PriceCounter({ value, inView }) {
  const count = useCountUp(value, 1200, inView);
  return <>{count.toLocaleString()}</>;
}

export default function PriceComparison() {
  const [ref, inView] = useInView();

  const handleOrder = () => {
    if (BUY_NOW_LINK && BUY_NOW_LINK.startsWith('http')) {
      window.open(BUY_NOW_LINK, '_blank');
    } else {
      scrollToSection('order');
    }
  };

  return (
    <section ref={ref} id="pricing" className="relative py-20 sm:py-28 scroll-mt-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-green-brand" />
            <span className="text-green-brand font-bold text-xs tracking-widest uppercase">
              Financial & Health Cost
            </span>
            <span className="w-6 h-px bg-green-brand" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-white-off">
            You've already been spending over{' '}
            <span className="text-green-brand font-black">
              &#8358;<PriceCounter value={28275} inView={inView} />
            </span>{' '}
            every single year.
          </h2>
        </motion.div>

        {/* 2 Comparison Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Old Way */}
          <motion.div
            variants={fadeUp}
            className="bg-black-card border border-red-500/25 rounded-2xl p-7 sm:p-8 relative overflow-hidden shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-navy-lighter/25 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <Repeat size={18} className="text-red-400" />
                <h3 className="font-heading font-bold text-lg text-white-off">
                  Regular Disposable Routine
                </h3>
              </div>
              <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider border-l-2 border-red-500 pl-2">
                Recurring Drain
              </span>
            </div>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-slate-text font-semibold block mb-1">Estimated Annual Loss</span>
              <p className="font-heading text-4xl sm:text-5xl font-extrabold text-red-400">
                &#8358;<PriceCounter value={28275} inView={inView} />
                <span className="text-sm text-slate-text font-normal"> / year</span>
              </p>
            </div>

            <ul className="space-y-3.5 text-slate-text text-sm font-normal">
              {[
                'Recurring monthly drain: disposable pads, temporary heat patches & pills',
                'Chemical painkillers cause liver strain and gastric ulcers over time',
                'Hot water bottles leak, cool down in 20 min, and restrict your movement',
                'Still leaves you curled up in bed, sacrificing active work hours and meetings',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <X size={16} className="text-red-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Urban Finds Solution */}
          <motion.div
            variants={fadeUp}
            className="bg-black-card border border-green-brand/40 rounded-2xl p-7 sm:p-8 relative overflow-hidden shadow-2xl ring-1 ring-green-brand/20"
          >
            <div className="flex items-center justify-between border-b border-navy-lighter/25 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <Zap size={18} className="text-green-brand" />
                <h3 className="font-heading font-bold text-lg text-white-off">
                  Urban Finds CycleRelief Pro
                </h3>
              </div>
              <span className="text-[11px] font-bold text-green-brand uppercase tracking-wider border-l-2 border-green-brand pl-2">
                30% Off Till Dec 30
              </span>
            </div>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-slate-text font-semibold block mb-1">One-Time Promo Investment</span>
              <div className="flex items-baseline gap-2">
                <p className="font-heading text-4xl sm:text-5xl font-extrabold text-green-brand">
                  &#8358;<PriceCounter value={21750} inView={inView} />
                </p>
                <span className="text-base text-slate-text font-normal line-through">&#8358;{PRICE_ORIGINAL}</span>
              </div>
            </div>

            <ul className="space-y-3.5 text-slate-text text-sm font-normal">
              {[
                'One-time purchase — reusable across dozens of menstrual cycles',
                '100% drug-free far-infrared warmth with zero digestive side effects',
                'Steady, continuous 50-60°C temperature + 4 pulsed vibrational massage modes',
                'Includes VIP delivery group tracking within 5-10 minutes of ordering',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check size={16} className="text-green-brand mt-0.5 shrink-0" />
                  <span className="text-slate-light font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom CTA Block */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mt-14"
        >
          <p className="font-heading text-2xl sm:text-3xl font-extrabold mb-6 text-white-off">
            Don't manage it.{' '}
            <span className="text-green-brand">Fix it.</span>
          </p>
          <button
            type="button"
            onClick={handleOrder}
            className="group inline-flex items-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer"
          >
            <span>Claim 30% Discount (&#8358;{PRICE_PROMO})</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-xs text-slate-text mt-3">
            Offer strictly valid until {PROMO_EXPIRY_DATE}.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
