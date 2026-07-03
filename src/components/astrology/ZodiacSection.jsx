import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { zodiacData } from '../../data/zodiacData';
import SectionHeader from '../common/SectionHeader';

export default function ZodiacSection() {
  return (
    <section id="zodiac" className="relative py-24 lg:py-32 bg-pearl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-celestial-purple/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-radial from-saffron/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Celestial Signs"
          title="Explore the"
          highlight="12 Zodiac Signs"
          subtitle="Each zodiac sign carries a unique cosmic energy that shapes your personality, destiny, and spiritual path. Discover yours."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {zodiacData.map((sign) => (
            <motion.div
              key={sign.id}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative glass-card p-6 text-center cursor-pointer hover:shadow-gold-lg transition-shadow duration-500"
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${sign.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Symbol */}
                <motion.div
                  className="text-5xl mb-3 text-gold/70 group-hover:text-gold transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {sign.symbol}
                </motion.div>

                {/* Name */}
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-0.5 group-hover:text-gold-dark transition-colors">
                  {sign.name}
                </h3>
                <p className="text-xs font-accent text-gold-dark/70 italic mb-1">{sign.nameHi}</p>

                {/* Dates */}
                <p className="text-xs text-text-muted font-body mb-3">{sign.dates}</p>

                {/* Element badge */}
                <span className="inline-block px-3 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full bg-gold/8 text-gold-dark border border-gold/10 font-body mb-3">
                  {sign.element}
                </span>

                {/* Description - shown on hover */}
                <p className="text-xs text-text-secondary leading-relaxed font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-2">
                  {sign.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
