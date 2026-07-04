import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../utils/animations';
import SectionHeader from '../common/SectionHeader';
import { BookOpen, BarChart3, UserCheck, Flame, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Traditional Knowledge',
    description: 'Rooted in authentic Vedic scriptures and ancient Jyotish Shastra traditions passed down through generations.'
  },
  {
    icon: BarChart3,
    title: 'Scientific Analysis',
    description: 'Precise calculations combining traditional wisdom with modern astronomical data for accurate readings.'
  },
  {
    icon: UserCheck,
    title: 'Personalized Guidance',
    description: 'Every consultation is unique — tailored to your birth chart, current planetary transits, and life situation.'
  },
  {
    icon: Flame,
    title: 'Authentic Rituals',
    description: 'All poojas and homas conducted with proper Vedic mantras, sacred materials, and traditional procedures.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Consultations',
    description: 'Over 50,000 satisfied clients across 18+ countries trust our guidance for major life decisions.'
  },
  {
    icon: Sparkles,
    title: 'Spiritual Experience',
    description: 'Beyond predictions — a holistic spiritual journey towards self-awareness, peace, and cosmic harmony.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Us"
          title="Why Choose"
          highlight="Aditya Astrology"
          subtitle="Experience the perfect blend of ancient wisdom and modern expertise for your spiritual journey."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-3xl bg-pearl border border-gold/10 hover:border-gold/25 hover:shadow-gold-lg transition-all duration-500 cursor-pointer"
              >
                {/* Subtle gradient bg on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-saffron/5 to-rose-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/10 to-saffron/15 border border-gold/15 flex items-center justify-center mb-6 group-hover:shadow-gold group-hover:scale-105 transition-all duration-500">
                    <IconComponent className="w-7 h-7 text-gold-dark" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-semibold text-text-primary mb-3 group-hover:text-gold-dark transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed font-body">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
