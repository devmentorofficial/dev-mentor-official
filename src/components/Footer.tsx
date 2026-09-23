import { Link } from "react-router-dom";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";


const logoSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#eef5f8" /><stop offset="20%" stopColor="#718596" /><stop offset="42%" stopColor="#dce7ec" /><stop offset="62%" stopColor="#536b7e" /><stop offset="82%" stopColor="#f5f8fa" /><stop offset="100%" stopColor="#263c57" /></linearGradient><linearGradient id="ribbon" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#062b58" /><stop offset="25%" stopColor="#087fa9" /><stop offset="48%" stopColor="#67d8ed" /><stop offset="68%" stopColor="#087ca7" /><stop offset="100%" stopColor="#082b5d" /></linearGradient><filter id="shadow"><feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#102c4b" floodOpacity=".25" /></filter></defs><g transform="translate(0 4.2) scale(.03)"><path d="M105 145H205C258 145 295 168 316 205C333 236 333 278 316 309C295 347 258 370 205 370H105ZM140 180V335H202C237 335 261 320 276 295C289 272 289 243 276 220C261 195 237 180 202 180Z" fill="url(#metal)" fillRule="evenodd" /><path d="M140 180H200C231 180 254 191 270 211C252 201 232 197 209 197H163V318H202C231 318 253 309 269 293C254 321 231 335 202 335H140Z" fill="#092d56" /><path d="M88 382C130 352 178 342 236 345C298 348 333 326 356 283C375 247 397 225 427 225C457 225 477 246 493 273C509 299 526 316 546 316C565 316 582 298 596 275L627 226L664 249L630 305C608 341 580 363 545 363C506 363 484 340 464 308C451 287 440 274 428 274C415 274 404 289 392 311C365 361 326 390 257 390H88Z" fill="url(#metal)" /><path d="M157 329C191 322 214 301 232 266C251 228 270 194 302 183C334 172 357 193 375 222C394 252 409 276 431 276C453 276 472 250 490 222L558 118L599 143L528 260C503 301 474 329 436 329C397 329 374 300 353 267C339 245 327 231 315 236C301 242 288 263 276 288C252 335 215 356 157 366Z" fill="url(#ribbon)" stroke="#123c68" strokeWidth="3" strokeLinejoin="round" /><path d="M181 329C211 318 229 294 245 261C263 225 278 201 301 195C324 189 342 207 358 233C379 267 396 299 431 300C464 300 485 273 507 238L570 139" fill="none" stroke="#79e0ed" strokeWidth="8" strokeLinecap="round" opacity=".75" /><path d="M196 322C219 309 235 285 249 254C265 219 281 201 301 198" fill="none" stroke="#e4fbff" strokeWidth="4" strokeLinecap="round" /><circle cx="630" cy="83" r="25" fill="none" stroke="#173d68" strokeWidth="7" /><g fill="none" stroke="#173d68" strokeWidth="6" strokeLinecap="round"><path d="M630 58V40" /><path d="M648 64l18-18" /><path d="M655 83h26" /><path d="M647 101l18 18" /><path d="M612 64l-16-16" /><path d="M605 86h-23" /></g><g fill="#173d68"><circle cx="630" cy="37" r="7" /><circle cx="669" cy="43" r="9" /><circle cx="686" cy="83" r="7" /><circle cx="669" cy="123" r="8" /><circle cx="593" cy="46" r="7" /><circle cx="578" cy="86" r="7" /></g><circle cx="593" cy="46" r="5" fill="#54cce1" /><g fill="#c4f5fa"><circle cx="255" cy="251" r="5" /><circle cx="271" cy="224" r="4" /><circle cx="288" cy="204" r="5" /><circle cx="310" cy="199" r="4" /></g><path d="M255 251l16-27 17-20 22-5" fill="none" stroke="#b8f1f8" strokeWidth="2" /></g></svg>);


export default function Footer() {
  return (
    <footer className="bg-neutral-warm-900 text-neutral-warm-100 border-t border-neutral-warm-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Slogan and Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <Link to="/home" className="flex items-center gap-2.5">
              <div className="w-15 h-15 rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform overflow-hidden">
              {logoSvg()}
            </div>
            <span className="font-display font-extrabold text-[1.6em] tracking-tight text-neutral-warm-300">
              dev<span className="text-brand-500">Mentor</span> 
            </span>
            </Link>
            <p className="text-neutral-warm-400 text-base max-w-sm leading-relaxed">
              Gain Real Experience. Work From Anywhere. Connecting ambitious students with flexible, remote, mentorship-backed virtual internships.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-warm-800 flex items-center justify-center hover:bg-brand-500 hover:text-white text-neutral-warm-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-neutral-warm-800 flex items-center justify-center hover:bg-brand-500 hover:text-white text-neutral-warm-400 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-white">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/home" className="text-neutral-warm-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-neutral-warm-400 hover:text-white transition-colors">
                  Browse Internships
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-warm-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-warm-400 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-warm-800 flex items-center justify-center text-brand-500">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:dev.mentor.official@gmail.com" className="text-neutral-warm-400 hover:text-white transition-colors text-sm break-all">
                  dev.mentor.official@gmail.com 
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-warm-800 flex items-center justify-center text-brand-500">
                  <Linkedin className="w-4 h-4" />
                </div>
                <a
                  href="https://linkedin.com/company/devmentor-internships"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-warm-400 hover:text-white transition-colors text-sm break-all"
                >
                  devmentor
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-neutral-warm-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-warm-500">
            © 2026 devMentor. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-warm-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
