export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  tagline: string;
  iconName: string;
  category: 'performance' | 'creative' | 'organic' | 'retention';
  deliverables: string[];
  metrics: { label: string; value: string };
  highlight: string;
  techStack: string[];
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  logoText: string;
  headline: string;
  challenge: string;
  strategy: string;
  results: {
    primaryMetric: string;
    primaryLabel: string;
    secondaryMetric: string;
    secondaryLabel: string;
    tertiaryMetric: string;
    tertiaryLabel: string;
  };
  duration: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface ProcessStep {
  stepNumber: string;
  phase: string;
  timeframe: string;
  title: string;
  description: string;
  deliverables: string[];
  keyOutcome: string;
}

export interface BentoCardItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  stats?: string;
  colSpan?: string;
}

export interface ProposalFormData {
  fullName: string;
  email: string;
  companyName: string;
  websiteUrl: string;
  primaryGoal: 'leads' | 'ecommerce_sales' | 'brand_scale' | 'seo_traffic';
  monthlyBudget: string;
  timeline: string;
  currentChallenges?: string;
}
