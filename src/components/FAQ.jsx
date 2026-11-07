import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const faqs = [
  {
    q: 'How does the Menstrual Relief Belt actually work?',
    a: 'It wraps around your lower abdomen like an ergonomic belt and delivers targeted, steady graphene warmth right where the cramps live. Controlled heat relaxes uterine muscle contractions that cause gripping pain — so instead of tensing up and fighting through the day, your body softens and breathes. You wear it, you feel relief within minutes, you keep moving.',
  },
  {
    q: 'Can I wear it outside — to work, to the market, out and about?',
    a: "Yes, and that is the entire design purpose. It sits completely flat under your clothes with an ultra-thin 3mm profile so nobody knows it is there but you. Whether you are leading a meeting, driving in traffic, or running errands — the relief stays with you.",
  },
  {
    q: 'Is it safe? I have a sensitive system.',
    a: "Completely. Far-infrared thermal therapy for menstrual cramps is a trusted, 100% drug-free method backed by physiotherapists and gynecologists worldwide. There are no chemicals, no pills, and nothing entering your bloodstream. It features smart NTC temperature control to prevent overheating.",
  },
  {
    q: 'How long does it last? Will I need to buy another one soon?',
    a: "With standard care, it is engineered to last through years of menstrual cycles. That is why the one-time cost of ₦22,500 makes financial sense — you are not restocking expensive pads, patches, or pain pills every single month.",
  },
  {
    q: "What if it does not work for me?",
    a: "We back every single belt with a 30-Day Zero-Risk Guarantee. If you use it and do not feel genuine cramp relief, reach out to our team directly on WhatsApp or phone for an immediate resolution or refund. We are here for the long run.",
  },
  {
    q: 'How does Pay on Delivery work?',
    a: "After you submit your order form, our team calls or messages you to confirm your address. We dispatch your package via priority insured courier. When the delivery rider arrives at your doorstep, you inspect the box first, and only then do you pay via cash or bank transfer.",
  },
];

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <div className="border border-navy-lighter/30 bg-black-card rounded-2xl overflow-hidden hover:border-green-brand/30 transition-colors duration-200 shadow-md">
      <button
        type="button"
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <span className="text-green-brand font-heading font-extrabold text-sm shrink-0">
            {String(index + 1).padStart(2, '0')}.
          </span>
          <span className="font-heading font-bold text-white-off text-sm sm:text-base leading-snug">
            {faq.q}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown size={18} className="text-slate-text" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-14 text-sm sm:text-base text-slate-text font-normal leading-relaxed border-t border-navy-lighter/20 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [ref, inView] = useInView();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section ref={ref} id="faq" className="relative py-20 sm:py-28 scroll-mt-6">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        
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
              Frequently Asked Questions
            </span>
            <span className="w-6 h-px bg-green-brand" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white-off">
            We Know You Have Questions.
          </h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-3.5"
        >
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp}>
              <FAQItem
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
