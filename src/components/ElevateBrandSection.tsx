import React from 'react';
import { TrendingUp, Award, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface ElevateBrandSectionProps {
  onOpenProposal?: () => void;
}

export const ElevateBrandSection: React.FC<ElevateBrandSectionProps> = ({ onOpenProposal }) => {
  const brandPartners = [
    { name: 'NOVATECH', category: 'Enterprise SaaS' },
    { name: 'VELOCE DTC', category: 'Apparel & Fashion' },
    { name: 'HYPERION', category: 'Fintech & Payments' },
    { name: 'LUMINA HEALTH', category: 'Health & Wellness' },
    { name: 'ARCTIC LABS', category: 'Consumer Tech' },
    { name: 'FINSCALE', category: 'B2B Analytics' },
  ];

  const highlights = [
    {
      metric: '₹400 Cr+',
      label: 'Verified Client Revenue',
      detail: 'Generated across paid channels in the last 12 months with verified first-party tracking.',
      icon: TrendingUp,
      accent: 'text-[#6378f7]',
    },
    {
      metric: '4.82x',
      label: 'Average Client ROAS',
      detail: 'Consistently beating industry benchmarks with proprietary creative testing matrices.',
      icon: Zap,
      accent: 'text-[#6378f7]',
    },
    {
      metric: '350+',
      label: 'High-Growth Brands Scaled',
      detail: 'From Seed-stage startups to publicly traded DTC powerhouses worldwide.',
      icon: Award,
      accent: 'text-[#6378f7]',
    },
    {
      metric: '98.4%',
      label: 'Client Retention Rate',
      detail: 'We operate as an embedded growth team, not a detached third-party vendor.',
      icon: ShieldCheck,
      accent: 'text-[#6378f7]',
    },
  ];

  return (
    <section id="elevate" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 relative overflow-hidden">
      {/* Subtle background glow in #2b3785 */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2b3785]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Brand ticker / social proof banner */}
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-6">
            Trusted by founders & marketing leaders at high-growth companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {brandPartners.map((brand, i) => (
              <div 
                key={i} 
                className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800/80 hover:border-[#2b3785]/60 transition-all text-center group"
              >
                <span className="font-extrabold text-sm tracking-wider text-neutral-300 group-hover:text-[#6378f7] transition-colors">
                  {brand.name}
                </span>
                <span className="block text-[10px] text-neutral-500 mt-0.5">
                  {brand.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">
            Maximum Market Penetration
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 tracking-tight">
            Elevate Your Brand Presence Across <span className="text-[#6378f7]">Every Touchpoint</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            In modern digital ecosystems, attention is the scarcest currency. We synthesize audience behavioral psychology, automated algorithmic bidding, and compelling creative storytelling to capture high-value market share.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="relative p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-[#2b3785]/50 hover:bg-neutral-900/70 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#2b3785]/20 border border-[#2b3785]/40 flex items-center justify-center text-[#6378f7] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-4xl font-extrabold text-white font-mono tracking-tight">
                    {item.metric}
                  </div>
                  <h3 className="text-base font-bold text-neutral-200 mt-2">
                    {item.label}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-[#2b3785]/25 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white">
              Ready to outpace your category competitors?
            </h4>
            <p className="text-sm text-neutral-400 mt-1">
              Receive a custom multi-channel revenue roadmap calibrated specifically for your unit economics.
            </p>
          </div>
          <button 
            type="button"
            onClick={onOpenProposal}
            className="whitespace-nowrap px-6 py-3 bg-[#2b3785] hover:bg-[#34449e] text-white font-bold rounded-lg transition-colors duration-200 flex items-center gap-2 shadow-lg shadow-[#2b3785]/30 hover:scale-[1.02]"
          >
            Request Growth Roadmap <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
