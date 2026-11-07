import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star, MapPin, BadgeCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const reviews = [
  {
    name: 'Chidinma A.',
    location: 'Lagos',
    text: 'I used to call in sick on the first day of my period. Since I got this belt, I have not missed a single day of work. The heat kicks in almost immediately — it is unreal.',
    rating: 5,
  },
  {
    name: 'Blessing O.',
    location: 'Abuja',
    text: 'I was skeptical at first because I have tried everything. But this actually works. I wore it under my outfit to an event and stayed on my feet the whole time. Nobody even noticed.',
    rating: 5,
  },
  {
    name: 'Amara E.',
    location: 'Port Harcourt',
    text: 'Bought two — one for me, one for my younger sister. She called me happy saying she finally slept through the night without waking up in agony. Best money spent.',
    rating: 5,
  },
  {
    name: 'Funke T.',
    location: 'Ibadan',
    text: 'The vibration massage setting is everything. I use it on level 2 with medium heat and the cramps just soften. Charged it once and it lasted my entire cycle.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} id="reviews" className="relative py-20 sm:py-28 bg-navy/30 scroll-mt-6">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
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
              Verified Feedback
            </span>
            <span className="w-6 h-px bg-green-brand" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white-off">
            Hear From Women Who Made The Switch
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-black-card border border-navy-lighter/30 rounded-2xl p-6 sm:p-7 hover:border-green-brand/35 transition-colors duration-200 shadow-lg"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={15} className="text-green-brand fill-green-brand" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-light text-sm sm:text-base font-normal leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* User Row */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-lighter/20">
                <div className="w-10 h-10 rounded-xl bg-green-brand/10 border border-green-brand/20 flex items-center justify-center">
                  <span className="text-green-brand font-heading font-extrabold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white-off text-sm font-bold flex items-center gap-1.5 font-heading">
                    {review.name}
                    <BadgeCheck size={15} className="text-green-brand" />
                  </p>
                  <p className="text-xs text-slate-text font-normal flex items-center gap-1">
                    <MapPin size={11} />
                    {review.location}, Nigeria
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
