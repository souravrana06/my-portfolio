import React from "react";
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";
import { motion } from "framer-motion";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  const getIcon = (title) => {
    if (title.includes("1st")) return <FaTrophy className="text-yellow-400 text-3xl" />;
    if (title.includes("3rd")) return <FaMedal className="text-amber-600 text-3xl" />;
    return <FaAward className="text-accent text-3xl" />;
  };

  return (
    <section id="achievements" className="py-12 relative overflow-hidden">
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
            Key{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements
            </span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.3)" }}
              className="glassmorphism p-6 md:p-8 rounded-3xl border border-white/8 relative overflow-hidden flex flex-col justify-between text-left transition-all duration-300 hover:shadow-xl hover:shadow-secondary/5 group"
            >
              {/* Sparkle background shade */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-secondary/5 blur-[50px] pointer-events-none" />

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3.5 bg-slate-900/60 rounded-2xl border border-white/5 flex items-center justify-center">
                    {getIcon(ach.title)}
                  </div>
                  <span className="text-xs font-bold text-text-secondary px-3 py-1 bg-white/5 rounded-full border border-white/5">
                    {ach.year}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-heading font-extrabold text-xl text-text-primary group-hover:text-primary transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-sm font-semibold text-accent">
                    {ach.subtitle}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {ach.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
