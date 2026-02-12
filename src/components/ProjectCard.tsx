"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, FileBarChart, Building, Home, Factory, Handshake,
  ClipboardList, Users, Plane, Database, Globe, Archive,
  Shield, ShieldCheck, FileText, Lightbulb, Map, Share2,
  Link, Flame, Bot, Wand2, Mail, Bell, Target, Code,
  Trophy, Medal, ScrollText, BookOpen, Feather, TreePine,
  Briefcase, Gauge, FolderTree, Monitor, Truck, PlaneTakeoff,
  ExternalLink, Calendar, Clock, Activity,
} from "lucide-react";
import type { Project } from "@/data/projects";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, FileBarChart, Building, Home, Factory, Handshake,
  ClipboardList, Users, Plane, Database, Globe, Archive,
  Shield, ShieldCheck, FileText, Lightbulb, Map, Share2,
  Link, Flame, Bot, Wand2, Mail, Bell, Target, Code,
  Trophy, Medal, ScrollText, BookOpen, Feather, TreePine,
  Briefcase, Gauge, FolderTree, Monitor, Truck, PlaneTakeoff,
};

const platformLabels: Record<string, { label: string; className: string }> = {
  vercel: { label: "Vercel", className: "bg-black/40 border border-white/15 text-white" },
  ios: { label: "iOS / Xcode", className: "bg-blue-500/15 border border-blue-500/30 text-blue-400" },
  netlify: { label: "Netlify", className: "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400" },
  local: { label: "Local Dev", className: "bg-white/5 border border-white/10 text-gray-400" },
  markdown: { label: "Documentation", className: "bg-yellow-500/10 border border-yellow-500/20 text-yellow-400" },
};

function getCompletionColor(pct: number) {
  if (pct >= 80) return "from-emerald-500 to-green-400";
  if (pct >= 50) return "from-blue-500 to-cyan-400";
  if (pct >= 25) return "from-amber-500 to-yellow-400";
  return "from-red-500 to-orange-400";
}

function getCompletionLabel(pct: number) {
  if (pct >= 90) return "Nearly Complete";
  if (pct >= 70) return "Advanced";
  if (pct >= 50) return "In Progress";
  if (pct >= 25) return "Early Stage";
  return "Just Started";
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function daysSince(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  const now = new Date();
  return Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[project.icon] || Code;
  const platform = platformLabels[project.platform];
  const daysAgo = daysSince(project.lastUpdated);
  const isRecent = daysAgo <= 7;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Glow effect behind card */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
      />

      <div className="glass-card relative rounded-2xl p-5 h-full flex flex-col cursor-pointer overflow-hidden">
        {/* Shimmer overlay on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Top row: Icon + Platform badge */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`w-12 h-12 rounded-xl ${project.logoImage ? "" : `bg-gradient-to-br ${project.gradient}`} flex items-center justify-center shadow-lg overflow-hidden`}
          >
            {project.logoImage ? (
              <Image
                src={project.logoImage}
                alt={project.displayName}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            ) : (
              <IconComponent className="w-6 h-6 text-white" />
            )}
          </motion.div>

          <div className="flex items-center gap-2">
            {isRecent && (
              <span className="flex items-center gap-1 text-xs text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot" />
                Active
              </span>
            )}
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${platform.className}`}>
              {platform.label}
            </span>
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-300">
          {project.displayName}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-gray-300 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-gray-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Completion bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
              {getCompletionLabel(project.completion)}
            </span>
            <span className="text-xs font-bold text-gray-300">{project.completion}%</span>
          </div>
          <div className="progress-bar h-1.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${project.completion}%` }}
              transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
              className={`progress-fill h-full bg-gradient-to-r ${getCompletionColor(project.completion)}`}
            />
          </div>
        </div>

        {/* Bottom row: dates + link */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex items-center gap-3 text-[10px] text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(project.startDate)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {daysAgo === 0 ? "Today" : daysAgo === 1 ? "Yesterday" : `${daysAgo}d ago`}
            </span>
            {project.commits && (
              <span className="flex items-center gap-1">
                <Activity className="w-3 h-3" />
                {project.commits}
              </span>
            )}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Expanded tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full z-50 w-72 p-4 rounded-xl bg-[#0d0d14]/95 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-none"
          >
            <div className="text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Platform</span>
                <span className="text-gray-300">{platform.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Started</span>
                <span className="text-gray-300">{formatDate(project.startDate)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Last Updated</span>
                <span className="text-gray-300">{formatDate(project.lastUpdated)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Completion</span>
                <span className="text-gray-300">{project.completion}%</span>
              </div>
              {project.commits && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Commits</span>
                  <span className="text-gray-300">{project.commits}</span>
                </div>
              )}
              <div className="pt-2 border-t border-white/5">
                <span className="text-gray-500">Tech Stack</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.techStack.map((t) => (
                    <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 pt-1 leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
