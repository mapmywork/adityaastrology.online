import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  // { label: 'Zodiac', href: '#zodiac' },
  // { label: 'Poojas', href: '#poojas' },
  { label: 'Course', href: '#course' },
  { label: 'Testimonials', href: '#testimonials' },
  // { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-xl shadow-soft border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-text-primary leading-tight tracking-wide">
                  Aditya <span className="text-gradient-gold">Astrology</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted font-body">
                  Vedic Astrology Centre
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-gold-dark transition-colors duration-300 font-body group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold to-saffron group-hover:w-6 transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919090230505"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 rounded-full transition-colors font-body border border-green-200"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-gold to-saffron hover:from-gold-dark hover:to-gold rounded-full shadow-gold hover:shadow-gold-lg transition-all duration-300 font-body"
              >
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-text-primary hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-brown-dark/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-ivory shadow-elevated border-l border-gold/10 overflow-y-auto"
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-4 py-3 text-lg font-medium text-text-secondary hover:text-gold-dark hover:bg-gold/5 rounded-xl transition-all font-body"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="https://wa.me/919090230505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-green-700 bg-green-50 rounded-xl border border-green-200 font-body"
                  >
                    <FaWhatsapp className="text-lg" />
                    WhatsApp Us
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-gold to-saffron rounded-xl shadow-gold font-body"
                  >
                    <Phone className="w-5 h-5" />
                    Book Consultation
                  </a>
                </div>

                {/* Decorative */}
                <div className="mt-12 text-center">
                  <p className="text-sm text-text-muted font-body">✦ Aditya Astrology ✦</p>
                  <p className="text-xs text-text-muted/70 mt-1 font-body">Vedic Astrology & Spiritual Guidance</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
