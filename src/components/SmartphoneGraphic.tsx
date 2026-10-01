import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Instagram, 
  Facebook, 
  Youtube, 
  Sparkles,
  Zap,
  ArrowUpRight,
  Wifi,
  Battery,
  Signal,
  Bell,
  Activity,
  CheckCircle2,
  Flame,
  ChevronRight
} from 'lucide-react';
import { GrowingLogo } from './GrowingLogo';

interface DayMetric {
  day: string;
  roas: string;
  leads: string;
  revenue: string;
  cac: string;
  valueY: number; // for SVG coordinate (0 - 60)
}

export const SmartphoneGraphic: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roas' | 'leads' | 'revenue' | 'cac'>('roas');
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(6); // default to latest day (Day 7)
  const [notificationIndex, setNotificationIndex] = useState(0);
  const [isDynamicIslandExpanded, setIsDynamicIslandExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { 
      app: 'Meta Advantage+', 
      icon: Facebook, 
      text: 'ROAS reached 6.2x (+148% surge)', 
      sub: '₹12,40,000 generated today',
      time: 'Just now', 
      color: 'bg-blue-600' 
    },
    { 
      app: 'Instagram Engine', 
      icon: Instagram, 
      text: 'Viral Hook Reel crossed 280K views', 
      sub: '+4,210 high-intent followers',
      time: '2m ago', 
      color: 'bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-700' 
    },
    { 
      app: 'Google PMax & Search', 
      icon: TrendingUp, 
      text: '28 B2B Demo requests booked', 
      sub: 'Acquisition cost dropped 34%',
      time: '5m ago', 
      color: 'bg-emerald-600' 
    },
    { 
      app: 'growing CAPI Hub', 
      icon: Zap, 
      text: 'New order batch: ₹9,85,000 closed', 
      sub: 'Server-side 99.4% EMQ verified',
      time: '11m ago', 
      color: 'bg-[#2b3785]' 
    },
  ];

  // Daily performance breakdown for the interactive graph
  const weekData: DayMetric[] = [
    { day: 'Mon', roas: '3.4x', leads: '128', revenue: '₹2,40,000', cac: '₹840', valueY: 48 },
    { day: 'Tue', roas: '3.8x', leads: '146', revenue: '₹3,15,000', cac: '₹790', valueY: 42 },
    { day: 'Wed', roas: '4.2x', leads: '185', revenue: '₹3,90,000', cac: '₹710', valueY: 34 },
    { day: 'Thu', roas: '4.6x', leads: '210', revenue: '₹4,45,000', cac: '₹640', valueY: 26 },
    { day: 'Fri', roas: '5.1x', leads: '248', revenue: '₹5,30,000', cac: '₹580', valueY: 18 },
    { day: 'Sat', roas: '5.5x', leads: '280', revenue: '₹6,10,000', cac: '₹520', valueY: 12 },
    { day: 'Sun', roas: '6.2x', leads: '342', revenue: '₹7,85,000', cac: '₹460', valueY: 4 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setNotificationIndex((prev) => (prev + 1) % notifications.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [notifications.length]);

  // Subtle 3D tilt calculation on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const currentDay = weekData[selectedDayIndex];

  return (
    <div 
      className="relative w-full max-w-lg mx-auto flex items-center justify-center p-2 sm:p-4 select-none perspective-[1200px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Ambient Backlight in #2b3785 */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#2b3785]/45 via-[#3d50c2]/30 to-indigo-900/20 blur-3xl rounded-full -z-10 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#2b3785]/30 rounded-full blur-[90px] -z-10 pointer-events-none" />

      {/* Floating Badge 1 (Top Left): Instagram / Meta Viral Growth */}
      <div 
        className="absolute -top-6 -left-4 sm:-left-10 z-30 bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl shadow-2xl shadow-black/80 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:border-[#2b3785]/60 group"
        style={{
          transform: `translate3d(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px, 20px)`,
        }}
      >
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-700 flex items-center justify-center text-white shadow-lg shadow-pink-600/30 group-hover:rotate-6 transition-transform">
          <Instagram className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-neutral-900 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-neutral-900" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <p className="text-[11px] text-neutral-400 font-medium tracking-wide uppercase">Omnichannel Surge</p>
            <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1 rounded font-mono font-bold">LIVE</span>
          </div>
          <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
            +38.4K Audience 
            <span className="text-emerald-400 text-xs font-mono font-semibold flex items-center">
              ↑ 42%
            </span>
          </p>
        </div>
      </div>

      {/* Floating Badge 2 (Top Right): Inbound Conversion Notification */}
      <div 
        className="absolute top-16 -right-4 sm:-right-10 z-30 bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-xl p-3 rounded-2xl shadow-2xl shadow-black/80 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:border-[#2b3785]/60 group"
        style={{
          transform: `translate3d(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px, 25px)`,
        }}
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md shadow-orange-500/30 group-hover:scale-110 transition-transform">
          <Flame className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">Enterprise Deal</p>
          </div>
          <p className="text-xs font-bold text-white font-mono flex items-center gap-1">
            ₹4,50,000 <span className="text-emerald-400 font-sans text-[11px] font-normal">Closed</span>
          </p>
        </div>
      </div>

      {/* Floating Badge 3 (Bottom Left): growing Performance Badge */}
      <div 
        className="absolute -bottom-4 -left-3 sm:-left-8 z-30 bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-xl p-3 rounded-2xl shadow-2xl shadow-black/80 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:border-[#2b3785]"
        style={{
          transform: `translate3d(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px, 30px)`,
        }}
      >
        <div className="w-10 h-10 rounded-xl bg-[#2b3785] flex items-center justify-center text-white shadow-lg shadow-[#2b3785]/50 border border-[#3d50c2]/60">
          <GrowingLogo size={24} />
        </div>
        <div>
          <p className="text-[11px] text-neutral-400 font-medium">growing AI Suite</p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-extrabold text-white">4.82x ROAS</span>
            <span className="text-[10px] text-[#8496ff] bg-[#2b3785]/40 px-1.5 py-0.5 rounded border border-[#2b3785] font-mono">
              Scale Mode
            </span>
          </div>
        </div>
      </div>

      {/* Floating Badge 4 (Bottom Right): Total Attributed Volume */}
      <div 
        className="absolute -bottom-5 -right-3 sm:-right-8 z-30 bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-xl p-2.5 sm:p-3 rounded-2xl shadow-2xl shadow-black/80 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 hover:border-[#2b3785]"
        style={{
          transform: `translate3d(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px, 20px)`,
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
          <ArrowUpRight className="w-4 h-4" />
        </div>
        <div>
          <p className="text-[10px] text-neutral-400 font-medium">Monthly Pipeline</p>
          <p className="text-xs font-bold text-white font-mono">₹28,45,000</p>
        </div>
      </div>

      {/* The 3D Smartphone Device Body */}
      <div 
        ref={cardRef}
        className="relative w-[310px] sm:w-[340px] transition-transform duration-200 ease-out"
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Hardware Side Buttons */}
        {/* Left: Volume Up / Down / Action button */}
        <div className="absolute -left-[5px] top-24 w-[5px] h-8 bg-neutral-700 rounded-l-md border-y border-l border-neutral-600" />
        <div className="absolute -left-[5px] top-36 w-[5px] h-12 bg-neutral-700 rounded-l-md border-y border-l border-neutral-600" />
        <div className="absolute -left-[5px] top-52 w-[5px] h-12 bg-neutral-700 rounded-l-md border-y border-l border-neutral-600" />
        {/* Right: Power / Siri button */}
        <div className="absolute -right-[5px] top-32 w-[5px] h-16 bg-neutral-700 rounded-r-md border-y border-r border-neutral-600" />

        {/* Chassis Frame: Space Black Brushed Titanium with chamfer highlight */}
        <div className="relative rounded-[50px] p-[10px] bg-gradient-to-b from-neutral-700 via-neutral-900 to-black shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(43,55,133,0.3)] border border-neutral-700/80 ring-1 ring-white/10">
          
          {/* Internal Bezel */}
          <div className="relative rounded-[42px] bg-black p-[2px] overflow-hidden">
            
            {/* Screen Glass Surface */}
            <div className="relative rounded-[40px] bg-[#090a0f] text-white overflow-hidden flex flex-col justify-between min-h-[580px] border border-neutral-900">
              
              {/* Subtle screen light glare across top-right corner */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-white/[0.04] to-transparent pointer-events-none z-40 rounded-tr-[40px]" />

              {/* Status Bar */}
              <div className="relative z-30 pt-3 px-6 flex items-center justify-between text-[11px] text-neutral-300 font-medium">
                <span className="font-semibold tracking-tight">09:41</span>

                {/* Interactive Dynamic Island */}
                <div 
                  onClick={() => setIsDynamicIslandExpanded(!isDynamicIslandExpanded)}
                  className={`cursor-pointer transition-all duration-300 bg-black border border-neutral-800 rounded-full flex items-center justify-between px-3 shadow-lg ${
                    isDynamicIslandExpanded ? 'w-56 h-8 -mt-0.5' : 'w-24 h-6'
                  }`}
                >
                  {isDynamicIslandExpanded ? (
                    <div className="flex items-center justify-between w-full text-[10px]">
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono font-bold">CAPI Engine Active</span>
                      </div>
                      <span className="text-[#8496ff] font-mono text-[9px]">₹35K/hr</span>
                    </div>
                  ) : (
                    <>
                      <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2b3785]" />
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="w-1 h-1 rounded-full bg-[#5970ff]" />
                      </div>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Signal className="w-3 h-3 text-neutral-400" />
                  <span className="text-[9px] font-bold text-neutral-400">5G</span>
                  <Wifi className="w-3 h-3 text-neutral-400" />
                  <div className="flex items-center">
                    <Battery className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Screen Inner Content */}
              <div className="p-4 space-y-3 z-20 flex-1">
                
                {/* Brand Navigation & Notification Bar */}
                <div className="flex items-center justify-between pt-1 pb-2 border-b border-neutral-800/80">
                  <div className="flex items-center gap-2">
                    <GrowingLogo size={20} />
                    <span className="font-black text-sm text-white tracking-tight lowercase">
                      growing<span className="text-[#5970ff]">.</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono font-medium border border-emerald-500/20 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                      Live Pacing
                    </span>
                    <button 
                      type="button"
                      className="p-1 rounded-lg bg-neutral-800/80 text-neutral-400 hover:text-white relative"
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span className="w-1.5 h-1.5 bg-[#2b3785] rounded-full absolute top-0.5 right-0.5" />
                    </button>
                  </div>
                </div>

                {/* Real-time Notification Banner with Micro-indicators */}
                <div className="p-2.5 rounded-2xl bg-gradient-to-r from-neutral-900/90 to-neutral-900/60 border border-neutral-800 shadow-md">
                  <div className="flex items-start gap-2.5">
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md ${notifications[notificationIndex].color}`}>
                      {React.createElement(notifications[notificationIndex].icon, { className: 'w-4 h-4' })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-bold text-neutral-200">{notifications[notificationIndex].app}</span>
                        <span className="text-neutral-500 font-mono text-[9px]">{notifications[notificationIndex].time}</span>
                      </div>
                      <p className="text-[11px] text-white font-medium truncate mt-0.5">
                        {notifications[notificationIndex].text}
                      </p>
                      <p className="text-[10px] text-neutral-400 font-normal truncate">
                        {notifications[notificationIndex].sub}
                      </p>
                    </div>
                  </div>

                  {/* Carousel step dots */}
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {notifications.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setNotificationIndex(idx)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          notificationIndex === idx ? 'w-5 bg-[#5970ff]' : 'w-1 bg-neutral-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Interactive Metric Switcher Tabs */}
                <div className="grid grid-cols-4 gap-1 p-1 bg-neutral-900/90 rounded-xl border border-neutral-800/80 text-[11px]">
                  {(['roas', 'leads', 'revenue', 'cac'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`py-1.5 rounded-lg text-center font-medium capitalize transition-all ${
                        activeTab === tab 
                          ? 'bg-[#2b3785] text-white font-bold shadow-lg shadow-[#2b3785]/40 scale-[1.02]' 
                          : 'text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      {tab === 'cac' ? 'CAC' : tab === 'roas' ? 'ROAS' : tab}
                    </button>
                  ))}
                </div>

                {/* Live Metrics Display Card */}
                <div className="p-3.5 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[10px] uppercase font-semibold tracking-wider text-neutral-400">
                        {activeTab === 'roas' && 'Blended Return on Ad Spend'}
                        {activeTab === 'leads' && 'Qualified Demo / Call Requests'}
                        {activeTab === 'revenue' && 'Direct Attributed Revenue'}
                        {activeTab === 'cac' && 'Customer Acquisition Cost'}
                      </p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-2xl font-black text-white tracking-tight font-mono">
                          {activeTab === 'roas' && currentDay.roas}
                          {activeTab === 'leads' && currentDay.leads}
                          {activeTab === 'revenue' && currentDay.revenue}
                          {activeTab === 'cac' && currentDay.cac}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          {activeTab === 'cac' ? '-42% Efficiency' : '+184% MoM'}
                        </span>
                      </div>
                      <p className="text-[10px] text-neutral-500 mt-0.5">
                        Selected: <span className="text-neutral-300 font-medium">{currentDay.day} Performance Peak</span>
                      </p>
                    </div>

                    <div className="p-2 rounded-xl bg-[#2b3785]/20 border border-[#2b3785]/40 text-[#8496ff]">
                      <Activity className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>

                  {/* Interactive SVG Sparkline Chart */}
                  <div className="mt-3 h-20 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="phone-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#2b3785" stopOpacity="0.7" />
                          <stop offset="60%" stopColor="#2b3785" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#2b3785" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Subtle Grid Guidelines */}
                      <line x1="0" y1="15" x2="200" y2="15" stroke="#262626" strokeDasharray="3 3" />
                      <line x1="0" y1="38" x2="200" y2="38" stroke="#262626" strokeDasharray="3 3" />

                      {/* Dynamic Area Fill */}
                      <path
                        d="M 0 50 Q 30 45 60 38 T 120 24 T 160 14 T 200 4 L 200 60 L 0 60 Z"
                        fill="url(#phone-grad)"
                      />

                      {/* Trend Glow and Line */}
                      <path
                        d="M 0 50 Q 30 45 60 38 T 120 24 T 160 14 T 200 4"
                        fill="none"
                        stroke="#2b3785"
                        strokeWidth="5"
                        strokeOpacity="0.5"
                      />
                      <path
                        d="M 0 50 Q 30 45 60 38 T 120 24 T 160 14 T 200 4"
                        fill="none"
                        stroke="#5970ff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Interactive Days on Graph */}
                      {weekData.map((d, i) => {
                        const cx = (i / 6) * 190 + 5;
                        const isSelected = selectedDayIndex === i;
                        return (
                          <g key={d.day}>
                            <circle
                              cx={cx}
                              cy={d.valueY}
                              r={isSelected ? 5 : 2.5}
                              fill={isSelected ? '#ffffff' : '#5970ff'}
                              stroke="#2b3785"
                              strokeWidth={isSelected ? 2 : 1}
                              className="cursor-pointer transition-all duration-200"
                              onClick={() => setSelectedDayIndex(i)}
                            />
                            {isSelected && (
                              <circle
                                cx={cx}
                                cy={d.valueY}
                                r={9}
                                fill="none"
                                stroke="#5970ff"
                                strokeWidth="1.5"
                                className="animate-ping"
                              />
                            )}
                          </g>
                        );
                      })}
                    </svg>

                    {/* Day selector labels below chart */}
                    <div className="flex justify-between text-[9px] font-mono text-neutral-400 mt-1">
                      {weekData.map((item, idx) => (
                        <button
                          key={item.day}
                          type="button"
                          onClick={() => setSelectedDayIndex(idx)}
                          className={`transition-colors hover:text-white ${
                            selectedDayIndex === idx ? 'text-[#8496ff] font-bold' : 'text-neutral-500'
                          }`}
                        >
                          {item.day}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Campaign Running Status */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 px-1">
                    <span className="font-semibold uppercase tracking-wider">Top Ad Sprint</span>
                    <span className="text-emerald-400 font-mono font-medium">99.8% CAPI Match</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Facebook className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold text-white leading-none">Meta Dynamic Scale</p>
                        <p className="text-[9px] text-neutral-400 mt-0.5">Budget: ₹35,000/day • 6.2x ROAS</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-md font-mono font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      OPTIMIZING
                    </span>
                  </div>
                </div>

              </div>

              {/* Bottom Screen Navigation Bar */}
              <div className="px-4 py-2 bg-neutral-950/90 border-t border-neutral-800/80 flex items-center justify-between text-neutral-400 text-xs z-30">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-medium tracking-tight">growing Growth Protocol</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[10px] text-neutral-300">
                  <Sparkles className="w-3 h-3 text-[#5970ff]" />
                  <span>AI Dayparting On</span>
                </div>
              </div>

              {/* iOS Home Bar Indicator */}
              <div className="w-28 h-1 bg-neutral-600/80 rounded-full mx-auto my-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartphoneGraphic;
