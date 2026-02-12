"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import CategoryFilter from "@/components/CategoryFilter";
import ProjectCard from "@/components/ProjectCard";
import { projects, categoryInfo, type ProjectCategory } from "@/data/projects";

type SortOption = "name" | "recent" | "completion" | "started";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [searchQuery, setSearchQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const p of projects) {
      c[p.category] = (c[p.category] || 0) + 1;
    }
    return c;
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.displayName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    switch (sortBy) {
      case "name":
        return [...filtered].sort((a, b) => a.displayName.localeCompare(b.displayName));
      case "recent":
        return [...filtered].sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated));
      case "completion":
        return [...filtered].sort((a, b) => b.completion - a.completion);
      case "started":
        return [...filtered].sort((a, b) => a.startDate.localeCompare(b.startDate));
      default:
        return filtered;
    }
  }, [selectedCategory, sortBy, searchQuery]);

  // Group by category when showing all
  const groupedProjects = useMemo(() => {
    if (selectedCategory !== "all") return null;

    const groups: Record<string, typeof projects> = {};
    for (const p of filteredProjects) {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    }
    return groups;
  }, [selectedCategory, filteredProjects]);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Fixed nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-black text-sm">D</span>
            </div>
            <span className="text-sm font-bold text-white hidden sm:block">
              Downing AI Builds
            </span>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-48 sm:w-64 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-300 focus:outline-none focus:border-blue-500/50 appearance-none cursor-pointer"
            >
              <option value="recent">Recently Updated</option>
              <option value="name">Name A-Z</option>
              <option value="completion">% Complete</option>
              <option value="started">Date Started</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Stats */}
        <StatsBar projects={projects} />

        {/* Category filter */}
        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          counts={counts}
        />

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="text-gray-300 font-medium">{filteredProjects.length}</span> project
            {filteredProjects.length !== 1 ? "s" : ""}
            {selectedCategory !== "all" && (
              <> in <span className="text-gray-300">{categoryInfo[selectedCategory].label}</span></>
            )}
          </p>
        </div>

        {/* Projects grid - grouped by category when showing all */}
        <AnimatePresence mode="wait">
          {groupedProjects ? (
            <motion.div
              key="grouped"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {(Object.entries(categoryInfo) as [ProjectCategory, typeof categoryInfo[ProjectCategory]][]).map(
                ([catKey, catInfo]) => {
                  const catProjects = groupedProjects[catKey];
                  if (!catProjects || catProjects.length === 0) return null;

                  return (
                    <section key={catKey}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                      >
                        <div className={`h-8 w-1 rounded-full bg-gradient-to-b ${catInfo.color}`} />
                        <h2 className="text-xl font-bold text-white">{catInfo.label}</h2>
                        <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                          {catProjects.length}
                        </span>
                        <span className="text-xs text-gray-600 hidden sm:block">
                          {catInfo.description}
                        </span>
                      </motion.div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {catProjects.map((project, idx) => (
                          <ProjectCard key={project.id} project={project} index={idx} />
                        ))}
                      </div>
                    </section>
                  );
                }
              )}
            </motion.div>
          ) : (
            <motion.div
              key="filtered"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found</p>
            <p className="text-gray-600 text-sm mt-2">Try adjusting your search or filter</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            Downing AI Builds / Project Portfolio &mdash; {projects.length} Projects &amp; Counting
          </p>
          <p className="text-gray-700 text-xs mt-1">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all z-40"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
