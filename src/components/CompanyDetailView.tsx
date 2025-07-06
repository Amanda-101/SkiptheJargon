import type { Company } from "../data/companiesData";

import { 
  ArrowLeft, 
  Shield, 
  Calendar, 
  Database, 
  UserCheck, 
  Cookie, 
  Clock, 
  Share2, 
  Mail,
  CheckCircle
} from "lucide-react";


interface CompanyDetailViewProps {
  company: Company;
  onBack: () => void;
}

export function CompanyDetailView({ company, onBack }: CompanyDetailViewProps) {
  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <button className="btn-ghost-sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2 text-zinc-800" />
          <p className="text-zinc-800">Back to Companies</p>
        </button>
      </div>


      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          {company.logo && (
            <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 rounded-full" />
          )}
            <h1 className="text-3xl font-bold text-center text-zinc-800 ">{company.name}</h1>
        </div>
        <button className="btn btn-primary" onClick={() => window.print()}>
          Print Summary
        </button>
      </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 text-muted-foreground">
          <span className="badge-outline text-zinc-800">{company.industry}</span>
          <div className="flex items-center gap-1">
        <Calendar className="w-4 h-4 text-zinc-800" />
        <p className="text-zinc-800">Last updated: {new Date(company.lastUpdated).toLocaleDateString('en-GB')}</p> 
        <span className={`${getRiskColor(company.summary.riskLevel)} badge badge-outline ml-2`}>
          <Shield className="w-3 h-3 mr-1" />
          {company.summary.riskLevel} Risk Level
        </span>
          </div>
        </div>


      <div className="grid gap-6 md:grid-cols-2">
        <div className = "card outline outline-1 outline-blue-400">
            <div className="card-title flex items-center gap-2 text-zinc-800">
              <Database className="w-5 h-5 text-zinc-800" />
              Data Collections
            </div>
          <div className="card-body">
            <ul className="space-y-2">
              {company.summary.dataCollection.map((item, index) => (
                <li key={index} className="text-sm flex items-start gap-2 text-zinc-800">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card outline outline-1 outline-green-400">
          <div className="card-title flex items-center gap-2 text-zinc-800">
              <UserCheck className="w-5 h-5 text-zinc-800" />
              Your Rights
            </div>
          <div className="card-body">
            <ul className="space-y-2">
              {company.summary.userRights.map((right, index) => (
                <li key={index} className="text-sm flex items-start gap-2 text-zinc-800">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  {right}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card outline outline-1 outline-yellow-500">
            <div className="card-title flex items-center gap-2 text-zinc-800">
              <Cookie className="w-5 h-5 text-zinc-800" />
              Cookie Policy
            </div>
          <div className="card-body">
            <p className="text-sm text-zinc-800">
              {company.summary.cookiePolicy}
            </p>
          </div>
        </div >

        <div className="card card outline outline-1 outline-purple-400">
            <div className="card-title flex items-center gap-2 text-zinc-800">
              <Clock className="w-5 h-5 text-zinc-800" />
              Data Retention
            </div>
          <div className="card-body">
            <p className="text-sm text-zinc-800">
              {company.summary.dataRetention}
            </p>
          </div>
        </div>
      </div>

      <div className="card outline outline-1 outline-red-400">
          <div className="card-title flex items-center gap-2 text-zinc-800">
            <Share2 className="w-5 h-5 text-zinc-800" />
            Third-Party Data Sharing
          </div>
        <div className="card-body">
          <div className="grid gap-2 sm:grid-cols-2 text-zinc-800">
            {company.summary.thirdPartySharing.map((party, index) => (
              <div key={index} className="text-sm flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                {party}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card outline outline-1 outline-teal-300">
            <div className="card-title flex items-center gap-2 text-zinc-800">
              <CheckCircle className="w-5 h-5 text-zinc-800" />
              Key Compliance Highlights
            </div>
          <div className="card-body">
            <ul className="space-y-2">
              {company.summary.keyHighlights.map((highlight, index) => (
                <li key={index} className="text-sm flex items-start gap-2 text-zinc-800">
                  <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card">
            <div className="card-title flex items-center gap-2 text-zinc-800">
              <Mail className="w-5 h-5 text-zinc-800" />
              Contact Information
            </div>
          <div className="card-body text-zinc-800">
            <p className="text-sm text-muted-foreground mb-2">
              For any privacy concerns or inquiries, please contact:
            </p>
            <p className="text-sm font-semibold text-zinc-800">
              {company.name} Data Protection Officer
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Email: {company.summary.contactInfo}
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              For more information, visit our <a href="https://www.example.com/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              If you have any concerns about your data, you can contact the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" className="text-blue-500 hover:underline">ico.org.uk</a>.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              For more information on your rights, visit the <a href="https://www.gov.uk/data-protection-your-rights" className="text-blue-500 hover:underline">UK Government Data Protection Rights</a> page.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}