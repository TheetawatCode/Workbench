import Image from "next/image";

import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { AboutSection } from "./components/sections/AboutSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { BlogSection } from "./components/sections/BlogSection";
import { PricingSection } from "./components/sections/PricingSection";
import { ContactSection } from "./components/sections/ContactSection";
import { TestimonialsSection }from "./components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
    </div>
  );
}
