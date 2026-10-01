import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Rocket, 
  Repeat, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  FileText,
  ShieldCheck
} from 'lucide-react';

export const MarketingProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Audit & Intelligence Reconnaissance',
      timeframe: 'Days 1 – 7',
      icon: Compass,
      tagline: 'Deconstruct current unit economics, competitor blind spots & attribution leaks',
      summary: 'Before spending a single rupee of your ad budget, our lead media buyers and data engineers audit your ad accounts, pixel tracking, Core Web Vitals, and landing page drop-off points.',
      deliverables: [
        'Multi-channel account hygiene & pixel tracking verification',
        'Competitor creative hook & offer reverse-engineering',
        'Audience TAM (Total Addressable Market) segmentation map',
        'Customer journey drop-off point & friction heatmaps',
        'Blended baseline CAC & LTV target benchmarking'
      ],
      teamInvolved: 'Lead Data Engineer & Senior Media Buyer',
      keyOutcome: 'Comprehensive 360° Growth Audit & Leak Prevention Plan',
    },
    {
      number: '02',
      title: 'Funnel Architecture & Creative Sprint',
      timeframe: 'Days 8 – 14',
      icon: Layers,
      tagline: 'Develop irresistible psychological hooks, offers & conversion landers',
      summary: 'We build high-converting custom landing pages tailored to distinct buyer personas, write 20+ viral ad copy variations, and produce high-impact motion creative in our design studio.',
      deliverables: [
        'Bespoke sub-second speed landing page buildout',
        'Direct-response copy scripts for 15+ video hooks',
        '3D/Motion graphics ad variations & statics',
        'Server-side CAPI / first-party attribution tracking tag setup',
        'CRM/Email welcome & abandon cart flow integration'
      ],
      teamInvolved: 'Creative Director, Copywriter & CRO Architect',
      keyOutcome: 'Turnkey Launch-Ready Asset Library & Conversion Landers',
    },
    {
      number: '03',
      title: 'Omnichannel Launch & Rapid Testing',
      timeframe: 'Days 15 – 30',
      icon: Rocket,
      tagline: 'High-velocity testing across Meta, Google, TikTok and Search',
      summary: 'We deploy campaigns across controlled budget brackets, testing creative variations, bidding algorithms, and demographic subsets to rapidly identify your highest-ROAS winning combinations.',
      deliverables: [
        'Multi-variant algorithmic ad deployment',
        'Real-time dayparting & budget shift execution',
        'Micro-budget hook rate & hold rate analysis',
        'Negative keyword and non-converting audience culling',
        'First weekly comprehensive ROAS performance debrief'
      ],
      teamInvolved: 'Head of Media Buying & Data Strategist',
      keyOutcome: 'Statistically Validated Winning Creative & Audience Combos',
    },
    {
      number: '04',
      title: 'Aggressive Scale & LTV Compounding',
      timeframe: 'Day 31 Onward',
      icon: Repeat,
      tagline: 'Pour fuel on proven funnels while compounding retention & repeat purchases',
      summary: 'With your customer acquisition cost stabilized and predictability proven, we scale ad budgets aggressively while dialing in automated email/SMS retention flows to maximize customer lifetime value.',
      deliverables: [
        'Systematic budget scaling without ad fatigue or CAC spikes',
        'Continuous weekly creative refreshing & iterations',
        'Deep lifecycle automation & repeat purchase optimization',
        'International or adjacent market penetration strategies',
        'Executive live dashboard for real-time Blended MER & cashflow'
      ],
      teamInvolved: 'Senior Growth Squad & Lifecycle Director',
      keyOutcome: 'Compounding Revenue Flywheel Operating at Max ROAS',
    },
  ];

  return (
    <section id="process" className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">
            Predictable Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Our 4-Stage <span className="text-[#6378f7]">Growth Protocol</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            No guessing, no vanity metrics. A scientific, repeatable process designed to scale revenue systematically from day one.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-left transition-all relative cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 border-[#2b3785] ring-1 ring-[#2b3785] shadow-xl shadow-[#2b3785]/20'
                    : 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/70'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-[#2b3785] text-white' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    PHASE {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {step.timeframe}
                  </span>
                </div>
                <h4 className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase */}
        {(() => {
          const current = steps[activeStep];
          const Icon = current.icon;

          return (
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/70 border border-neutral-800 transition-all">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#2b3785]/20 border border-[#2b3785]/40 flex items-center justify-center text-[#6378f7]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#8496ff] font-bold uppercase tracking-wider">
                        Phase {current.number} · {current.timeframe}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {current.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-[#8496ff] mb-3">
                    {current.tagline}
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                    {current.summary}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5">
                    <h5 className="text-xs font-mono uppercase text-neutral-400 tracking-wider font-semibold">
                      Phase Deliverables & Checkpoints:
                    </h5>
                    {current.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <CheckCircle2 className="w-4 h-4 text-[#5970ff] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-neutral-950/80 border border-neutral-800 rounded-2xl p-6 space-y-5">
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Dedicated Squad
                    </span>
                    <p className="text-sm font-semibold text-white mt-1 flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#8496ff]" />
                      {current.teamInvolved}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Primary Milestone Deliverable
                    </span>
                    <p className="text-sm font-semibold text-[#8496ff] mt-1 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#8496ff]" />
                      {current.keyOutcome}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Accountability Guarantee
                    </span>
                    <p className="text-xs text-neutral-300 mt-1 leading-relaxed flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      Weekly sprint reviews, zero opaque markups on ad spend, and live 24/7 client portal access.
                    </p>
                  </div>

                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                      className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-[#2b3785]/30 border border-neutral-700 hover:border-[#2b3785] text-xs font-bold text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Explore Next Phase ({steps[(activeStep + 1) % steps.length].title})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
