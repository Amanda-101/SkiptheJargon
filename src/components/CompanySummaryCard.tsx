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
    <div className="card bg-gray-600 shadow-md border border-gray-200 rounded-lg hover:bg-info shadow-lg transition-shadow duration-200 text-left">
      <div className="card-header flex items-center justify-between p-4">
        <img src={company.logo || "/default-logo.png"} alt={`${company.name} logo`} className="w-20 h-20 " />
       </div> 
      <div className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex-1">
        <div className="card-title flex items-center gap-2 mb-2">
          {company.name}
          <div className="badge badge-outline badge-xs">
          {company.industry}
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          Updated: {new Date(company.lastUpdated).toLocaleDateString('en-GB')}
          </div>
          <div className={`badge badge-outline ${getRiskColor(company.summary.riskLevel)}`}>
          <Shield className="w-3 h-3 mr-1" />
          {company.summary.riskLevel} Risk
          </div>
        </div>
        </div>
      </div>
      </div>
      
      <div className="card-body space-y-4 text-left">
        <div>
          <h4 className="mb-2 flex items-center gap-2">
        <Eye className="w-4 h-4" />
        Key Highlights
          </h4>
          <div className="space-y-1">
        {company.summary.keyHighlights.slice(0, 3).map((highlight, index) => (
          <div key={index} className="text-sm text-muted-foreground flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            {highlight}
          </div>
        ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 flex items-center gap-2">
        <Users className="w-4 h-4" />
        Data Collection Summary
          </h4>
          <p className="text-sm text-muted-foreground">
        Collects {company.summary.dataCollection.length} types of personal data including {company.summary.dataCollection[0].toLowerCase()} and usage analytics.
          </p>
        </div>

        <div className="pt-2">
          <button className="btn btn-outline w-full"
            onClick={() => onViewDetails(company)}
            
            
          >
            View Full Summary
          </button>
        </div>
      </div>
    </div>
  );
}