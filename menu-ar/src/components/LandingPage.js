import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import StepsSection from "./StepsSection";
import BenefitsSection from "./BenefitsSection";
import Why3DMenuSection from "./Why3DMenuSection";

import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ScrollStackSection from "./ScrollStackSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen landing-page">
      <Navbar />
      <div className="pt-16">
        {" "}
        {/* Add padding-top to account for sticky navbar */}
        <HeroSection />
        <StepsSection />
        <ScrollStackSection />
        {/* <Why3DMenuSection />
        <BenefitsSection /> */}
        <FAQSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
