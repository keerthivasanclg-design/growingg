import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GrowingLogo } from './GrowingLogo';

interface NavbarProps {
  onOpenProposal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProposal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <GrowingLogo size={36} />
          <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-neutral-200 transition-colors lowercase">
            growing<span className="text-[#3d50c2]">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-neutral-300">
          <a href="#elevate" className="hover:text-[#6378f7] transition-colors">
            Why Us
          </a>
          <a href="#services" className="hover:text-[#6378f7] transition-colors">
            Services
          </a>
          <a href="#what-we-do" className="hover:text-[#6378f7] transition-colors">
            Simulator
          </a>
          <a href="#pricing" className="hover:text-[#6378f7] transition-colors text-[#8496ff] font-semibold flex items-center gap-1">
            <span>Pricing (10k-20k)</span>
          </a>
          <a href="#impact" className="hover:text-[#6378f7] transition-colors">
            Case Studies
          </a>
          <a href="#process" className="hover:text-[#6378f7] transition-colors">
            Our Process
          </a>
          <a href="#modern-marketing" className="hover:text-[#6378f7] transition-colors">
            Growth Grader
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* WhatsApp Direct Link */}
          <a
            href="https://wa.me/919994735573?text=Hi%20growing.%20team,%20I%20would%20like%20to%20request%20a%20Growth%20Proposal%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/40 text-emerald-300 font-semibold text-xs flex items-center gap-1.5 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono">9994735573</span>
          </a>

          <button
            type="button"
            onClick={onOpenProposal}
            className="px-5 py-2 bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-xs rounded-lg transition-all duration-200 flex items-center gap-1.5 shadow-lg shadow-[#2b3785]/30 hover:shadow-[#2b3785]/50 hover:scale-[1.02]"
          >
            <span>Get Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-neutral-300">
            <a 
              href="#elevate" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#6378f7]"
            >
              Why Us
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#6378f7]"
            >
              Services
            </a>
            <a 
              href="#what-we-do" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#6378f7]"
            >
              Simulator
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#8496ff] font-semibold flex items-center justify-between"
            >
              <span>Startup Plans (₹10k - ₹20k)</span>
              <span className="text-[10px] bg-[#2b3785]/40 px-2 py-0.5 rounded border border-[#2b3785]">New</span>
            </a>
            <a 
              href="#impact" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#6378f7]"
            >
              Case Studies
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#6378f7]"
            >
              Our Process
            </a>
            <a 
              href="#modern-marketing" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#6378f7]"
            >
              Website Grader
            </a>
          </div>

          <div className="pt-3 border-t border-neutral-800 space-y-2">
            <a
              href="https://wa.me/919994735573?text=Hi%20growing.%20team,%20I%20would%20like%20to%20request%20a%20Growth%20Proposal%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 font-semibold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp: 9994735573</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-3 bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-[#2b3785]/30"
            >
              <span>Get a Free Proposal</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
