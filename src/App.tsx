import { useState, useMemo } from 'react'
import { companiesData } from "./data/companiesData";
import type { Company } from "./data/companiesData";
import { CompanyDetailView } from "./components/CompanyDetailView";
import { CompanySummaryCard } from "./components/CompanySummaryCard";
import { SearchAndFilter } from "./components/SearchAndFilter";
import { FileText, Users, Shield, Info } from "lucide-react";
import './App.css'

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState<string | null>(null);
  const [riskFilter, setRiskFilter] = useState<string | null>(null);

  // Get unique industries for filter options
  const industries = useMemo(() => {
    return Array.from(new Set(companiesData.map(company => company.industry))).sort();
  }, []);

  // Filter companies based on search and filters
  const filteredCompanies = useMemo(() => {
    return companiesData.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.industry.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = !industryFilter || company.industry === industryFilter;
      const matchesRisk = !riskFilter || company.summary.riskLevel === riskFilter;

      return matchesSearch && matchesIndustry && matchesRisk;
    });
  }, [searchQuery, industryFilter, riskFilter]);

  // Statistics for header
  const stats = useMemo(() => {
    const totalCompanies = companiesData.length;
    const lowRiskCount = companiesData.filter(c => c.summary.riskLevel === 'Low').length;
    const uniqueIndustries = industries.length;

    return { totalCompanies, lowRiskCount, uniqueIndustries };
  }, [industries]);

  if (selectedCompany) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <CompanyDetailView
            company={selectedCompany}
            onBack={() => setSelectedCompany(null)}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
         
          <div className="mb-8">
        <div className="flex flex-col items-center gap-3 mb-4 text-center">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <div className="mt-2">
            <h1 className="text-6xl font-bold">SkiptheJargon</h1>
            <p className="text-muted-foreground mt-2">
          Simplified summaries of privacy policies and terms from major UK companies
            </p>
          </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            With privacy summaries from UK companies, including:
          </p>
        </div>   
        {/* Infinite Logo Slider */}
        <div className="w-full overflow-hidden py-4">
          <div
            className="flex gap-10 animate-logo-slide"
            style={{
          width: 'max-content',
          animation: 'logo-slide 30s linear infinite'
            }}
          >
            {filteredCompanies.concat(filteredCompanies).map((company, idx) => (
          <img
            key={company.id + '-' + idx}
            src={company.logo}
            alt={company.name + " logo"}
            className="h-12 w-auto object-contain  hover:grayscale transition"
            style={{ minWidth: 80, maxWidth: 140 }}
          />
            ))}
          </div>
          <style>
            {`
          @keyframes logo-slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-logo-slide {
            will-change: transform;
          }
            `}
          </style>
        </div>
        <div className="my-10" />
        {/* Stats Cards */}
        <div className="flex justify-center mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            <div className="card border border-black flex items-center justify-center">
          <div className="card-body flex flex-col items-center justify-center">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-500" />
              <div className="text-center">
            <p className="text-sm text-muted-foreground">Total Companies</p>
            <p className="font-semibold">{stats.totalCompanies}</p>
              </div>
            </div>
          </div>
            </div>

            <div className="card border border-black flex items-center justify-center">
          <div className="card-body flex flex-col items-center justify-center">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-green-500" />
              <div className="text-center">
            <p className="text-sm text-muted-foreground">Low Risk Companies</p>
            <p className="font-semibold">{stats.lowRiskCount}</p>
              </div>
            </div>
          </div>
            </div>

            <div className="card border border-black flex items-center justify-center">
          <div className="card-body flex flex-col items-center justify-center">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-purple-500" />
              <div className="text-center">
            <p className="text-sm text-muted-foreground">Industries Covered</p>
            <p className="font-semibold">{stats.uniqueIndustries}</p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>

            <div className="divider"> </div>

            
            <SearchAndFilter
              onSearch={setSearchQuery}
              onFilterIndustry={setIndustryFilter}
              onFilterRisk={setRiskFilter}
              industries={industries}
              activeFilters={{
                industry: industryFilter,
                risk: riskFilter
              }}
            />
          </div>

        
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2>Companies: </h2>
              <span className='badge-outline'>
                {filteredCompanies.length} result{filteredCompanies.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          {filteredCompanies.length === 0 ? (
            <div className='card'>
              <div className='card-body'>
                <div className="flex flex-col items-center gap-3">
                  <Info className="w-8 h-8 text-muted-foreground" />
                  <div>
                    <h3>No companies found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search query or filters to find what you're looking for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCompanies.map((company) => (
                <CompanySummaryCard
                  key={company.id}
                  company={company}
                  onViewDetails={setSelectedCompany}
                />
              ))}
            </div>
          )}

         
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              <b>S240256</b>
            </p>
            <p>This tool provides simplified summaries for dissertation purposes.
              Always refer to the original terms and conditions for complete information.
            </p>
            <p className="mt-2">
              Last updated: {new Date().toLocaleDateString('en-GB')} • Data sourced from public company privacy policies
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
