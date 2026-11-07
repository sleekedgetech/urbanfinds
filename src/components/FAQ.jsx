import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const faqs = [
  {
    q: 'How does the Menstrual Relief Belt actually work?',
    a: 'It wraps around your lower abdomen like a belt and delivers targeted, steady heat right where the cramps live. Heat relaxes the uterine muscles that cause that deep, gripping pain — so instead of tensing up and pushing through, your body gets to soften and breathe. You wear it, you feel it, you keep moving.',
  },
  {
    q: 'Can I wear it outside — to work, to the market, out and about?',
    a: "Yes, and that's the whole point. It sits flat under your clothes so nobody knows it's there but you. Whether you're sitting in a meeting, standing in a queue, or doing school runs — the relief comes with you. You don't have to choose between your day and your comfort anymore.",
  },
  {
    q: 'Is it safe? I have a sensitive system.',
    a: "Completely. Heat therapy for menstrual cramps is one of the most trusted, drug-free relief methods recommended even by medical professionals. There are no chemicals, no pills, nothing entering your body. Just gentle, controlled warmth. If you have a specific medical condition though, a quick chat with your doctor first never hurts — we'd rather you be sure.",
  },
  {
    q: 'How long does it last? Will I need to buy another one soon?',
    a: "With proper care, it's built to last you through many cycles. That's the whole reason the one-time cost makes sense — you're not restocking every month. Use it, care for it, and it keeps showing up for you the way you show up for everyone else.",
  },
  {
    q: "What if it doesn't work for me?",
    a: "We hear you — and we'd never ask you to take that leap alone. Reach out to us directly and we'll make it right. We're not here to collect your money and disappear. We're here because we genuinely want this to work for you. That's why we offer a 30-day money-back guarantee.",
  },
  {
    q: 'How does Pay on Delivery work?',
    a: "After you place your order, you'll receive a confirmation call within 24 hours. Your package is dispatched and delivered to your doorstep within 24-48 hours (depending on your location). You inspect the package first, and only then pay the courier via cash or bank transfer. Zero risk.",
  },
];

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <div className="border border-navy-lighter/25 rounded-xl overflow-hidden hover:border-navy-lighter/40 transition-colors duration-300">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <span className="text-green-brand font-heading font-bold text-sm shrink-0">
            {String(index + 1).padStart(2, '0')}.
          </span>
          <span className="font-medium text-white-off text-sm sm:text-base">{faq.q}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
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
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-16 text-sm sm:text-base text-slate-text leading-relaxed">
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
    <section ref={ref} className="relative py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-green-brand font-semibold text-sm tracking-widest uppercase mb-3">
            Questions
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            We know you have questions. Let's talk.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-3"
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

