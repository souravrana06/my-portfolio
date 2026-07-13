import React from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal content body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl rounded-3xl glassmorphism border border-white/10 overflow-hidden shadow-2xl z-10 max-h-[90svh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 bg-slate-900/60 hover:bg-slate-800 rounded-full text-text-secondary hover:text-text-primary transition-all border border-white/5 cursor-pointer hoverable"
            aria-label="Close modal"
          >
            <FaTimes size={16} />
          </button>

          {/* Scrollable container */}
          <div className="overflow-y-auto flex-grow">
            {/* Project Image Panel */}
            <div className="relative aspect-video w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 md:left-8">
                {project.featured && (
                  <span className="px-3 py-1 bg-primary text-slate-900 text-xs font-bold rounded-full mb-2 inline-block">
                    Spotlight Project
                  </span>
                )}
                <h2 className="font-heading font-extrabold text-2xl md:text-4xl text-white">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Project Specs */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Long description */}
              <div>
                <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                  Overview
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-heading font-semibold text-lg text-secondary mb-2.5">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-primary text-xs font-semibold rounded-md border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features list */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="font-heading font-semibold text-lg text-accent mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => {
                      const [title, desc] = feature.split(":");
                      return (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <FaCheckCircle className="text-accent mt-1 flex-shrink-0" size={14} />
                          <span className="text-text-secondary">
                            <strong className="text-text-primary">{title}:</strong>
                            {desc || ""}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Action buttons footer */}
          <div className="p-6 border-t border-white/8 bg-slate-900/60 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="text-xs text-text-secondary">
              Category Filters: {project.categories.join(", ")}
            </div>
            
            <div className="flex gap-3 w-full sm:w-auto">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow sm:flex-grow-0 flex items-center justify-center space-x-2 py-2 px-5 bg-slate-800 hover:bg-slate-700 text-text-primary hover:text-white rounded-xl text-sm font-semibold border border-white/10 transition-colors cursor-pointer hoverable"
                >
                  <FaGithub size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow sm:flex-grow-0 flex items-center justify-center space-x-2 py-2 px-5 bg-primary hover:bg-primary/80 text-slate-900 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all cursor-pointer hoverable"
                >
                  <FaExternalLinkAlt size={14} />
                  <span>Launch Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
