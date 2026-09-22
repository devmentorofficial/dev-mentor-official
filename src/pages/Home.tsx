import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Globe, 
  Clock, 
  Award, 
  Users, 
  ArrowRight, 
  Search, 
  UserPlus, 
  BookOpen, 
  Terminal, 
  Layers, 
  Smartphone, 
  Palette, 
  Megaphone, 
  LineChart, 
  ShieldCheck, 
  PenTool,
  ArrowUpRight
} from "lucide-react";
import Button from "../components/Button";
import TestimonialCard, { Testimonial } from "../components/TestimonialCard";
import { CATEGORIES } from "../data/internships";

export default function Home() {
  const navigate = useNavigate();

  // 1. Benefits data
  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "Remote First",
      text: "Work from anywhere in the world. Save time on commuting and learn from the comfort of your desk.",
      bg: "bg-emerald-50/50"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "100% Flexible",
      text: "Coordinate and work around your existing university classes, semesters, and exams seamlessly.",
      bg: "bg-blue-50/50"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Verifiable Certificate",
      text: "Receive a cryptography-backed completion certificate to boost your LinkedIn profile and resume.",
      bg: "bg-purple-50/50"
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "1-on-1 Mentorship",
      text: "Receive code reviews, architectural advice, and career path coaching from veteran tech mentors.",
      bg: "bg-amber-50/50"
    }
  ];

  // 2. Category icon mapper helper
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Web Development": return <Terminal className="w-6 h-6 text-emerald-600" />;
      case "App Development": return <Smartphone className="w-6 h-6 text-blue-600" />;
      case "UI/UX Design": return <Palette className="w-6 h-6 text-purple-600" />;
      case "Digital Marketing": return <Megaphone className="w-6 h-6 text-amber-600" />;
      case "Data Science": return <Layers className="w-6 h-6 text-indigo-600" />;
      case "Data Analytics": return <LineChart className="w-6 h-6 text-cyan-600" />;
      case "Cybersecurity": return <ShieldCheck className="w-6 h-6 text-red-600" />;
      case "Content Writing": return <PenTool className="w-6 h-6 text-pink-600" />;
      default: return <Terminal className="w-6 h-6 text-brand-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Web Development": return "bg-emerald-50 border-emerald-100";
      case "App Development": return "bg-blue-50 border-blue-100";
      case "UI/UX Design": return "bg-purple-50 border-purple-100";
      case "Digital Marketing": return "bg-amber-50 border-amber-100";
      case "Data Science": return "bg-indigo-50 border-indigo-100";
      case "Data Analytics": return "bg-cyan-50 border-cyan-100";
      case "Cybersecurity": return "bg-red-50 border-red-100";
      case "Content Writing": return "bg-pink-50 border-pink-100";
      default: return "bg-brand-50 border-brand-100";
    }
  };

  // 3. How It Works steps
  const steps = [
    {
      number: "01",
      icon: <Search className="w-6 h-6 text-brand-600" />,
      title: "Explore",
      text: "Browse opportunities in high-growth tech sectors that match your career goals and interests."
    },
    {
      number: "02",
      icon: <UserPlus className="w-6 h-6 text-brand-600" />,
      title: "Apply",
      text: "Upload your resume and complete our brief student statement of interest to match with sponsors."
    },
    {
      number: "03",
      icon: <BookOpen className="w-6 h-6 text-brand-600" />,
      title: "Learn & Build",
      text: "Work on highly practical codebase milestones under the structural review of your senior mentor."
    },
    {
      number: "04",
      icon: <Award className="w-6 h-6 text-brand-600" />,
      title: "Get Certified",
      text: "Verify your final milestones and receive a portfolio-ready engineering certificate of achievement."
    }
  ];

  // 4. Testimonials dataset
  const testimonials: Testimonial[] = [
    {
      id: "test-1",
      name: "Marcus Aurelius",
      role: "Frontend Engineer Intern",
      university: "MIT",
      quote: "devMentor completely changed how I think about programming. The direct guidance from my mentor, Marcus, made me understand React renders better than any semester course I took.",
      rating: 5
    },
    {
      id: "test-2",
      name: "Sophia Martinez",
      role: "UI/UX Design Intern",
      university: "Georgia Tech",
      quote: "The flexible hour arrangement was incredible. I designed comprehensive B2B dashboards for a global logistics startup while maintaining a perfect GPA at college.",
      rating: 5
    },
    {
      id: "test-3",
      name: "Arjun Mehta",
      role: "Data Science Intern",
      university: "UT Austin",
      quote: "Having my code reviewed by industry professionals gave me the confidence to apply for top-tier full-time roles. I received an offer three weeks after completing my devMentor certificate!",
      rating: 5
    }
  ];

  // Navigate to /internships with a pre-filled category filter
  const handleCategoryClick = (categoryName: string) => {
    navigate("/internships", { state: { category: categoryName } });
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 mt-25">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 md:pt-16 lg:pt-24">
        {/* Subtle decorative mesh background */}
        <div className="absolute top-20 right-[-10%] w-112.5 h-112.5 rounded-full bg-brand-50/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[-10%] w-87.5 h-87.5 rounded-full bg-emerald-50/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span>Winter Cohort Open for Applications</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-neutral-warm-900 tracking-tight leading-[1.08]">
              Gain Real Experience. <br />
              <span className="text-brand-500 relative inline-block">
                Work From Anywhere.
              </span>
            </h1>

            <p className="text-neutral-warm-600 text-base sm:text-xl max-w-2xl leading-relaxed">
              Bridge the gap between academic theory and industry engineering. Work on remote-first virtual internships, receive elite 1-on-1 mentor guidance, and build a resume that stands out to top-tier hiring managers.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/internships")}
                className="group flex items-center justify-center gap-2"
              >
                <span>Browse Internships</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/about")}
                className="flex items-center justify-center"
              >
                Learn More
              </Button>
            </div>

            {/* Quick stats counter */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-warm-100">
              <div>
                <p className="font-display font-black text-2xl sm:text-3xl text-brand-600">450+</p>
                <p className="text-xs font-semibold text-neutral-warm-500 uppercase tracking-wider mt-1">Students Placed</p>
              </div>
              <div>
                <p className="font-display font-black text-2xl sm:text-3xl text-neutral-warm-900">120+</p>
                <p className="text-xs font-semibold text-neutral-warm-500 uppercase tracking-wider mt-1">Global Sponsors</p>
              </div>
              <div>
                <p className="font-display font-black text-2xl sm:text-3xl text-brand-600">98%</p>
                <p className="text-xs font-semibold text-neutral-warm-500 uppercase tracking-wider mt-1">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow container */}
              <div className="absolute inset-0 bg-linear-to-tr from-brand-300/10 to-brand-500/10 rounded-3xl blur-2xl transform rotate-6 scale-105 pointer-events-none" />

              {/* Developer mockup illustration card */}
              <div className="relative bg-white border border-neutral-warm-200 shadow-xl rounded-3xl p-6 overflow-hidden">
                <div className="flex justify-between items-center pb-4 border-b border-neutral-warm-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-brand-400" />
                  </div>
                  <span className="text-xs font-semibold text-neutral-warm-400 font-mono">dashboard.js</span>
                </div>

                <div className="py-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs text-neutral-warm-400 font-mono">{'// Active Virtual Assignment'}</p>
                    <p className="text-sm font-bold text-neutral-warm-800">Milestone 2: Refactor State Store</p>
                  </div>

                  {/* Progress tracker bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-neutral-warm-500">
                      <span>Milestone Progress</span>
                      <span className="text-brand-600">75% Complete</span>
                    </div>
                    <div className="w-full bg-neutral-warm-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-brand-500 h-full rounded-full" style={{ width: "75%" }} />
                    </div>
                  </div>

                  {/* Comment Thread visual bubble */}
                  <div className="bg-brand-50/50 rounded-2xl p-4 border border-brand-100 flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      EM
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-neutral-warm-800">Evelyn Miller (Lead Architect)</p>
                      <p className="text-xs text-neutral-warm-600 leading-relaxed">
                        "Your clean abstraction of the component context looks amazing. Let's merge this into production today!"
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-warm-100 flex items-center justify-between text-xs text-neutral-warm-400 font-medium">
                  <span>Current Sponsor: PixelCraft</span>
                  <span className="text-brand-600 font-semibold flex items-center gap-1">
                    Live Session <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. BENEFITS SECTION */}
      <section className="bg-neutral-warm-50/40 border-y border-neutral-warm-200/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Why devMentor?</span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-warm-900 tracking-tight leading-tight">
              Designed Around Student Schedules
            </h2>
            <p className="text-neutral-warm-600 text-base sm:text-lg">
              University is demanding. Our virtual internships are structured to give you high-caliber industrial experience without compromising your studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.04)" }}
                className="bg-white rounded-3xl p-6 border border-neutral-warm-200/50 shadow-xs space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl ${b.bg} flex items-center justify-center`}>
                  {b.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-neutral-warm-900">{b.title}</h3>
                <p className="text-neutral-warm-600 text-sm leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FEATURED CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Choose Your Path</span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-warm-900 tracking-tight">
              Explore Virtual Sectors
            </h2>
            <p className="text-neutral-warm-600 text-base sm:text-lg">
              Click any of our active virtual sectors to view available remote roles, prerequisites, and stipends.
            </p>
          </div>
          <Button
            variant="secondary"
            size="md"
            onClick={() => navigate("/internships")}
            className="flex items-center gap-1.5 shrink-0"
          >
            <span>All Sectors</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4, borderColor: "var(--color-brand-400)", boxShadow: "0 12px 20px -8px rgba(16,185,129,0.15)" }}
              onClick={() => handleCategoryClick(cat)}
              className="bg-white rounded-3xl p-6 border border-neutral-warm-200/60 shadow-xs cursor-pointer flex flex-col justify-between gap-6 group"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${getCategoryColor(cat)}`}>
                  {getCategoryIcon(cat)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-neutral-warm-900 group-hover:text-brand-600 transition-colors">
                    {cat}
                  </h3>
                  <p className="text-xs text-neutral-warm-500 font-semibold mt-1">
                    Active Sponsorship Openings
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm font-bold text-neutral-warm-500 group-hover:text-brand-600 transition-colors">
                <span>Browse Jobs</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="bg-neutral-warm-50/40 border-y border-neutral-warm-200/40 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">The Student Journey</span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-warm-900 tracking-tight leading-tight">
              Four Steps to Graduation
            </h2>
            <p className="text-neutral-warm-600 text-base sm:text-lg">
              Here is how we verify your milestones, connect you with support, and award your career-ready credentials.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line on Desktop */}
            <div className="hidden lg:block absolute top-13 left-[10%] right-[10%] h-px bg-neutral-warm-200 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                  {/* Step Bubble Indicator */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-white border border-neutral-warm-200 flex items-center justify-center shadow-sm text-neutral-warm-800 font-black font-display text-sm relative z-10">
                      {s.number}
                    </div>
                    {/* Tiny decorative pulse dot */}
                    <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-brand-500 rounded-full border-2 border-white" />
                  </div>

                  <div className="space-y-2 max-w-xs">
                    <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                      <div className="p-1 rounded bg-brand-50 flex items-center justify-center">
                        {s.icon}
                      </div>
                      <h3 className="font-display font-bold text-lg text-neutral-warm-900">{s.title}</h3>
                    </div>
                    <p className="text-neutral-warm-600 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Success Stories</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-warm-900 tracking-tight">
            Loved By Student Developers
          </h2>
          <p className="text-neutral-warm-600 text-base sm:text-lg">
            Read how devMentor helped thousands of ambitious individuals break into professional software engineering before graduation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-900 text-white rounded-3xl p-8 sm:p-16 relative overflow-hidden text-center flex flex-col items-center gap-6"
        >
          {/* Subtle design gradients */}
          <div className="absolute top-0 right-0 w-75 h-75 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-75 h-75 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <span className="text-brand-300 text-xs font-black uppercase tracking-widest relative z-10">Start Today</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl max-w-2xl tracking-tight leading-tight relative z-10">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-brand-100 text-base sm:text-lg max-w-lg leading-relaxed relative z-10">
            Applications for our winter cohort close in two weeks. Sign up to secure your mentor slot and starting milestone assignment.
          </p>
          
          <div className="pt-4 relative z-10">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/internships")}
              className="bg-green-500 text-brand-800 hover:bg-brand-50 shadow-lg shadow-black/10 text-base"
            >
              Explore Internships <ArrowRight/>
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
