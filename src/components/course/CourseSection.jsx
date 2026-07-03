import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../utils/animations';
import { BookOpen, Sparkles, Home, Star, ArrowRight } from 'lucide-react';

const subjects = [
  {
    id: 1,
    title: 'Astrology',
    description: 'Master the ancient science of reading planetary movements and their profound impact on human life.',
    icon: Star,
    color: 'from-saffron/20 to-gold/10'
  },
  {
    id: 2,
    title: 'Numerology',
    description: 'Unlock the mystical language of numbers to reveal hidden patterns, destiny, and personality traits.',
    icon: Sparkles,
    color: 'from-rose-gold/20 to-saffron/10'
  },
  {
    id: 3,
    title: 'Vastu Shastra',
    description: 'Learn the architectural science of harmonizing living spaces with natural elements and cosmic energies.',
    icon: Home,
    color: 'from-gold/20 to-cream/30'
  }
];

export default function CourseSection() {
  return (
    <section id="course" className="relative py-24 lg:py-32 bg-pearl overflow-hidden border-t border-gold/10">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-saffron/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-gold/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full bg-gold/10 text-gold-dark border border-gold/20"
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase font-body">Learn With Us</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight"
          >
            Professional <span className="text-gradient-gold">Astrology Course</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary font-body leading-relaxed"
          >
            Unlock the secrets of the cosmos! Join our comprehensive course led by Pro. Sunil Pated and master the divine sciences.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {subjects.map((subject) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.id}
                variants={fadeUp}
                className="group relative glass-card p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-gold-lg border border-gold/20 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-saffron shadow-sm transition-all duration-500">
                    <Icon className="w-8 h-8 text-gold-dark group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-3">
                    {subject.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-body">
                    {subject.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <a
            href="https://wa.me/919090230505?text=Hello%2C%20I%20am%20interested%20in%20the%20Professional%20Astrology%20Course."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-gold via-saffron to-gold rounded-full shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 font-body"
          >
            Click to Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
