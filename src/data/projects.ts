export type ProjectCategory =
  | "hub-international"
  | "personal-brand"
  | "side-gigs"
  | "ai-blueprint"
  | "ios-apps"
  | "personal-hobby"
  | "command-centers"
  | "presentations";

export type TechBadge =
  | "Next.js"
  | "React"
  | "Vite"
  | "Tailwind"
  | "Prisma"
  | "PostgreSQL"
  | "Claude AI"
  | "Python"
  | "Swift"
  | "Xcode"
  | "HTML/CSS/JS"
  | "Framer Motion"
  | "Stripe"
  | "Vercel"
  | "Netlify"
  | "Playwright"
  | "SendGrid"
  | "TypeScript"
  | "Node.js"
  | "PDF Generation"
  | "Markdown"
  | "Anthropic SDK";

export type Platform = "vercel" | "netlify" | "ios" | "local" | "markdown";

export interface Project {
  id: string;
  name: string;
  displayName: string;
  category: ProjectCategory;
  description: string;
  techStack: TechBadge[];
  platform: Platform;
  startDate: string;
  lastUpdated: string;
  completion: number;
  liveUrl?: string;
  gradient: string;
  icon: string;
  logoImage?: string;
  commits?: number;
}

export const categoryInfo: Record<
  ProjectCategory,
  { label: string; description: string; color: string; icon: string }
> = {
  "hub-international": {
    label: "HUB International",
    description: "Professional projects for HUB International insurance brokerage",
    color: "from-blue-600 to-cyan-500",
    icon: "Building2",
  },
  "personal-brand": {
    label: "Personal Brand & AI Ventures",
    description: "RiskForwardAI ecosystem and personal brand building",
    color: "from-purple-600 to-pink-500",
    icon: "Rocket",
  },
  "side-gigs": {
    label: "Side Gigs & Ventures",
    description: "Entrepreneurial ventures and revenue-generating side projects",
    color: "from-emerald-600 to-teal-500",
    icon: "Zap",
  },
  "ai-blueprint": {
    label: "AI Blueprint Toolkit",
    description: "AI-powered tools and infrastructure for automation",
    color: "from-orange-600 to-amber-500",
    icon: "Cpu",
  },
  "ios-apps": {
    label: "iOS Apps",
    description: "Native iOS applications built with Swift and Xcode",
    color: "from-indigo-600 to-blue-500",
    icon: "Smartphone",
  },
  "personal-hobby": {
    label: "Personal & Hobby",
    description: "Fun projects, creative writing, and personal tools",
    color: "from-rose-600 to-red-500",
    icon: "Heart",
  },
  "command-centers": {
    label: "Command Centers",
    description: "Life management dashboards and control systems",
    color: "from-violet-600 to-purple-500",
    icon: "LayoutDashboard",
  },
  presentations: {
    label: "Presentations & Decks",
    description: "Interactive presentations, proposals, and pitch decks",
    color: "from-sky-600 to-blue-500",
    icon: "Presentation",
  },
};

