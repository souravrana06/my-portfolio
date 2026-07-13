import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-16 md:py-24 relative overflow-hidden pointer-events-none select-none">
      {/* Centered glowing point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
      
      {/* Animated divider line */}
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "80%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent relative"
      >
        {/* Sparkle effect on the line */}
        <motion.div
          animate={{
            left: ["0%", "100%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[1px] w-20 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      </motion.div>
    </div>
  );
}
