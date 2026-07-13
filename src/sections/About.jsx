import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaAward, FaBook, FaCheckDouble } from "react-icons/fa";
import { motion } from "framer-motion";
import { quickStats, education } from "../data/portfolioData";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

  return (
    <section id="about" className="py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading font-extrabold text-3xl md:text-5xl text-white inline-block relative"
          >
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Me
            </span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Bio & Stats Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="font-heading font-bold text-2xl text-text-primary">
                My Story & Ambitions
              </h3>
              <p className="text-text-secondary text-base leading-relaxed">
                Enthusiastic Computer Science student with practical experience in full-stack web development using React, Node.js, MongoDB, and MySQL.
              </p>
              <p className="text-text-secondary text-base leading-relaxed">
                Passionate about developing innovative software solutions, solving computational challenges, and continuously learning modern technologies to bridge the gap between ideas and executable applications.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {quickStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.4)" }}
                  className="glassmorphism p-5 rounded-2xl border border-white/5 text-center flex flex-col justify-center items-center h-28 relative group"
                >
                  <span className="text-3xl font-extrabold font-heading text-glow-blue bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </span>
                  <span className="text-xs text-text-secondary font-medium tracking-wide mt-2">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <h3 className="font-heading font-bold text-2xl text-text-primary">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="glassmorphism p-6 rounded-3xl border border-white/8 relative overflow-hidden group hover:border-primary/20 transition-all duration-300"
                >
                  {/* Glowing tag decoration */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-secondary" />

                  <div className="flex justify-between items-start mb-3">
                    <span className="p-3 bg-primary/10 rounded-2xl text-primary">
                      <FaGraduationCap size={20} />
                    </span>
                    <span className="inline-flex items-center space-x-1 px-3 py-1 bg-white/5 rounded-full text-xs text-text-secondary font-medium border border-white/5">
                      <FaCalendarAlt size={11} />
                      <span>{edu.duration}</span>
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-accent mb-2">
                    {edu.field}
                  </p>
                  <p className="text-sm text-text-secondary font-medium mb-4">
                    {edu.institution}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-text-secondary">Academic Standing</span>
                    <span className="text-sm font-bold text-text-primary px-3 py-1 rounded-lg bg-slate-800 border border-white/5">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
