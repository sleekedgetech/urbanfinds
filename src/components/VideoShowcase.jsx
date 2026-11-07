import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Play, Pause, Volume2, VolumeX, CreditCard, MapPin, Users, CheckCircle2, ChevronRight, ShieldCheck } from 'lucide-react';
import { BUY_NOW_LINK, PRICE_PROMO, PROMO_EXPIRY_DATE } from '../config/links';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function VideoShowcase() {
  const [ref, inView] = useInView();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const steps = [
    {
      step: '01',
      icon: CreditCard,
      title: '1. Secure Instant Payment',
      desc: `Complete your payment at the special 30% discount rate of ₦${PRICE_PROMO} (offer valid till ${PROMO_EXPIRY_DATE}).`,
    },
    {
      step: '02',
      icon: MapPin,
      title: '2. Fill Details & Address',
      desc: 'Input your recipient name, active WhatsApp phone number, and delivery street address for our dispatch team.',
    },
    {
      step: '03',
      icon: Users,
      title: '3. VIP Delivery Group Access',
      desc: 'Wait 5–10 minutes after payment to receive your private access link to the Delivery & Support Group for live updates till arrival.',
    },
  ];

  return (
    <section ref={ref} id="video-demo" className="relative py-16 sm:py-28 overflow-hidden bg-navy/20 scroll-mt-6">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-brand/[0.04] blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <span className="w-6 h-px bg-green-brand" />
            <span className="text-green-brand font-bold text-xs tracking-widest uppercase">
              Live Demonstration
            </span>
            <span className="w-6 h-px bg-green-brand" />
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 text-white-off">
            See How The Relief Belt Works
          </h2>
          <p className="text-slate-text text-xs sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Watch the real physical unit in action — instant thermal therapy, pulsed massage, and discreet ergonomic fit.
          </p>
        </motion.div>

        {/* Video Player + Protocol Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Mobile-Optimized Video Player (7 cols) */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="lg:col-span-7 flex flex-col items-center"
          >
            {/* Mobile-optimized size: max-h-[480px] on mobile to prevent excessive scrolling */}
            <div className="relative w-full max-w-[340px] sm:max-w-md lg:max-w-lg aspect-[9/16] sm:aspect-[4/5] max-h-[500px] rounded-3xl overflow-hidden bg-black-card border border-navy-lighter/40 shadow-2xl shadow-black/80">
              
              {/* Backlight */}
              <div className="absolute inset-0 bg-green-brand/10 rounded-3xl blur-[50px] pointer-events-none" />

              <video
                ref={videoRef}
                src="/assets/urbanvid.mp4"
                playsInline
                autoPlay
                loop
                muted
                preload="metadata"
                className="w-full h-full object-cover rounded-3xl"
              />

              {/* Video Controls Overlay */}
              <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 flex items-center justify-between bg-black-deep/85 backdrop-blur-md border border-navy-lighter/30 rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3">
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-green-brand flex items-center justify-center text-black-deep cursor-pointer active:scale-95 transition-transform"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
                  </button>
                  <span className="text-[11px] sm:text-xs font-bold text-white-off uppercase tracking-wider">
                    {isPlaying ? 'Playing Demo' : 'Paused'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-navy-light/60 border border-navy-lighter/40 flex items-center justify-center text-slate-light hover:text-white-off cursor-pointer active:scale-95 transition-all"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
              </div>

              {/* Top Badge */}
              <div className="absolute top-3 left-3 bg-black-deep/90 border border-navy-lighter/40 rounded-md px-2.5 py-1 text-[11px] font-semibold text-green-brand tracking-wide flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-brand animate-pulse" />
                Live Belt Preview
              </div>
            </div>
          </motion.div>

          {/* Right: How Ordering & Delivery Works (5 cols) */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <ShieldCheck size={16} className="text-green-brand" />
                <span className="text-xs font-bold text-green-brand uppercase tracking-widest">
                  Transparent Delivery Model
                </span>
              </div>
              <h3 className="font-heading text-xl sm:text-3xl font-black text-white-off mb-2 leading-snug">
                How Your Order Arrives At Your Door
              </h3>
              <p className="text-xs sm:text-sm text-slate-text font-normal leading-relaxed mb-4">
                We believe in full transparency and zero guesswork. Here is the exact 3-step process from payment to unboxing:
              </p>
            </div>

            {/* 3 Steps */}
            <div className="space-y-3 sm:space-y-3.5">
              {steps.map((st) => {
                const Icon = st.icon;
                return (
                  <div
                    key={st.step}
                    className="bg-black-card border border-navy-lighter/35 rounded-2xl p-4 sm:p-5 hover:border-green-brand/40 transition-colors shadow-lg"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-green-brand/10 border border-green-brand/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={18} className="text-green-brand" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold text-green-brand uppercase tracking-wider block mb-0.5">
                          Step {st.step}
                        </span>
                        <h4 className="font-heading text-sm sm:text-base font-bold text-white-off mb-0.5">
                          {st.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-text font-normal leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Reassurance Callout */}
            <div className="p-3.5 bg-navy/40 border border-navy-lighter/30 rounded-2xl flex items-center gap-2.5 text-xs text-slate-light font-medium">
              <CheckCircle2 size={16} className="text-green-brand shrink-0" />
              <span>
                Constant dispatch tracking and direct support inside the VIP group until delivery.
              </span>
            </div>

            {/* Direct Button */}
            <div className="pt-2">
              <a
                href={BUY_NOW_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full group inline-flex items-center justify-center gap-2.5 bg-green-brand hover:bg-green-hover text-black-deep font-black text-xs sm:text-sm uppercase tracking-wider py-4 px-6 rounded-xl transition-all duration-200 active:scale-[0.97] animate-glow shadow-xl shadow-green-brand/20 cursor-pointer"
              >
                <span>Pay &#8358;{PRICE_PROMO} & Secure Your Order</span>
                <ChevronRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-center text-[11px] text-slate-text mt-2 font-medium">
                30% Promo discount valid till {PROMO_EXPIRY_DATE} only.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
