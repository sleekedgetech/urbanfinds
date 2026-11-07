import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Send, ShieldCheck, Loader2, MessageSquare, CheckCircle, Package } from 'lucide-react';
import { WHATSAPP_SUPPORT_LINK } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const nigerianStates = [
  'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno',
  'Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT Abuja','Gombe',
  'Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos',
  'Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto',
  'Taraba','Yobe','Zamfara',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate real order processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const priceTotal = form.quantity === '2' ? '40,000' : form.quantity === '3' ? '57,000' : '22,500';

  const whatsappMessage = encodeURIComponent(
    `Hello Urban Finds! I just placed an order on the website.\n\n` +
    `📦 Item: Menstrual Cramp Relief Belt\n` +
    `🔢 Quantity: ${form.quantity} Unit(s)\n` +
    `🎨 Color: ${form.color}\n` +
    `💰 Total (COD): ₦${priceTotal}\n` +
    `👤 Name: ${form.fullName}\n` +
    `📍 Address: ${form.address}, ${form.state}\n` +
    `📞 Phone: ${form.whatsapp}\n\n` +
    `Please confirm my delivery dispatch.`
  );

  const customWhatsAppUrl = `https://wa.me/2348000000000?text=${whatsappMessage}`;

  return (
    <section ref={ref} id="order" className="relative py-20 sm:py-28 scroll-mt-6">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-brand/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-brand/10 border border-green-brand/20 rounded-full px-4 py-1.5 mb-3">
            <Package size={14} className="text-green-brand" />
            <span className="text-xs font-semibold text-green-brand uppercase tracking-wider">
              Pay Cash or Transfer on Delivery
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Secure Your Relief Belt
          </h2>
          <p className="text-slate-text text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Fill in your delivery details below. You don't need a card — our courier delivers to your doorstep,
            you inspect your package, and only then do you pay.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black-card border border-green-brand/40 rounded-3xl p-6 sm:p-10 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-full bg-green-brand/10 border border-green-brand/30 flex items-center justify-center mx-auto mb-5 text-green-brand">
              <CheckCircle size={32} />
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white-off mb-2">
              Order Confirmed Successfully!
            </h3>
            
            <p className="text-slate-text text-sm sm:text-base max-w-md mx-auto mb-6">
              Thank you, <strong className="text-white-off">{form.fullName}</strong>. Your order is registered in our fulfillment queue.
            </p>

            {/* Order summary card */}
            <div className="bg-navy/50 border border-navy-lighter/30 rounded-2xl p-4 sm:p-5 text-left mb-6 text-xs sm:text-sm space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-navy-lighter/25 pb-2">
                <span className="text-slate-text">Quantity / Color:</span>
                <span className="text-white-off font-semibold">{form.quantity} Unit(s) ({form.color})</span>
              </div>
              <div className="flex justify-between border-b border-navy-lighter/25 pb-2">
                <span className="text-slate-text">Delivery Destination:</span>
                <span className="text-white-off font-semibold">{form.state}</span>
              </div>
              <div className="flex justify-between pt-1 font-bold">
                <span className="text-slate-light">Amount Due on Delivery:</span>
                <span className="text-green-brand text-base">&#8358;{priceTotal}</span>
              </div>
            </div>

            {/* Immediate WhatsApp Confirmation Button */}
            <div className="space-y-3 max-w-md mx-auto">
              <a
                href={customWhatsAppUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-bold text-base py-4 rounded-xl transition-all duration-200 active:scale-95 shadow-lg shadow-green-brand/20 cursor-pointer"
              >
                <MessageSquare size={18} strokeWidth={2.5} />
                <span>Instant Confirmation on WhatsApp</span>
              </a>
              
              <p className="text-[11px] text-slate-text">
                Tap above to immediately alert our dispatcher and expedite same-day packaging.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="bg-black-card border border-navy-lighter/35 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-5"
          >
            {/* Quantity / Bundle Selection */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-2">
                Step 1: Select Your Package
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, quantity: '1' })}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 ${
                    form.quantity === '1'
                      ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40'
                      : 'border-navy-lighter/30 bg-navy/40 hover:border-navy-lighter/60'
                  }`}
                >
                  <span className="block text-xs text-slate-text">1 Belt</span>
                  <span className="font-heading text-lg font-bold text-green-brand">&#8358;22,500</span>
                </button>

                <button
                  type="button"
                  onClick={() => setForm({ ...form, quantity: '2' })}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer active:scale-95 relative ${
                    form.quantity === '2'
                      ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40'
                      : 'border-navy-lighter/30 bg-navy/40 hover:border-navy-lighter/60'
                  }`}
                >
                  <span className="absolute -top-2 right-2 bg-green-brand text-black-deep text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Save ₦5,000
                  </span>
                  <span className="block text-xs text-slate-text">2 Belts (Sister Pack)</span>
                  <span className="font-heading text-lg font-bold text-green-brand">&#8358;40,000</span>
                </button>
              </div>
            </div>

            {/* Color Preference */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-2">
                Step 2: Preferred Color
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['Pink', 'White'].map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setForm({ ...form, color: c })}
                    className={`p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer active:scale-95 ${
                      form.color === c
                        ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40 text-green-brand font-bold'
                        : 'border-navy-lighter/30 bg-navy/40 text-slate-light hover:border-navy-lighter/60'
                    }`}
                  >
                    {c === 'Pink' ? 'Blossom Pink' : 'Pearl White'}
                  </button>
                ))}
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="e.g. Chioma Adebayo"
                className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-4 py-3.5 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-sm"
              />
            </div>

            {/* WhatsApp + Alt Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-1.5">
                  Active WhatsApp Phone *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 08012345678"
                  className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-4 py-3.5 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-1.5">
                  Alternative Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="altPhone"
                  value={form.altPhone}
                  onChange={handleChange}
                  placeholder="e.g. 09087654321"
                  className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-4 py-3.5 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-sm"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-1.5">
                Full Delivery Street Address *
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="House number, street name, bus stop or closest landmark"
                className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-4 py-3.5 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-sm"
              />
            </div>

            {/* State */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-1.5">
                Delivery State *
              </label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-4 py-3.5 text-white-off focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-sm cursor-pointer"
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
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-light mb-1.5">
                Special Delivery Notes (Optional)
              </label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={2}
                placeholder="Preferred delivery time, office reception instructions, etc."
                className="w-full bg-navy/40 border border-navy-lighter/40 rounded-xl px-4 py-3.5 text-white-off placeholder:text-navy-lighter focus:outline-none focus:border-green-brand focus:ring-1 focus:ring-green-brand/40 transition-colors text-sm resize-none"
              />
            </div>

            {/* Total Due Banner */}
            <div className="bg-navy/60 border border-navy-lighter/30 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-text uppercase tracking-wider block font-medium">Total to Pay Upon Delivery</span>
                <span className="font-heading text-2xl font-bold text-green-brand">&#8358;{priceTotal}</span>
              </div>
              <span className="text-xs text-slate-light bg-navy-lighter/30 px-3 py-1.5 rounded-lg">
                Free Nationwide Shipping Included
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-3 bg-green-brand hover:bg-green-hover disabled:opacity-70 text-black-deep font-bold text-base sm:text-lg py-4 sm:py-4.5 rounded-xl transition-all duration-200 active:scale-[0.98] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer"
            >
              {submitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  <span>Processing Your Dispatch Order...</span>
                </>
              ) : (
                <>
                  <Send size={18} strokeWidth={2.5} />
                  <span>Complete Order — Pay &#8358;{priceTotal} On Delivery</span>
                </>
              )}
            </button>

            {/* Reassurance text */}
            <p className="text-center text-xs text-slate-text flex items-center justify-center gap-2 pt-1">
              <ShieldCheck size={14} className="text-green-brand shrink-0" />
              <span>Zero card required. Inspect your item before paying. 30-day money-back guarantee.</span>
            </p>
          </motion.form>
        )}

      </div>
    </section>
  );
}
