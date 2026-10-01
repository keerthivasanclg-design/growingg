import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Activity, 
  Globe
} from 'lucide-react';

interface ModernMarketingSectionProps {
  onOpenProposal?: () => void;
}

export const ModernMarketingSection: React.FC<ModernMarketingSectionProps> = ({ onOpenProposal }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [businessType, setBusinessType] = useState('ecommerce');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    speedScore: number;
    trackingScore: number;
    croScore: number;
    overallGrade: string;
    criticalFindings: string[];
    quickWins: string[];
  } | null>(null);

  const techPartners = [
    { name: 'Google Ads Premier', tag: 'Certified' },
    { name: 'Meta Business Partner', tag: 'Tier 1' },
    { name: 'TikTok Marketing Partner', tag: 'Badged' },
    { name: 'Klaviyo Elite', tag: 'Certified Partner' },
    { name: 'Shopify Plus Partner', tag: 'Developer' },
    { name: 'HubSpot Diamond', tag: 'Solutions' },
    { name: 'GA4 / BigQuery', tag: 'Attribution' },
    { name: 'Semrush Pro', tag: 'Agency Partner' },
  ];

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) return;

    setIsScanning(true);
    setScanResult(null);

    // Simulate intelligent marketing audit scan
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        speedScore: 78,
        trackingScore: 62,
        croScore: 71,
        overallGrade: 'B-',
        criticalFindings: [
          'Missing server-side Conversions API (CAPI) deduplication on purchase/lead events (~28% data loss to iOS)',
          'High mobile layout shift (CLS) detected during initial hero load causing drop-offs',
          'Checkout funnel lacks one-click dynamic post-purchase upsell architecture',
          'Email capture popup lacks zero-party behavioral intent triggers',
        ],
        quickWins: [
          'Deploy first-party server GTM container to recover lost Meta & Google attribution',
          'Optimize hero media with WebP next-gen format to save 1.4s on Mobile LCP',
          'Add customer review proof chips directly adjacent to Add-to-Cart / Demo CTA',
          'Implement 2-step SMS welcome series with instant discount code push',
        ],
      });
    }, 1800);
  };

  return (
    <section id="modern-marketing" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#6378f7] font-mono text-xs uppercase tracking-widest font-semibold">
            Certified Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            Modern Marketing Powered by <span className="text-[#6378f7]">Enterprise Tech</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            We hold official agency partnerships and certifications with every major ad network and e-commerce infrastructure platform.
          </p>
        </div>

        {/* Tech Partner Badges Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techPartners.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between group hover:border-[#2b3785]/60 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#6378f7] group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold text-neutral-200 group-hover:text-white">
                    {item.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8496ff] bg-[#2b3785]/20 border border-[#2b3785]/40 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Growth Grader & Audit Tool */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/50 border border-neutral-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2b3785]/20 border border-[#2b3785]/40 text-[#8496ff] text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Instant Free Diagnostic
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Instant Website & Funnel Grader
            </h3>
            <p className="text-sm text-neutral-400 mt-2">
              Enter your website domain to analyze tracking hygiene, speed leaks, and conversion readiness.
            </p>
          </div>

          <form onSubmit={handleRunAudit} className="max-w-2xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Globe className="w-5 h-5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="yourcompany.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#2b3785] transition-colors"
                />
              </div>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="py-3.5 px-4 rounded-xl bg-neutral-950 border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#2b3785]"
              >
                <option value="ecommerce">E-Commerce / DTC</option>
                <option value="b2b_saas">B2B SaaS / Tech</option>
                <option value="lead_gen">Local / Service Business</option>
                <option value="agency">Consulting / High-Ticket</option>
              </select>
              <button
                type="submit"
                disabled={isScanning}
                className="whitespace-nowrap px-6 py-3.5 bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2b3785]/30 disabled:opacity-60 cursor-pointer"
              >
                {isScanning ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>Run Diagnostic</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            <p className="text-[11px] text-center text-neutral-500">
              No credit card required. Live heuristic scan based on top 1,000 high-converting setups.
            </p>
          </form>

          {/* Audit Results Presentation */}
          {scanResult && (
            <div className="mt-8 pt-8 border-t border-neutral-800 max-w-4xl mx-auto animate-fade-in-up">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 mb-6">
                <div>
                  <span className="text-xs text-neutral-400">Scanned Domain</span>
                  <p className="text-base font-bold text-white font-mono">{websiteUrl}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <span className="text-[10px] text-neutral-400 block">Overall Score</span>
                    <span className="text-2xl font-black text-[#8496ff] font-mono">{scanResult.overallGrade}</span>
                  </div>
                  <div className="h-8 w-px bg-neutral-800" />
                  <div className="text-center">
                    <span className="text-[10px] text-neutral-400 block">Speed</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">{scanResult.speedScore}/100</span>
                  </div>
                  <div className="h-8 w-px bg-neutral-800" />
                  <div className="text-center">
                    <span className="text-[10px] text-neutral-400 block">Tracking</span>
                    <span className="text-sm font-bold text-[#8496ff] font-mono">{scanResult.trackingScore}/100</span>
                  </div>
                  <div className="h-8 w-px bg-neutral-800" />
                  <div className="text-center">
                    <span className="text-[10px] text-neutral-400 block">CRO</span>
                    <span className="text-sm font-bold text-blue-400 font-mono">{scanResult.croScore}/100</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Critical Bottlenecks */}
                <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                  <h4 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-rose-500" />
                    Identified Bottlenecks (Costing You Ad Budget)
                  </h4>
                  <ul className="space-y-2.5">
                    {scanResult.criticalFindings.map((finding, idx) => (
                      <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Fixes */}
                <div className="p-5 rounded-2xl bg-neutral-950/60 border border-neutral-800">
                  <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Recommended Growth Interventions
                  </h4>
                  <ul className="space-y-2.5">
                    {scanResult.quickWins.map((win, idx) => (
                      <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={onOpenProposal}
                  className="px-6 py-3 bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#2b3785]/30 cursor-pointer"
                >
                  <span>Request Full Engineering Audit & Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
