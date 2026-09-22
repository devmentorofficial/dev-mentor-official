import { motion } from "motion/react";
import {Award, Heart, CheckCircle, Users } from "lucide-react";

export default function About() {
  
  const mentors = [
    {
      initials: "EM",
      name: "Evelyn Miller",
      role: "Lead Software Architect",
      company: "Google Cloud",
      text: "With over 12 years of core infrastructure experience, Evelyn mentors devMentor web teams on building clean API routes, security schemas, and durable data structures."
    },
    {
      initials: "DK",
      name: "David Kim",
      role: "Senior UX Designer",
      company: "Figma",
      text: "David leads our design mentoring track. He focuses on helping students craft mathematical typography hierarchies, conduct usability audits, and build standard design tokens."
    },
    {
      initials: "AP",
      name: "Anjali Patel",
      role: "Lead Data Scientist",
      company: "Netflix",
      text: "Anjali coordinates data science and analytical tracks. She helps students translate raw telemetry into robust data schemas, tabular visualizers, and predictive models."
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* 1. MISSION HERO */}
      <section className="relative overflow-hidden pt-12 md:pt-16 lg:pt-24">
        <div className="absolute top-20 left-[-10%] w-87.5 h-87.5 rounded-full bg-brand-50/40 blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full">
            Our Mission & Vision
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl text-neutral-warm-900 tracking-tight leading-tight">
            Democratizing Access to Tech Careers
          </h1>
          <p className="text-neutral-warm-600 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-medium">
            At devMentor, we believe your geographical location, family pedigree, or academic background should never be a barrier to launching an extraordinary software career.
          </p>
        </div>
      </section>

      {/* 2. THE PROBLEM VS OUR SOLUTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        
        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-neutral-warm-50/50 rounded-3xl p-8 border border-neutral-warm-200/50 flex flex-col justify-between gap-6"
        >
          <div className="space-y-4">
            <span className="text-red-600 text-xs font-bold uppercase tracking-wider">The Problem</span>
            <h3 className="font-display font-bold text-2xl text-neutral-warm-900">
              The Broken Internship Funnel
            </h3>
            <p className="text-neutral-warm-600 text-sm leading-relaxed">
              Traditional engineering internships are rigid, geographically locked, and intensely competitive. Eager students face several systemic hurdles:
            </p>
            <ul className="space-y-3 pt-2 text-sm text-neutral-warm-600">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold">✕</span>
                <span>Requires costly relocation or long commutes to tech hubs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold">✕</span>
                <span>Unforgiving full-time hours clash with academic schedules</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-bold">✕</span>
                <span>Sub-par tasks that involve zero real production contribution</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Our Solution */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-brand-50/25 rounded-3xl p-8 border border-brand-100 flex flex-col justify-between gap-6"
        >
          <div className="space-y-4">
            <span className="text-brand-700 text-xs font-bold uppercase tracking-wider">Our Solution</span>
            <h3 className="font-display font-bold text-2xl text-neutral-warm-900">
              Virtual, Mentor-Guided Tracks
            </h3>
            <p className="text-neutral-warm-600 text-sm leading-relaxed">
              devMentor rebuilds the internship experience from the ground up to be remote-first, flexible, and strictly educational:
            </p>
            <ul className="space-y-3 pt-2 text-sm text-neutral-warm-600">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-brand-600 shrink-0 mt-0.5" />
                <span>Work from anywhere in the world, around your course load</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-brand-600 shrink-0 mt-0.5" />
                <span>Pair with veteran engineers for 1-on-1 feedback</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-brand-600 shrink-0 mt-0.5" />
                <span>Receive cryptographic certificates linked to actual code PRs</span>
              </li>
            </ul>
          </div>
        </motion.div>

      </section>

      {/* 3. CORE BENEFITS FOR STUDENTS */}
      <section className="bg-neutral-warm-50/40 border-y border-neutral-warm-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Student First</span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-warm-900 tracking-tight leading-tight">
              Value That Stays with You
            </h2>
            <p className="text-neutral-warm-600 text-base">
              Here is how participating in our virtual internship platform transforms your career readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-3xl p-6 border border-neutral-warm-200/40 shadow-xs space-y-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-warm-900">
                Portfolio of Real Code
              </h3>
              <p className="text-neutral-warm-600 text-sm leading-relaxed">
                No mock problems. You write production-grade TypeScript components, optimize SQL queries, and design layouts that sponsors deploy.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-neutral-warm-200/40 shadow-xs space-y-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-warm-900">
                Elite Industry Network
              </h3>
              <p className="text-neutral-warm-600 text-sm leading-relaxed">
                Connect directly with engineering leads and designers from leading tech corporations. Gain references that hiring managers respect.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-neutral-warm-200/40 shadow-xs space-y-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-neutral-warm-900">
                Resume Confidence
              </h3>
              <p className="text-neutral-warm-600 text-sm leading-relaxed">
                Graduating with actual remote-work experience and verifiable milestones dramatically reduces initial screening fatigue from recruiters.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. THE MENTOR PANEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Our Experts</span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-neutral-warm-900 tracking-tight">
            Learn From Industry Leaders
          </h2>
          <p className="text-neutral-warm-600 text-base sm:text-lg">
            Our reviewing and guidance panel connects you with staff engineers and designers from top brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-neutral-warm-200/60 shadow-xs space-y-4 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-500 text-white flex items-center justify-center font-display font-bold text-base shadow-sm">
                  {m.initials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-neutral-warm-900 text-base">{m.name}</h4>
                  <p className="text-xs text-brand-600 font-semibold">{m.role} at {m.company}</p>
                </div>
              </div>
              <p className="text-neutral-warm-600 text-sm leading-relaxed">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );
}
