import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import FeatureSection from "./FeatureSection";
import Workflow from "./Workflow";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import About from "./About";
import Events from "./Events";
import ExecutiveBoard from "./ExecutiveBoard";
import Pastevents from "./Pastevents";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      
      {/* Sections with proper IDs */}
      <section id="events" className="min-h-screen"><Events /></section>
      <section id="about" className="min-h-screen"><About /></section>
      <section id="executive-board" className="min-h-screen"><ExecutiveBoard /></section>
      <section id="past-events" className="min-h-screen"><Pastevents /></section>
      <section id="feature-section" className="min-h-screen"><FeatureSection /></section>
      <section id="testimonials" className="min-h-screen"><Testimonials /></section>

      <Footer />
    </div>
  );
};

export default Home;
