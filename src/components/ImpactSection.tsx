import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Quote, 
} from 'lucide-react';

interface ImpactSectionProps {
  onOpenProposal?: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onOpenProposal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dtc' | 'saas' | 'services'>('all');

  const caseStudies = [
    {
      id: 'aura-skincare',
      category: 'dtc',
      client: 'Aura Botanicals',
      industry: 'DTC Skincare & Wellness',
      headline: 'Scaled from ₹35 Lakhs/mo to ₹3.2 Crores/mo in 6 Months with 5.6x Blended ROAS',
      challenge: 'High customer acquisition cost (₹7,200 CAC) on Meta ads and poor second-month retention.',
      solution: 'Re-engineered high-velocity UGC hooks on TikTok Spark, switched to server-side CAPI attribution, and built Klaviyo automated replenishment flows.',
      metrics: {
        primary: '5.62x',
        primaryLabel: 'Blended ROAS',
        secondary: '+816%',
        secondaryLabel: 'Monthly Revenue Lift',
        tertiary: '₹2,350',
        tertiaryLabel: 'Reduced CAC (from ₹7,200)',
      },
      quote: {
        text: 'growing transformed our cashflow. We went from burning budget on guesswork to predictable 5x returns every single week.',
        author: 'Elena Vance',
        title: 'Founder & CEO, Aura Botanicals',
      },
    },
    {
      id: 'cloudmatrix',
      category: 'saas',
      client: 'CloudMatrix AI',
      industry: 'B2B Enterprise SaaS',
      headline: 'Generated ₹35 Crores in Qualified Pipeline with a 64% Decrease in Cost per Demo',
      challenge: 'Struggling to target enterprise CTOs and VPs of Engineering on LinkedIn with low conversion on their standard whitepaper.',
      solution: 'Crafted hyper-targeted account-based marketing (ABM) sequences, interactive ROI landing pages, and Google Search intent campaigns.',
      metrics: {
        primary: '₹35 Cr',
        primaryLabel: 'Qualified Pipeline',
        secondary: '-64%',
        secondaryLabel: 'Cost per Demo',
        tertiary: '340+',
        tertiaryLabel: 'Enterprise Demos Booked',
      },
      quote: {
        text: 'Their deep understanding of enterprise B2B psychology drove real sales pipeline, not vanity clicks. The best agency partner we have ever worked with.',
        author: 'Marcus Vance-Wu',
        title: 'VP of Growth, CloudMatrix',
      },
    },
    {
      id: 'pulsewear',
      category: 'dtc',
      client: 'PulseWear Performance',
      industry: 'Athletic Wear DTC',
      headline: 'Generated 14M+ Organic Impressions and ₹5.2 Crores in Launch Month Revenue',
      challenge: 'Entering a crowded sportswear niche dominated by established multi-crore enterprise giants.',
      solution: 'Architected viral TikTok & Reels content flywheel paired with micro-influencer seedings and immediate retargeting flash-offers.',
      metrics: {
        primary: '14.2M',
        primaryLabel: 'Viral Impressions',
        secondary: '₹5.2 Cr',
        secondaryLabel: 'First 30 Days Revenue',
        tertiary: '4.8x',
        tertiaryLabel: 'TikTok Shop ROAS',
      },
      quote: {
        text: 'They made our brand look and feel like Nike within weeks. The creative direction alone generated millions of views effortlessly.',
        author: 'Jordan Hayes',
        title: 'Co-Founder, PulseWear',
      },
    },
    {
      id: 'apex-dental',
      category: 'services',
      client: 'Apex Specialty Clinics',
      industry: 'Multi-Location Healthcare',
      headline: '310% Increase in High-Value Patient Inquiries across 12 Regional Clinics',
      challenge: 'Underperforming local listings and high Google Ads spend on non-converting broad match queries.',
      solution: 'Executed Local SEO answer-engine domination, high-converting location-specific click-to-call landers, and call-tracking attribution.',
      metrics: {
        primary: '+310%',
        primaryLabel: 'New Patient Bookings',
        secondary: '₹2,800',
        secondaryLabel: 'Cost per Inbound Call',
        tertiary: '#1 Rank',
        tertiaryLabel: 'Across 48 Local Keywords',
      },
      quote: {
        text: 'All 12 of our clinic schedules are fully booked three weeks out. The ROI on our Google spend is undeniable.',
        author: 'Dr. Sarah Lin',
        title: 'Managing Director, Apex Clinics',
      },
    },
  ];

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <section id="impact" className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">
              Measurable Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
              Proven Impact & <span className="text-[#6378f7]">Case Studies</span>
            </h2>
            <p className="mt-3 text-neutral-400 max-w-xl text-base">
              Real brands, audited revenue, and verifiable returns. See how our growth formulas perform across diverse business models.
            </p>
          </div>

          {/* Filter Pills in #2b3785 */}
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-900 border border-neutral-800 rounded-xl self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'all' ? 'bg-[#2b3785] text-white shadow-sm shadow-[#2b3785]/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Case Studies
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('dtc')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'dtc' ? 'bg-[#2b3785] text-white shadow-sm shadow-[#2b3785]/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              E-Commerce / DTC
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('saas')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'saas' ? 'bg-[#2b3785] text-white shadow-sm shadow-[#2b3785]/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              B2B SaaS
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('services')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'services' ? 'bg-[#2b3785] text-white shadow-sm shadow-[#2b3785]/30' : 'text-neutral-400 hover:text-white'
              }`}
            >
              High-Ticket Services
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800/90 hover:border-[#2b3785]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-[#6378f7] uppercase tracking-wider font-semibold">
                    {study.industry}
                  </span>
                  <span className="text-xs font-bold text-neutral-300 bg-neutral-800 px-3 py-1 rounded-full">
                    {study.client}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {study.headline}
                </h3>

                <div className="mt-4 space-y-2 text-xs text-neutral-300">
                  <p><strong className="text-neutral-200">The Problem:</strong> {study.challenge}</p>
                  <p><strong className="text-neutral-200">The Execution:</strong> {study.solution}</p>
                </div>

                {/* 3 Metric Badges */}
                <div className="grid grid-cols-3 gap-3 my-6 p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-center">
                  <div>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-[#8496ff] block">
                      {study.metrics.primary}
                    </span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">
                      {study.metrics.primaryLabel}
                    </span>
                  </div>
                  <div className="border-x border-neutral-800">
                    <span className="text-xl sm:text-2xl font-bold font-mono text-white block">
                      {study.metrics.secondary}
                    </span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">
                      {study.metrics.secondaryLabel}
                    </span>
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 block">
                      {study.metrics.tertiary}
                    </span>
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium">
                      {study.metrics.tertiaryLabel}
                    </span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/60 relative">
                  <Quote className="w-5 h-5 text-[#2b3785]/50 absolute top-3 right-3" />
                  <p className="text-xs italic text-neutral-300 pr-6 leading-relaxed">
                    "{study.quote.text}"
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#2b3785] text-white font-bold text-[10px] flex items-center justify-center">
                      {study.quote.author[0]}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">{study.quote.author}</p>
                      <p className="text-[10px] text-neutral-400">{study.quote.title}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
                <button
                  type="button"
                  onClick={onOpenProposal}
                  className="text-xs text-[#8496ff] hover:text-[#a8b7ff] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Want similar results? Get your blueprint <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
