import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Upload, CheckCircle2, FileText, Trash2, ArrowRight } from "lucide-react";
import { Internship } from "../data/internships";
import Button from "./Button";

interface ApplicationModalProps {
  internship: Internship | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationModal({ internship, isOpen, onClose }: ApplicationModalProps) {
  if (!internship) return null;

  // Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [skills, setSkills] = useState("");
  const [statement, setStatement] = useState("");
  const [file, setFile] = useState<File | null>(null);
  
  // Validation / Loading / Success States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      if (errors.file) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.file;
          return next;
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      if (errors.file) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next.file;
          return next;
        });
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Basic Form Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{8,15}$/.test(phone.trim())) {
      newErrors.phone = "Phone number is invalid (must be 8-15 digits)";
    }
    if (!university.trim()) newErrors.university = "College/University is required";
    if (!skills.trim()) newErrors.skills = "Please list your core technical skills";
    if (!statement.trim()) {
      newErrors.statement = "Please explain why you are interested in this role";
    } else if (statement.trim().length < 50) {
      newErrors.statement = "Please provide a more detailed statement (min 50 characters)";
    }
    if (!file) {
      newErrors.file = "Please upload your resume (PDF or DOCX)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate standard frontend API submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleResetAndClose = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setUniversity("");
    setSkills("");
    setStatement("");
    setFile(null);
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Darker backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-neutral-warm-900/40 backdrop-blur-sm"
          />

          {/* Modal card container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto z-10 border border-neutral-warm-100 flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-neutral-warm-100 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Applying for
                </span>
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-neutral-warm-900 mt-1">
                  {internship.title}
                </h2>
                <p className="text-sm text-neutral-warm-500 font-medium">
                  at {internship.company} • {internship.duration}
                </p>
              </div>
              
              <button
                onClick={handleResetAndClose}
                className="p-2.5 rounded-full hover:bg-neutral-warm-100 text-neutral-warm-400 hover:text-neutral-warm-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5.5 h-5.5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="application-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    noValidate
                  >
                    
                    {/* Grid Name / Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="block text-sm font-semibold text-neutral-warm-700">
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border ${
                            errors.fullName ? "border-red-400 focus:ring-red-200" : "border-neutral-warm-200 focus:ring-brand-500/20"
                          } focus:border-brand-500 focus:outline-none focus:ring-4 transition-all bg-neutral-warm-50/50 text-base`}
                          placeholder="Jane Doe"
                        />
                        {errors.fullName && (
                          <p className="text-sm text-red-500 font-medium mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      {/* Email */}
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
                          placeholder="jane.doe@university.edu"
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500 font-medium mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Grid Phone / University */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-sm font-semibold text-neutral-warm-700">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border ${
                            errors.phone ? "border-red-400 focus:ring-red-200" : "border-neutral-warm-200 focus:ring-brand-500/20"
                          } focus:border-brand-500 focus:outline-none focus:ring-4 transition-all bg-neutral-warm-50/50 text-base`}
                          placeholder="+1 (555) 019-2834"
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500 font-medium mt-1">{errors.phone}</p>
                        )}
                      </div>

                      {/* University */}
                      <div className="space-y-1.5">
                        <label htmlFor="university" className="block text-sm font-semibold text-neutral-warm-700">
                          College or University *
                        </label>
                        <input
                          id="university"
                          type="text"
                          value={university}
                          onChange={(e) => setUniversity(e.target.value)}
                          className={`w-full px-4 py-3 rounded-2xl border ${
                            errors.university ? "border-red-400 focus:ring-red-200" : "border-neutral-warm-200 focus:ring-brand-500/20"
                          } focus:border-brand-500 focus:outline-none focus:ring-4 transition-all bg-neutral-warm-50/50 text-base`}
                          placeholder="Stanford University"
                        />
                        {errors.university && (
                          <p className="text-sm text-red-500 font-medium mt-1">{errors.university}</p>
                        )}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-1.5">
                      <label htmlFor="skills" className="block text-sm font-semibold text-neutral-warm-700">
                        Key Skills (comma separated) *
                      </label>
                      <input
                        id="skills"
                        type="text"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          errors.skills ? "border-red-400 focus:ring-red-200" : "border-neutral-warm-200 focus:ring-brand-500/20"
                        } focus:border-brand-500 focus:outline-none focus:ring-4 transition-all bg-neutral-warm-50/50 text-base`}
                        placeholder="React, CSS, TypeScript, Figma"
                      />
                      {errors.skills && (
                        <p className="text-sm text-red-500 font-medium mt-1">{errors.skills}</p>
                      )}
                    </div>

                    {/* Drag & Drop Resume */}
                    <div className="space-y-1.5">
                      <label className="block text-sm font-semibold text-neutral-warm-700">
                        Upload Resume * (PDF or DOCX)
                      </label>
                      
                      {!file ? (
                        <div
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                          onClick={triggerFileSelect}
                          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                            dragActive
                              ? "border-brand-500 bg-brand-50/50"
                              : errors.file
                              ? "border-red-300 bg-red-50/10 hover:bg-red-50/20"
                              : "border-neutral-warm-200 bg-neutral-warm-50/20 hover:bg-neutral-warm-50/60"
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                          />
                          <Upload className={`w-8 h-8 mx-auto mb-2 ${errors.file ? "text-red-400 animate-pulse" : "text-neutral-warm-400"}`} />
                          <p className="text-sm font-semibold text-neutral-warm-800">
                            Drag and drop your file here, or <span className="text-brand-600 underline">browse</span>
                          </p>
                          <p className="text-xs text-neutral-warm-500 mt-1">
                            Supports PDF, DOC, DOCX up to 5MB
                          </p>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between p-4 border border-brand-100 bg-brand-50/30 rounded-2xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-neutral-warm-800 line-clamp-1 max-w-62.5 sm:max-w-md">
                                {file.name}
                              </p>
                              <p className="text-xs text-neutral-warm-500">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeFile}
                            className="p-2 rounded-xl text-neutral-warm-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                            aria-label="Remove uploaded resume"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      )}

                      {errors.file && (
                        <p className="text-sm text-red-500 font-medium mt-1">{errors.file}</p>
                      )}
                    </div>

                    {/* Statement of Interest */}
                    <div className="space-y-1.5">
                      <label htmlFor="statement" className="block text-sm font-semibold text-neutral-warm-700">
                        Why are you interested in this internship? *
                      </label>
                      <textarea
                        id="statement"
                        rows={4}
                        value={statement}
                        onChange={(e) => setStatement(e.target.value)}
                        className={`w-full px-4 py-3 rounded-2xl border ${
                          errors.statement ? "border-red-400 focus:ring-red-200" : "border-neutral-warm-200 focus:ring-brand-500/20"
                        } focus:border-brand-500 focus:outline-none focus:ring-4 transition-all bg-neutral-warm-50/50 text-base`}
                        placeholder="Explain your motivation, relevant experience, and what you hope to learn from devMentor."
                      />
                      <div className="flex justify-between items-center text-xs text-neutral-warm-500 mt-1">
                        <span>Min 50 characters required</span>
                        <span className={statement.trim().length >= 50 ? "text-brand-600 font-semibold" : "text-neutral-warm-400"}>
                          {statement.trim().length} characters
                        </span>
                      </div>
                      {errors.statement && (
                        <p className="text-sm text-red-500 font-medium mt-1">{errors.statement}</p>
                      )}
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex justify-end gap-3 pt-4 border-t border-neutral-warm-100">
                      <Button
                        variant="outline"
                        onClick={handleResetAndClose}
                        disabled={isSubmitting}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                        className="min-w-35"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="py-12 px-4 text-center space-y-6 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center text-brand-500 shadow-inner animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-neutral-warm-900">
                        Application Submitted!
                      </h3>
                      <p className="text-neutral-warm-600 text-base max-w-md mx-auto">
                        Thank you for applying to the <span className="font-bold text-brand-600">{internship.title}</span> role at <span className="font-semibold">{internship.company}</span>.
                      </p>
                    </div>

                    <div className="p-4 bg-neutral-warm-50 rounded-2xl text-left max-w-md space-y-2.5 border border-neutral-warm-100 text-sm text-neutral-warm-600">
                      <p className="font-bold text-neutral-warm-800">What happens next?</p>
                      <p>1. Our academic reviewing panel will screen your profile and resume.</p>
                      <p>2. A decision or interview request will be sent to <span className="font-medium text-neutral-warm-800">{email}</span> within 3-5 business days.</p>
                      <p>3. If approved, you will be connected with your dedicated industry mentor to begin onboarding.</p>
                    </div>

                    <div className="pt-4">
                      <Button
                        variant="primary"
                        onClick={handleResetAndClose}
                        className="flex items-center gap-1.5"
                      >
                        Return to Listings
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
