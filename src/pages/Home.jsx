import HeroSection from '../components/hero/HeroSection';
import ServicesSection from '../components/services/ServicesSection';
import AboutGuru from '../components/about/AboutGuru';
import ZodiacSection from '../components/astrology/ZodiacSection';
import WhyChooseUs from '../components/services/WhyChooseUs';
import PoojaSection from '../components/poojas/PoojaSection';
import VideoSection from '../components/video/VideoSection';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import BlogSection from '../components/blogs/BlogSection';
import CourseSection from '../components/course/CourseSection';
import ConsultationForm from '../components/contact/ConsultationForm';

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutGuru />
      <CourseSection />
      <ServicesSection />
      {/* <ZodiacSection /> */}
      <WhyChooseUs />
      {/* <PoojaSection /> */}
      <VideoSection />
      <TestimonialSection />
      {/* <BlogSection /> */}
      <ConsultationForm />
    </main>
  );
}
