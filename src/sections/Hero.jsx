import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowRight, FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-svh flex items-center justify-center pt-24 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Side Content Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          {/* Greeting Tag */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Welcome to my space
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-5xl md:text-7xl leading-tight text-white"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent text-glow-blue">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Typewriter role switcher */}
          <motion.div variants={itemVariants} className="h-12 flex items-center">
            <span className="text-text-secondary text-lg md:text-2xl mr-2 font-medium">I am a</span>
            <div className="overflow-hidden relative h-full flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="font-heading text-lg md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                >
                  {personalInfo.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl"
          >
            {personalInfo.introduction}
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-center space-x-2 py-3.5 px-7 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all cursor-pointer hoverable"
            >
              <span>View Projects</span>
              <FaArrowRight size={14} />
            </button>

            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center space-x-2 py-3.5 px-7 bg-slate-800/80 hover:bg-slate-800 text-text-primary hover:text-white font-semibold rounded-2xl border border-white/10 hover:border-white/20 transition-all cursor-pointer hoverable"
            >
              <FaDownload size={14} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center space-x-2 py-3.5 px-7 bg-transparent hover:bg-white/5 text-text-secondary hover:text-text-primary font-semibold rounded-2xl border border-white/5 transition-all cursor-pointer hoverable"
            >
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Social connections */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 pt-6 border-t border-white/5 w-fit"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-slate-900/60 hover:bg-primary hover:text-slate-900 rounded-xl text-text-secondary transition-all border border-white/8 cursor-pointer hoverable"
              title="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-slate-900/60 hover:bg-secondary hover:text-white rounded-xl text-text-secondary transition-all border border-white/8 cursor-pointer hoverable"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3.5 bg-slate-900/60 hover:bg-accent hover:text-slate-900 rounded-xl text-text-secondary transition-all border border-white/8 cursor-pointer hoverable"
              title="Send Email"
            >
              <FaEnvelope size={18} />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="p-3.5 bg-slate-900/60 hover:bg-slate-800 hover:text-text-primary rounded-xl text-text-secondary transition-all border border-white/8 cursor-pointer hoverable"
              title="Call Phone"
            >
              <FaPhone size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Visual Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Animated background shape outline */}
          <div className="absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-20 blur-[50px] animate-pulse" />

          {/* Premium Profile Shape Frame */}
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-3xl overflow-hidden glassmorphism border-2 border-white/15 p-4 flex items-center justify-center hover:border-primary/45 transition-colors duration-500 shadow-2xl hover:shadow-primary/15 group">

            {/* Corner glowing nodes */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-secondary rounded-tr-xl" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-xl" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-xl" />

            {/* Profile Avatar content */}
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950/60 border border-white/5 relative flex items-center justify-center">
              <img
                src="src/assets/SouravPhoto(Uniform).jpg"
                alt="Sourav Rana"
                className="w-full h-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop";
                }}
              />

              {/* Overlay shading gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
