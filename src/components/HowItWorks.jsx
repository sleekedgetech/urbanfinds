import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Thermometer, Vibrate, EyeOff, BatteryCharging } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const steps = [
  {
    icon: Thermometer,
    title: 'Wrap & Power On',
    desc: 'Secure the elastic belt around your lower abdomen. One touch instantly initiates the graphene heating core.',
  },
  {
    icon: Vibrate,
    title: 'Set Relief Mode',
    desc: 'Choose from 3 thermal levels (50°C, 55°C, 60°C) and 4 pulsed vibrational massage frequencies.',
  },
  {
    icon: EyeOff,
    title: 'Wear It Anywhere',
    desc: 'The ultra-slim 3mm profile sits flat under all clothing. Seamlessly discreet for meetings or commuting.',
  },
  {
    icon: BatteryCharging,
    title: 'Recharge & Repeat',
    desc: 'Rapid USB-C recharging in under 2 hours. One belt supports you through years of cycles with zero re-purchasing.',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} id="how-it-works" className="relative py-20 sm:py-28 bg-navy/30 scroll-mt-6">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-px bg-green-brand" />
            <span className="text-green-brand font-bold text-xs tracking-widest uppercase">
              The Mechanism
            </span>
            <span className="w-6 h-px bg-green-brand" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white-off">
            Relief in 4 Simple Steps
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative group"
              >
                {/* Horizontal connector line on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-28px)] h-px bg-navy-lighter/35" />
                )}

                <div className="bg-black-card border border-navy-lighter/30 rounded-2xl p-6 text-center hover:border-green-brand/40 transition-all duration-300 group-hover:-translate-y-1 shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-green-brand/10 border border-green-brand/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-brand/20 transition-colors">
                    <Icon size={24} className="text-green-brand" />
                  </div>
                  <span className="text-[11px] text-green-brand font-bold uppercase tracking-widest block mb-1">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-heading font-bold text-white-off text-lg mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-text font-normal leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
