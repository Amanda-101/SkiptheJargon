import type { Company } from "../data/companiesData";
import { Calendar, Shield, Users, Eye } from "lucide-react";

interface CompanySummaryCardProps {
  company: Company;
  onViewDetails: (company: Company) => void;
}

export function CompanySummaryCard({ company, onViewDetails }: CompanySummaryCardProps) {
  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="card bg-base-content shadow-md border border-gray-200 rounded-lg hover:bg-gray-200 shadow-lg transition-shadow duration-200">
      <div className="card-header p-4">
      <div className="flex items-center gap-4 mb-2">
        {company.logo && (
          <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12" />
        )}
      </div>
      </div>
      <div className="card-title p-4 border-b border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
        <div className="text-lg font-semibold text-base-100 flex items-center gap-2">

          {company.name}
            <div className="badge badge-outline badge-xs text-xs bg-gray-100 border-gray-200 max-sm:text-[10px] max-sm:px-1 max-sm:py-0.5">
          {company.industry}
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-base-300">
          <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          Updated: {new Date(company.lastUpdated).toLocaleDateString('en-GB')}
          </div>
            <div className={`badge ${getRiskColor(company.summary?.riskLevel ?? '')} badge-outline ml-2 flex items-center gap-1 text-xs max-sm:text-[10px] max-sm:px-1 max-sm:py-0.5`}>
            <Shield className="w-3 h-3 mr-1" />
          {company.summary.riskLevel} Risk
          </div>
        </div>
        </div>
      </div>
      </div>
      
      <div className="card-body space-y-4 text-left">
        <div>
          <h4 className="mb-2 flex items-center gap-2 text-base-200 text-lg font-semibold">
        <Eye className="w-4 h-4 text-base-300" />
        Overview
          </h4>
          <div className="space-y-1">
        {company.summary.keyHighlights.slice(0, 3).map((highlight, index) => (
          <div key={index} className="text-sm text-base-200 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            {highlight}
          </div>
        ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 flex items-center gap-2 text-base-200 text-lg font-semibold">
        <Users className="w-4 h-4 text-base-300" />
        Data Collection Summary
          </h4>
          <p className="text-sm text-base-200">
        Collects {company.summary.dataCollection.length} types of personal data including {company.summary.dataCollection[0].toLowerCase()} and usage analytics.
          </p>
        </div>

        <div className="pt-2">
          <button className="btn btn-base-100 w-full hover:bg-info-content transition-colors"
            onClick={() => onViewDetails(company)}
            
            
          >
            View Full Summary
          </button>
        </div>
      </div>
    </div>
  );
}