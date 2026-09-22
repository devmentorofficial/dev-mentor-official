import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Globe, CheckCircle2, ChevronDown, ChevronUp, Send } from "lucide-react";
import Button from "../components/Button";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function Contact() {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  // Interaction states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // FAQ states
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq-1");

  // FAQ data
  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "Are these virtual internships open to students globally?",
      answer: "Yes, devMentor is a fully remote global platform. Any enrolled university student or self-taught developer over the age of 18 can browse, apply, and match with an industry mentor, regardless of physical location."
    },
    {
      id: "faq-2",
      question: "What is the expected weekly hourly commitment?",
      answer: "Most virtual internships are highly flexible and designed to take between 10 to 15 hours per week. You can coordinate milestones with your senior mentor to scale down during finals, exams, or intensive academic periods."
    },
    {
      id: "faq-3",
      question: "Are these roles paid or unpaid?",
      answer: "We support both paid and unpaid (college credit/mentorship focus) internships. Each listing clearly displays its stipend amount (e.g. $600/month) or college credit badge so there is full transparency before you apply."
    },
    {
      id: "faq-4",
      question: "What happens after I submit my application?",
      answer: "Sponsors review applications within 3-5 business days. If shortlisted, you will receive an invitation email to set up a brief onboarding video call with your assigned mentor to discuss your coding milestones and setup."
    }
  ];

  // Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Your name is required";
    if (!email.trim()) {
      newErrors.email = "Your email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!subject.trim()) newErrors.subject = "Please enter a subject";
    if (!message.trim()) {
      newErrors.message = "Message text cannot be empty";
    } else if (message.trim().length < 20) {
      newErrors.message = "Please enter a slightly longer message (min 20 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
    }, 1500);
  };

  const toggleFaq = (id: string) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden pt-12 md:pt-16 lg:pt-24 text-center sm:mt-5 mt-10">
        <div className="absolute top-20 right-[-10%] w-87.5 h-87.5 rounded-full bg-brand-50/40 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-neutral-warm-900 tracking-tight leading-tight">
            We're Here to Help You Grow
          </h1>
          <p className="text-neutral-warm-600 text-base sm:text-lg max-w-2xl mx-auto">
            Have questions about virtual slots, onboarding, company sponsorships, or verification certificates? Shoot us a message or contact our team directly.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Support channels Info */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-warm-900">
              Direct Support Channels
            </h2>
            <p className="text-neutral-warm-600 text-sm leading-relaxed">
              Skip the contact queue entirely by emailing our platform operations desks directly, or connect with our corporate outreach pages on LinkedIn.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email card */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-warm-200/50 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                <Mail className="w-5.5 h-5.5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-neutral-warm-400 uppercase tracking-wider">Email Us</p>
                <a href="mailto:hello@devmentor.edu" className="text-neutral-warm-800 font-bold hover:text-brand-600 transition-colors block text-base">
                  hello@devmentor.edu
                </a>
                <p className="text-xs text-neutral-warm-500">We typically reply within 12-24 business hours.</p>
              </div>
            </div>

            {/* LinkedIn card */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-warm-200/50 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                <Linkedin className="w-5.5 h-5.5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-neutral-warm-400 uppercase tracking-wider">LinkedIn</p>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-warm-800 font-bold hover:text-brand-600 transition-colors block text-base"
                >
                  devmentor
                </a>
                <p className="text-xs text-neutral-warm-500">Follow for tech industry tips, hiring news, and panels.</p>
              </div>
            </div>

            {/* Global Remote card */}
            <div className="bg-white rounded-3xl p-6 border border-neutral-warm-200/50 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                <Globe className="w-5.5 h-5.5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-neutral-warm-400 uppercase tracking-wider">Corporate Headquarters</p>
                <p className="text-neutral-warm-800 font-bold text-base">Fully Distributed Startup</p>
                <p className="text-xs text-neutral-warm-500">Registered operations globally. Made for the remote workforce.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Contact Form card */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-neutral-warm-200/60 shadow-xs">
          
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-xl text-neutral-warm-900">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-neutral-warm-500">
                    Use this secure portal to query our review desk directly.
                  </p>
                </div>

                {/* Grid Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-warm-700">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.name ? "border-red-400 focus:ring-red-200" : "border-neutral-warm-200 focus:ring-brand-500/20"
                      } focus:border-brand-500 focus:outline-none focus:ring-4 transition-all bg-neutral-warm-50/50 text-base`}
                      placeholder="Alex Mercer"
                    />
                    {errors.name && <p className="text-xs text-red-500 font-semibold mt-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-warm-700">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 rounded-2xl border ${
                        errors.email ? "border-red-400 focus:ring-red-200" : "border-neutral-warm-200 focus:ring-brand-500/20"
                      } focus:border-brand-500 focus:outline-none focus:ring-4 transition-all bg-neutral-warm-50/50 text-base`}
                      placeholder="alex@university.edu"
                    />
                    {errors.email && <p className="text-xs text-red-500 font-semibold mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-warm-700">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.subject ? "border-red-400 focus:ring-red-200" : "border-neutral-warm-200 focus:ring-brand-500/20"
                    } focus:border-brand-500 focus:outline-none focus:ring-4 transition-all bg-neutral-warm-50/50 text-base`}
                    placeholder="e.g. Onboarding Questions, Corporate Sponsor Proposal"
                  />
                  {errors.subject && <p className="text-xs text-red-500 font-semibold mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-warm-700">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-4 py-3 rounded-2xl border ${
                      errors.message ? "border-red-400 focus:ring-red-200" : "border-neutral-warm-200 focus:ring-brand-500/20"
                    } focus:border-brand-500 focus:outline-none focus:ring-4 transition-all bg-neutral-warm-50/50 text-base`}
                    placeholder="Write your complete query details here..."
                  />
                  {errors.message && <p className="text-xs text-red-500 font-semibold mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5"
                  >
                    {isSubmitting ? (
                      "Sending message..."
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 shadow-inner animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl text-neutral-warm-900">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-neutral-warm-600 text-base max-w-sm mx-auto">
                    Thanks for reaching out! A member of the devMentor support team will analyze your query and follow up directly.
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </section>

      {/* 3. FAQ SECTION */}
      <section className="bg-neutral-warm-50/40 border-y border-neutral-warm-200/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Got Questions?</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-neutral-warm-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-warm-600 text-sm sm:text-base">
              Find quick answers to common structural, academic, and compensation queries.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 pt-4">
            {faqs.map((faq) => {
              const isActive = activeFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-neutral-warm-200/50 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-neutral-warm-950 text-base select-none hover:bg-neutral-warm-50/50 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    {isActive ? (
                      <ChevronUp className="w-5 h-5 text-neutral-warm-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-neutral-warm-400 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-neutral-warm-600 leading-relaxed border-t border-neutral-warm-100/30">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
