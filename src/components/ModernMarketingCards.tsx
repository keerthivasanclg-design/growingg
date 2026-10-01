import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Database,
} from 'lucide-react';

export const ModernMarketingCards: React.FC = () => {
  return (
    <section id="modern-cards" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">
            Proprietary Growth Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            The Modern Marketing <span className="text-[#6378f7]">Playbook</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            A modular growth stack built to thrive in algorithmic auction environments where ordinary agencies falter.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Card 1 (Large - 8 cols): Algorithmic Bidding & Day-Parting */}
          <div className="md:col-span-8 p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-[#2b3785]/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono font-bold text-white bg-[#2b3785] px-3 py-1 rounded-md border border-[#3e4ea8]">
                  SYSTEM CORE 01
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Dynamic Pacing
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#8496ff] transition-colors">
                AI Predictive Bidding & Automated Day-Parting
              </h3>
              <p className="text-sm text-neutral-400 mt-2 max-w-2xl leading-relaxed">
                Ad platform algorithms default to burning your daily budget evenly across all 24 hours. We deploy automated scripts that restrict spend to your highest-converting buyer windows and surge budgets dynamically during peak buying hours.
              </p>

              {/* Visual Simulated Bidding Rhythm */}
              <div className="mt-6 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80">
                <div className="flex justify-between text-xs text-neutral-400 mb-3">
                  <span>24-Hour Auction Liquidity vs Bid Multiplier</span>
                  <span className="text-[#8496ff] font-mono font-bold">+38% Efficiency Gain</span>
                </div>
                <div className="grid grid-cols-12 gap-1.5 items-end h-24 pt-4">
                  {[20, 15, 10, 10, 25, 45, 75, 95, 100, 85, 90, 70].map((height, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                      <div 
                        className={`w-full rounded-t transition-all duration-500 ${
                          height > 70 ? 'bg-[#2b3785]' : height > 40 ? 'bg-[#3b4cb8]/60' : 'bg-neutral-800'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-[9px] text-neutral-600 font-mono">
                        {i * 2}h
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Zero Over-Spend Guarantee
              </span>
              <span className="font-mono text-white">Target CPA Bound: ±5%</span>
            </div>
          </div>

          {/* Card 2 (4 cols): Server-Side CAPI */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-[#2b3785]/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono font-bold text-white bg-[#2b3785] px-3 py-1 rounded-md border border-[#3e4ea8]">
                  SYSTEM CORE 02
                </span>
                <Database className="w-5 h-5 text-[#8496ff]" />
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#8496ff] transition-colors">
                Server-Side First-Party Attribution
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Third-party browser cookies lose 30%+ of purchase events due to browser ad blockers. Our server-side CAPI pipeline restores 100% data fidelity back to ad networks.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-neutral-400">Event Match Quality</span>
                  <span className="text-emerald-400 font-mono font-bold">9.4 / 10 (Great)</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="w-[94%] bg-emerald-500 h-full rounded-full" />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Attribution verified across Meta, Google GA4, and TikTok Server API.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
              <span className="text-[#8496ff] font-semibold">+22% More Attributed Conversions</span>
            </div>
          </div>

          {/* Card 3 (4 cols): Modular Creative Variations */}
          <div className="md:col-span-4 p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-[#2b3785]/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono font-bold text-white bg-[#2b3785] px-3 py-1 rounded-md border border-[#3e4ea8]">
                  SYSTEM CORE 03
                </span>
                <Layers className="w-5 h-5 text-[#8496ff]" />
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-[#8496ff] transition-colors">
                Modular Creative Engine
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Rather than testing one ad at a time, we break every asset into 3 Hooks x 3 Bodies x 3 CTAs = 27 unique variations tested simultaneously to find breakthrough winners.
              </p>

              <div className="mt-5 space-y-2">
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
                  <span>Hook A: Problem Agitation</span>
                  <span className="text-emerald-400 font-mono text-[10px]">4.8% CTR (Top)</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
                  <span>Hook B: Social Proof / Review</span>
                  <span className="text-neutral-400 font-mono text-[10px]">3.1% CTR</span>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 flex items-center justify-between">
                  <span>Hook C: Feature Showcase</span>
                  <span className="text-neutral-400 font-mono text-[10px]">2.2% CTR</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-xs text-neutral-400">
              <span>Continuous weekly creative refresh cycle</span>
            </div>
          </div>

          {/* Card 4 (8 cols): Sub-Second CRO Landing Pages */}
          <div className="md:col-span-8 p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-[#2b3785]/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-mono font-bold text-white bg-[#2b3785] px-3 py-1 rounded-md border border-[#3e4ea8]">
                  SYSTEM CORE 04
                </span>
                <span className="text-xs font-mono text-[#8496ff]">
                  Edge Distributed & Optimized
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#8496ff] transition-colors">
                Sub-Second Speed & Frictionless Checkout Architectures
              </h3>
              <p className="text-sm text-neutral-400 mt-2 max-w-2xl leading-relaxed">
                For every 100ms delay in page load time, conversion rates drop by 7%. We build custom headless landing pages and multi-step inquiry funnels that load in under 450 milliseconds worldwide.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800">
                  <span className="text-[11px] text-neutral-400 block">Global TTFB Speed</span>
                  <span className="text-2xl font-bold font-mono text-emerald-400 mt-1 block">42ms</span>
                  <span className="text-[10px] text-neutral-500">Cloudflare Edge Cache</span>
                </div>
                <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800">
                  <span className="text-[11px] text-neutral-400 block">Mobile Conversion Rate</span>
                  <span className="text-2xl font-bold font-mono text-[#8496ff] mt-1 block">4.92%</span>
                  <span className="text-[10px] text-neutral-500">Vs 1.8% industry avg</span>
                </div>
                <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800">
                  <span className="text-[11px] text-neutral-400 block">Checkout Abandonment</span>
                  <span className="text-2xl font-bold font-mono text-white mt-1 block">-38%</span>
                  <span className="text-[10px] text-neutral-500">Single-click express checkout</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span className="text-neutral-300">Custom tailored per ad message angle</span>
              <span className="text-[#8496ff] font-mono">100% Core Web Vitals Pass</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
