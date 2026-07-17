import React from "react";
import { FaBookOpen, FaBrain, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { research } from "../data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="py-12 relative overflow-hidden">
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
            Research{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Publications
            </span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.h2>
        </div>

        {/* Publication Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -5, borderColor: "rgba(20, 184, 166, 0.3)" }}
            className="glassmorphism p-6 md:p-10 rounded-3xl border border-white/8 relative overflow-hidden text-left hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300"
          >
            {/* Glowing accent spot */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-accent/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-primary/5 blur-[60px] pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-6 md:items-start">
              {/* Publication Icon Block */}
              <div className="p-4 bg-accent/10 text-accent rounded-2xl w-fit flex-shrink-0">
                <FaBrain className="text-4xl md:text-5xl animate-pulse" />
              </div>

              {/* Main Content details */}
              <div className="space-y-4 flex-grow">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-bold text-accent tracking-wide uppercase">
                    <FaFileAlt size={10} />
                    <span>Review Paper</span>
                  </span>

                  <span className="inline-flex items-center px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-xs font-bold text-yellow-500 tracking-wide uppercase">
                    Status: {research.status}
                  </span>

                  <span className="inline-flex items-center px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs font-bold text-green-500 tracking-wide uppercase">
                    Presented & Publication in Progress
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-xl md:text-2xl text-text-primary leading-snug">
                  {research.title}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed">
                  {research.description}
                </p>

                {/* Key Research Domains */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-800 text-xs font-medium rounded-md text-text-secondary border border-white/5">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-xs font-medium rounded-md text-text-secondary border border-white/5">
                    Deep Learning
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-xs font-medium rounded-md text-text-secondary border border-white/5">
                    EEG Signals
                  </span>
                  <span className="px-3 py-1 bg-slate-800 text-xs font-medium rounded-md text-text-secondary border border-white/5">
                    Alzheimer's & Depression Detection
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
