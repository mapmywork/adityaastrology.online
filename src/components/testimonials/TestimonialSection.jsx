import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';
import { testimonialData } from '../../data/testimonialData';
import SectionHeader from '../common/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-radial from-saffron/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-rose-gold/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Client Love"
          title="What Our Clients"
          highlight="Say About Us"
          subtitle="Thousands have found clarity and peace through our Vedic guidance. Here are their heartfelt experiences."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="group glass-card-strong p-8 h-full hover:shadow-gold-lg transition-shadow duration-500">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-gold/20 mb-4 group-hover:text-gold/40 transition-colors" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-saffron text-saffron" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-body italic">
                    "{testimonial.text}"
                  </p>

                  {/* Service tag */}
                  <span className="inline-block px-3 py-1 text-[10px] font-medium tracking-wider uppercase rounded-full bg-gold/8 text-gold-dark border border-gold/10 font-body mb-5">
                    {testimonial.service}
                  </span>

                  {/* Client info */}
                  <div className="flex items-center gap-4 pt-5 border-t border-gold/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
                    />
                    <div>
                      <p className="text-sm font-heading font-semibold text-text-primary">{testimonial.name}</p>
                      <p className="text-xs text-text-muted font-body">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
