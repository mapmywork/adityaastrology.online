import { MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: FaFacebookF, href: '#' },
    { icon: FaInstagram, href: 'https://www.instagram.com/aditya_astrology_07?igsh=bmtwOHd5NDhsOWQ0' },
    { icon: FaYoutube, href: 'https://youtube.com/@adityaastrology07?si=ANHC6bXYuMf-JVw7' },
    // { icon: FaTwitter, href: '#' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Guruji', href: '#about' },
    // { label: 'Zodiac Signs', href: '#zodiac' },
    // { label: 'Poojas & Homas', href: '#poojas' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Terms of Service', href: '#' }
  ];

  const services = [
    { label: 'Vedic Astrology', href: '#services' },
    { label: 'Horoscope Reading', href: '#services' },
    { label: 'Numerology', href: '#services' },
    { label: 'Vastu Consultation', href: '#services' },
    { label: 'Match Making', href: '#services' },
    // { label: 'Poojas & Homas', href: '#poojas' }
  ];

  return (
    <footer className="relative bg-pearl pt-20 border-t border-gold/20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-saffron/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Top ornamental border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-full max-w-7xl px-4 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent w-full opacity-30" />
        <div className="absolute top-0 text-gold text-xs px-2 bg-pearl -mt-[8px]">✦ ✦ ✦</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-text-primary leading-tight tracking-wide">
                  Aditya <span className="text-gradient-gold">Astrology</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted font-body">
                  Vedic Astrology
                </span>
              </div>
            </a>
            
            <p className="text-sm text-text-secondary leading-relaxed font-body">
              Guiding souls through ancient Vedic wisdom, astrology, and spiritual healing for a balanced and prosperous life journey.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-9 h-9 rounded-full bg-white border border-gold/20 flex items-center justify-center text-gold-dark hover:bg-gold hover:text-white hover:border-gold transition-colors duration-300 shadow-sm"
                  >
                    <IconComponent className="text-sm" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-text-secondary hover:text-gold-dark transition-colors font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-text-primary mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-text-secondary hover:text-gold-dark transition-colors font-body"
                  >
                    <span className="text-gold opacity-50 group-hover:opacity-100 transition-opacity text-xs">✦</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-text-primary mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-text-secondary font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Jath Highschool Road,<br />Near Balvidhya Mandir,<br />Daneshwari colany jath,<br />Aditya Astrology office 416404</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+919090230505" className="hover:text-gold-dark transition-colors">
                  +91-9090230505
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-green-600 shrink-0" />
                <a href="https://wa.me/919090230505" className="hover:text-gold-dark transition-colors">
                  +91-9090230505
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:info@adityaastrology.com" className="hover:text-gold-dark transition-colors">
                  info@adityaastrology.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: By Appointment</span>
              </li>
            </ul>
          </div>

        </div>



      </div>

      {/* Copyright */}
      <div className="border-t border-gold/15 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-xs text-text-muted font-body">
              &copy; {currentYear} Aditya Astrology. All Rights Reserved.
            </p>
            <p className="text-xs text-text-muted font-body">
              Designed with devotion and care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
