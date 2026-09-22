import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  university: string;
  quote: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Color background helper for testimonial avatars
  const getAvatarColor = (name: string) => {
    const charCodeSum = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const colors = [
      "bg-emerald-100 text-emerald-700",
      "bg-teal-100 text-teal-700",
      "bg-blue-100 text-blue-700",
      "bg-purple-100 text-purple-700",
      "bg-indigo-100 text-indigo-700"
    ];
    return colors[charCodeSum % colors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-8 border border-neutral-warm-200/50 shadow-sm relative flex flex-col justify-between gap-6"
    >
      {/* Decorative quotes background */}
      <div className="absolute top-6 right-6 text-neutral-warm-100 select-none">
        <Quote className="w-12 h-12 rotate-180" />
      </div>

      <div className="space-y-4 relative z-10">
        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-neutral-warm-700 text-base leading-relaxed italic">
          "{testimonial.quote}"
        </p>
      </div>

      {/* User profile */}
      <div className="flex items-center gap-3.5 border-t border-neutral-warm-100/60 pt-4">
        {/* Initial Avatar */}
        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm ${getAvatarColor(testimonial.name)}`}>
          {testimonial.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <h4 className="font-display font-bold text-neutral-warm-900 text-base">
            {testimonial.name}
          </h4>
          <p className="text-xs text-neutral-warm-500 font-semibold">
            {testimonial.role} • {testimonial.university}
          </p>
        </div>
      </div>

    </motion.div>
  );
}
export type { Testimonial };
