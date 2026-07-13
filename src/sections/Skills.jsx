import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, FaBrain, FaCloud } from "react-icons/fa";

export default function Skills() {
  const categories = [
    { key: "programming", title: "Programming Languages", icon: <FaCode /> },
    { key: "frontend", title: "Frontend Technologies", icon: <FaLaptopCode /> },
    { key: "backend", title: "Backend Technologies", icon: <FaServer /> },
    { key: "databases", title: "Database Systems", icon: <FaDatabase /> },
    { key: "tools", title: "Development Tools", icon: <FaTools /> },
    { key: "machineLearning", title: "Machine Learning / AI", icon: <FaBrain /> },
    { key: "cloudDevops", title: "Cloud & DevOps", icon: <FaCloud /> },
  ];

  return (
    <section id="skills" className="py-12 relative overflow-hidden">
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
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills
            </span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
              whileHover={{ y: -5, borderColor: "rgba(56, 189, 248, 0.25)" }}
              className="glassmorphism p-6 rounded-3xl border border-white/8 relative overflow-hidden transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Card Header */}
              <div className="flex items-center space-x-3 mb-6 border-b border-white/5 pb-4">
                <span className="p-3 bg-primary/10 rounded-2xl text-primary text-lg">
                  {cat.icon}
                </span>
                <h3 className="font-heading font-bold text-lg text-text-primary">
                  {cat.title}
                </h3>
              </div>

              {/* Progress bars inside card */}
              <div className="space-y-4 flex-grow">
                {skills[cat.key].map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5 text-left">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-text-primary">
                        {skill.name}
                      </span>
                      <span className="font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="h-2 w-full bg-slate-800/80 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
