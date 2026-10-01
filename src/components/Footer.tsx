import React from 'react';
import { ArrowUpRight, Instagram, Facebook, Youtube, Linkedin, MessageSquare, PhoneCall } from 'lucide-react';
import { GrowingLogo } from './GrowingLogo';

interface FooterProps {
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProposal }) => {
  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 pt-16 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <GrowingLogo size={32} />
              <span className="font-extrabold text-2xl text-white tracking-tight lowercase">
                growing<span className="text-[#3d50c2]">.</span>
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Performance marketing, algorithmic media buying, and conversion rate architecture engineered for ambitious startups seeking profitable exponential scale.
            </p>

            {/* Direct WhatsApp Contact Card */}
            <div className="p-3.5 rounded-2xl bg-neutral-900/80 border border-emerald-500/30 max-w-sm">
              <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-semibold mb-1 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Proposal Desk</span>
              </span>
              <div className="flex items-center justify-between">
                <a 
                  href="https://wa.me/919994735573?text=Hi%20growing.%20team,%20I%20would%20like%20to%20request%20a%20Growth%20Proposal%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-base font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span>+91 99947 35573</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono">Chat Now</span>
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#6378f7] hover:border-[#2b3785]/60 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#6378f7] hover:border-[#2b3785]/60 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#6378f7] hover:border-[#2b3785]/60 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#6378f7] hover:border-[#2b3785]/60 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-[#6378f7] transition-colors">Meta & Google Ads</a></li>
              <li><a href="#services" className="hover:text-[#6378f7] transition-colors">TikTok Spark Growth</a></li>
              <li><a href="#services" className="hover:text-[#6378f7] transition-colors">SEO & AEO Domination</a></li>
              <li><a href="#services" className="hover:text-[#6378f7] transition-colors">Conversion Rate Optimization</a></li>
              <li><a href="#services" className="hover:text-[#6378f7] transition-colors">Klaviyo Retention Flows</a></li>
              <li><a href="#services" className="hover:text-[#6378f7] transition-colors">Creative Studio Production</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#elevate" className="hover:text-[#6378f7] transition-colors">Why growing</a></li>
              <li><a href="#pricing" className="hover:text-[#6378f7] text-[#8496ff] font-semibold transition-colors">Startup Plans (₹10k - ₹20k)</a></li>
              <li><a href="#what-we-do" className="hover:text-[#6378f7] transition-colors">Funnel Simulator</a></li>
              <li><a href="#impact" className="hover:text-[#6378f7] transition-colors">Audited Case Studies</a></li>
              <li><a href="#process" className="hover:text-[#6378f7] transition-colors">4-Stage Protocol</a></li>
              <li><a href="#modern-marketing" className="hover:text-[#6378f7] transition-colors">Growth Grader</a></li>
              <li><a href="#modern-cards" className="hover:text-[#6378f7] transition-colors">Infrastructure</a></li>
            </ul>
          </div>

          {/* Free Proposal CTA */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Get Started
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Send your requirements directly to our growth desk on WhatsApp or generate your roadmap.
            </p>
            <div className="space-y-2">
              <button
                type="button"
                onClick={onOpenProposal}
                className="w-full py-2.5 px-4 bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-[#2b3785]/30 cursor-pointer"
              >
                <span>Get Free Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/919994735573?text=Hi%20growing.%20team,%20I%20would%20like%20to%20request%20a%20Growth%20Proposal%20for%20my%20startup."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-4 rounded-xl border border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-300 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: 9994735573</span>
              </a>
            </div>
            <div className="text-[11px] text-neutral-500 flex items-center gap-1 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>WhatsApp response within 30 mins</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} growing Performance Marketing Inc. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400">Terms of Service</a>
            <a href="#" className="hover:text-neutral-400">Security & Tracking Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
