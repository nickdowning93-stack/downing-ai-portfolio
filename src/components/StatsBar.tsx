"use client";

import { motion } from "framer-motion";
import {
  FolderOpen, Rocket, Smartphone, Globe,
} from "lucide-react";
import type { Project } from "@/data/projects";

// Custom Infinity icon component with a cool animated look
function InfinityIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  );
}

interface StatsBarProps {
  projects: Project[];
}

export default function StatsBar({ projects }: StatsBarProps) {
  const totalProjects = projects.length;
  const vercelDeployed = projects.filter((p) => p.platform === "vercel").length;
  const iosApps = projects.filter((p) => p.platform === "ios").length;
  const liveUrls = projects.filter((p) => p.liveUrl).length;
  const fullyAutonomous = projects.filter((p) => p.fullyAutonomous).length;

  const stats = [
    { label: "Total Projects", value: totalProjects, icon: FolderOpen, color: "text-blue-400", customIcon: false },
    { label: "Deployed on Vercel", value: vercelDeployed, icon: Rocket, color: "text-purple-400", customIcon: false },
    { label: "iOS Apps", value: iosApps, icon: Smartphone, color: "text-cyan-400", customIcon: false },
    { label: "Live Sites", value: liveUrls, icon: Globe, color: "text-amber-400", customIcon: false },
    { label: "Fully Autonomous", value: fullyAutonomous, icon: InfinityIcon, color: "text-emerald-400", customIcon: true },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className={`glass-card rounded-xl p-4 text-center group hover:scale-[1.02] ${
            stat.customIcon ? "relative overflow-hidden" : ""
          }`}
        >
          {/* Special glow for Fully Autonomous */}
          {stat.customIcon && (
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
          <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity relative z-10`} />
          <div className={`text-2xl font-bold ${stat.color} relative z-10`}>{stat.value}</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1 relative z-10">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
