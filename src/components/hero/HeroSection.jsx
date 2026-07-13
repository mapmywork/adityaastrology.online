import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../../utils/animations';
import { Calendar, ShoppingBag, Sparkles } from 'lucide-react';
import FloatingElements from './FloatingElements';
import zodiacWheel from '../../1.jpeg';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-ivory pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-saffron/10 via-gold/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #C5A55A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-saffron/10 to-gold/10 border border-gold/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold-dark" />
              <span className="text-sm font-medium text-gold-dark tracking-wide font-body">
                Trusted astrology consultations, remedies and spiritual shopping
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] text-text-primary mb-6"
            >
              Discover Your Destiny with <br className="hidden lg:block" />
              <span className="text-gradient-gold">Aditya Astrology</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl font-body"
            >
              Authentic astrology guidance, gemstone remedies and spiritual solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6"
            >
              <a
                href="#contact"
                className="group flex items-center gap-3 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-gold via-saffron to-gold rounded-full shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 font-body"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
              </a>
              <a 
                href="https://www.lifechangingastro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 text-base font-medium text-text-primary bg-pearl hover:bg-gold/5 rounded-full shadow-soft hover:shadow-card border border-gold/20 transition-all duration-300 font-body"
              >
                <ShoppingBag className="w-5 h-5 text-gold group-hover:text-gold-dark transition-colors" />
                Shop Products | Life Changing Astro
                <span className="text-xl leading-none group-hover:translate-x-1 transition-transform ml-1">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Circular Astrology Image */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] mx-auto mb-12 lg:mb-0"
          >
            {/* Decorative rotating border */}
            <motion.div
              className="absolute -inset-6 rounded-full border-2 border-dashed border-gold/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -inset-10 rounded-full border border-gold/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gold/5 rounded-full blur-2xl" />

            <motion.img 
              src={zodiacWheel} 
              alt="Vedic Astrology Wheel" 
              className="w-full h-full object-cover rounded-full relative z-10 shadow-gold-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
