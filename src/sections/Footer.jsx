import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollContainer = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950/40 py-10 relative overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-secondary/5 blur-[80px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative">
        {/* Logo and signature */}
        <div className="flex items-center space-x-2.5">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-sm text-white shadow-md shadow-primary/20">
            SR
          </span>
          <span className="font-heading font-bold text-base text-text-primary tracking-wide">
            Sourav Rana
          </span>
        </div>

        {/* Navigation list shortcut */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-text-secondary">
          {["home", "about", "skills", "experience", "projects", "research", "achievements", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollContainer(section)}
              className="hover:text-primary transition-colors capitalize cursor-pointer hoverable"
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Social connections & scroll to top */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-900 hover:bg-primary hover:text-slate-900 rounded-lg text-text-secondary border border-white/5 transition-colors cursor-pointer hoverable"
              title="GitHub"
            >
              <FaGithub size={14} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-900 hover:bg-secondary hover:text-white rounded-lg text-text-secondary border border-white/5 transition-colors cursor-pointer hoverable"
              title="LinkedIn"
            >
              <FaLinkedin size={14} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 bg-slate-900 hover:bg-accent hover:text-slate-900 rounded-lg text-text-secondary border border-white/5 transition-colors cursor-pointer hoverable"
              title="Email"
            >
              <FaEnvelope size={14} />
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2.5 bg-primary hover:bg-primary/80 rounded-lg text-slate-900 shadow-md shadow-primary/10 transition-colors cursor-pointer hoverable"
            title="Scroll To Top"
          >
            <FaArrowUp size={12} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-6 pt-6 border-t border-white/5 text-center text-xs text-text-secondary">
        <p>© {currentYear} Sourav Rana. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
