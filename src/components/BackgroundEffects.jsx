import React, { useEffect, useState } from "react";
import { FaReact, FaJava, FaJs, FaPython, FaDatabase, FaAws, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set up tech badges that float in the background
  const techBadges = [
    { icon: <FaReact className="text-primary text-4xl" />, top: "15%", left: "10%", delay: "0s" },
    { icon: <FaJs className="text-yellow-400 text-3xl" />, top: "25%", left: "85%", delay: "2s" },
    { icon: <FaJava className="text-red-500 text-4xl" />, top: "60%", left: "8%", delay: "1s" },
    { icon: <FaPython className="text-blue-400 text-4xl" />, top: "80%", left: "82%", delay: "3s" },
    { icon: <SiTailwindcss className="text-cyan-400 text-3xl" />, top: "45%", left: "90%", delay: "1.5s" },
    { icon: <SiMongodb className="text-green-500 text-4xl" />, top: "75%", left: "12%", delay: "2.5s" },
    { icon: <FaDocker className="text-blue-500 text-3xl" />, top: "35%", left: "5%", delay: "0.5s" },
    { icon: <FaAws className="text-orange-400 text-3xl" />, top: "12%", left: "78%", delay: "3.5s" },
  ];

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none mesh-gradient-bg">
      {/* Interactive Mouse follow glow effect */}
      {windowWidth > 768 && (
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/5 blur-[120px] transition-transform duration-300 pointer-events-none"
          style={{
            transform: `translate3d(${mousePosition.x - 300}px, ${mousePosition.y - 300}px, 0)`,
          }}
        />
      )}

      {/* Aurora blur blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px] animate-float-slow" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/8 blur-[150px] animate-float-delayed" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] animate-float-slow" />

      {/* Floating Technology Badges */}
      {windowWidth > 1024 && (
        <div className="absolute inset-0 select-none opacity-20">
          {techBadges.map((badge, idx) => (
            <div
              key={idx}
              className="absolute pointer-events-none transition-all duration-1000 p-3 rounded-2xl glassmorphism flex items-center justify-center animate-bounce"
              style={{
                top: badge.top,
                left: badge.left,
                animationDuration: "6s",
                animationDelay: badge.delay,
              }}
            >
              {badge.icon}
            </div>
          ))}
        </div>
      )}

      {/* Background Particles Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#0f172a_100%)] opacity-30" />
      
      {/* Decorative vertical grid lines (very subtle) */}
      <div className="absolute inset-0 flex justify-between px-10 md:px-20 lg:px-40 pointer-events-none opacity-5">
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
      </div>
    </div>
  );
}
