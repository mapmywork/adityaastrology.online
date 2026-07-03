import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../../utils/animations';
import { blogData } from '../../data/blogData';
import SectionHeader from '../common/SectionHeader';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-pearl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-40 left-0 w-64 h-64 bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Wisdom Blog"
          title="Insights &"
          highlight="Ancient Wisdom"
          subtitle="Explore our collection of articles on Vedic astrology, spiritual practices, and celestial wisdom."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogData.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-gold/10 hover:border-gold/20 shadow-soft hover:shadow-gold-lg transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/30 to-transparent" />

                {/* Category */}
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-ivory/90 backdrop-blur-sm border border-gold/20 shadow-sm">
                  <span className="text-xs font-medium text-gold-dark font-body tracking-wide">{post.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-text-muted font-body mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-semibold text-text-primary mb-3 leading-snug group-hover:text-gold-dark transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-text-secondary leading-relaxed font-body mb-4">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-2 text-sm font-medium text-gold-dark font-body group-hover:gap-3 transition-all duration-300">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
