import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Gift, Truck, ShieldCheck, BookOpen, Cable, ChevronRight, Users } from 'lucide-react';
import { useState } from 'react';
import { BUY_NOW_LINK, scrollToSection, PRICE_PROMO, PRICE_ORIGINAL, PRICE_BUNDLE_2, PROMO_EXPIRY_DATE } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const stackItems = [
  { icon: Gift, label: 'Urban Finds CycleRelief Pro Belt', value: PRICE_ORIGINAL },
  { icon: Cable, label: 'Rapid USB-C Fast-Charging Cable', value: '5,000' },
  { icon: BookOpen, label: 'Digital Guide: 48-Hr Anti-Inflammatory Protocol', value: '10,000' },
  { icon: Users, label: 'VIP Delivery & Real-Time Tracking Group Access', value: 'Priceless' },
  { icon: Truck, label: 'Free Priority Insured Delivery', value: '4,500' },
  { icon: ShieldCheck, label: '30-Day "Zero Cramp" Money-Back Guarantee', value: 'Priceless' },
];

const packs = [
  { id: 1, label: '1 Belt (Solo Pack)', price: PRICE_PROMO, struck: PRICE_ORIGINAL, tag: '30% Discount' },
  { id: 2, label: '2 Belts (Sister / Bestie Pack)', price: PRICE_BUNDLE_2, struck: '56,550', tag: 'Best Value' },
];

export default function OfferStack() {
  const [ref, inView] = useInView();
  const [selected, setSelected] = useState(1);

  const handleOrder = () => {
    if (BUY_NOW_LINK && BUY_NOW_LINK.startsWith('http')) {
      window.open(BUY_NOW_LINK, '_blank');
    } else {
      scrollToSection('order');
    }
  };

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-navy/30">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-green-brand" />
            <span className="text-green-brand font-bold text-xs tracking-widest uppercase">
              The Complete Bundle
            </span>
            <span className="w-6 h-px bg-green-brand" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white-off">
            Everything You Get Today
          </h2>
        </motion.div>

        {/* Stack Items */}
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
                className="flex items-center justify-between bg-black-card border border-navy-lighter/30 rounded-xl px-5 py-4 hover:border-green-brand/40 transition-colors duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-green-brand/10 border border-green-brand/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-green-brand" />
                  </div>
                  <span className="text-sm sm:text-base text-white-off font-semibold">{item.label}</span>
                </div>
                <span className="text-xs sm:text-sm text-slate-text font-medium line-through whitespace-nowrap ml-4">
                  {item.value === 'Priceless' ? item.value : `₦${item.value}`}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Total Value Anchoring */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-10 p-5 bg-navy/40 border border-navy-lighter/25 rounded-2xl"
        >
          <span className="text-xs uppercase tracking-widest text-slate-text font-bold block mb-1">
            Total Combined Market Value
          </span>
          <p className="font-heading text-3xl font-extrabold text-slate-text line-through mb-1">&#8358;47,775</p>
          <p className="text-green-brand font-heading text-sm font-bold uppercase tracking-wider">
            Today's Promotional Price (Valid till {PROMO_EXPIRY_DATE})
          </p>
        </motion.div>

        {/* Pack Selector Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="grid sm:grid-cols-2 gap-4 mb-8"
        >
          {packs.map((pack) => (
            <button
              key={pack.id}
              type="button"
              onClick={() => setSelected(pack.id)}
              className={`relative text-left rounded-2xl p-5 border-2 transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                selected === pack.id
                  ? 'border-green-brand bg-green-brand/10 shadow-lg shadow-green-brand/10'
                  : 'border-navy-lighter/35 bg-black-card hover:border-navy-lighter/60'
              }`}
            >
              {pack.tag && (
                <span className="absolute -top-3 right-4 bg-green-brand text-black-deep text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md shadow-sm">
                  {pack.tag}
                </span>
              )}
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selected === pack.id ? 'border-green-brand' : 'border-navy-lighter'
                  }`}
                >
                  {selected === pack.id && (
                    <div className="w-2 h-2 rounded-full bg-green-brand" />
                  )}
                </div>
                <span className="font-heading font-bold text-white-off text-sm">{pack.label}</span>
              </div>
              <div className="flex items-baseline gap-2 ml-7">
                <p className="font-heading text-2xl font-black text-green-brand">
                  &#8358;{pack.price}
                </p>
                <span className="text-xs text-slate-text line-through font-medium">
                  &#8358;{pack.struck}
                </span>
              </div>
            </button>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center"
        >
          <button
            type="button"
            onClick={handleOrder}
            className="group inline-flex items-center justify-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-black text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer w-full sm:w-auto"
          >
            <span>
              Claim {selected === 1 ? `1 Belt (₦${PRICE_PROMO})` : `2 Belts (₦${PRICE_BUNDLE_2})`} — 30% Off
            </span>
            <ChevronRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </button>
          <p className="text-xs text-slate-text font-normal mt-3">
            Instant online checkout with immediate admission to the VIP Delivery Tracking Group.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
