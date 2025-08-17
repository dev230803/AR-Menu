import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import StepsSection from "./StepsSection";
import BenefitsSection from "./BenefitsSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Add padding-top to account for sticky navbar */}
        <HeroSection />
        <StepsSection />
        <BenefitsSection />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
