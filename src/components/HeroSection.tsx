"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

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
          className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2 tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
            Nicholas MacLeod Downing&apos;s
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white/90">AI Builds</span>
          <span className="text-gray-500 font-normal mx-3">&amp;</span>
          <span className="text-white/70">Project Portfolio</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-2 px-4"
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
          {projects.length} Projects &amp; Counting
        </motion.p>
      </div>
    </div>
  );
}
