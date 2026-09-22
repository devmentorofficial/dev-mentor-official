import { motion } from "motion/react";
import { Calendar, MapPin, DollarSign, Award, ArrowUpRight } from "lucide-react";
import { Internship } from "../data/internships";
import Button from "./Button";

interface InternshipCardProps {
  internship: Internship;
  onApply: (internship: Internship) => void;
} 

export default function InternshipCard({ internship, onApply }: InternshipCardProps) {
  // Generate a reliable initial logo container background gradient based on company name hash
  const getGradientClass = (name: string) => {
    const charCodeSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const gradients = [
      "from-teal-400 to-emerald-500",
      "from-blue-400 to-indigo-500",
      "from-emerald-400 to-brand-500",
      "from-sky-400 to-blue-500",
      "from-cyan-400 to-blue-500"
    ];
    return gradients[charCodeSum % gradients.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.02)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl p-6 border border-neutral-warm-200/60 shadow-xs flex flex-col justify-between gap-6"
    >
      <div className="space-y-4">
        {/* Top Section: Company Logo Placeholder & Badges */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Mock Company Logo */}
            <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${getGradientClass(internship.company)} flex items-center justify-center text-white font-bold text-lg shadow-sm`}>
              {internship.company.charAt(0)}
            </div>
            <div>
              <h4 className="font-semibold text-neutral-warm-800 text-sm tracking-wide">
                {internship.company}
              </h4>
              <div className="flex items-center gap-1.5 text-xs text-neutral-warm-400 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{internship.location}</span>
              </div>
            </div>
          </div>

          {/* Level Badge */}
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
            internship.level === "Beginner" 
              ? "bg-brand-50 text-brand-700" 
              : internship.level === "Intermediate"
              ? "bg-blue-50 text-blue-700"
              : "bg-purple-50 text-purple-700"
          }`}>
            {internship.level}
          </span>
        </div>

        {/* Title and Description */}
        <div className="space-y-2">
          <h3 className="font-display font-bold text-lg sm:text-xl text-neutral-warm-900 leading-snug group-hover:text-brand-600 transition-colors">
            {internship.title}
          </h3>
          <p className="text-neutral-warm-600 text-sm leading-relaxed line-clamp-3">
            {internship.description}
          </p>
        </div>

        {/* Quick Parameters */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs font-semibold text-neutral-warm-500 border-t border-neutral-warm-100">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-neutral-warm-400" />
            <span>{internship.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-neutral-warm-400" />
            <span className={internship.type === "Paid" ? "text-brand-600" : "text-neutral-warm-400"}>
              {internship.stipend}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-neutral-warm-400" />
            <span>Certificate Included</span>
          </div>
        </div>

        {/* Skills Required */}
        <div className="space-y-1.5">
          <p className="text-[11px] uppercase tracking-wider font-extrabold text-neutral-warm-400">
            Skills Required
          </p>
          <div className="flex flex-wrap gap-1.5">
            {internship.skills.map((skill) => (
              <span
                key={skill}
                className="bg-neutral-warm-50 text-neutral-warm-600 px-2.5 py-1 rounded-lg text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-neutral-warm-100/50 mt-auto">
        <span className="text-xs text-neutral-warm-400 font-medium">
          Posted {internship.postedDate}
        </span>
        <Button
          variant="primary"
          size="sm"
          onClick={() => onApply(internship)}
          className="flex items-center gap-1 group/btn"
        >
          <span>Apply Now</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
