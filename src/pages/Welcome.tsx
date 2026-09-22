import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Code, Sparkles, BrainCircuit } from "lucide-react";
import Button from "../components/Button";

export default function Welcome() {
  const navigate = useNavigate();
  const logoSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#eef5f8" /><stop offset="20%" stopColor="#718596" /><stop offset="42%" stopColor="#dce7ec" /><stop offset="62%" stopColor="#536b7e" /><stop offset="82%" stopColor="#f5f8fa" /><stop offset="100%" stopColor="#263c57" /></linearGradient><linearGradient id="ribbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#062b58" /><stop offset="25%" stopColor="#087fa9" /><stop offset="48%" stopColor="#67d8ed" /><stop offset="68%" stopColor="#087ca7" /><stop offset="100%" stopColor="#082b5d" /></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#102c4b" floodOpacity=".25" /></filter></defs><g transform="translate(0 4.2) scale(.03)"><path d="M105 145H205C258 145 295 168 316 205C333 236 333 278 316 309C295 347 258 370 205 370H105ZM140 180V335H202C237 335 261 320 276 295C289 272 289 243 276 220C261 195 237 180 202 180Z" fill="url(#metal)" fillRule="evenodd" /><path d="M140 180H200C231 180 254 191 270 211C252 201 232 197 209 197H163V318H202C231 318 253 309 269 293C254 321 231 335 202 335H140Z" fill="#092d56" /><path d="M88 382C130 352 178 342 236 345C298 348 333 326 356 283C375 247 397 225 427 225C457 225 477 246 493 273C509 299 526 316 546 316C565 316 582 298 596 275L627 226L664 249L630 305C608 341 580 363 545 363C506 363 484 340 464 308C451 287 440 274 428 274C415 274 404 289 392 311C365 361 326 390 257 390H88Z" fill="url(#metal)" /><path d="M157 329C191 322 214 301 232 266C251 228 270 194 302 183C334 172 357 193 375 222C394 252 409 276 431 276C453 276 472 250 490 222L558 118L599 143L528 260C503 301 474 329 436 329C397 329 374 300 353 267C339 245 327 231 315 236C301 242 288 263 276 288C252 335 215 356 157 366Z" fill="url(#ribbon)" stroke="#123c68" strokeWidth="3" strokeLinejoin="round" /><path d="M181 329C211 318 229 294 245 261C263 225 278 201 301 195C324 189 342 207 358 233C379 267 396 299 431 300C464 300 485 273 507 238L570 139" fill="none" stroke="#79e0ed" strokeWidth="8" strokeLinecap="round" opacity=".75" /><path d="M196 322C219 309 235 285 249 254C265 219 281 201 301 198" fill="none" stroke="#e4fbff" strokeWidth="4" strokeLinecap="round" /><circle cx="630" cy="83" r="25" fill="none" stroke="#173d68" strokeWidth="7" /><g fill="none" stroke="#173d68" strokeWidth="6" strokeLinecap="round"><path d="M630 58V40" /><path d="M648 64l18-18" /><path d="M655 83h26" /><path d="M647 101l18 18" /><path d="M612 64l-16-16" /><path d="M605 86h-23" /></g><g fill="#173d68"><circle cx="630" cy="37" r="7" /><circle cx="669" cy="43" r="9" /><circle cx="686" cy="83" r="7" /><circle cx="669" cy="123" r="8" /><circle cx="593" cy="46" r="7" /><circle cx="578" cy="86" r="7" /></g><circle cx="593" cy="46" r="5" fill="#54cce1" /><g fill="#c4f5fa"><circle cx="255" cy="251" r="5" /><circle cx="271" cy="224" r="4" /><circle cx="288" cy="204" r="5" /><circle cx="310" cy="199" r="4" /></g><path d="M255 251l16-27 17-20 22-5" fill="none" stroke="#b8f1f8" strokeWidth="2" /></g></svg>);


  return (
    <div className="relative min-h-screen bg-[#fdfdfc] flex flex-col justify-between overflow-hidden">
      
      {/* Decorative subtle floating backgrounds */} 
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-50/40 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-50/30 blur-[120px] pointer-events-none" />

      {/* Floating abstract code bubbles to set a professional developer context */}
      <div className="hidden lg:block absolute top-[25%] left-[12%] animate-float pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-neutral-warm-200/50 shadow-md flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
            <Code className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-neutral-warm-800">const intern = {'{'}</p>
            <p className="text-[10px] text-brand-600 font-mono pl-4">skills: ["React", "AI"]</p>
            <p className="text-xs font-bold text-neutral-warm-800">{'}'}</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-[25%] right-[12%] animate-float-reverse pointer-events-none">
        <div className="bg-white/80 backdrop-blur-md px-5 py-4.5 rounded-2xl border border-neutral-warm-200/50 shadow-md flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-500">
            <BrainCircuit className="w-5.5 h-5.5" />
          </div>
          <div>
            <p className="text-xs font-extrabold text-neutral-warm-800">Mentor Sync</p>
            <p className="text-[10px] text-neutral-warm-500 font-medium">Daily Onboarding Review</p>
          </div>
        </div>
      </div>

      {/* Header (Minimal) */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-15 h-15 rounded-xl flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform overflow-hidden">
              {logoSvg()}
            </div>
            <span className="font-display font-extrabold text-[1.6em] tracking-tight text-neutral-warm-600">
              dev<span className="text-brand-500">Mentor</span> 
            </span>
        </div>
        <button
          onClick={() => navigate("/home")}
          className="text-sm font-semibold text-neutral-warm-600 hover:text-brand-600 transition-colors cursor-pointer"
        >
          Skip Intro
        </button>
      </header>

      {/* Hero Welcome content */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 max-w-4xl mx-auto text-center z-10">
        
        {/* Sparkle badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flexible Remote Learning Ecosystem</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-neutral-warm-900 tracking-tight leading-[1.05] max-w-3xl"
        >
          Start Your Career. <br />
          <span className="text-brand-500 relative inline-block">
            Gain Real Experience.
          </span> <br />
          Work From Anywhere.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-neutral-warm-600 text-base sm:text-xl max-w-2xl mt-8 leading-relaxed font-medium"
        >
          devMentor connects ambitious student developers with immersive, remote-first virtual internships, direct senior engineering mentors, and resume-ready practical experience.
        </motion.p>

        {/* Large CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/home")}
            className="group flex items-center gap-2 px-10 py-4 text-base shadow-lg shadow-brand-500/25"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/about")}
            className="px-8 py-4"
          >
            Learn How It Works
          </Button>
        </motion.div>

      </main>

      {/* Footer (Minimal) */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 text-center text-xs text-neutral-warm-400 font-medium z-10">
        <p>© 2026 devMentor Platform. Built for developers by industry mentors.</p>
      </footer>

    </div>
  );
}
