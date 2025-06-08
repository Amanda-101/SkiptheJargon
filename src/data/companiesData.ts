export interface Company {
  id: string;
  name: string;
  industry: string;
  logo?: string;
  lastUpdated: string;
  summary: {
    dataCollection: string[];
    userRights: string[];
    cookiePolicy: string;
    dataRetention: string;
    thirdPartySharing: string[];
    contactInfo: string;
    keyHighlights: string[];
    riskLevel: 'Low' | 'Medium' | 'High';
  };
}

export const companiesData: Company[] = [
  {
    id: "tesco",
    name: "Tesco PLC",
    industry: "Retail",
    logo: "src/assets/Tesco-Logo.wine.svg",
    lastUpdated: "2024-12-15",
    summary: {
      dataCollection: [
        "Personal details (name, address, email)",
        "Shopping history and preferences",
        "Clubcard usage data",
        "Website and app usage analytics"
      ],
      userRights: [
        "Right to access your data",
        "Right to correct inaccurate data",
        "Right to delete your account",
        "Right to data portability"
      ],
      cookiePolicy: "Uses essential, analytics, and marketing cookies. You can manage preferences in cookie settings.",
      dataRetention: "Personal data retained for 7 years after account closure for legal compliance.",
      thirdPartySharing: [
        "Payment processors for transactions",
        "Delivery partners for order fulfillment",
        "Marketing partners (with consent)",
        "Legal authorities when required"
      ],
      contactInfo: "Data Protection Officer: dpo@tesco.com",
      keyHighlights: [
        "GDPR compliant",
        "Clear opt-out mechanisms",
        "Regular security audits",
        "Transparent data usage"
      ],
      riskLevel: "Low"
    }
  },
  {
    id: "bt",
    name: "BT Group PLC",
    industry: "Telecommunications",
    logo: ".../assets/BT-Logo.svg",
    lastUpdated: "2024-11-28",
    summary: {
      dataCollection: [
        "Contact and billing information",
        "Call and internet usage data",
        "Device and network information",
        "Location data for service provision"
      ],
      userRights: [
        "Right to access your data",
        "Right to rectification",
        "Right to erasure",
        "Right to restrict processing"
      ],
      cookiePolicy: "Uses cookies for service functionality, analytics, and advertising. Granular consent options available.",
      dataRetention: "Billing records kept for 6 years, usage data for 12 months unless longer retention required by law.",
      thirdPartySharing: [
        "Network partners for service delivery",
        "Credit agencies for affordability checks",
        "Government agencies for lawful interception",
        "Third-party services with explicit consent"
      ],
      contactInfo: "Privacy Team: privacy@bt.com | 0800 800 150",
      keyHighlights: [
        "Industry-standard encryption",
        "Regular privacy impact assessments",
        "Clear consent mechanisms",
        "Comprehensive privacy controls"
      ],
      riskLevel: "Medium"
    }
  },
  {
    id: "lloyds",
    name: "Lloyds Banking Group",
    industry: "Financial Services",
    logo: ".../assets/Lloyds-Logo.svg",
    lastUpdated: "2024-12-01",
    summary: {
      dataCollection: [
        "Identity and financial information",
        "Transaction history",
        "Credit and risk assessment data",
        "Digital banking behavior"
      ],
      userRights: [
        "Right to access your data",
        "Right to rectification",
        "Limited right to erasure (regulatory requirements)",
        "Right to data portability where technically feasible"
      ],
      cookiePolicy: "Essential cookies required for banking services. Optional analytics and marketing cookies with separate consent.",
      dataRetention: "Account data retained for 6 years after closure for regulatory compliance. Some records kept longer as required by law.",
      thirdPartySharing: [
        "Credit reference agencies",
        "Fraud prevention agencies",
        "Regulatory authorities",
        "Service providers under strict contracts"
      ],
      contactInfo: "Data Protection Officer: dataprotection@lloydsbanking.com",
      keyHighlights: [
        "FCA regulated",
        "Strong encryption standards",
        "Regular third-party security audits",
        "Comprehensive fraud monitoring"
      ],
      riskLevel: "Low"
    }
  },
  {
    id: "sky",
    name: "Sky UK Limited",
    industry: "Media & Entertainment",
    logo: ".../assets/Sky-Logo.svg",
    lastUpdated: "2024-12-10",
    summary: {
      dataCollection: [
        "Account and billing information",
        "Viewing preferences and history",
        "Device usage data",
        "Marketing preferences"
      ],
      userRights: [
        "Right to access your data",
        "Right to correct your data",
        "Right to delete your data",
        "Right to object to marketing"
      ],
      cookiePolicy: "Uses cookies for service delivery, personalisation, and advertising. Detailed cookie policy with opt-out options.",
      dataRetention: "Customer data retained for up to 7 years after service termination for business and legal purposes.",
      thirdPartySharing: [
        "Content providers for licensing",
        "Advertising partners (with consent)",
        "Technical service providers",
        "Debt collection agencies if necessary"
      ],
      contactInfo: "Privacy Team: privacy@sky.uk | Sky Subscriber Services",
      keyHighlights: [
        "Personalised recommendations",
        "Granular privacy controls",
        "Regular data minimization reviews",
        "Clear marketing preferences"
      ],
      riskLevel: "Medium"
    }
  },
  {
    id: "johnlewis",
    name: "John Lewis Partnership",
    industry: "Retail",
    logo: ".../assets/JohnLewis-Logo.svg",
    lastUpdated: "2024-11-15",
    summary: {
      dataCollection: [
        "Customer account information",
        "Purchase history",
        "Partnership card data",
        "Website interaction data"
      ],
      userRights: [
        "Right to access your data",
        "Right to rectification",
        "Right to erasure",
        "Right to data portability"
      ],
      cookiePolicy: "Essential and optional cookies clearly categorized. Easy-to-use cookie preference center.",
      dataRetention: "Customer data retained for 7 years after last interaction for business purposes.",
      thirdPartySharing: [
        "Payment processors",
        "Delivery and logistics partners",
        "Customer service providers",
        "Marketing agencies (with consent)"
      ],
      contactInfo: "Customer Data Team: customerdata@johnlewis.co.uk",
      keyHighlights: [
        "Partnership benefits transparency",
        "Ethical data usage principles",
        "Strong customer service integration",
        "Clear loyalty program terms"
      ],
      riskLevel: "Low"
    }
  },
  {
    id: "vodafone",
    name: "Vodafone UK",
    industry: "Telecommunications",
    logo: ".../assets/Vodafone-Logo.svg",
    lastUpdated: "2024-12-05",
    summary: {
      dataCollection: [
        "Account and billing details",
        "Network usage and performance data",
        "Device information",
        "Location data for service optimization"
      ],
      userRights: [
        "Right to access your data",
        "Right to correct your data",
        "Right to delete your data (with limitations)",
        "Right to restrict processing"
      ],
      cookiePolicy: "Comprehensive cookie policy with granular controls for different cookie types and purposes.",
      dataRetention: "Personal data kept for up to 7 years post-contract for billing and legal compliance.",
      thirdPartySharing: [
        "Roaming partners internationally",
        "Credit checking agencies",
        "Law enforcement when legally required",
        "Contracted service providers"
      ],
      contactInfo: "Privacy Office: privacy@vodafone.co.uk | 191 for customers",
      keyHighlights: [
        "Network security and resilience",
        "International data transfer safeguards",
        "Regular privacy training for staff",
        "Proactive security monitoring"
      ],
      riskLevel: "Medium"
    }
  }
];