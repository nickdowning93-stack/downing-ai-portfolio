"use client";

import { motion } from "framer-motion";
import {
  FolderOpen, Rocket, Code2, Smartphone, Globe,
} from "lucide-react";
import type { Project } from "@/data/projects";

interface StatsBarProps {
  projects: Project[];
}

export default function StatsBar({ projects }: StatsBarProps) {
  const totalProjects = projects.length;
  const vercelDeployed = projects.filter((p) => p.platform === "vercel").length;
  const iosApps = projects.filter((p) => p.platform === "ios").length;
  const avgCompletion = Math.round(
    projects.reduce((sum, p) => sum + p.completion, 0) / totalProjects
  );
  const liveUrls = projects.filter((p) => p.liveUrl).length;

  const stats = [
    { label: "Total Projects", value: totalProjects, icon: FolderOpen, color: "text-blue-400" },
    { label: "Deployed on Vercel", value: vercelDeployed, icon: Rocket, color: "text-purple-400" },
    { label: "iOS Apps", value: iosApps, icon: Smartphone, color: "text-cyan-400" },
    { label: "Avg Completion", value: `${avgCompletion}%`, icon: Code2, color: "text-emerald-400" },
    { label: "Live Sites", value: liveUrls, icon: Globe, color: "text-amber-400" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-card rounded-xl p-4 text-center group hover:scale-[1.02]"
        >
          <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity`} />
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
