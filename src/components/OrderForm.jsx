import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ShieldCheck, CheckCircle2, ArrowRight, Clock, Users, Tag } from 'lucide-react';
import { BUY_NOW_LINK, PRICE_PROMO, PRICE_ORIGINAL, PRICE_BUNDLE_2, PROMO_EXPIRY_DATE } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function OrderForm() {
  const [ref, inView] = useInView();
  const [selectedPack, setSelectedPack] = useState('1');

  const currentPrice = selectedPack === '2' ? PRICE_BUNDLE_2 : PRICE_PROMO;
  const currentStruck = selectedPack === '2' ? '56,550' : PRICE_ORIGINAL;

  const handleCheckout = () => {
    window.open(BUY_NOW_LINK, '_blank');
  };

  return (
    <section ref={ref} id="order" className="relative py-16 sm:py-28 scroll-mt-6">
      {/* Background illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-brand/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <span className="w-6 h-px bg-green-brand" />
            <span className="text-xs font-bold text-green-brand uppercase tracking-widest">
              Direct Secure Checkout
            </span>
            <span className="w-6 h-px bg-green-brand" />
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2 sm:mb-3 text-white-off">
            Claim Your 30% Discount
          </h2>
          <p className="text-slate-text text-xs sm:text-base font-normal max-w-lg mx-auto leading-relaxed">
            Select your package below and tap the button to proceed to the official checkout page. 
            Within 5–10 minutes of payment, your private link to the VIP Delivery Tracking Group will be dispatched directly to your phone.
          </p>
        </motion.div>

        {/* Action Card (Zero Form Friction, Pure Direct Checkout) */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="bg-black-card border border-navy-lighter/35 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 shadow-2xl"
        >
          {/* Step 1: Select Pack */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-light mb-2.5">
              Select Your Quantity
            </label>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={() => setSelectedPack('1')}
                className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 ${
                  selectedPack === '1'
                    ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40 shadow-md shadow-green-brand/10'
                    : 'border-navy-lighter/30 bg-navy/40 hover:border-navy-lighter/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] sm:text-xs text-slate-text font-bold uppercase tracking-wider">1 Belt</span>
                  <span className="text-[10px] text-green-brand font-black">30% Off</span>
                </div>
                <span className="font-heading text-lg sm:text-2xl font-black text-green-brand block leading-tight">&#8358;{PRICE_PROMO}</span>
                <span className="text-[10px] sm:text-xs text-slate-text line-through font-medium">&#8358;{PRICE_ORIGINAL}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPack('2')}
                className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 relative ${
                  selectedPack === '2'
                    ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40 shadow-md shadow-green-brand/10'
                    : 'border-navy-lighter/30 bg-navy/40 hover:border-navy-lighter/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] sm:text-xs text-slate-text font-bold uppercase tracking-wider">2 Belts</span>
                  <span className="text-[9px] bg-green-brand text-black-deep px-1.5 py-0.2 rounded font-black uppercase">Best Value</span>
                </div>
                <span className="font-heading text-lg sm:text-2xl font-black text-green-brand block leading-tight">&#8358;{PRICE_BUNDLE_2}</span>
                <span className="text-[10px] sm:text-xs text-slate-text line-through font-medium">&#8358;56,550</span>
              </button>
            </div>
          </div>

          {/* Delivery & Group Protocol Highlights */}
          <div className="bg-navy/50 border border-navy-lighter/30 rounded-xl p-4 text-xs sm:text-sm space-y-2.5">
            <div className="flex items-center gap-2 text-green-brand font-bold text-xs uppercase tracking-wider">
              <Clock size={15} />
              <span>What Happens After You Pay</span>
            </div>
            <ul className="space-y-2 text-slate-light text-xs font-normal leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-green-brand mt-0.5 shrink-0" />
                <span>You are redirected to our secure checkout page to complete payment.</span>
              </li>
              <li className="flex items-start gap-2">
                <Users size={14} className="text-green-brand mt-0.5 shrink-0" />
                <span>Within <strong>5–10 minutes</strong>, you receive your VIP Delivery & Support Group access link.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={14} className="text-green-brand mt-0.5 shrink-0" />
                <span>Our team posts continuous live updates in the group until your order arrives safely.</span>
              </li>
            </ul>
          </div>

          {/* Total Price Bar */}
          <div className="bg-navy/70 border border-navy-lighter/30 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] text-slate-text uppercase tracking-wider block font-bold">Total Promo Price</span>
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-xl sm:text-3xl font-black text-green-brand leading-none">
                  &#8358;{currentPrice}
                </span>
                <span className="text-xs text-slate-text line-through font-medium">&#8358;{currentStruck}</span>
              </div>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-light font-medium bg-navy-lighter/30 px-2.5 py-1 rounded w-fit">
              Promo Valid Till {PROMO_EXPIRY_DATE}
            </span>
          </div>

          {/* Primary Action Button (Leads Directly to Bizthom Checkout) */}
          <button
            type="button"
            onClick={handleCheckout}
            className="w-full flex items-center justify-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-black text-xs sm:text-base uppercase tracking-wider py-4 rounded-xl transition-all duration-200 active:scale-[0.98] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer"
          >
            <span>Proceed to Secure Checkout — &#8358;{currentPrice}</span>
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>

          {/* Micro Reassurance */}
          <p className="text-center text-[10px] sm:text-xs text-slate-text font-normal flex items-center justify-center gap-1.5 pt-0.5">
            <ShieldCheck size={13} className="text-green-brand shrink-0" />
            <span>Secure payment encrypted. 30-day money-back guarantee. VIP group link in 5-10 mins.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
