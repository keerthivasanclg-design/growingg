import React, { useState } from 'react';
import { SmartphoneGraphic } from './SmartphoneGraphic';
import { ElevateBrandSection } from './ElevateBrandSection';
import { MarketingServicesSection } from './MarketingServicesSection';
import { MarkeingWhatWeDo } from './MarkeingWhatWeDo';
import { ImpactSection } from './ImpactSection';
import { MarketingProcessSection } from './MarketingProcessSection';
import { ModernMarketingSection } from './ModernMarketingSection';
import { ModernMarketingCards } from './ModernMarketingCards';
import { StartupPricingSection } from './StartupPricingSection';
import { ProposalModal } from './ProposalModal';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { GrowingLogo } from './GrowingLogo';
import { ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/919994735573?text=Hi%20growing.%20team!%20I%20would%20like%20to%20send%20my%20startup%20details%20for%20a%20marketing%20proposal%20(Plans%2010k-20k).";

const MarketingPage: React.FC = () => {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<string | undefined>(undefined);

  const handleOpenProposal = (serviceName?: string, planPrice?: string) => {
    setSelectedService(serviceName);
    setSelectedPlanPrice(planPrice);
    setIsProposalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#2b3785] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenProposal={() => handleOpenProposal()} />

      <main className="pt-16 sm:pt-20">
        {/* User Hero Section matching exact specifications with 'growing' branding and #2b3785 theme */}
        <section className="bg-black text-white relative overflow-hidden">
          {/* Subtle Ambient Radial Lighting in brand color #2b3785 */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#2b3785]/25 rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-6 py-20 md:py-32 min-h-screen flex items-center relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              {/* Left Column: Heading, Value Prop, CTA */}
              <div className="flex flex-col justify-center items-start space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono font-medium shadow-inner">
                  <GrowingLogo size={16} />
                  <span>
                    <strong className="text-white lowercase">growing.</strong> Performance & Scale Architecture
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                  Take Your Business to the Next Level with{' '}
                  <span className="text-[#5970ff] bg-gradient-to-r from-[#7a8fff] via-[#5970ff] to-[#2b3785] bg-clip-text text-transparent">
                    Smart Marketing
                  </span>
                </h1>

                <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                  From generating leads and enquiries to boosting sales and growing your audience, our result-driven marketing services are built to scale your business in the digital world.
                </p>

                {/* Direct WhatsApp Callout Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Send direct proposals on WhatsApp: <strong className="font-mono text-white">9994735573</strong></span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                  <button 
                    type="button"
                    onClick={() => handleOpenProposal()}
                    className="px-8 py-3.5 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-xl shadow-white/5 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Get a Free Proposal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp 9994735573</span>
                  </a>

                  <a 
                    href="#pricing"
                    className="px-5 py-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white text-sm font-semibold transition-colors text-center"
                  >
                    Startup Plans (10k-20k)
                  </a>
                </div>

                {/* Hero Social Proof Micro-row */}
                <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5970ff]" />
                    <span>Plans from ₹10,000/mo</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Direct WhatsApp Proposals</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#5970ff]" />
                    <span>No Lock-In Retainers</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Smartphone with Social Media Icons Visual */}
              <div className="flex justify-center items-center animate-fade-in-right">
                <SmartphoneGraphic />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: ElevateBrandSection */}
        <ElevateBrandSection onOpenProposal={() => handleOpenProposal()} />

        {/* Section 3: MarketingServicesSection */}
        <MarketingServicesSection onSelectService={(service) => handleOpenProposal(service)} />

        {/* Section 4: MarkeingWhatWeDo (Simulator calibrated for 10k-20k) */}
        <MarkeingWhatWeDo />

        {/* Section 5: Startup Pricing Plans (10k, 15k, 20k) */}
        <StartupPricingSection 
          onSelectPlan={(planName, price) => handleOpenProposal(planName, price)} 
        />

        {/* Section 6: ImpactSection */}
        <ImpactSection onOpenProposal={() => handleOpenProposal()} />

        {/* Section 6: MarketingProcessSection */}
        <MarketingProcessSection />

        {/* Section 7: ModernMarketingSection */}
        <ModernMarketingSection onOpenProposal={() => handleOpenProposal()} />

        {/* Section 8: ModernMarketingCards */}
        <ModernMarketingCards />
      </main>

      {/* Footer */}
      <Footer onOpenProposal={() => handleOpenProposal()} />

      {/* Interactive Free Proposal Generator Modal */}
      <ProposalModal 
        isOpen={isProposalOpen} 
        onClose={() => setIsProposalOpen(false)}
        initialService={selectedService}
        initialPlanPrice={selectedPlanPrice}
      />
    </div>
  );
};

export default MarketingPage;
