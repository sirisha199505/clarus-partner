import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AuroraBackground from "./components/AuroraBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import ITServices from "./sections/ITServices";
import ConsultingServices from "./sections/ConsultingServices";
import WhyChoose from "./sections/WhyChoose";
import PartnershipProcess from "./sections/PartnershipProcess";
import Industries from "./sections/Industries";
import Technologies from "./sections/Technologies";
import Testimonials from "./sections/Testimonials";
import BusinessOpportunities from "./sections/BusinessOpportunities";
import EnquiryForm from "./sections/EnquiryForm";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen antialiased">
      {/* Premium animated aurora backdrop with floating particles */}
      <AuroraBackground />

      <Navbar />
      <main>
        <Hero />
        <About />
        <ITServices />
        <ConsultingServices />
        <WhyChoose />
        <PartnershipProcess />
        <Industries />
        <Technologies />
        <Testimonials />
        <BusinessOpportunities />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
