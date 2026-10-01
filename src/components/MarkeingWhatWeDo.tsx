import React, { useState } from 'react';
import { 
  Sliders, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Filter, 
  ShoppingBag,
} from 'lucide-react';
import { GrowingLogo } from './GrowingLogo';

export const MarkeingWhatWeDo: React.FC = () => {
  // Funnel Simulator State (Calibrated for Early-Stage Startups: ₹10,000 - ₹20,000)
  const [adSpend, setAdSpend] = useState<number>(15000);
  const [conversionRate, setConversionRate] = useState<number>(3.5);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(1500);

  // Calculations
  const cpc = 12.50; // optimized startup targeted click cost in INR
  const estimatedVisitors = Math.round(adSpend / cpc);
  const estimatedCustomers = Math.round(estimatedVisitors * (conversionRate / 100));
  const estimatedRevenue = Math.round(estimatedCustomers * avgOrderValue);
  const estimatedRoas = (estimatedRevenue / adSpend).toFixed(2);
  const estimatedProfit = estimatedRevenue - adSpend;

  const comparisonData = [
    {
      feature: 'Performance Attribution',
      traditional: 'Blended monthly guess-work & delayed PDF summaries',
      smart: 'Server-side 1st-party tracking with real-time live portal',
    },
    {
      feature: 'Creative Velocity',
      traditional: '1-2 ad revisions every month after lengthy email chains',
      smart: '20+ weekly modular hooks, angles & format iterations',
    },
    {
      feature: 'Bidding Strategy',
      traditional: 'Manual set-and-forget keyword or basic audience bidding',
      smart: 'AI-assisted algorithmic day-parting & dynamic budget pacing',
    },
    {
      feature: 'Landing Pages',
      traditional: 'Directing all traffic to a generic homepage or slow CMS',
      smart: 'Custom hyper-targeted sub-second CRO landing pages',
    },
    {
      feature: 'Team Structure',
      traditional: 'Handoff to junior account managers post-sales contract',
      smart: 'Direct access to senior media buyers & creative directors',
    },
  ];

  return (
    <section id="what-we-do" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">
            Full-Funnel Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            What We Do: <span className="text-[#6378f7]">Growth Engineering</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            We don’t just buy ads or post on social channels. We architect sustainable customer acquisition machines that compound month-over-month.
          </p>
        </div>

        {/* 3 Full-Funnel Stages Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-[#2b3785]/60 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-white bg-[#2b3785] px-2.5 py-1 rounded">
                STAGE 01
              </span>
              <Eye className="w-5 h-5 text-neutral-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Top of Funnel: Awareness & Intent</h3>
            <p className="text-sm text-neutral-400 mt-2">
              Capturing high-intent search queries and creating high-impact visual scroll-stoppers across YouTube, Meta, and TikTok to attract qualified prospects.
            </p>
            <div className="mt-4 pt-3 border-t border-neutral-800 text-xs text-neutral-300">
              <span className="font-semibold text-[#6378f7]">Tactics:</span> Search Intent Mining · Video Hooks · Cold Audiences
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-[#2b3785]/60 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-white bg-[#2b3785] px-2.5 py-1 rounded">
                STAGE 02
              </span>
              <Filter className="w-5 h-5 text-neutral-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Middle of Funnel: Conversion & Leads</h3>
            <p className="text-sm text-neutral-400 mt-2">
              Frictionless custom landing pages, hyper-personalized offer messaging, and multi-step inquiry funnels that convert cold curiosity into booked calls and sales.
            </p>
            <div className="mt-4 pt-3 border-t border-neutral-800 text-xs text-neutral-300">
              <span className="font-semibold text-[#6378f7]">Tactics:</span> Sub-Second Landers · Social Proof · Objection Handling
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-[#2b3785]/60 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-white bg-[#2b3785] px-2.5 py-1 rounded">
                STAGE 03
              </span>
              <ShoppingBag className="w-5 h-5 text-neutral-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Bottom of Funnel: Scale & Retention</h3>
            <p className="text-sm text-neutral-400 mt-2">
              Automated behavioral email flows, SMS alerts, dynamic retargeting, and cross-sell triggers to turn single transactions into lifetime brand advocates.
            </p>
            <div className="mt-4 pt-3 border-t border-neutral-800 text-xs text-neutral-300">
              <span className="font-semibold text-[#6378f7]">Tactics:</span> Klaviyo Flows · Dynamic Product Ads · LTV Expansion
            </div>
          </div>
        </div>

        {/* Interactive Growth Simulator */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/70 border border-neutral-800 shadow-2xl mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-[#6378f7]" />
                <span className="text-xs font-mono uppercase text-[#6378f7] font-semibold tracking-wider">
                  Interactive Simulator
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Calculate Your Scale Potential
              </h3>
              <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                Simulate how smart algorithmic optimization and conversion rate gains multiply your revenue on the same marketing investment.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-neutral-400">Current Simulation:</span>
              <span className="text-xs font-mono font-bold text-white bg-[#2b3785] border border-[#3e4ea8] px-3.5 py-1.5 rounded-lg shadow-sm">
                Estimated ROAS: {estimatedRoas}x
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mt-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Ad Spend Slider */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <label htmlFor="ad-spend-range" className="text-neutral-300">Monthly Ad Budget (INR)</label>
                  <span className="font-mono text-[#8496ff] text-base">₹{adSpend.toLocaleString('en-IN')}</span>
                </div>
                <input
                  id="ad-spend-range"
                  type="range"
                  min="10000"
                  max="50000"
                  step="1000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full accent-[#2b3785] bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                  <span className="text-[#8496ff] font-semibold">₹10,000 (Starter)</span>
                  <span className="text-[#8496ff] font-semibold">₹15,000 (Accelerator)</span>
                  <span className="text-[#8496ff] font-semibold">₹20,000 (Dominate)</span>
                  <span>₹50,000</span>
                </div>
              </div>

              {/* Conversion Rate Slider */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <label htmlFor="conv-rate-range" className="text-neutral-300">Target Conversion Rate</label>
                  <span className="font-mono text-[#8496ff] text-base">{conversionRate.toFixed(1)}%</span>
                </div>
                <input
                  id="conv-rate-range"
                  type="range"
                  min="1.0"
                  max="6.0"
                  step="0.1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full accent-[#2b3785] bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                  <span>1.0% (Industry Avg)</span>
                  <span>3.2% (growing Avg)</span>
                  <span>6.0% (Optimized Peak)</span>
                </div>
              </div>

              {/* Average Order Value / Lead Value Slider */}
              <div>
                <div className="flex justify-between items-center text-sm font-semibold mb-2">
                  <label htmlFor="order-value-range" className="text-neutral-300">Average Customer / Order Value (INR)</label>
                  <span className="font-mono text-[#8496ff] text-base">₹{avgOrderValue.toLocaleString('en-IN')}</span>
                </div>
                <input
                  id="order-value-range"
                  type="range"
                  min="800"
                  max="25000"
                  step="200"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full accent-[#2b3785] bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                  <span>₹800</span>
                  <span>₹12,000</span>
                  <span>₹25,000+</span>
                </div>
              </div>
            </div>

            {/* Projected Outputs */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                <p className="text-xs text-neutral-400">Target Traffic</p>
                <p className="text-2xl font-bold font-mono text-white mt-1">
                  {estimatedVisitors.toLocaleString('en-IN')}
                </p>
                <p className="text-[11px] text-neutral-500 mt-1">Qualified clicks @ ₹12.50 CPC</p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                <p className="text-xs text-neutral-400">Projected Customers/Leads</p>
                <p className="text-2xl font-bold font-mono text-white mt-1">
                  {estimatedCustomers.toLocaleString('en-IN')}
                </p>
                <p className="text-[11px] text-emerald-400 mt-1 font-semibold">At {conversionRate}% conversion</p>
              </div>

              <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-[#2b3785]/35 border border-[#2b3785]/60 shadow-lg shadow-[#2b3785]/10">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8496ff] font-semibold font-mono">
                      Projected Monthly Revenue
                    </span>
                    <p className="text-3xl sm:text-4xl font-extrabold font-mono text-white mt-1">
                      ₹{estimatedRevenue.toLocaleString('en-IN')}
                    </p>
                    <p className="text-xs text-neutral-300 mt-1">
                      Net Ad Profit: <span className="text-emerald-400 font-mono font-bold">{estimatedProfit >= 0 ? '+' : ''}₹{estimatedProfit.toLocaleString('en-IN')}</span> (after ad spend)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-400 block">Est. Return</span>
                    <span className="text-2xl font-bold text-[#8496ff] font-mono">{estimatedRoas}x</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Agency vs growing Approach Comparison Table */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Why High-Growth Brands Fire Traditional Agencies
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              The difference between slow vanity metrics and pure enterprise growth
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-900/80 text-xs uppercase font-mono tracking-wider">
                  <th className="py-4 px-6 text-neutral-400">Core Capability</th>
                  <th className="py-4 px-6 text-rose-400">Traditional Agencies</th>
                  <th className="py-4 px-6 text-[#8496ff] flex items-center gap-2">
                    <GrowingLogo size={16} />
                    <span>growing Approach</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/60 text-sm">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-900/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-neutral-400 flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                      <span>{row.traditional}</span>
                    </td>
                    <td className="py-4 px-6 text-neutral-200">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[#5970ff] mt-0.5 shrink-0" />
                        <span className="font-medium text-white">{row.smart}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
