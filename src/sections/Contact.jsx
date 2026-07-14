import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    setStatus("sending");

    // EmailJS configurations
    // Read from environment variables if present
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_placeholder";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_placeholder";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "key_placeholder";

    if (serviceId === "service_placeholder" || publicKey === "key_placeholder") {
      // Mock successful email submission if not configured yet (perfect for demo/recruiter preview)
      setTimeout(() => {
        setStatus("success");
        setStatusMessage("Message sent successfully (Demo Mode)! Thank you for reaching out.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1500);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          setStatus("success");
          setStatusMessage("Your message has been sent successfully! I will get back to you shortly.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
          setStatusMessage("Something went wrong. Please try emailing me directly at sourav8739@gmail.com.");
        }
      );
  };

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
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
            Contact{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Me
            </span>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-[3px] bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">

          {/* Left Panel: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left"
          >
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-2xl text-text-primary">
                Let's Build Something Great Together
              </h3>

              <p className="text-text-secondary text-base leading-relaxed">
                Whether you want to discuss full-time roles, internship positions, collaborations, hackathons, or just want to connect, feel free to drop a message.
              </p>
            </div>

            {/* Info Cards List */}
            <div className="space-y-4">
              <div className="glassmorphism p-5 rounded-2xl border border-white/5 flex items-center space-x-4">
                <span className="p-3.5 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <FaEnvelope size={18} />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider">Email Me</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-text-primary font-semibold hover:text-primary transition-colors text-sm md:text-base hoverable">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="glassmorphism p-5 rounded-2xl border border-white/5 flex items-center space-x-4">
                <span className="p-3.5 bg-secondary/10 rounded-xl text-secondary flex-shrink-0">
                  <FaPhoneAlt size={16} />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider">Call / WhatsApp</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-text-primary font-semibold hover:text-secondary transition-colors text-sm md:text-base hoverable">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="glassmorphism p-5 rounded-2xl border border-white/5 flex items-center space-x-4">
                <span className="p-3.5 bg-accent/10 rounded-xl text-accent flex-shrink-0">
                  <FaMapMarkerAlt size={18} />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider">Location</h4>
                  <p className="text-text-primary font-semibold text-sm md:text-base">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social handles links */}
            <div className="flex space-x-3 pt-4 border-t border-white/5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-primary hover:text-slate-900 rounded-xl text-text-secondary transition-all border border-white/5 cursor-pointer hoverable"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-secondary hover:text-white rounded-xl text-text-secondary transition-all border border-white/5 cursor-pointer hoverable"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

          </motion.div>

          {/* Right Panel: Form inputs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glassmorphism p-6 md:p-8 rounded-3xl border border-white/8 space-y-5 text-left h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h3 className="font-heading font-bold text-xl text-text-primary border-b border-white/5 pb-3">
                  Send A Secure Message
                </h3>

                {/* Name */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-xs font-bold text-text-secondary uppercase tracking-wide">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-primary/50 focus:bg-slate-900 transition-all hoverable"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-xs font-bold text-text-secondary uppercase tracking-wide">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-primary/50 focus:bg-slate-900 transition-all hoverable"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="subject" className="text-xs font-bold text-text-secondary uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Discussing opportunities, collaborations, etc."
                    className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-primary/50 focus:bg-slate-900 transition-all hoverable"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-text-secondary uppercase tracking-wide">
                    Message Body <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your details here..."
                    className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-primary/50 focus:bg-slate-900 transition-all resize-none hoverable"
                  />
                </div>
              </div>

              {/* Status Alert Banner */}
              {status !== "idle" && (
                <div
                  className={`p-3.5 rounded-xl text-xs font-semibold ${status === "sending"
                      ? "bg-slate-800 text-primary border border-primary/20"
                      : status === "success"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/25"
                        : "bg-red-500/10 text-red-400 border border-red-500/25"
                    }`}
                >
                  {status === "sending" ? "Dispatching server request..." : statusMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-all cursor-pointer hoverable ${status === "sending"
                    ? "bg-slate-800 text-text-secondary border border-white/5 cursor-not-allowed"
                    : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-primary/25 hover:scale-[1.01]"
                  }`}
              >
                <FaPaperPlane size={13} />
                <span>{status === "sending" ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
