import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { servicesData } from '../../data/servicesData';
import SectionHeader from '../common/SectionHeader';

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-pearl overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-radial from-saffron/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-radial from-rose-gold/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Expertise"
          title="Our Professional"
          highlight="Astrology Services"
          subtitle="Discover our comprehensive range of Vedic astrology and spiritual services, each crafted with ancient wisdom and delivered with modern precision."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative glass-card p-6 flex flex-col justify-between transition-shadow duration-500 hover:shadow-gold-lg h-full"
              >
                {/* Hover golden border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-gold/30" />

                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top: Badge and Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1.5 text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-full bg-gradient-to-r from-gold/10 to-saffron/10 text-gold-dark border border-gold/20 font-body">
                      {service.badge}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-pearl border border-gold/20 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-saffron transition-all duration-300 shadow-sm shrink-0 ml-4">
                      <IconComponent className="w-4 h-4 text-gold-dark group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-3 group-hover:text-gold-dark transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-body mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary font-body leading-relaxed">
                        <span className="mt-1 w-4 h-4 rounded-full border border-gold/50 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                          <span className="text-[10px] text-gold">✓</span>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom: Price and Button */}
                  <div className="flex items-center justify-between pt-5 border-t border-gold/15 mt-auto">
                    <div>
                      <p className="text-[10px] text-text-muted font-body uppercase tracking-widest mb-1">Starting From</p>
                      <p className="text-xl font-heading font-bold text-text-primary">{service.price}</p>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-gold to-saffron rounded-full shadow-gold group-hover:shadow-gold-lg hover:from-gold-dark hover:to-gold transition-all duration-300 font-body"
                    >
                      Book Now <span className="text-lg leading-none">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