export const projects: Project[] = [
  // ═══════════════════════════════════════════
  // HUB INTERNATIONAL
  // ═══════════════════════════════════════════
  {
    id: "ai-prospecting",
    name: "ai-prospecting",
    displayName: "AI Prospector",
    category: "hub-international",
    description:
      "Full-stack insurance sales prospecting platform with AI-powered lead scoring, 29 API routes, and intelligent prospect management",
    techStack: ["Next.js", "React", "Prisma", "PostgreSQL", "Claude AI", "Tailwind", "TypeScript", "SendGrid"],
    platform: "vercel",
    startDate: "2026-02-08",
    lastUpdated: "2026-02-11",
    completion: 75,
    gradient: "from-blue-500 to-cyan-400",
    icon: "Search",
    logoImage: "/logos/hub-logo.png",
    commits: 6,
  },
  {
    id: "risk-profile-deck",
    name: "Risk Profile and Deck Tool",
    displayName: "Deck Generator",
    category: "hub-international",
    description:
      "AI-powered risk profile analysis and presentation deck generator with Claude AI integration and PDF export capabilities",
    techStack: ["Next.js", "React", "Claude AI", "PDF Generation", "Tailwind", "TypeScript"],
    platform: "vercel",
    startDate: "2026-02-09",
    lastUpdated: "2026-02-10",
    completion: 60,
    gradient: "from-indigo-500 to-blue-400",
    icon: "FileBarChart",
    logoImage: "/logos/hub-logo.png",
    commits: 2,
  },
  {
    id: "condoconscious",
    name: "condoconscious",
    displayName: "CondoConscious",
    category: "hub-international",
    description:
      "Condominium insurance education portal with coverage guides, reference materials, and HUB branding for condo association clients",
    techStack: ["HTML/CSS/JS", "Vercel"],
    platform: "vercel",
    startDate: "2025-08-20",
    lastUpdated: "2025-08-22",
    completion: 80,
    gradient: "from-teal-500 to-emerald-400",
    icon: "Building",
    logoImage: "/logos/hub-logo.png",
    commits: 4,
  },
  {
    id: "condohub",
    name: "CondoHUB",
    displayName: "CondoHUB",
    category: "hub-international",
    description:
      "Streamlined condominium and HUB information portal for quick client reference and resource access",
    techStack: ["HTML/CSS/JS"],
    platform: "local",
    startDate: "2026-02-01",
    lastUpdated: "2026-02-01",
    completion: 40,
    gradient: "from-cyan-500 to-blue-400",
    icon: "Home",
  },
  {
    id: "riskforge-manufacturing",
    name: "riskforge-manufacturing",
    displayName: "RiskForge Manufacturing",
    category: "hub-international",
    description:
      "Manufacturing sector risk management platform for identifying, analyzing, and mitigating industrial operational risks",
    techStack: ["Next.js", "React", "Tailwind"],
    platform: "vercel",
    startDate: "2025-08-20",
    lastUpdated: "2025-08-20",
    completion: 25,
    gradient: "from-slate-500 to-zinc-400",
    icon: "Factory",
    commits: 1,
  },
  {
    id: "rich-products",
    name: "Rich Products",
    displayName: "Rich Products Partnership",
    category: "hub-international",
    description:
      "Interactive partnership placemat mapping the relationship between Rich Products and HUB International across real estate and insurance verticals",
    techStack: ["HTML/CSS/JS", "Vercel"],
    platform: "vercel",
    startDate: "2026-02-04",
    lastUpdated: "2026-02-04",
    completion: 85,
    gradient: "from-amber-500 to-yellow-400",
    icon: "Handshake",
    commits: 3,
  },
  {
    id: "rich-products-opportunity",
    name: "Rich Products Opportunity",
    displayName: "Rich Products Prep",
    category: "hub-international",
    description:
      "Pre-meeting research dossier with company intel, team roster, agenda, SME notes, and reference materials for Rich Products opportunity",
    techStack: ["Markdown"],
    platform: "local",
    startDate: "2026-02-04",
    lastUpdated: "2026-02-04",
    completion: 90,
    gradient: "from-amber-600 to-orange-400",
    icon: "ClipboardList",
  },
  {
    id: "manufacturing-clients",
    name: "Manufacturing Clients",
    displayName: "Manufacturing CRM",
    category: "hub-international",
    description:
      "Client management system for manufacturing vertical with profiles, calendars, analysis docs, email templates, and manager presentations",
    techStack: ["HTML/CSS/JS", "Markdown"],
    platform: "local",
    startDate: "2025-09-08",
    lastUpdated: "2025-09-08",
    completion: 65,
    gradient: "from-stone-500 to-gray-400",
    icon: "Users",
  },
  {
    id: "aviation-risk",
    name: "aviation-risk-value-creator",
    displayName: "Aviation Risk Value Creator",
    category: "hub-international",
    description:
      "Interactive aviation risk assessment and value creation presentation tool for aviation insurance clients",
    techStack: ["HTML/CSS/JS", "Vercel"],
    platform: "vercel",
    startDate: "2026-02-07",
    lastUpdated: "2026-02-07",
    completion: 70,
    gradient: "from-sky-500 to-blue-400",
    icon: "Plane",
  },
  {
    id: "ai-infrastructure",
    name: "AI Infrastructure",
    displayName: "AI Sales Infrastructure",
    category: "hub-international",
    description:
      "Comprehensive sales infrastructure with blog calendars, email sequences, PE fund database, prospect scoring system, and execution guides",
    techStack: ["HTML/CSS/JS", "Markdown", "PDF Generation"],
    platform: "vercel",
    startDate: "2026-01-31",
    lastUpdated: "2026-02-07",
    completion: 70,
    gradient: "from-blue-600 to-indigo-500",
    icon: "Database",
    commits: 15,
  },
  {
    id: "deploy-to-netlify",
    name: "Deploy_to_Netlify",
    displayName: "PE Prospecting Dashboard",
    category: "hub-international",
    description:
      "7-page interactive PE prospecting system with blog calendar, email sequences, fund database, outreach tracker, and quick reference guide",
    techStack: ["HTML/CSS/JS", "Netlify", "Vercel"],
    platform: "netlify",
    startDate: "2026-02-07",
    lastUpdated: "2026-02-07",
    completion: 80,
    gradient: "from-teal-600 to-cyan-500",
    icon: "Globe",
    commits: 3,
  },
  {
    id: "usi",
    name: "USI",
    displayName: "USI Reference Hub",
    category: "hub-international",
    description:
      "Insurance industry reference materials, account contacts, and organized work products for USI operations",
    techStack: ["Markdown"],
    platform: "local",
    startDate: "2026-02-06",
    lastUpdated: "2026-02-06",
    completion: 50,
    gradient: "from-gray-500 to-slate-400",
    icon: "Archive",
  },

  // ═══════════════════════════════════════════
  // PERSONAL BRAND & AI VENTURES
  // ═══════════════════════════════════════════
  {
    id: "riskforwardai",
    name: "riskforwardai",
    displayName: "Risk Forward AI",
    category: "personal-brand",
    description:
      "Thought leadership platform publishing articles on AI agent coverage gaps in insurance, building credibility and audience at the intersection of AI and risk management",
    techStack: ["HTML/CSS/JS", "Vercel"],
    platform: "vercel",
    startDate: "2025-08-24",
    lastUpdated: "2026-01-18",
    completion: 75,
    liveUrl: "https://riskforwardai.com",
    gradient: "from-purple-500 to-fuchsia-400",
    icon: "Shield",
    logoImage: "/logos/riskforwardai-logo.jpg",
    commits: 11,
  },
  {
    id: "shieldai-website",
    name: "shieldai-website",
    displayName: "Shield AI",
    category: "personal-brand",
    description:
      "AI-powered embedded insurance platform with 5 proprietary AI agents targeting a $41B market opportunity. Currently raising $3.5M seed round",
    techStack: ["Next.js", "React", "Tailwind", "Framer Motion"],
    platform: "vercel",
    startDate: "2025-08-24",
    lastUpdated: "2025-08-24",
    completion: 70,
    gradient: "from-violet-500 to-purple-400",
    icon: "ShieldCheck",
    commits: 2,
  },
  {
    id: "shieldai-docs",
    name: "ShieldAI Documents",
    displayName: "Shield AI Business Suite",
    category: "personal-brand",
    description:
      "Complete business documentation: pitch deck, investor package, financial models ($1.6M to $39M revenue), technical specs, and marketing materials",
    techStack: ["Markdown"],
    platform: "markdown",
    startDate: "2025-08-24",
    lastUpdated: "2025-08-24",
    completion: 90,
    gradient: "from-fuchsia-500 to-pink-400",
    icon: "FileText",
  },
  {
    id: "iaibi",
    name: "IAIBI",
    displayName: "IAIBI Platform",
    category: "personal-brand",
    description:
      "Insurance, AI, and Business Innovation web platform showcasing the convergence of artificial intelligence and the insurance industry",
    techStack: ["Next.js", "React", "Tailwind"],
    platform: "vercel",
    startDate: "2025-08-22",
    lastUpdated: "2025-08-22",
    completion: 45,
    gradient: "from-pink-500 to-rose-400",
    icon: "Lightbulb",
    commits: 4,
  },
  {
    id: "skeleton",
    name: "Skeleton.md",
    displayName: "Content Empire Blueprint",
    category: "personal-brand",
    description:
      "Master blueprint for a content empire across insurance, AI, and business innovation with brand identity, frameworks, and 10 industry-specific applications",
    techStack: ["Markdown"],
    platform: "markdown",
    startDate: "2025-08-24",
    lastUpdated: "2025-08-24",
    completion: 85,
    gradient: "from-amber-500 to-orange-400",
    icon: "Map",
  },
  {
    id: "social-media-campaign",
    name: "Social Media Campaign",
    displayName: "Social Media Strategy",
    category: "personal-brand",
    description:
      "Comprehensive social media and marketing strategy with content calendars, industry outlook reports, presentation decks, and implementation tactics",
    techStack: ["Markdown", "PDF Generation"],
    platform: "local",
    startDate: "2026-01-18",
    lastUpdated: "2026-01-18",
    completion: 70,
    gradient: "from-cyan-500 to-teal-400",
    icon: "Share2",
  },

  // ═══════════════════════════════════════════
  // SIDE GIGS & VENTURES
  // ═══════════════════════════════════════════
  {
    id: "saas-affiliate-agent",
    name: "saas-affiliate-agent",
    displayName: "AI Tool Connect",
    category: "side-gigs",
    description:
      "Multi-agent SaaS affiliate marketing automation with AI-powered video generation, web scraping, content creation, and Instagram integration for passive income",
    techStack: ["Python", "Anthropic SDK", "Playwright"],
    platform: "local",
    startDate: "2026-02-08",
    lastUpdated: "2026-02-12",
    completion: 55,
    gradient: "from-emerald-500 to-green-400",
    icon: "Link",
  },
  {
    id: "noble-blaze",
    name: "noble-blaze",
    displayName: "Noble Blaze",
    category: "side-gigs",
    description:
      "Interactive web experience with parallax animations and QR code generation for Noble Blaze brand and business venture",
    techStack: ["Next.js", "React", "Framer Motion", "Tailwind"],
    platform: "vercel",
    startDate: "2025-08-30",
    lastUpdated: "2025-08-30",
    completion: 35,
    gradient: "from-orange-500 to-red-400",
    icon: "Flame",
    logoImage: "/logos/noble-blaze-logo.png",
    commits: 1,
  },
  {
    id: "mfgpeai",
    name: "MFGPEAI",
    displayName: "MFG PE AI Agent",
    category: "side-gigs",
    description:
      "AI-driven manufacturing and private equity prospecting system with multi-agent architecture, Instagram automation, and content scheduling",
    techStack: ["Python", "Anthropic SDK", "Playwright"],
    platform: "vercel",
    startDate: "2026-02-06",
    lastUpdated: "2026-02-07",
    completion: 50,
    gradient: "from-lime-500 to-green-400",
    icon: "Bot",
    logoImage: "/logos/hub-logo.png",
    commits: 9,
  },
  {
    id: "garvin-downing",
    name: "Garvin and Downing",
    displayName: "Garvin & Downing",
    category: "side-gigs",
    description:
      "Collaborative venture projects including AdventureBoard and The Noble Blaze sub-brands",
    techStack: ["HTML/CSS/JS"],
    platform: "local",
    startDate: "2026-01-19",
    lastUpdated: "2026-01-19",
    completion: 20,
    gradient: "from-teal-500 to-cyan-400",
    icon: "Users",
  },

  // ═══════════════════════════════════════════
  // AI BLUEPRINT TOOLKIT
  // ═══════════════════════════════════════════
  {
    id: "ai4u",
    name: "AI4U",
    displayName: "AI4U",
    category: "ai-blueprint",
    description:
      "AI-powered document generation platform with PDF creation, email integration via Resend, and Stripe payment processing for monetization",
    techStack: ["Next.js", "React", "Tailwind", "Claude AI", "Stripe", "PDF Generation"],
    platform: "vercel",
    startDate: "2026-02-08",
    lastUpdated: "2026-02-08",
    completion: 30,
    gradient: "from-orange-500 to-amber-400",
    icon: "Wand2",
    commits: 1,
  },
  {
    id: "email-sender",
    name: "email-sender",
    displayName: "Email Sender",
    category: "ai-blueprint",
    description:
      "Email automation utility for programmatic email sending, outreach campaigns, and notification systems",
    techStack: ["Node.js"],
    platform: "local",
    startDate: "2025-11-10",
    lastUpdated: "2025-11-10",
    completion: 10,
    gradient: "from-yellow-500 to-amber-400",
    icon: "Mail",
  },

  // ═══════════════════════════════════════════
  // iOS APPS
  // ═══════════════════════════════════════════
  {
    id: "alarmie",
    name: "Alarmie",
    displayName: "Alarmie",
    category: "ios-apps",
    description:
      "iOS alarm and smart reminder application with custom icons, notification scheduling, and intuitive wake-up experience",
    techStack: ["Swift", "Xcode"],
    platform: "ios",
    startDate: "2026-02-05",
    lastUpdated: "2026-02-11",
    completion: 60,
    gradient: "from-indigo-500 to-blue-400",
    icon: "Bell",
    logoImage: "/logos/alarmie-icon.png",
    commits: 3,
  },
  {
    id: "goalsync",
    name: "GoalSync",
    displayName: "GoalSync",
    category: "ios-apps",
    description:
      "Goal tracking and synchronization iOS app to set, monitor, and achieve personal and professional milestones",
    techStack: ["Swift", "Xcode"],
    platform: "ios",
    startDate: "2026-02-04",
    lastUpdated: "2026-02-04",
    completion: 40,
    gradient: "from-green-500 to-emerald-400",
    icon: "Target",
  },
  {
    id: "helloworld",
    name: "HelloWorld",
    displayName: "HelloWorld",
    category: "ios-apps",
    description:
      "First iOS application - learning project for Swift development fundamentals and Xcode workflows",
    techStack: ["Swift", "Xcode"],
    platform: "ios",
    startDate: "2026-02-04",
    lastUpdated: "2026-02-04",
    completion: 100,
    gradient: "from-sky-500 to-cyan-400",
    icon: "Code",
  },

  // ═══════════════════════════════════════════
  // PERSONAL & HOBBY
  // ═══════════════════════════════════════════
  {
    id: "parlay-tracker",
    name: "parlay-tracker",
    displayName: "Parlay Tracker",
    category: "personal-hobby",
    description:
      "St. Michael's College parlay betting tracker with real-time odds calculator, parlay builder, history tracking, and competitive leaderboard",
    techStack: ["React", "Vite", "Tailwind", "TypeScript"],
    platform: "local",
    startDate: "2025-11-01",
    lastUpdated: "2025-11-01",
    completion: 85,
    gradient: "from-green-500 to-lime-400",
    icon: "Trophy",
  },
  {
    id: "fantasy-draft",
    name: "fantasy-draft-guide-2025",
    displayName: "Fantasy Draft Guide 2025",
    category: "personal-hobby",
    description:
      "Interactive fantasy football draft preparation tool with player rankings, projections, and draft strategy for the 2025 season",
    techStack: ["HTML/CSS/JS"],
    platform: "local",
    startDate: "2025-09-01",
    lastUpdated: "2025-09-01",
    completion: 95,
    gradient: "from-amber-500 to-yellow-400",
    icon: "Medal",
  },
  {
    id: "fantasy-cheat-sheet",
    name: "nick-fantasy-cheat-sheet-2025",
    displayName: "Fantasy Cheat Sheet",
    category: "personal-hobby",
    description:
      "Quick-reference fantasy football cheat sheet with personal player tiers and draft day notes",
    techStack: ["HTML/CSS/JS"],
    platform: "local",
    startDate: "2025-09-01",
    lastUpdated: "2025-09-01",
    completion: 95,
    gradient: "from-orange-500 to-amber-400",
    icon: "ScrollText",
  },
  {
    id: "night-seas-website",
    name: "TheNightTheSeasAnswered_Website",
    displayName: "The Night The Seas Answered",
    category: "personal-hobby",
    description:
      "Website for the creative fiction series featuring a photo gallery with 16 chapters of atmospheric storytelling imagery",
    techStack: ["HTML/CSS/JS", "Vercel"],
    platform: "vercel",
    startDate: "2026-02-04",
    lastUpdated: "2026-02-04",
    completion: 65,
    gradient: "from-blue-700 to-indigo-500",
    icon: "BookOpen",
    logoImage: "/logos/night-seas-og.png",
  },
  {
    id: "night-seas-book2",
    name: "TheNightTheSeasAnswered_Book2",
    displayName: "Book 2: The Spreading Flame",
    category: "personal-hobby",
    description:
      "Fantasy novel sequel - 'The Spreading Flame' set 5 years after Book 1. Prologue and Chapter One completed",
    techStack: ["Markdown"],
    platform: "markdown",
    startDate: "2026-01-31",
    lastUpdated: "2026-01-31",
    completion: 15,
    gradient: "from-red-600 to-orange-500",
    icon: "Feather",
  },
  {
    id: "kyles-wood",
    name: "kyles-wood",
    displayName: "Kyle's Wood",
    category: "personal-hobby",
    description:
      "Next.js web project in early development for a personal/collaborative creative venture",
    techStack: ["Next.js", "React", "Tailwind"],
    platform: "local",
    startDate: "2026-01-19",
    lastUpdated: "2026-01-19",
    completion: 10,
    gradient: "from-green-700 to-emerald-500",
    icon: "TreePine",
  },
  {
    id: "anthropic-application",
    name: "anthropic-application",
    displayName: "Anthropic Application",
    category: "personal-hobby",
    description:
      "Job application materials for Anthropic with cover letter, resume, and personal statement on why Anthropic",
    techStack: ["HTML/CSS/JS"],
    platform: "local",
    startDate: "2026-02-11",
    lastUpdated: "2026-02-11",
    completion: 90,
    gradient: "from-amber-700 to-yellow-500",
    icon: "Briefcase",
  },

  // ═══════════════════════════════════════════
  // COMMAND CENTERS
  // ═══════════════════════════════════════════
  {
    id: "master-control-center",
    name: "master-control-center",
    displayName: "Master Control Center",
    category: "command-centers",
    description:
      "Personal life management system with 7 core pillars: Foundation, Work HUB, Health/Wellness, Financials, Hobbies, Personal Growth, and Business Ventures",
    techStack: ["Next.js", "React", "Framer Motion", "Tailwind"],
    platform: "vercel",
    startDate: "2026-02-11",
    lastUpdated: "2026-02-11",
    completion: 65,
    gradient: "from-violet-500 to-purple-400",
    icon: "Gauge",
    commits: 4,
  },
  {
    id: "master-control-offline",
    name: "MasterControlCenter",
    displayName: "MCC Offline Backup",
    category: "command-centers",
    description:
      "Offline file system organization mirroring the 7 pillars of the Master Control Center with local docs and blueprints",
    techStack: ["HTML/CSS/JS", "Markdown"],
    platform: "local",
    startDate: "2026-01-05",
    lastUpdated: "2026-01-05",
    completion: 50,
    gradient: "from-purple-600 to-violet-400",
    icon: "FolderTree",
  },
  {
    id: "downings-hub-control",
    name: "downings-hub-control-center",
    displayName: "Downing's HUB Control",
    category: "command-centers",
    description:
      "Hub-specific control center application for managing HUB International workflows and resources",
    techStack: ["Next.js", "React", "Tailwind"],
    platform: "vercel",
    startDate: "2025-08-21",
    lastUpdated: "2025-08-21",
    completion: 30,
    gradient: "from-blue-600 to-violet-400",
    icon: "Monitor",
    commits: 1,
  },

  // ═══════════════════════════════════════════
  // PRESENTATIONS & DECKS
  // ═══════════════════════════════════════════
  {
    id: "bauchmans-towing",
    name: "Bauchmans Towing Presentation",
    displayName: "Bauchmans Towing Proposal",
    category: "presentations",
    description:
      "Professional insurance proposal for Bauchmans Towing with coverage comparison, timeline, presentation slides, and branded materials",
    techStack: ["HTML/CSS/JS", "Python", "PDF Generation"],
    platform: "local",
    startDate: "2026-02-10",
    lastUpdated: "2026-02-10",
    completion: 85,
    gradient: "from-sky-500 to-cyan-400",
    icon: "Truck",
  },
  {
    id: "aviation-pitch-deck",
    name: "aviation-risk-pitch-deck",
    displayName: "Aviation Risk Pitch Deck",
    category: "presentations",
    description:
      "Comprehensive 2.9MB interactive HTML pitch deck for aviation risk analysis and value proposition",
    techStack: ["HTML/CSS/JS"],
    platform: "local",
    startDate: "2026-02-07",
    lastUpdated: "2026-02-07",
    completion: 90,
    gradient: "from-blue-500 to-sky-400",
    icon: "PlaneTakeoff",
  },
];
