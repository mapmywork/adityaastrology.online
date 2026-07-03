import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeLeft, fadeRight } from '../../utils/animations';
import SectionHeader from '../common/SectionHeader';
import { Send, User, Phone, Calendar, Clock, MapPin, MessageSquare, Sparkles } from 'lucide-react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build WhatsApp message
    const text = `🙏 New Consultation Request\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n📅 Birth Date: ${formData.birthDate}\n🕐 Birth Time: ${formData.birthTime}\n📍 Birth Place: ${formData.birthPlace}\n🔮 Service: ${formData.service}\n💬 Message: ${formData.message}`;
    window.open(`https://wa.me/919090230505?text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputClasses = "w-full px-5 py-3.5 rounded-2xl bg-ivory/80 border border-gold/15 text-text-primary placeholder:text-text-muted/60 font-body text-sm focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all duration-300";

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-saffron/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Book Your"
          highlight="Consultation"
          subtitle="Take the first step towards clarity and divine guidance. Fill in your details and we'll connect with you shortly."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card-strong p-8">
              <h3 className="text-xl font-heading font-semibold text-text-primary mb-4">
                Why Consult With Us?
              </h3>
              <div className="space-y-4">
                {[
                  'Personalized Vedic chart analysis',
                  'Accurate planetary transit predictions',
                  'Tailored remedies & solutions',
                  'Confidential & compassionate guidance',
                  'Follow-up support included'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-gold to-saffron flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px]">✓</span>
                    </span>
                    <span className="text-sm text-text-secondary font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="glass-card-strong p-8">
              <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
                Direct Contact
              </h3>
              <div className="space-y-3 text-sm font-body text-text-secondary">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>+91-9090230505</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span>Jath Highschool Road,<br/>Near Balvidhya Mandir,<br/>Daneshwari colany jath,<br/>Aditya Astrology office 416404</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card-strong p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-saffron flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary">Consultation Form</h3>
                  <p className="text-xs text-text-muted font-body">All fields are important for accurate reading</p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} pl-11`}
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`${inputClasses} pl-11`}
                    />
                  </div>
                </div>

                {/* Birth Date & Time */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40" />
                    <input
                      type="date"
                      name="birthDate"
                      placeholder="Birth Date"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className={`${inputClasses} pl-11`}
                    />
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40" />
                    <input
                      type="time"
                      name="birthTime"
                      placeholder="Birth Time"
                      value={formData.birthTime}
                      onChange={handleChange}
                      className={`${inputClasses} pl-11`}
                    />
                  </div>
                </div>

                {/* Birth Place */}
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted/40" />
                  <input
                    type="text"
                    name="birthPlace"
                    placeholder="Birth Place (City, State)"
                    value={formData.birthPlace}
                    onChange={handleChange}
                    className={`${inputClasses} pl-11`}
                  />
                </div>

                {/* Service */}
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Service</option>
                  <option value="vedic-astrology">Vedic Astrology</option>
                  <option value="horoscope">Horoscope Reading</option>
                  <option value="numerology">Numerology</option>
                  <option value="palm-reading">Palm Reading</option>
                  <option value="vastu">Vastu Consultation</option>
                  <option value="match-making">Match Making</option>
                  <option value="career">Career Guidance</option>
                  <option value="marriage">Marriage Consultation</option>
                  <option value="health">Health Prediction</option>
                  <option value="business">Business Astrology</option>
                  <option value="gemstone">Gemstone Consultation</option>
                  <option value="healing">Spiritual Healing</option>
                  <option value="pooja">Pooja / Homa</option>
                </select>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-text-muted/40" />
                  <textarea
                    name="message"
                    placeholder="Describe your concern or question..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClasses} pl-11 resize-none`}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-gold via-saffron to-gold rounded-2xl shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 font-body cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </motion.button>

                <p className="text-xs text-text-muted text-center font-body">
                  Your information is kept confidential and used only for consultation purposes.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
