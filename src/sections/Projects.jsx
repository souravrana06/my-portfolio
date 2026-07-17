import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { FaGithub, FaExternalLinkAlt, FaStar, FaFilter } from "react-icons/fa";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Get featured project (FitFuel Planner)
  const featuredProject = projects.find((p) => p.featured) || projects[0];

  // Filter options
  const filterOptions = ["All", "Full Stack", "Machine Learning", "JavaScript", "React", "AI"];

  // Filtered projects list (excluding the spotlight inside the grid if desired, or displaying all. Displaying all with filters is usually cleaner)
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

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
              Projects
            </span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.h2>
        </div>

        {/* 1. SPOTLIGHT FEATURED PROJECT (FitFuel Planner) */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glassmorphism rounded-3xl border border-white/10 overflow-hidden relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-center">

              {/* Image Showcase - 5 cols */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300" />
              </div>

              {/* Text Info - 7 cols */}
              <div className="lg:col-span-7 text-left space-y-5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider">
                  <FaStar size={11} />
                  <span>Featured Project Spotlight</span>
                </div>

                <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
                  {featuredProject.title}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed">
                  {featuredProject.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1 bg-slate-800 text-primary text-xs font-bold rounded-lg border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features Highlights */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-3">
                    Spotlight Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-text-secondary">
                    {featuredProject.features.slice(0, 4).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{feat.split(":")[0]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-3 border-t border-white/5">
                  <button
                    onClick={() => setSelectedProject(featuredProject)}
                    className="py-2.5 px-6 bg-slate-800 hover:bg-slate-700 text-text-primary rounded-xl text-sm font-semibold border border-white/8 transition-all cursor-pointer hoverable"
                  >
                    View Full Details
                  </button>
                  {featuredProject.githubLink && (
                    <a
                      href={featuredProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 py-2.5 px-5 bg-slate-900/60 hover:bg-slate-900 border border-white/10 rounded-xl text-sm font-semibold text-text-secondary hover:text-text-primary transition-all cursor-pointer hoverable"
                    >
                      <FaGithub size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {featuredProject.liveLink && (
                    <a
                      href={featuredProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 py-2.5 px-5 bg-primary hover:bg-primary/80 rounded-xl text-sm font-bold text-slate-900 shadow-lg shadow-primary/20 transition-all cursor-pointer hoverable"
                    >
                      <FaExternalLinkAlt size={13} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

              </div>

            </div>
          </motion.div>
        </div>

        {/* 2. FILTERABLE PROJECTS GRID */}
        <div>
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h3 className="font-heading font-bold text-2xl text-text-primary flex items-center space-x-2">
              <FaFilter size={16} className="text-secondary" />
              <span>Featured Projects & Technical Work</span>
            </h3>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setActiveFilter(opt)}
                  className={`py-1.5 px-4 rounded-xl text-xs font-semibold border transition-all cursor-pointer hoverable ${activeFilter === opt
                      ? "bg-secondary/15 text-secondary border-secondary/35 shadow-md shadow-secondary/5"
                      : "bg-slate-800/40 text-text-secondary border-white/5 hover:text-text-primary hover:bg-slate-800/80"
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ProjectCard
                    project={project}
                    onViewDetails={setSelectedProject}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>

      {/* Details View Modal popup */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
