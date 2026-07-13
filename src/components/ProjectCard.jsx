import React from "react";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onViewDetails }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="flex flex-col rounded-3xl glassmorphism glassmorphism-hover overflow-hidden border border-white/8 transition-all duration-300 h-full hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Project Image Panel */}
      <div className="relative aspect-video overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop";
          }}
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 pointer-events-none group-hover:pointer-events-auto">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-primary hover:text-slate-900 rounded-full text-white transition-all transform hover:scale-110 shadow-lg cursor-pointer hoverable"
              title="View Source Code"
            >
              <FaGithub size={18} />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 hover:bg-accent hover:text-slate-900 rounded-full text-white transition-all transform hover:scale-110 shadow-lg cursor-pointer hoverable"
              title="Live Preview"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </div>
        {/* Featured Tag */}
        {project.featured && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold rounded-full shadow-lg">
            Featured Spotlight
          </span>
        )}
      </div>

      {/* Card Info Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading font-bold text-xl text-text-primary mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 bg-slate-800/80 text-primary text-xs font-medium rounded-md border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons Footer */}
        <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto gap-2">
          <button
            onClick={() => onViewDetails(project)}
            className="flex items-center space-x-1.5 text-xs font-semibold text-text-secondary hover:text-primary transition-colors cursor-pointer hoverable py-1.5 px-3 rounded-lg hover:bg-white/5"
          >
            <FaInfoCircle size={14} />
            <span>View Details</span>
          </button>
          
          <div className="flex space-x-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800/60 hover:bg-slate-800 rounded-lg text-text-secondary hover:text-text-primary transition-all border border-white/5 cursor-pointer hoverable"
                title="GitHub Repository"
              >
                <FaGithub size={16} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800/60 hover:bg-primary/20 hover:text-primary hover:border-primary/20 rounded-lg text-text-secondary transition-all border border-white/5 cursor-pointer hoverable"
                title="Live Demo"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
