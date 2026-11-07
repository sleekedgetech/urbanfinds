import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Flame, Activity, ShieldCheck, BatteryCharging, Zap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const heatModes = [
  {
    temp: '50°C',
    level: 'Gentle Warmth',
    desc: 'Ideal for early morning stiffness, mild discomfort, or soothing lower back ache.',
  },
  {
    temp: '55°C',
    level: 'Deep Therapy',
    desc: 'Targeted warmth for peak flow days. Relaxes deep uterine contractions within minutes.',
  },
  {
    temp: '60°C',
    level: 'Intense Relief',
    desc: 'Maximum clinical-grade thermal penetration for severe dysmenorrhea and sharp spasms.',
  },
];

const vibrationModes = [
  { id: 1, name: 'Low Continuous', desc: 'Subtle wave to relax tense abdominal muscles.' },
  { id: 2, name: 'Pulse Rhythm', desc: 'Intermittent taps that disrupt nerve pain signaling.' },
  { id: 3, name: 'Deep Massage', desc: 'Higher frequency for persistent lower-belly pressure.' },
  { id: 4, name: 'Smart Cycle', desc: 'Dynamic alternating waves for complete pain relief.' },
];

export default function ProductShowcase() {
  const [ref, inView] = useInView();
  const [selectedHeat, setSelectedHeat] = useState(1); // 55°C default
  const [selectedVibe, setSelectedVibe] = useState(2); // Pulse Rhythm default

  return (
    <section ref={ref} id="interactive-demo" className="relative py-20 sm:py-28 overflow-hidden bg-navy/20">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green-brand/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Zap size={15} className="text-green-brand" />
            <span className="text-xs font-bold text-green-brand uppercase tracking-widest">
              Smart Technology
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Engineered for Precision Thermal Comfort
          </h2>
          <p className="text-slate-text text-base sm:text-lg font-normal">
            Tap below to preview how the smart console adapts to your pain level in real-time.
          </p>
        </motion.div>

        {/* Interactive Showcase Box */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="grid lg:grid-cols-12 gap-8 items-center bg-black-card border border-navy-lighter/35 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl"
        >
          {/* Left Column: Visual Belt + Simulated LED Console */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Belt Image Frame (Generous, uncompacted display) */}
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-navy/40 border border-navy-lighter/30 flex items-center justify-center p-4 sm:p-6">
              <img
                src="/assets/electric_heating_belt.jpg"
                alt="Urban Finds Heating Belt"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />

              {/* Simulated LED Digital Display Overlay */}
              <div className="absolute bottom-5 inset-x-5 bg-black-deep/95 border border-green-brand/40 rounded-xl p-3.5 backdrop-blur-md shadow-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-brand/10 border border-green-brand/30 flex items-center justify-center">
                    <Flame size={20} className="text-green-brand animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-text uppercase tracking-widest block font-bold">Readout</span>
                    <span className="font-heading text-2xl font-black text-green-brand tracking-wider font-mono">
                      {heatModes[selectedHeat].temp}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="flex items-center justify-end gap-1.5 mb-1">
                    <Activity size={14} className="text-green-brand" />
                    <span className="text-xs font-bold text-white-off uppercase tracking-wide">
                      M{selectedVibe} Active
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    {[1, 2, 3, 4].map((bar) => (
                      <span
                        key={bar}
                        className={`w-1.5 h-3 rounded-sm transition-all duration-300 ${
                          bar <= selectedVibe ? 'bg-green-brand shadow-sm shadow-green-brand' : 'bg-navy-lighter/40'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro status indicator */}
            <div className="flex items-center gap-4 mt-4 text-xs font-medium text-slate-text">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-brand" />
                Active Thermal Sensing
              </span>
              <span>•</span>
              <span>NTC Anti-Scald Protection</span>
            </div>
          </div>

          {/* Right Column: Tactile Control Buttons */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Heat Controls */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-wider font-bold text-slate-light flex items-center gap-2">
                  <Flame size={15} className="text-green-brand" />
                  Temperature Setting
                </label>
                <span className="text-xs text-green-brand font-bold uppercase tracking-wider">
                  {heatModes[selectedHeat].level}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {heatModes.map((mode, idx) => (
                  <button
                    key={mode.temp}
                    type="button"
                    onClick={() => setSelectedHeat(idx)}
                    className={`p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer active:scale-95 ${
                      selectedHeat === idx
                        ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40 shadow-lg shadow-green-brand/10'
                        : 'border-navy-lighter/30 bg-navy/40 hover:border-navy-lighter/60 text-slate-light'
                    }`}
                  >
                    <div className="font-heading text-lg sm:text-xl font-extrabold text-white-off mb-0.5">
                      {mode.temp}
                    </div>
                    <div className={`text-[11px] font-semibold truncate ${selectedHeat === idx ? 'text-green-brand' : 'text-slate-text'}`}>
                      {mode.level}
                    </div>
                  </button>
                ))}
              </div>

              {/* Dynamic explanation card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHeat}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 text-xs sm:text-sm text-slate-text bg-navy/30 border border-navy-lighter/25 rounded-xl p-3.5"
                >
                  <strong className="text-white-off font-bold">{heatModes[selectedHeat].level}: </strong>
                  <span className="font-normal">{heatModes[selectedHeat].desc}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Vibration Massage Controls */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-wider font-bold text-slate-light flex items-center gap-2">
                  <Activity size={15} className="text-green-brand" />
                  Massage Frequency
                </label>
                <span className="text-xs text-green-brand font-bold uppercase tracking-wider">
                  Mode {selectedVibe} of 4
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {vibrationModes.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVibe(v.id)}
                    className={`p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer active:scale-95 ${
                      selectedVibe === v.id
                        ? 'border-green-brand bg-green-brand/10 ring-1 ring-green-brand/40 shadow-md shadow-green-brand/10'
                        : 'border-navy-lighter/30 bg-navy/40 hover:border-navy-lighter/60 text-slate-light'
                    }`}
                  >
                    <div className="font-heading text-sm font-bold text-white-off">
                      Mode {v.id}
                    </div>
                    <div className={`text-[10px] font-medium truncate ${selectedVibe === v.id ? 'text-green-brand' : 'text-slate-text'}`}>
                      {v.name.split(' ')[0]}
                    </div>
                  </button>
                ))}
              </div>

              <p className="mt-2.5 text-xs text-slate-text font-normal">
                {vibrationModes[selectedVibe - 1].desc}
              </p>
            </div>

            {/* Quick Specs List */}
            <div className="pt-4 border-t border-navy-lighter/25 grid grid-cols-2 gap-3 text-xs text-slate-light font-medium">
              <div className="flex items-center gap-2">
                <BatteryCharging size={16} className="text-green-brand shrink-0" />
                <span>USB-C Fast Charging</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-green-brand shrink-0" />
                <span>Auto-Shutoff Protection</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 Feature Pillars Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12"
        >
          {[
            {
              step: '01',
              title: '3-Second Rapid Heat',
              desc: 'Graphene thermal core reaches therapeutic warmth in 3 seconds flat, bypassing slow digestive absorption.',
            },
            {
              step: '02',
              title: 'Multi-Frequency Massage',
              desc: 'Four acoustic vibrational modes gently relax the uterine wall muscles and alleviate lower back spasms.',
            },
            {
              step: '03',
              title: 'Invisible 3mm Profile',
              desc: 'Sits completely flat under corporate dresses, jeans, or native attire. Wear it to work with zero bulk.',
            },
            {
              step: '04',
              title: 'Zero Re-Stocking Cost',
              desc: 'Rechargeable lithium battery lasts multiple cycles. Say goodbye to spending over ₦28,275 every single year on disposables.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-navy/40 border border-navy-lighter/30 rounded-2xl p-6 hover:border-green-brand/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-brand/10 border border-green-brand/20 flex items-center justify-center mb-4 group-hover:bg-green-brand/20 transition-colors">
                <span className="text-green-brand font-heading font-extrabold text-sm">
                  {item.step}
                </span>
              </div>
              <h3 className="font-heading font-bold text-white-off text-base mb-2 group-hover:text-green-brand transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-text font-normal leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
