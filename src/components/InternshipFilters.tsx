import { Search, RotateCcw, SlidersHorizontal, ChevronDown } from "lucide-react";
import { CATEGORIES, DURATIONS, LEVELS, TYPES } from "../data/internships";

interface FilterState {
  search: string;
  category: string;
  duration: string;
  level: string;
  type: string;
}

interface InternshipFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onReset: () => void;
}

export default function InternshipFilters({ filters, onFilterChange, onReset }: InternshipFiltersProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-neutral-warm-200/60 shadow-xs space-y-6">
      
      {/* Title & Stats */}
      <div className="flex items-center justify-between border-b border-neutral-warm-100 pb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-brand-600" />
          <h3 className="font-display font-bold text-lg text-neutral-warm-900">
            Search & Filters
          </h3>
        </div>
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 text-sm font-semibold text-neutral-warm-500 hover:text-brand-600 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Main Grid Controls */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Search Input */}
        <div className="md:col-span-12 lg:col-span-4 relative">
          <label htmlFor="search-input" className="sr-only">Search internships</label>
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-neutral-warm-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            id="search-input"
            type="text"
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-neutral-warm-200 bg-neutral-warm-50/30 focus:bg-white focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-base text-neutral-warm-800 placeholder-neutral-warm-400"
            placeholder="Search roles, companies, or skills..."
          />
        </div>

        {/* Category Select */}
        <div className="md:col-span-4 lg:col-span-2 space-y-1.5">
          <label htmlFor="category-select" className="block text-xs font-bold text-neutral-warm-500 uppercase tracking-wider">
            Field / Category
          </label>
          <div className="relative">
            <select
              id="category-select"
              value={filters.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3 rounded-2xl border border-neutral-warm-200 bg-neutral-warm-50/30 focus:bg-white focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-sm font-semibold text-neutral-warm-700 cursor-pointer"
            >
              <option value="">All Categories</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-neutral-warm-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Duration Select */}
        <div className="md:col-span-4 lg:col-span-2 space-y-1.5">
          <label htmlFor="duration-select" className="block text-xs font-bold text-neutral-warm-500 uppercase tracking-wider">
            Duration
          </label>
          <div className="relative">
            <select
              id="duration-select"
              value={filters.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3 rounded-2xl border border-neutral-warm-200 bg-neutral-warm-50/30 focus:bg-white focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-sm font-semibold text-neutral-warm-700 cursor-pointer"
            >
              <option value="">All Durations</option>
              {DURATIONS.map((dur) => (
                <option key={dur} value={dur}>
                  {dur}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-neutral-warm-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Skill Level Select */}
        <div className="md:col-span-2 lg:col-span-2 space-y-1.5">
          <label htmlFor="level-select" className="block text-xs font-bold text-neutral-warm-500 uppercase tracking-wider">
            Skill Level
          </label>
          <div className="relative">
            <select
              id="level-select"
              value={filters.level}
              onChange={(e) => handleChange("level", e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3 rounded-2xl border border-neutral-warm-200 bg-neutral-warm-50/30 focus:bg-white focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-sm font-semibold text-neutral-warm-700 cursor-pointer"
            >
              <option value="">All Levels</option>
              {LEVELS.map((lvl) => (
                <option key={lvl} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-neutral-warm-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Paid / Unpaid Select */}
        <div className="md:col-span-2 lg:col-span-2 space-y-1.5">
          <label htmlFor="type-select" className="block text-xs font-bold text-neutral-warm-500 uppercase tracking-wider">
            Compensation
          </label>
          <div className="relative">
            <select
              id="type-select"
              value={filters.type}
              onChange={(e) => handleChange("type", e.target.value)}
              className="w-full appearance-none pl-4 pr-10 py-3 rounded-2xl border border-neutral-warm-200 bg-neutral-warm-50/30 focus:bg-white focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/10 transition-all text-sm font-semibold text-neutral-warm-700 cursor-pointer"
            >
              <option value="">All Types</option>
              {TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none text-neutral-warm-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Category Pills helper row */}
      <div className="flex flex-wrap items-center gap-2 pt-2">
        <span className="text-xs font-bold text-neutral-warm-500 mr-1">Quick Fields:</span>
        <button
          onClick={() => handleChange("category", "")}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
            filters.category === ""
              ? "bg-brand-500 text-white"
              : "bg-neutral-warm-100 hover:bg-neutral-warm-200 text-neutral-warm-700"
          }`}
        >
          All Categories
        </button>
        {CATEGORIES.slice(0, 4).map((cat) => (
          <button
            key={cat}
            onClick={() => handleChange("category", cat)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              filters.category === cat
                ? "bg-brand-500 text-white"
                : "bg-neutral-warm-50 hover:bg-neutral-warm-100 border border-neutral-warm-200/50 text-neutral-warm-700"
            }`}
          >
            {cat}
          </button>
        ))}
        {CATEGORIES.length > 4 && (
          <span className="text-xs font-semibold text-neutral-warm-400">
            +{CATEGORIES.length - 4} more
          </span>
        )}
      </div>

    </div>
  );
}
