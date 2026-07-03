import HeroSection from '../components/hero/HeroSection';
import ServicesSection from '../components/services/ServicesSection';
import AboutGuru from '../components/about/AboutGuru';
import ZodiacSection from '../components/astrology/ZodiacSection';
import WhyChooseUs from '../components/services/WhyChooseUs';
import PoojaSection from '../components/poojas/PoojaSection';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import BlogSection from '../components/blogs/BlogSection';
import CourseSection from '../components/course/CourseSection';
import ConsultationForm from '../components/contact/ConsultationForm';

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutGuru />
      <ServicesSection />
      {/* <ZodiacSection /> */}
      <WhyChooseUs />
      {/* <PoojaSection /> */}
      <TestimonialSection />
      <CourseSection />
      {/* <BlogSection /> */}
      <ConsultationForm />
    </main>
  );
}
