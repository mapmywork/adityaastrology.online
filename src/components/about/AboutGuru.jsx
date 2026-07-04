import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../../utils/animations';
import guruImage from '../../guru.jpeg';
import guru2Image from '../../guru2.jpeg';

export default function AboutGuru() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-40 left-0 w-80 h-80 bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="flex flex-col gap-12">
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Golden frame */}
                <div className="absolute -inset-4 rounded-full border border-gold/20" />
                <div className="absolute -inset-8 rounded-full border border-gold/10" />

                {/* Main Image */}
                <div className="relative rounded-full overflow-hidden shadow-gold-xl aspect-square z-10">
                  <img
                    src={guruImage}
                    alt="Pro. Sunil Pated (Sunil Sir)"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/30 via-transparent to-gold/5 rounded-full" />
                </div>

                {/* Experience badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 p-5 glass-card-strong shadow-gold-lg z-20"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <p className="text-3xl font-heading font-bold text-gradient-gold">5+</p>
                  <p className="text-xs text-text-muted font-body tracking-wider uppercase">Years of<br />Experience</p>
                </motion.div>
              </div>

              {/* Second Placeholder Image */}
              <div className="relative max-w-sm mx-auto lg:mx-0 mt-8">
                <div className="relative rounded-full overflow-hidden shadow-gold-xl aspect-square border-4 border-ivory z-10">
                  <img
                    src={guru2Image}
                    alt="Second Guru"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>


          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="inline-block px-5 py-2 mb-6 text-sm font-medium tracking-widest uppercase rounded-full bg-gradient-to-r from-gold/10 to-saffron/10 text-gold-dark border border-gold/20 font-body">
              About Our Guru
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-4 leading-tight">
              Pro.{' '}
              <span className="text-gradient-gold whitespace-nowrap">Sunil Pated (Sunil Sir)</span>
            </h2>

            <div className="ornament-divider my-6 justify-start">
              <span className="text-gold text-lg">✦</span>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed mb-6 font-body">
              With over 5 years of devoted study and practice in Vedic astrology, Pro. Sunil Pated (Sunil Sir)
              has illuminated the lives of thousands seeking divine guidance. Rooted in the ancient traditions of
              Jyotish Shastra, his wisdom bridges celestial knowledge with practical life solutions.
            </p>



            {/* Achievements */}
            <div className="space-y-4 mb-10">
              {[
                'Education Background: VAIDIK, BNN, KP, NAVTARA SPECIAL, GEMINI',
                'Gold Medalist in Jyotish Shastra from Kashi Vidyapeeth',
                'Featured on national television for astrological expertise',
                'Author of 3 bestselling books on Vedic astrology',
                'Conducted 10,000+ successful spiritual ceremonies'
              ].map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-gold to-saffron flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </span>
                  <span className="text-text-secondary font-body">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-gold via-saffron to-gold rounded-full shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 font-body"
            >
              Meet Guruji
              <span className="text-lg">→</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
