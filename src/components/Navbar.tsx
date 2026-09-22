import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); 
  
  if (location.pathname === "/") {
    return null;
  }

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Internships", path: "/internships" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const logoSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#eef5f8" /><stop offset="20%" stopColor="#718596" /><stop offset="42%" stopColor="#dce7ec" /><stop offset="62%" stopColor="#536b7e" /><stop offset="82%" stopColor="#f5f8fa" /><stop offset="100%" stopColor="#263c57" /></linearGradient><linearGradient id="ribbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#062b58" /><stop offset="25%" stopColor="#087fa9" /><stop offset="48%" stopColor="#67d8ed" /><stop offset="68%" stopColor="#087ca7" /><stop offset="100%" stopColor="#082b5d" /></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#102c4b" floodOpacity=".25" /></filter></defs><g transform="translate(0 4.2) scale(.03)"><path d="M105 145H205C258 145 295 168 316 205C333 236 333 278 316 309C295 347 258 370 205 370H105ZM140 180V335H202C237 335 261 320 276 295C289 272 289 243 276 220C261 195 237 180 202 180Z" fill="url(#metal)" fillRule="evenodd" /><path d="M140 180H200C231 180 254 191 270 211C252 201 232 197 209 197H163V318H202C231 318 253 309 269 293C254 321 231 335 202 335H140Z" fill="#092d56" /><path d="M88 382C130 352 178 342 236 345C298 348 333 326 356 283C375 247 397 225 427 225C457 225 477 246 493 273C509 299 526 316 546 316C565 316 582 298 596 275L627 226L664 249L630 305C608 341 580 363 545 363C506 363 484 340 464 308C451 287 440 274 428 274C415 274 404 289 392 311C365 361 326 390 257 390H88Z" fill="url(#metal)" /><path d="M157 329C191 322 214 301 232 266C251 228 270 194 302 183C334 172 357 193 375 222C394 252 409 276 431 276C453 276 472 250 490 222L558 118L599 143L528 260C503 301 474 329 436 329C397 329 374 300 353 267C339 245 327 231 315 236C301 242 288 263 276 288C252 335 215 356 157 366Z" fill="url(#ribbon)" stroke="#123c68" strokeWidth="3" strokeLinejoin="round" /><path d="M181 329C211 318 229 294 245 261C263 225 278 201 301 195C324 189 342 207 358 233C379 267 396 299 431 300C464 300 485 273 507 238L570 139" fill="none" stroke="#79e0ed" strokeWidth="8" strokeLinecap="round" opacity=".75" /><path d="M196 322C219 309 235 285 249 254C265 219 281 201 301 198" fill="none" stroke="#e4fbff" strokeWidth="4" strokeLinecap="round" /><circle cx="630" cy="83" r="25" fill="none" stroke="#173d68" strokeWidth="7" /><g fill="none" stroke="#173d68" strokeWidth="6" strokeLinecap="round"><path d="M630 58V40" /><path d="M648 64l18-18" /><path d="M655 83h26" /><path d="M647 101l18 18" /><path d="M612 64l-16-16" /><path d="M605 86h-23" /></g><g fill="#173d68"><circle cx="630" cy="37" r="7" /><circle cx="669" cy="43" r="9" /><circle cx="686" cy="83" r="7" /><circle cx="669" cy="123" r="8" /><circle cx="593" cy="46" r="7" /><circle cx="578" cy="86" r="7" /></g><circle cx="593" cy="46" r="5" fill="#54cce1" /><g fill="#c4f5fa"><circle cx="255" cy="251" r="5" /><circle cx="271" cy="224" r="4" /><circle cx="288" cy="204" r="5" /><circle cx="310" cy="199" r="4" /></g><path d="M255 251l16-27 17-20 22-5" fill="none" stroke="#b8f1f8" strokeWidth="2" /></g></svg>);

  return (
    <nav className="top-0 z-40 w-full bg-white/20 backdrop-blur-[20px] border-b border-neutral-warm-100  fixed shadow-sm">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">  
  
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2.5 group">
            <div className="w-15 h-15 rounded-xl flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform overflow-hidden">
              {logoSvg()}
            </div>
            <span className="font-display font-extrabold text-[1.6em] tracking-tight text-neutral-warm-600">
              dev<span className="text-brand-500">Mentor</span> 
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-base font-medium transition-colors cursor-pointer select-none ${isActive
                    ? "text-brand-600 font-semibold"
                    : "text-neutral-warm-600 hover:text-neutral-warm-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/contact")}
            >
              Ask Mentors
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate("/internships")}
              className="flex items-center gap-1.5"
            >
              Browse Internships
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-neutral-warm-600 hover:text-neutral-warm-900 hover:bg-neutral-warm-100/50 transition-colors cursor-pointer focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30 bg-neutral-warm-900/10 backdrop-blur-xs md:hidden"
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.15 }}
              className="absolute top-20 left-0 right-0 z-30 bg-white border-b border-neutral-warm-100 shadow-xl px-4 py-6 md:hidden flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-lg font-medium transition-colors ${isActive
                        ? "bg-brand-50 text-brand-700 font-semibold"
                        : "text-neutral-warm-600 hover:text-neutral-warm-900 hover:bg-neutral-warm-50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <div className="border-t border-neutral-warm-100 pt-5 flex flex-col gap-3">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/contact");
                  }}
                >
                  Ask Mentors
                </Button>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/internships");
                  }}
                  className="flex items-center justify-center gap-1.5"
                >
                  Browse Internships
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
