import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Check, Gift, Truck, ShieldCheck, BookOpen, Cable, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { BUY_NOW_LINK } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stackItems = [
  { icon: Gift, label: 'Urban Finds CycleRelief Pro Belt', value: '35,000' },
  { icon: Cable, label: 'Rapid USB-C Charging Cable', value: '5,000' },
  { icon: BookOpen, label: 'Digital Guide: 48-Hr Cramp-Free Diet', value: '10,000' },
  { icon: Truck, label: 'Free Nationwide Insured Delivery', value: '4,500' },
  { icon: ShieldCheck, label: '30-Day "Zero Cramp" Money-Back Guarantee', value: 'Priceless' },
];

const packs = [
  { id: 1, label: '1 Belt', price: '22,500', tag: null },
  { id: 2, label: '2 Belts — Bestie Pack', price: '40,000', tag: 'Save ₦5,000' },
];

export default function OfferStack() {
  const [ref, inView] = useInView();
  const [selected, setSelected] = useState(1);

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-navy/30">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-green-brand font-semibold text-sm tracking-widest uppercase mb-3">
            The Full Package
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Everything you get today
          </h2>
        </motion.div>

        {/* Stack list */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-3 mb-10"
        >
          {stackItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center justify-between bg-black-card border border-navy-lighter/25 rounded-xl px-5 py-4 hover:border-green-brand/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-brand/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-green-brand" />
                  </div>
                  <span className="text-sm sm:text-base text-white-off font-medium">{item.label}</span>
                </div>
                <span className="text-sm text-slate-text line-through font-medium whitespace-nowrap ml-4">
                  {item.value === 'Priceless' ? item.value : `₦${item.value}`}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Total value */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="text-slate-text text-sm mb-1">Total Value</p>
          <p className="font-heading text-2xl font-bold text-slate-text line-through mb-1">&#8358;54,500</p>
          <p className="text-green-brand font-heading text-lg font-semibold">
            Today's Promo Price
          </p>
        </motion.div>

        {/* Pack selector */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          {packs.map((pack) => (
            <button
              key={pack.id}
              onClick={() => setSelected(pack.id)}
              className={`relative text-left rounded-xl p-5 border-2 transition-all duration-300 cursor-pointer active:scale-[0.98] ${
                selected === pack.id
                  ? 'border-green-brand bg-green-brand/5'
                  : 'border-navy-lighter/40 bg-black-card hover:border-navy-lighter'
              }`}
            >
              {pack.tag && (
                <span className="absolute -top-3 right-4 bg-green-brand text-black-deep text-xs font-bold px-3 py-1 rounded-full">
                  {pack.tag}
                </span>
              )}
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selected === pack.id ? 'border-green-brand' : 'border-navy-lighter'
                  }`}
                >
                  {selected === pack.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-green-brand" />
                  )}
                </div>
                <span className="font-heading font-bold text-white-off">{pack.label}</span>
              </div>
              <p className="font-heading text-2xl font-bold text-green-brand ml-8">
                &#8358;{pack.price}
              </p>
            </button>
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <a
            href={BUY_NOW_LINK}
            className="group inline-flex items-center justify-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer w-full sm:w-auto"
          >
            <span>Claim {selected === 1 ? '1 Belt (₦22,500)' : '2 Belts (₦40,000)'} — Pay on Delivery</span>
            <ChevronRight size={20} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </a>
          <p className="text-xs text-slate-text mt-3">
            Free insured delivery across all 36 states + FCT Abuja
          </p>
        </motion.div>
      </div>
    </section>
  );
}

