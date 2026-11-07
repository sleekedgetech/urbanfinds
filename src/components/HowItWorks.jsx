import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Thermometer, Vibrate, EyeOff, BatteryCharging } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const steps = [
  {
    icon: Thermometer,
    title: 'Wrap & Power On',
    desc: 'Secure the belt around your lower abdomen. One button activates the graphene heating core.',
  },
  {
    icon: Vibrate,
    title: 'Choose Your Relief Mode',
    desc: 'Select from 3 heat levels (50, 55, 60 degrees) and 4 vibration massage speeds.',
  },
  {
    icon: EyeOff,
    title: 'Wear It Anywhere',
    desc: 'The 3mm profile sits flat under any clothing. Nobody knows — only you feel the relief.',
  },
  {
    icon: BatteryCharging,
    title: 'Recharge & Repeat',
    desc: 'USB-C charges in under 2 hours. One belt lasts through years of cycles — not just one.',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} id="how-it-works" className="relative py-20 sm:py-28 bg-navy/30 scroll-mt-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="text-green-brand font-semibold text-sm tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Relief in 4 simple steps
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
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
                {/* Connector line (hidden on mobile, hidden on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-px bg-navy-lighter/50" />
                )}

                <div className="bg-black-card border border-navy-lighter/25 rounded-xl p-6 text-center hover:border-green-brand/30 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-green-brand/10 border border-green-brand/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-green-brand/20 transition-colors">
                    <Icon size={24} className="text-green-brand" />
                  </div>
                  <p className="text-xs text-slate-text uppercase tracking-widest mb-2 font-medium">
                    Step {i + 1}
                  </p>
                  <h3 className="font-heading font-bold text-white-off mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-text leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

