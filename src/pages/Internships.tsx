import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { EyeOff} from "lucide-react";
import { mockInternships, Internship } from "../data/internships";
import InternshipCard from "../components/InternshipCard";
import InternshipFilters from "../components/InternshipFilters";
import ApplicationModal from "../components/ApplicationModal";
import Button from "../components/Button";

interface FilterState {
  search: string;
  category: string;
  duration: string;
  level: string;
  type: string;
}

const initialFilters: FilterState = {
  search: "",
  category: "",
  duration: "",
  level: "",
  type: ""
};

export default function Internships() {
  const location = useLocation();
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Listen for navigation state (e.g., clicking a category on the Home page)
  useEffect(() => {
    if (location.state && (location.state as any).category) {
      setFilters((prev) => ({
        ...prev,
        category: (location.state as any).category
      }));
      // Clear location state to prevent locking the filter on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Reset Filters handler
  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  // Filter application logic
  const filteredInternships = mockInternships.filter((internship) => {
    // 1. Search text match (Role, Company, or individual Skills)
    if (filters.search.trim()) {
      const query = filters.search.toLowerCase().trim();
      const matchTitle = internship.title.toLowerCase().includes(query);
      const matchCompany = internship.company.toLowerCase().includes(query);
      const matchSkill = internship.skills.some((s) => s.toLowerCase().includes(query));
      if (!matchTitle && !matchCompany && !matchSkill) return false;
    }

    // 2. Category match
    if (filters.category && internship.category !== filters.category) {
      return false;
    }

    // 3. Duration match
    if (filters.duration && internship.duration !== filters.duration) {
      return false;
    }

    // 4. Level match
    if (filters.level && internship.level !== filters.level) {
      return false;
    }

    // 5. Compensation type match
    if (filters.type && internship.type !== filters.type) {
      return false;
    }

    return true;
  });

  // Open Apply modal
  const handleOpenApplyModal = (internship: Internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-25 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header section */}
      <div className="space-y-4 text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1.5 rounded-full">
          Immediate Openings
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-neutral-warm-900 tracking-tight leading-tight">
          Explore Virtual Internships
        </h1>
        <p className="text-neutral-warm-600 text-base sm:text-lg max-w-3xl leading-relaxed">
          Filter through highly structured opportunities backed by verified company sponsors. Work flexibly from anywhere, learn under veteran developers, and earn a portfolio-ready credential.
        </p>
      </div>

      {/* Filter Component */}
      <InternshipFilters
        filters={filters}
        onFilterChange={setFilters}
        onReset={handleResetFilters}
      />

      {/* Grid Results Header */}
      <div className="flex items-center justify-between border-b border-neutral-warm-100 pb-3">
        <p className="text-sm font-semibold text-neutral-warm-500">
          Showing <span className="text-brand-600 font-bold">{filteredInternships.length}</span> matching opportunities
        </p>
      </div>

      {/* Cards Grid layout or Empty State */}
      <AnimatePresence mode="wait">
        {filteredInternships.length > 0 ? (
          <motion.div
            key="listings-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2"
          >
            {filteredInternships.map((internship) => (
              <InternshipCard
                key={internship.id}
                internship={internship}
                onApply={handleOpenApplyModal}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="listings-empty"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="bg-white rounded-3xl border border-neutral-warm-200/60 p-16 text-center space-y-6 flex flex-col items-center max-w-xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-neutral-warm-50 flex items-center justify-center text-neutral-warm-400">
              <EyeOff className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display font-bold text-xl text-neutral-warm-900">
                No opportunities match your filters
              </h3>
              <p className="text-neutral-warm-600 text-sm max-w-sm leading-relaxed">
                We couldn't find any internships that fit your current criteria. Try adjusting your search query, choosing a different skill level, or broadening your compensation options.
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetFilters}
                className="flex items-center gap-1.5"
              >
                Clear all filters
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Application Modal Popup */}
      <ApplicationModal
        internship={selectedInternship}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
