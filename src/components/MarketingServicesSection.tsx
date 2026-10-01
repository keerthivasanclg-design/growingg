import React, { useState } from 'react';
import { 
  Target, 
  Search, 
  BarChart, 
  Video, 
  Mail, 
  Layers, 
  ArrowUpRight, 
  Check, 
} from 'lucide-react';

interface MarketingServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const MarketingServicesSection: React.FC<MarketingServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'paid' | 'organic' | 'retention'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const services = [
    {
      id: 'paid-ads',
      category: 'paid',
      title: 'Precision Paid Advertising',
      tagline: 'Scale profitable customer acquisition across high-intent channels',
      icon: Target,
      benchmark: '4.8x Avg ROAS',
      description: 'Programmatic media buying on Meta, Google Search/Shopping, TikTok, and LinkedIn. We utilize predictive lookalikes and day-parting bidding to lower your Customer Acquisition Cost (CAC).',
      deliverables: [
        'Multi-channel account architecture & audit',
        'Custom lookalike & first-party audience ingestion',
        'High-velocity creative testing (20+ hooks/mo)',
        'Server-side Conversions API (CAPI) setup',
        'Real-time automated bid pacing algorithms'
      ],
      channels: ['Meta Ads', 'Google Ads', 'TikTok Spark', 'LinkedIn Ads', 'YouTube Ads'],
    },
    {
      id: 'seo-aeo',
      category: 'organic',
      title: 'SEO & AI Answer Engine Dominance',
      tagline: 'Capture organic search intent before your competitors wake up',
      icon: Search,
      benchmark: '+310% Organic Traffic',
      description: 'We position your brand at the absolute peak of traditional Google rankings and modern AI Answer Engines (ChatGPT Search, Perplexity, Gemini, Google AI Overviews).',
      deliverables: [
        'Technical crawlability & Core Web Vitals optimization',
        'AEO (Answer Engine Optimization) citation structuring',
        'High-intent commercial keyword clustering',
        'Authoritative digital PR link acquisition',
        'Programmatic content hubs for long-tail queries'
      ],
      channels: ['Google Search', 'AI Overviews', 'Perplexity', 'ChatGPT Search', 'Bing'],
    },
    {
      id: 'cro-funnels',
      category: 'paid',
      title: 'Conversion Rate Optimization (CRO)',
      tagline: 'Turn existing clicks into high-margin revenue and booked calls',
      icon: BarChart,
      benchmark: '+64% Conv. Lift',
      description: 'High-converting custom advertorials, VSL pages, and interactive quiz funnels built with Next.js/Tailwind speed. We identify and eliminate buyer hesitation with Bayesian statistical testing.',
      deliverables: [
        'Full user session & heatmapping drop-off diagnosis',
        'Bespoke unbounce & headless Next.js landers',
        'Frictionless checkout & one-click upsell logic',
        'Rigorous A/B & multivariate landing page splits',
        'Psychological objection-handling copywriting'
      ],
      channels: ['Unbounce', 'Shopify Plus', 'Custom Headless', 'VWO', 'Hotjar'],
    },
    {
      id: 'creative-studio',
      category: 'paid',
      title: 'High-Velocity Creative Studio',
      tagline: 'Direct-response UGC, 3D renders, and scroll-stopping hooks',
      icon: Video,
      benchmark: '3.4s Avg Hook Hold',
      description: 'Ad fatigue kills ROAS. Our creative department produces weekly batches of UGC, founder-led stories, 3D product animations, and graphic carousels engineered for thumb-stopping velocity.',
      deliverables: [
        'Weekly scripted short-form UGC video production',
        'Dynamic Motion Graphics & 3D render assets',
        'Hook rate & hold rate performance dissection',
        'Localized creator casting & whitelisting',
        'Native platform style adaptation (TikTok/Reels)'
      ],
      channels: ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'Meta Feed'],
    },
    {
      id: 'retention-email',
      category: 'retention',
      title: 'Lifecycle & Retention Engine',
      tagline: 'Maximize Customer Lifetime Value (LTV) through SMS & email',
      icon: Mail,
      benchmark: '38% Attributed Rev',
      description: 'Acquisition gets the first order; lifecycle drives true profitability. We build intelligent predictive SMS, push notifications, and Klaviyo/Omnisend email flows that generate recurring revenue on autopilot.',
      deliverables: [
        'Behavioral trigger flows (Abandoned Cart, Browse, Win-back)',
        'VIP tiers, cross-sell matrices, and replenishment cycles',
        'Two-way conversational SMS marketing campaigns',
        'Deliverability auditing & inbox placement defense',
        'RFM (Recency, Frequency, Monetary) segmentation'
      ],
      channels: ['Klaviyo', 'Attentive', 'Postscript', 'Omnisend'],
    },
    {
      id: 'growth-architecture',
      category: 'organic',
      title: 'Full-Funnel Attribution & Data',
      tagline: 'Complete clarity on blended CAC, MER, and channel contribution',
      icon: Layers,
      benchmark: '100% Tracking Fidelity',
      description: 'Never guess which ads are actually making money again. We deploy server-side event tracking, First-Party Cookieless pixels, and unified executive dashboards via Triple Whale and Google BigQuery.',
      deliverables: [
        'Server-side GTM (Google Tag Manager) infrastructure',
        'Triple Whale & Northbeam attribution calibration',
        'Automated Executive Profit & Blended MER Dashboard',
        'Cohort retention & payback period modeling',
        'Custom marketing attribution weighting'
      ],
      channels: ['Triple Whale', 'GA4', 'BigQuery', 'Server GTM', 'Looker'],
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">
              Comprehensive Service Suite
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2 tracking-tight">
              Full-Funnel Growth <span className="text-[#6378f7]">Architecture</span>
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-xl">
              We eliminate disjointed agency silos by unifying media buying, landing page conversion, creative production, and retention into one powerhouse engine.
            </p>
          </div>

          {/* Category Filter Pills in #2b3785 */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'all' ? 'bg-[#2b3785] text-white shadow-sm shadow-[#2b3785]/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Services
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('paid')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'paid' ? 'bg-[#2b3785] text-white shadow-sm shadow-[#2b3785]/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Paid Media
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('organic')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'organic' ? 'bg-[#2b3785] text-white shadow-sm shadow-[#2b3785]/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              SEO & Social
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('retention')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'retention' ? 'bg-[#2b3785] text-white shadow-sm shadow-[#2b3785]/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Retention / LTV
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`p-7 rounded-2xl bg-neutral-900/40 border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected 
                    ? 'border-[#2b3785] bg-neutral-900/90 ring-1 ring-[#2b3785]' 
                    : 'border-neutral-800/90 hover:border-[#2b3785]/50 hover:bg-neutral-900/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-[#6378f7] group-hover:bg-[#2b3785] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#8496ff] bg-[#2b3785]/20 px-2.5 py-1 rounded-md border border-[#2b3785]/40 font-semibold">
                      {service.benchmark}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#8496ff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#6378f7] mt-1">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables checklist */}
                  <div className="mt-5 pt-4 border-t border-neutral-800/70 space-y-2">
                    <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                      Key Deliverables
                    </p>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#6378f7] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Channel tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.channels.map((ch, idx) => (
                      <span key={idx} className="text-[11px] text-neutral-400 bg-neutral-800/60 px-2 py-0.5 rounded">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-neutral-800/70">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedServiceId(isSelected ? null : service.id);
                      if (onSelectService) {
                        onSelectService(service.title);
                      }
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#2b3785]/30 hover:bg-[#2b3785] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:shadow-[#2b3785]/30 cursor-pointer"
                  >
                    <span>{isSelected ? 'Service Selected' : 'Inquire About Service'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
