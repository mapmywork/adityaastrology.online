import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
// Import the uploaded videos
import video127 from '../../127.mp4';
import video129 from '../../129.mp4';

const VideoSection = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 bg-ivory transition-opacity duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading text-gradient-gold mb-4">
            Spiritual Guidance & Insights
          </h2>
          <div className="ornament-divider mb-6"></div>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Watch our latest discourses, astrology forecasts, and spiritual guidance to enlighten your path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Video 1 */}
          <div className="glass-card overflow-hidden rounded-2xl border border-glass-border shadow-soft group transition-transform duration-500 hover:-translate-y-2">
            <div className="relative aspect-[4/5] bg-cream flex-grow h-full">
              <video 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                controls
                playsInline
                preload="metadata"
                src={video127}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video 2 */}
          <div className="glass-card overflow-hidden rounded-2xl border border-glass-border shadow-soft group transition-transform duration-500 hover:-translate-y-2">
            <div className="relative aspect-[4/5] bg-cream flex-grow h-full">
              <video 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                controls
                playsInline
                preload="metadata"
                src={video129}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
