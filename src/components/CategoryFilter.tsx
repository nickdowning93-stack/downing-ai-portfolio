"use client";

import { motion } from "framer-motion";
import {
  Building2, Rocket, Zap, Cpu, Smartphone, Heart,
  LayoutDashboard, Presentation, LayoutGrid,
} from "lucide-react";
import type { ProjectCategory } from "@/data/projects";
import { categoryInfo } from "@/data/projects";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2, Rocket, Zap, Cpu, Smartphone, Heart, LayoutDashboard, Presentation,
};

interface CategoryFilterProps {
  selected: ProjectCategory | "all";
  onSelect: (category: ProjectCategory | "all") => void;
  counts: Record<string, number>;
}

export default function CategoryFilter({ selected, onSelect, counts }: CategoryFilterProps) {
  const categories = Object.entries(categoryInfo) as [ProjectCategory, typeof categoryInfo[ProjectCategory]][];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {/* All button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect("all")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selected === "all"
              ? "bg-white/15 border border-white/20 text-white shadow-lg shadow-white/5"
              : "bg-white/5 border border-white/8 text-gray-400 hover:bg-white/10 hover:text-gray-200"
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          All
          <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full">
            {Object.values(counts).reduce((a, b) => a + b, 0)}
          </span>
        </motion.button>

        {categories.map(([key, info]) => {
          const Icon = iconMap[info.icon] || Building2;
          const count = counts[key] || 0;
          if (count === 0) return null;

          return (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelect(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selected === key
                  ? `bg-gradient-to-r ${info.color} text-white shadow-lg`
                  : "bg-white/5 border border-white/8 text-gray-400 hover:bg-white/10 hover:text-gray-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{info.label}</span>
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-full">{count}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
