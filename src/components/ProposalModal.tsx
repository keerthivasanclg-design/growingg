import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Send,
  Building,
  Mail,
  User,
  Phone,
  Target
} from 'lucide-react';
import { GrowingLogo } from './GrowingLogo';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPlanPrice?: string;
}

const WHATSAPP_NUMBER = '9994735573';
const WHATSAPP_INTL = '919994735573'; // India code +91 + 9994735573

export const ProposalModal: React.FC<ProposalModalProps> = ({ 
  isOpen, 
  onClose, 
  initialService,
  initialPlanPrice 
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    companyName: '',
    websiteUrl: '',
    fullName: '',
    email: '',
    phone: '',
    whatsappNote: '',
    monthlyBudget: initialPlanPrice 
      ? `${initialService || 'Startup Plan'} (${initialPlanPrice})` 
      : '₹15,000 / month (Accelerator)',
    primaryGoal: 'leads',
    selectedService: initialService || 'Startup Performance Marketing (₹10k - ₹20k)',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  // Construct direct WhatsApp proposal URL
  const buildWhatsAppMessage = () => {
    const text = `Hi growing. team! 👋%0A%0AI would like to request a Growth Proposal for my startup:%0A%0A*Name:* ${encodeURIComponent(formData.fullName || 'Founder')}%0A*Company / Brand:* ${encodeURIComponent(formData.companyName || 'My Startup')}%0A*Website / Social:* ${encodeURIComponent(formData.websiteUrl || 'Not provided')}%0A*Selected Plan / Budget:* ${encodeURIComponent(formData.monthlyBudget)}%0A*Target Objective:* ${encodeURIComponent(formData.primaryGoal.toUpperCase())}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Client Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A${formData.whatsappNote ? `*Requirement Notes:* ${encodeURIComponent(formData.whatsappNote)}%0A` : ''}%0APlease send the custom growth roadmap and sprint proposal to this WhatsApp number.`;
    return `https://wa.me/${WHATSAPP_INTL}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Open WhatsApp in a new tab automatically
    const whatsappUrl = buildWhatsAppMessage();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsAppClick = () => {
    const whatsappUrl = buildWhatsAppMessage();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in-up">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <GrowingLogo size={20} />
              <span className="text-xs font-mono text-[#8496ff] uppercase tracking-widest font-semibold">
                growing Custom Proposal
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Get Your Custom <span className="text-[#6378f7]">Growth Blueprint</span>
            </h3>
            
            {/* WhatsApp Direct Send Banner */}
            <div className="mt-3 p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="text-emerald-300 font-bold block">Instant WhatsApp Delivery</span>
                  <span className="text-neutral-300">
                    Proposals will be sent directly to WhatsApp: <strong className="text-white font-mono">{WHATSAPP_NUMBER}</strong>
                  </span>
                </div>
              </div>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold shrink-0">
                Live Support
              </span>
            </div>

            {/* Stepper Indicator */}
            <div className="flex items-center justify-between mt-6 mb-6 px-2">
              {[
                { num: 1, label: 'Company' },
                { num: 2, label: 'Plan & Budget' },
                { num: 3, label: 'WhatsApp Send' },
              ].map((s) => (
                <div key={s.num} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      step >= s.num
                        ? 'bg-[#2b3785] text-white border border-[#5970ff]'
                        : 'bg-neutral-800 text-neutral-500'
                    }`}
                  >
                    {s.num}
                  </div>
                  <span
                    className={`text-xs hidden sm:inline ${
                      step >= s.num ? 'text-white font-medium' : 'text-neutral-500'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-neutral-300">Step 1: Tell us about your startup or brand</h4>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-[#5970ff]" />
                      <span>Company / Brand Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. NeoFit Apparel, CloudFlow AI"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#2b3785]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Website URL or Instagram Handle *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. www.yourbrand.in or @yourbrand"
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#2b3785]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-2 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-[#5970ff]" />
                      <span>Primary Growth Objective</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'leads', label: 'Inbound Leads / Enquiries' },
                        { id: 'sales', label: 'E-commerce Orders' },
                        { id: 'scale', label: 'Brand Awareness & Reach' },
                      ].map((goal) => (
                        <button
                          key={goal.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, primaryGoal: goal.id })}
                          className={`p-3 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                            formData.primaryGoal === goal.id
                              ? 'border-[#2b3785] bg-[#2b3785]/20 text-[#8496ff]'
                              : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                          }`}
                        >
                          {goal.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      disabled={!formData.companyName || !formData.websiteUrl}
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 disabled:opacity-50 cursor-pointer shadow-lg shadow-[#2b3785]/30"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-neutral-300">Step 2: Startup Plan & Monthly Budget</h4>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-2">Select Your Startup Plan Tier</label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { label: '₹10,000 / month (Starter Launch)', desc: 'Meta/Google ads + 8 creatives' },
                        { label: '₹15,000 / month (Startup Accelerator)', desc: 'Multi-channel + CAPI + 16 creatives' },
                        { label: '₹20,000 / month (Scale & Dominate)', desc: 'Omnichannel + 25+ creatives + Funnels' },
                        { label: 'Custom Scope (₹10k - ₹20k+)', desc: 'Custom milestone-based package' }
                      ].map((tier) => (
                        <button
                          key={tier.label}
                          type="button"
                          onClick={() => setFormData({ ...formData, monthlyBudget: tier.label })}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            formData.monthlyBudget === tier.label 
                              ? 'border-[#2b3785] bg-[#2b3785]/20 text-[#8496ff]' 
                              : 'border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-neutral-700'
                          }`}
                        >
                          <span className="text-xs font-bold block">{tier.label}</span>
                          <span className="text-[10px] text-neutral-400 block mt-0.5">{tier.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Focus Service or Scope</label>
                    <input
                      type="text"
                      value={formData.selectedService}
                      onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                      placeholder="e.g. Meta Ads, Google Shopping, Lead Gen Funnel"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-[#2b3785]"
                    />
                  </div>

                  <div className="pt-2 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-2.5 bg-[#2b3785] hover:bg-[#34449e] text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-lg shadow-[#2b3785]/30"
                    >
                      <span>Continue to WhatsApp Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-neutral-300">Step 3: Send Proposal to WhatsApp</h4>
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      9994735573
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#5970ff]" />
                      <span>Your Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#2b3785]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#5970ff]" />
                        <span>Work Email *</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rajesh@yourstartup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#2b3785]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Your WhatsApp Number *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#2b3785]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Specific Requirements or Questions (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. We need to launch by next Monday, currently spending ₹500/day on Instagram..."
                      value={formData.whatsappNote}
                      onChange={(e) => setFormData({ ...formData, whatsappNote: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-600 text-xs focus:outline-none focus:border-[#2b3785] resize-none"
                    />
                  </div>

                  {/* Summary Box */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-emerald-400 font-semibold block flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Direct Route: +91 {WHATSAPP_NUMBER}
                      </span>
                      <span className="text-neutral-400 text-[11px]">
                        Submitting will instantly prepare and dispatch your proposal details to WhatsApp.
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.fullName || !formData.email || !formData.phone}
                      className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/30 disabled:opacity-50 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Proposal to WhatsApp (9994735573)</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Proposal Dispatched to WhatsApp!
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto">
              Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your growth proposal request for <span className="text-white font-mono font-bold">{formData.companyName}</span> has been dispatched to WhatsApp number:
            </p>

            <div className="my-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-sm">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>+91 {WHATSAPP_NUMBER}</span>
            </div>

            <div className="my-4 p-4 rounded-2xl bg-neutral-950 border border-neutral-800 text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-400">Target Objective:</span>
                <span className="text-white font-medium capitalize">{formData.primaryGoal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Selected Plan:</span>
                <span className="text-[#8496ff] font-mono font-medium">{formData.monthlyBudget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Your Contact:</span>
                <span className="text-white font-mono">{formData.phone} | {formData.email}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
              <button
                type="button"
                onClick={handleDirectWhatsAppClick}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/30"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open WhatsApp Chat Now</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
