import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { poojaData } from '../../data/poojaData';
import SectionHeader from '../common/SectionHeader';
import { Clock, IndianRupee } from 'lucide-react';

export default function PoojaSection() {
  return (
    <section id="poojas" className="relative py-24 lg:py-32 bg-pearl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-radial from-saffron/8 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-radial from-rose-gold/6 to-transparent rounded-full blur-3xl" />

      {/* Temple-inspired top border */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <div className="flex gap-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-3 h-6 bg-gradient-to-b from-gold/20 to-transparent rounded-b-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Sacred Rituals"
          title="Poojas &"
          highlight="Homa Ceremonies"
          subtitle="Experience divine blessings through authentic Vedic rituals conducted with sacred mantras and traditional procedures."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {poojaData.map((pooja) => (
            <motion.div
              key={pooja.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden bg-pearl border border-gold/10 hover:border-gold/25 shadow-soft hover:shadow-gold-lg transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <motion.img
                  src={pooja.image}
                  alt={pooja.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/50 via-transparent to-gold/5" />

                {/* Price tag */}
                <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-ivory/90 backdrop-blur-sm border border-gold/20 shadow-gold">
                  <span className="text-sm font-heading font-bold text-gold-dark">{pooja.price}</span>
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory/80 backdrop-blur-sm text-xs font-body text-text-secondary border border-gold/10">
                  <Clock className="w-3 h-3" />
                  {pooja.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-text-primary mb-2 group-hover:text-gold-dark transition-colors">
                  {pooja.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed font-body mb-4">
                  {pooja.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-saffron transition-colors font-body"
                >
                  Book Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
