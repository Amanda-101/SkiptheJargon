import { useState } from "react";
import { Search, Filter, X } from "lucide-react";

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilterIndustry: (industry: string | null) => void;
  onFilterRisk: (risk: string | null) => void;
  industries: string[];
  activeFilters: {
    industry: string | null;
    risk: string | null;
  };
}

export function SearchAndFilter({ 
  onSearch, 
  onFilterIndustry, 
  onFilterRisk, 
  industries,
  activeFilters 
}: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const clearFilters = () => {
    onFilterIndustry(null);
    onFilterRisk(null);
  };

  const hasActiveFilters = activeFilters.industry || activeFilters.risk;

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input
            type="text"
            className="input input-bordered w-full pl-10"
            placeholder="Search companies..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearchChange(e.target.value)}
           
          />
        </div>
        
        <div className="flex gap-2">
          <select
            value={activeFilters.industry || "all"}
            className="select"
            onChange={(e) => onFilterIndustry(e.target.value === "all" ? null : e.target.value)}
          >
            <Filter className="w-4 h-4 mr-2" />
            <select defaultValue="all">All Industries</select>
            <option value="all">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>

          <select
            className="select" 
            value={activeFilters.risk || "all"} 
            onChange={(e) => onFilterRisk(e.target.value === "all" ? null : e.target.value)}
          >
            <option value="all">All Risks</option>
            <option value="Low">Low Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="High">High Risk</option>
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {activeFilters.industry && (
            <div className="badge badge-secondary gap-1">
              Industry: {activeFilters.industry}
              <button className="btn-ghost btn-sm h-auto p-0 hover:bg-transparent"
                onClick={() => onFilterIndustry(null)}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {activeFilters.risk && (
            <div className="badge badge-secondary gap-1">
              Risk: {activeFilters.risk}
              <button className="btn-ghost btn-sm h-auto p-0 hover:bg-transparent"
                onClick={() => onFilterRisk(null)}
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          <button className="btn btn-ghost h-auto p-0 hover:bg-transparent text-xs"
            onClick={clearFilters}
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}