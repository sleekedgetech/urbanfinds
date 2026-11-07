import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ShieldCheck, Loader2, MessageSquare, CheckCircle, Package, ArrowRight, Clock, Users } from 'lucide-react';
import { BUY_NOW_LINK, PRICE_PROMO, PRICE_BUNDLE_2, PROMO_EXPIRY_DATE } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const nigerianStates = [
  'Lagos','FCT Abuja','Rivers','Oyo','Ogun','Delta','Anambra','Edo','Enugu','Akwa Ibom',
  'Abia','Adamawa','Bauchi','Bayelsa','Benue','Borno','Cross River','Ebonyi','Ekiti',
  'Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Nasarawa',
  'Niger','Ondo','Osun','Plateau','Sokoto','Taraba','Yobe','Zamfara'
];

export default function OrderForm() {
  const [ref, inView] = useInView();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    whatsapp: '',
    altPhone: '',
    address: '',
    state: 'Lagos',
    color: 'Pink',
    quantity: '1',
    note: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const priceTotal = form.quantity === '2' ? PRICE_BUNDLE_2 : PRICE_PROMO;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Automatically open the official checkout link in a new tab
      if (BUY_NOW_LINK && BUY_NOW_LINK.startsWith('http')) {
        window.open(BUY_NOW_LINK, '_blank');
      }
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Urban Finds! I have filled my order details for the Menstrual Relief Belt.\n\n` +
    `📦 Quantity: ${form.quantity} Unit(s)\n` +
    `🎨 Color: ${form.color}\n` +
    `💰 Price: ₦${priceTotal}\n` +
    `👤 Name: ${form.fullName}\n` +
    `📍 Address: ${form.address}, ${form.state}\n` +
    `📞 WhatsApp: ${form.whatsapp}\n\n` +
    `Please confirm my payment and send my VIP Delivery & Support Group access link.`
  );

  const customWhatsAppUrl = `https://wa.me/2348000000000?text=${whatsappMessage}`;

  return (
    <section ref={ref} id="order" className="relative py-16 sm:py-28 scroll-mt-6">
      {/* Background illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-brand/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <Package size={15} className="text-green-brand" />
            <span className="text-xs font-bold text-green-brand uppercase tracking-widest">
              Direct Checkout & Dispatch Registration
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-2 sm:mb-3 text-white-off">
            Secure Your Relief Belt
          </h2>
          <p className="text-slate-text text-xs sm:text-base font-normal max-w-lg mx-auto leading-relaxed">
            Fill in your delivery details below to lock in the 30% discount (&#8358;{PRICE_PROMO}).
            After payment, you will receive your private link to the VIP Delivery Tracking Group within 5–10 minutes.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black-card border border-green-brand/40 rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-brand/10 border border-green-brand/30 flex items-center justify-center mx-auto mb-4 text-green-brand">
              <CheckCircle size={28} />
            </div>

            <h3 className="font-heading text-xl sm:text-3xl font-black text-white-off mb-2">
              Registration Successful!
            </h3>
            
            <p className="text-slate-text text-xs sm:text-base max-w-md mx-auto mb-5 font-normal">
              Thank you, <strong className="text-white-off font-bold">{form.fullName}</strong>.
              Your details are recorded. Complete your payment on the opened tab.
            </p>

            {/* 5-10 min notice */}
            <div className="bg-navy/70 border border-green-brand/30 rounded-xl p-4 text-left mb-5 text-xs sm:text-sm space-y-2 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-green-brand font-bold text-xs uppercase tracking-wider">
                <Clock size={16} />
                <span>Next Step: Group Access in 5–10 Mins</span>
              </div>
              <p className="text-slate-light text-xs font-normal leading-relaxed">
                Once payment is confirmed, you will receive an SMS and WhatsApp message with your direct invitation to the <strong>VIP Delivery & Support Group</strong> where live courier dispatch updates are posted until delivery.
              </p>
            </div>

            {/* WhatsApp Backup Button */}
            <div className="space-y-2.5 max-w-md mx-auto">
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-green-brand hover:bg-green-hover text-black-deep font-black text-xs sm:text-sm uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-green-brand/20 cursor-pointer"
              >
                <MessageSquare size={16} strokeWidth={2.5} />
                <span>Send Details to WhatsApp Concierge</span>
              </a>

              <a
                href={BUY_NOW_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-navy-light hover:bg-navy-lighter text-white-off font-bold text-xs py-3 px-4 rounded-xl border border-navy-lighter/40 transition-colors"
              >
                <span>Re-open Checkout Payment Page</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="bg-black-card border border-navy-lighter/35 rounded-2xl sm:rounded-3xl p-4 sm:p-8 space-y-4 sm:space-y-5 shadow-2xl"
          >
            {/* Step 1: Package Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-light mb-2">
                Step 1: Select Your Package
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, quantity: '1' })}
                  className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 ${
                    form.quantity === '1'
                      ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40'
                      : 'border-navy-lighter/30 bg-navy/40 hover:border-navy-lighter/60'
                  }`}
                >
                  <span className="block text-[10px] sm:text-xs text-slate-text font-medium truncate">1 Belt (Solo)</span>
                  <span className="font-heading text-base sm:text-lg font-black text-green-brand block">&#8358;{PRICE_PROMO}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setForm({ ...form, quantity: '2' })}
                  className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 relative ${
                    form.quantity === '2'
                      ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40'
                      : 'border-navy-lighter/30 bg-navy/40 hover:border-navy-lighter/60'
                  }`}
                >
                  <span className="absolute -top-2 right-1.5 sm:right-2 bg-green-brand text-black-deep text-[9px] sm:text-[10px] font-black uppercase px-1.5 py-0.5 rounded shadow-sm">
                    Save ₦4k
                  </span>
                  <span className="block text-[10px] sm:text-xs text-slate-text font-medium truncate">2 Belts (Bestie)</span>
                  <span className="font-heading text-base sm:text-lg font-black text-green-brand block">&#8358;{PRICE_BUNDLE_2}</span>
                </button>
              </div>
            </div>

            {/* Step 2: Preferred Color */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-light mb-2">
                Step 2: Preferred Color
              </label>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {['Pink', 'White'].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setForm({ ...form, color: c })}
                    className={`p-2.5 sm:p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer active:scale-95 text-xs sm:text-sm ${
                      form.color === c
                        ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40 text-green-brand font-bold'
                        : 'border-navy-lighter/30 bg-navy/40 text-slate-light font-medium hover:border-navy-lighter/60'
                    }`}
                  >
                    {c === 'Pink' ? 'Blossom Pink' : 'Pearl White'}
                  </button>
                ))}
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-light mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="e.g. Chioma Adebayo"
                className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-3.5 py-3 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-xs sm:text-sm font-normal"
              />
            </div>

            {/* WhatsApp + Alternative Phone */}
            <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-light mb-1.5">
                  Active WhatsApp Phone *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 08012345678 (receives group link)"
                  className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-3.5 py-3 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-xs sm:text-sm font-normal"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-light mb-1.5">
                  Alternative Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="altPhone"
                  value={form.altPhone}
                  onChange={handleChange}
                  placeholder="e.g. 09087654321"
                  className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-3.5 py-3 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-xs sm:text-sm font-normal"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-light mb-1.5">
                Delivery Street Address *
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="House number, street, area or bus stop"
                className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-3.5 py-3 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-xs sm:text-sm font-normal"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-light mb-1.5">
                Delivery State *
              </label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-3.5 py-3 text-white-off focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-xs sm:text-sm cursor-pointer font-medium"
              >
                {nigerianStates.map((s) => (
                  <option key={s} value={s} className="bg-black-deep text-white-off">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Delivery Note */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-light mb-1.5">
                Delivery Instructions (Optional)
              </label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={2}
                placeholder="Special delivery instructions or gate code"
                className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-3.5 py-2.5 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-xs sm:text-sm resize-none font-normal"
              />
            </div>

            {/* Total Price Banner */}
            <div className="bg-navy/60 border border-navy-lighter/30 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] text-slate-text uppercase tracking-wider block font-bold">Total Promo Price</span>
                <span className="font-heading text-xl sm:text-2xl font-black text-green-brand leading-none">
                  &#8358;{priceTotal}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-light font-medium bg-navy-lighter/25 px-2.5 py-1 rounded w-fit">
                <Users size={13} className="text-green-brand" />
                <span>Includes VIP Delivery Group Tracking</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 bg-green-brand hover:bg-green-hover disabled:opacity-70 text-black-deep font-black text-xs sm:text-base uppercase tracking-wider py-3.5 sm:py-4 rounded-xl transition-all duration-200 active:scale-[0.98] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer"
            >
              {submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Connecting to Checkout...</span>
                </>
              ) : (
                <>
                  <span>Proceed to Pay &#8358;{priceTotal} & Join Group</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            {/* Reassurance text */}
            <p className="text-center text-[10px] sm:text-xs text-slate-text font-normal flex items-center justify-center gap-1.5 pt-0.5">
              <ShieldCheck size={13} className="text-green-brand shrink-0" />
              <span>30% discount valid till {PROMO_EXPIRY_DATE}. Group link sent within 5-10 mins.</span>
            </p>
          </motion.form>
        )}

      </div>
    </section>
  );
}
