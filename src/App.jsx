import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import BackgroundEffects from "./components/BackgroundEffects";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Research from "./sections/Research";
import Achievements from "./sections/Achievements";
import GithubStats from "./components/GithubStats";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const loadingPhrases = [
    "Compiling system dependencies...",
    "Injecting premium design layout...",
    "Syncing live GitHub metrics...",
    "Polishing micro-interactions...",
    "Welcome to Sourav's Portfolio."
  ];

  useEffect(() => {
    // Cycle loading phrases
    const textInterval = setInterval(() => {
      setLoadingTextIndex((prev) => (prev + 1) % loadingPhrases.length);
    }, 450);

    // Simulate page assets loading
    const timer = setTimeout(() => {
      setLoading(false);
      clearInterval(textInterval);
    }, 2200);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <>
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Loading Overlay */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-[#0F172A]"
          >
            {/* Spinning glowing loaders */}
            <div className="relative flex justify-center items-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-24 h-24 rounded-full border-t-2 border-r-2 border-primary"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute w-20 h-20 rounded-full border-b-2 border-l-2 border-accent"
              />
              <span className="absolute font-heading font-extrabold text-xl text-white tracking-widest text-glow-blue">
                SR
              </span>
            </div>

            {/* Fading text messages */}
            <div className="h-6 overflow-hidden relative w-full text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={loadingTextIndex}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs font-semibold text-text-secondary uppercase tracking-widest"
                >
                  {loadingPhrases[loadingTextIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen text-text-primary"
        >
          {/* Visual Canvas Backdrop */}
          <BackgroundEffects />

          {/* Fixed Sticky Header */}
          <Navbar />

          {/* Section Container */}
          <main className="max-w-7xl mx-auto relative px-4 md:px-0">
            {/* Hero */}
            <Hero />
            <SectionDivider />

            {/* About */}
            <About />
            <SectionDivider />

            {/* Skills */}
            <Skills />
            <SectionDivider />

            {/* Experience */}
            <Experience />
            <SectionDivider />

            {/* Projects & FitFuel Featured */}
            <Projects />
            <SectionDivider />

            {/* Research Review Card */}
            <Research />
            <SectionDivider />

            {/* Achievements Grid */}
            <Achievements />
            <SectionDivider />

            {/* Live GitHub Profile Stats API */}
            <div className="py-12 px-6 md:px-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white inline-block relative">
                    GitHub Contributions
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">Real-time status updates via public repository API</p>
                </div>
                <GithubStats />
              </div>
            </div>
            <SectionDivider />

            {/* Contact Form */}
            <Contact />
          </main>

          {/* Footer block */}
          <Footer />
        </motion.div>
      )}
    </>
  );
}
