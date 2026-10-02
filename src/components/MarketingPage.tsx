
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

const WHATSAPP_URL =
  "https://wa.me/919994735573?text=Hi%20growing.%20team!%20I%20would%20like%20to%20send%20my%20startup%20details%20for%20a%20marketing%20proposal%20(Plans%2010k-20k).";

const MarketingPage: React.FC = () => {
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(
    undefined
  );
  const [selectedPlanPrice, setSelectedPlanPrice] = useState<
    string | undefined
  >(undefined);

  const handleOpenProposal = (
    serviceName?: string,
    planPrice?: string
  ) => {
    setSelectedService(serviceName);
    setSelectedPlanPrice(planPrice);
    setIsProposalOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-black text-white selection:bg-[#2b3785] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenProposal={() => handleOpenProposal()} />

      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-x-clip bg-black text-white">
          {/* Ambient Lighting */}
          <div className="pointer-events-none absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2b3785]/25 blur-[100px] sm:h-[650px] sm:w-[650px] sm:blur-[140px]" />

          {/* Hero Container */}
          <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl items-center px-5 py-12 sm:px-6 sm:py-20 md:min-h-screen md:py-32">
            <div className="grid w-full min-w-0 grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">

              {/* Left Column: Heading, Description and CTA */}
              <div className="flex w-full min-w-0 flex-col items-start justify-center space-y-6 sm:space-y-8 animate-fade-in-up">

                {/* Brand Badge */}
                <div className="inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-300 shadow-inner sm:px-3.5">
                  <GrowingLogo size={16} />
                  <span className="min-w-0 break-words">
                    <strong className="lowercase text-white">
                      growing.
                    </strong>{' '}
                    Performance &amp; Scale Architecture
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="w-full min-w-0 break-words text-[clamp(2.25rem,8vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                  Take Your Business to the Next Level with{' '}
                  <span className="bg-gradient-to-r from-[#7a8fff] via-[#5970ff] to-[#2b3785] bg-clip-text text-transparent">
                    Smart Marketing
                  </span>
                </h1>

                {/* Description */}
                <p className="w-full max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg">
                  From generating leads and enquiries to boosting sales and
                  growing your audience, our result-driven marketing services
                  are built to scale your business in the digital world.
                </p>

                {/* Direct WhatsApp Callout */}
                <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/40 px-3 py-1.5 text-xs text-emerald-300">
                  <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400" />
                  <span className="break-words">
                    Send direct proposals on WhatsApp:{' '}
                    <strong className="font-mono text-white">
                      9994735573
                    </strong>
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">

                  {/* Free Proposal Button */}
                  <button
                    type="button"
                    onClick={() => handleOpenProposal()}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-black shadow-xl shadow-white/5 transition-all duration-300 hover:bg-neutral-200 sm:w-auto sm:px-8"
                  >
                    <span>Get a Free Proposal</span>
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </button>

                  {/* WhatsApp Button */}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 px-5 py-3.5 text-center text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-900/40 sm:w-auto sm:px-6"
                  >
                    <MessageSquare className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>WhatsApp 9994735573</span>
                  </a>

                  {/* Startup Plans Button */}
                  <a
                    href="#pricing"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-5 py-3.5 text-center text-sm font-semibold text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white sm:w-auto"
                  >
                    Startup Plans (10k-20k)
                  </a>
                </div>

                {/* Hero Social Proof */}
                <div className="flex w-full flex-wrap items-center gap-x-6 gap-y-3 border-t border-neutral-900 pt-4 text-xs text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5970ff]" />
                    <span>Plans from ₹10,000/mo</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>Direct WhatsApp Proposals</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5970ff]" />
                    <span>No Lock-In Retainers</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Smartphone Graphic */}
             
{/* Right Column: Smartphone Graphic */}
<div className="relative flex w-full min-w-0 items-center justify-center overflow-visible animate-fade-in-right">
  <div className="relative flex w-full min-w-0 items-center justify-center overflow-visible">
    <SmartphoneGraphic />
  </div>
</div>

            </div>
          </div>
        </section>

        {/* Section 2: Elevate Brand */}
        <ElevateBrandSection
          onOpenProposal={() => handleOpenProposal()}
        />

        {/* Section 3: Marketing Services */}
        <MarketingServicesSection
          onSelectService={(service) => handleOpenProposal(service)}
        />

        {/* Section 4: Marketing Simulator */}
        <MarkeingWhatWeDo />

        {/* Section 5: Startup Pricing Plans */}
        <StartupPricingSection
          onSelectPlan={(planName, price) =>
            handleOpenProposal(planName, price)
          }
        />

        {/* Section 6: Impact */}
        <ImpactSection
          onOpenProposal={() => handleOpenProposal()}
        />

        {/* Section 7: Marketing Process */}
        <MarketingProcessSection />

        {/* Section 8: Modern Marketing */}
        <ModernMarketingSection
          onOpenProposal={() => handleOpenProposal()}
        />

        {/* Section 9: Modern Marketing Cards */}
        <ModernMarketingCards />
      </main>

      {/* Footer */}
      <Footer
        onOpenProposal={() => handleOpenProposal()}
      />

      {/* Proposal Generator Modal */}
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