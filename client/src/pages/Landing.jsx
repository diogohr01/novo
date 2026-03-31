import Navbar from '../sections/Navbar';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SopeSection from '../sections/SopeSection';
import ResponsiveSection from '../sections/ResponsiveSection';
import SystemShowcaseSection from '../sections/SystemShowcaseSection';
import BenefitsSection from '../sections/BenefitsSection';
import EntrepreneurSection from '../sections/EntrepreneurSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';
import ContactSection from '../sections/ContactSection';
import Footer from '../sections/Footer';
import WhatsAppFab from '../components/WhatsAppFab';
import { colors, fontFamily } from '../theme';

export default function Landing() {
  return (
    <div style={{ backgroundColor: colors.black, color: colors.white, fontFamily, minHeight: '100vh' }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SopeSection />
        <ResponsiveSection />
        <SystemShowcaseSection />
        <BenefitsSection />
        <EntrepreneurSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
