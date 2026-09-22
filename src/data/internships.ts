export interface Internship {
  id: string;
  title: string;
  company: string;
  category: string;
  duration: string;
  skills: string[];
  type: 'Paid' | 'Unpaid';
  stipend: string;
  description: string;
  longDescription?: string;
  location: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  postedDate: string;
}

export const CATEGORIES = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Data Science",
  "Data Analytics",
  "Cybersecurity",
  "Content Writing"
];

export const DURATIONS = [
  "1 Month",
  "2 Months",
  "3 Months",
  "6 Months"
];

export const LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced"
];

export const TYPES = [
  "Paid",
  "Unpaid"
];

export const mockInternships: Internship[] = [
  {
    id: "int-1",
    title: "Frontend Development Intern",
    company: "PixelCraft Studios",
    category: "Web Development",
    duration: "3 Months",
    skills: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    type: "Paid",
    stipend: "$600/month",
    description: "Collaborate on building beautiful, highly performant React-based user interfaces with smooth motion transitions and modern design tokens.",
    longDescription: "We are seeking a passionate Frontend Intern to join our digital product team. In this role, you will build dynamic React components, optimize website performance, write standard clean Tailwind classes, and implement user-centered design systems alongside a mentor.",
    location: "Remote (Global)",
    level: "Beginner",
    postedDate: "2 days ago"
  },
  {
    id: "int-2",
    title: "Backend Development Intern",
    company: "Synapse Systems",
    category: "Web Development",
    duration: "3 Months",
    skills: ["Node.js", "Express", "TypeScript", "PostgreSQL"],
    type: "Paid",
    stipend: "$700/month",
    description: "Design scalable API routes, handle authentication sessions, and help model database architectures using robust modern ORMs.",
    longDescription: "Synapse is looking for a Backend Intern to help build microservices. You will work on standardizing endpoints, database security rules, optimizing query parameters, and writing server-side integrations under the guidance of our lead backend engineers.",
    location: "Remote (US/Canada)",
    level: "Intermediate",
    postedDate: "1 week ago"
  },
  {
    id: "int-3",
    title: "Full Stack Development Intern",
    company: "SaaSify Inc.",
    category: "Web Development",
    duration: "6 Months",
    skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    type: "Paid",
    stipend: "$800/month",
    description: "Gain end-to-end full stack developer experience by contributing features across the client dashboard and database backend.",
    longDescription: "This intensive full stack internship connects you directly with a senior mentor. You will write complete features from scratch, build accessible React interfaces, and design lightweight database queries.",
    location: "Remote (Europe)",
    level: "Intermediate",
    postedDate: "3 days ago"
  },
  {
    id: "int-4",
    title: "UI/UX Design Intern",
    company: "Aura Creative",
    category: "UI/UX Design",
    duration: "3 Months",
    skills: ["Figma", "Wireframing", "User Research", "Typography"],
    type: "Unpaid",
    stipend: "Unpaid (College Credits)",
    description: "Create user personas, design interactive high-fidelity wireframes, and run usability testing sessions for real-world B2B web applications.",
    longDescription: "Work hand-in-hand with our Design Principal. You will analyze heatmaps, draft wireframes in Figma, define spacing guidelines, and participate in daily design critiques that shape a global workspace brand.",
    location: "Remote (Global)",
    level: "Beginner",
    postedDate: "4 days ago"
  },
  {
    id: "int-5",
    title: "Digital Marketing Intern",
    company: "GrowthFlow Co.",
    category: "Digital Marketing",
    duration: "2 Months",
    skills: ["SEO", "Content Strategy", "Google Analytics", "Social Media"],
    type: "Paid",
    stipend: "$400/month",
    description: "Execute data-driven organic search engine optimization and schedule multi-channel social media campaigns for leading tech startups.",
    longDescription: "Gain hands-on marketing operations experience. You will perform keyword audits, write engaging social media threads, compile conversion rate graphs in Google Analytics, and research B2B competitors.",
    location: "Remote (Global)",
    level: "Beginner",
    postedDate: "5 days ago"
  },
  {
    id: "int-6",
    title: "Data Analytics Intern",
    company: "MetricFocus Tech",
    category: "Data Analytics",
    duration: "3 Months",
    skills: ["Python", "SQL", "Tableau", "Excel Data Modeling"],
    type: "Paid",
    stipend: "$650/month",
    description: "Clean complex datasets, design high-impact analytics dashboards in Tableau, and draft business insight reports for internal team review.",
    longDescription: "Join our core Data Operations team. You will write SQL queries to aggregate user activity tables, use Python libraries to analyze conversion paths, and present clean dashboard mockups directly to team leaders.",
    location: "Remote (UK)",
    level: "Intermediate",
    postedDate: "1 week ago"
  },
  {
    id: "int-7",
    title: "Python Development Intern",
    company: "NeuralNet Labs",
    category: "Data Science",
    duration: "6 Months",
    skills: ["Python", "Pandas", "Scikit-Learn", "API Integration"],
    type: "Paid",
    stipend: "$900/month",
    description: "Write clean, modular Python modules to ingest, structure, and analyze machine learning training sets for conversational assistants.",
    longDescription: "NeuralNet Labs is looking for an aspiring Python Engineer. In this role, you will help write automated data processing scripts, participate in core model evaluation metrics, and implement robust file pipelines.",
    location: "Remote (Global)",
    level: "Advanced",
    postedDate: "Just now"
  },
  {
    id: "int-8",
    title: "Content Writing Intern",
    company: "WordFlow Media",
    category: "Content Writing",
    duration: "1 Month",
    skills: ["SEO Writing", "Technical Blog Post", "Proofreading", "Medium"],
    type: "Unpaid",
    stipend: "Unpaid (Mentorship Focused)",
    description: "Draft highly engaging developer blog articles, edit product documentation, and design engaging tech-industry newsletters.",
    longDescription: "Unleash your creativity. You will collaborate on technical editorial calendars, receive direct prose writing feedback from our Chief Editor, and learn standard SEO ranking practices.",
    location: "Remote (Global)",
    level: "Beginner",
    postedDate: "6 days ago"
  },
  {
    id: "int-9",
    title: "Mobile App Development Intern",
    company: "SwiftPill Apps",
    category: "App Development",
    duration: "3 Months",
    skills: ["React Native", "Expo", "TypeScript", "iOS/Android App Deployment"],
    type: "Paid",
    stipend: "$750/month",
    description: "Help build cross-platform mobile interfaces, connect native APIs, and prepare app bundle configurations for App Store submission.",
    longDescription: "Work on real mobile products used by thousands. You will build highly responsive screen hierarchies in React Native, configure subtle screen transitions, and debug device-specific view problems.",
    location: "Remote (Global)",
    level: "Intermediate",
    postedDate: "2 weeks ago"
  },
  {
    id: "int-10",
    title: "Cybersecurity Analyst Intern",
    company: "IronClad Defensive Solutions",
    category: "Cybersecurity",
    duration: "6 Months",
    skills: ["Network Security", "Vulnerability Scanning", "Linux Command Line", "OSWAP Top 10"],
    type: "Paid",
    stipend: "$850/month",
    description: "Conduct standard code audits, monitor firewall activity files, and help write comprehensive security remediation manuals.",
    longDescription: "Join our threat intelligence operations unit. You will analyze log telemetry, document security vulnerabilities against OWASP standards, and set up mock penetration tests alongside security leads.",
    location: "Remote (Global)",
    level: "Advanced",
    postedDate: "1 week ago"
  }
];
