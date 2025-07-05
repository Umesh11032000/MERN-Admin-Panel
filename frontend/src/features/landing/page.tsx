import { Header } from "./components/header.tsx";
import { Hero } from "./components/hero.tsx";
import { Features } from "./components/features.tsx";
import { HowItWorks } from "./components/how-it-works.tsx";
import { Testimonials } from "./components/testimonials.tsx";
import { CallToAction } from "./components/call-to-action.tsx";
import { Footer } from "./components/footer.tsx";
import "./components/landing-animations.css";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
} 