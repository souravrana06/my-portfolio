import React from "react";
import { FaBriefcase, FaCalendarAlt, FaDotCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-12 relative overflow-hidden">
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
            Work{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.h2>
        </div>

        {/* Timeline container */}
        <div className="max-w-3xl mx-auto relative border-l-2 border-white/10 pl-6 md:pl-10 space-y-12 text-left">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline marker node */}
              <span className="absolute -left-[35px] md:-left-[51px] top-1.5 p-1 bg-slate-900 border-2 border-primary rounded-full text-primary z-10 shadow-lg shadow-primary/30">
                <FaDotCircle className="text-xs animate-ping absolute" />
                <FaDotCircle className="text-xs" />
              </span>

              {/* Experience Card */}
              <div className="glassmorphism p-6 md:p-8 rounded-3xl border border-white/8 relative overflow-hidden hover:border-primary/20 transition-all duration-300 shadow-xl group">
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-secondary/5 blur-[60px] pointer-events-none" />

                {/* Card Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/5 pb-4 mb-4 gap-2">
                  <div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-text-primary group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-accent mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-white/5 rounded-full text-xs text-text-secondary font-medium border border-white/5 w-fit">
                    <FaCalendarAlt size={11} className="text-primary" />
                    <span>{exp.duration}</span>
                  </span>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-text-primary uppercase tracking-widest flex items-center space-x-1.5">
                    <FaBriefcase className="text-secondary" size={12} />
                    <span>Key Learning & Achievements</span>
                  </h4>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start space-x-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
