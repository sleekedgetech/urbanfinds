import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star, MapPin, BadgeCheck } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const reviews = [
  {
    name: 'Chidinma A.',
    location: 'Lagos',
    text: 'I used to call in sick on the first day of my period. Since I got this belt, I have not missed a single day of work. The heat kicks in almost immediately — it\'s unreal.',
    rating: 5,
  },
  {
    name: 'Blessing O.',
    location: 'Abuja',
    text: 'I was skeptical at first because I\'ve tried everything. But this actually works. I wore it under my outfit to a wedding and danced the whole night. Nobody even knew.',
    rating: 5,
  },
  {
    name: 'Amara E.',
    location: 'Port Harcourt',
    text: 'Bought two — one for me, one for my younger sister. She called me crying (happy tears) saying she finally slept through the night without cramps. Best money I\'ve spent.',
    rating: 5,
  },
  {
    name: 'Funke T.',
    location: 'Ibadan',
    text: 'The vibration massage setting is everything. I use it on level 2 with medium heat and the cramps just melt away. Charged it once and it lasted my whole period.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="relative py-20 sm:py-28 bg-navy/30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="text-green-brand font-semibold text-sm tracking-widest uppercase mb-3">
            Real Results
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Hear from women who made the switch
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-black-card border border-navy-lighter/25 rounded-xl p-6 hover:border-green-brand/25 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={15} className="text-green-brand fill-green-brand" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-light text-sm sm:text-base leading-relaxed mb-5">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-9 h-9 rounded-full bg-green-brand/10 flex items-center justify-center">
                  <span className="text-green-brand font-heading font-bold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white-off text-sm font-semibold flex items-center gap-1.5">
                    {review.name}
                    <BadgeCheck size={14} className="text-green-brand" />
                  </p>
                  <p className="text-xs text-slate-text flex items-center gap-1">
                    <MapPin size={11} />
                    {review.location}
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

