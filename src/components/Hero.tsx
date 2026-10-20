import React from 'react'
import { ArrowRight, ShieldCheck, Cpu, Gauge, Zap, Scan, Sparkles } from 'lucide-react'

interface HeroProps {
  onExploreBlueprint: () => void
  onOpenIntake: () => void
}

export const Hero: React.FC<HeroProps> = ({ onExploreBlueprint, onOpenIntake }) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-hairline bg-[#0F1115] text-white">
      {/* Background blueprint grid on dark */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top telemetry bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-8 text-[11px] font-mono-tech text-slate-400">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-white font-semibold">KRONOS AUTOMOTIVE LAB</span>
            <span>// BOSQUES & INTERLOMAS</span>
          </div>

          <div className="flex items-center gap-4 text-[10px]">
            <span>TELEMETRÍA ÓPTICA: <strong className="text-cyan-400">&plusmn;0.05 MM</strong></span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">SCANNER: <strong className="text-emerald-400">CALIBRADO</strong></span>
          </div>
        </div>

        {/* Main Grid: Headline Left, Floating 3D CAD Blueprint Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Bold Architectural Headline & CTAs (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="inline-block px-2.5 py-1 bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono-tech tracking-[0.2em] uppercase mb-5">
              LABORATORIO DE ALTO DESEMPEÑO
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight uppercase leading-[1.05] text-white">
              Ingeniería de Detalle. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-slate-300">
                Cero Tolerancia al Error.
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl">
              Corrección óptica de pintura al 95%+, blindaje cerámico de cuarzo 9H y servicio técnico bajo protocolos de fábrica para marcas premium y exóticos.
            </p>

            {/* Quick Spec Badges */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg font-mono-tech">
              <div className="p-3 bg-[#161A22] border border-slate-800">
                <span className="block text-[9px] text-slate-500 uppercase tracking-wider">LACA RETIRADA</span>
                <span className="block text-lg font-bold text-cyan-400 mt-0.5">&lt; 1.5 μm</span>
              </div>
              <div className="p-3 bg-[#161A22] border border-slate-800">
                <span className="block text-[9px] text-slate-500 uppercase tracking-wider">PROTECCIÓN</span>
                <span className="block text-lg font-bold text-white mt-0.5">9H QUARTZ</span>
              </div>
              <div className="p-3 bg-[#161A22] border border-slate-800">
                <span className="block text-[9px] text-slate-500 uppercase tracking-wider">INSPECCIÓN</span>
                <span className="block text-lg font-bold text-emerald-400 mt-0.5">6,500K CRI 98</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreBlueprint}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-[#0F1115] font-mono-tech text-xs font-bold tracking-wider uppercase transition-all shadow-lg cursor-pointer"
              >
                <Scan className="w-4 h-4" />
                <span>Explorar Blueprint 360°</span>
              </button>

              <button
                onClick={onOpenIntake}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent hover:bg-slate-900 text-white font-mono-tech text-xs tracking-wider uppercase border border-slate-700 transition-all cursor-pointer"
              >
                <span>Cotización en WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual CAD Blueprint Display (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-16/10 bg-[#141820] border border-slate-800 p-4 shadow-2xl overflow-hidden group">
              
              {/* Laser Beam Animation */}
              <div className="absolute inset-y-0 w-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-[scan_3s_ease-in-out_infinite] pointer-events-none z-10"></div>

              {/* Background circular radar grid */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="w-72 h-72 rounded-full border border-cyan-500/30"></div>
                <div className="w-96 h-96 rounded-full border border-cyan-500/20 absolute"></div>
              </div>

              {/* Masterpiece Studio Porsche 911 GT3 RS Visual Display */}
              <div className="relative w-full aspect-16/10 bg-[#0A0C10] border border-slate-800 shadow-2xl overflow-hidden group">
                
                {/* Laser Scanning Line Animation */}
                <div className="absolute inset-y-0 w-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-[scan_3.5s_ease-in-out_infinite] pointer-events-none z-10"></div>

                {/* Studio Hero Image */}
                <img
                  src="/assets/images/kronos_hero_studio_gt3.jpg"
                  alt="Porsche 911 GT3 RS en Estudio KRONOS Precision"
                  className="w-full h-full object-cover relative z-0 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient vignette edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

                {/* Floating Live Telemetry Chips */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/85 border border-cyan-500/50 text-cyan-300 font-mono-tech text-[10px] uppercase tracking-wider backdrop-blur-xs flex items-center gap-2 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  <span>911 GT3 RS (992) // KRONOS STUDIO UNIT #01</span>
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 border border-slate-700 text-emerald-400 font-mono-tech text-[9px] uppercase tracking-wider backdrop-blur-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>CALIBRACIÓN OK</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] font-mono-tech text-slate-400 px-3 py-1.5 bg-black/80 backdrop-blur-xs border border-slate-800">
                  <span className="text-slate-300">ESTUDIO BOSQUES · CABINA DE FLUJO LAMINAR</span>
                  <span className="text-cyan-400 font-bold">100% CERO HOLOGRAMAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
