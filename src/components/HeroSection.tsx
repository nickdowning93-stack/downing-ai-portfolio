"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative pt-24 pb-12 text-center hero-gradient">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: `${15 + i * 15}%`,
              y: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [
                `${20 + (i % 3) * 25}%`,
                `${10 + (i % 3) * 25}%`,
                `${20 + (i % 3) * 25}%`,
              ],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles className="w-5 h-5 text-blue-400 animate-pulse-glow" />
          <span className="text-xs uppercase tracking-[0.3em] text-blue-400/80 font-medium">
            Project Portfolio
          </span>
          <Sparkles className="w-5 h-5 text-purple-400 animate-pulse-glow" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            Downing AI
          </span>
          <br />
          <span className="text-white/90">Builds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-2 px-4"
        >
          A complete portfolio of every project, venture, and creation —
          from enterprise AI platforms to iOS apps to creative writing.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-sm"
        >
          Built by Nick Downing
        </motion.p>
      </div>
    </div>
  );
}
