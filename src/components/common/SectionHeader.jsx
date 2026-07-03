import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

export default function SectionHeader({ badge, title, subtitle, highlight, center = true, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-5 py-2 mb-5 text-sm font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold/10 to-saffron/10 text-gold-dark border border-gold/20 font-body">
          {badge}
        </span>
      )}

      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-5 ${light ? 'text-ivory' : 'text-text-primary'}`}>
        {title}{' '}
        {highlight && (
          <span className="text-gradient-gold">{highlight}</span>
        )}
      </h2>

      <div className="ornament-divider my-5">
        <span className="text-gold text-xl">✦</span>
      </div>

      {subtitle && (
        <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${light ? 'text-cream/80' : 'text-text-secondary'} font-body`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
