import React from 'react'
import { ArrowRight, ShieldCheck, Cpu, Gauge, Zap } from 'lucide-react'

interface HeroProps {
  onExploreBlueprint: () => void
  onOpenIntake: () => void
}

export const Hero: React.FC<HeroProps> = ({ onExploreBlueprint, onOpenIntake }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-hairline bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-300 text-slate-800 text-[11px] font-mono-tech tracking-[0.2em] uppercase mb-8 shadow-xs">
          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
          KRONOS AUTOMOTIVE LAB · HUISQUILUCAN / INTERLOMAS
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-[#0F1115] uppercase leading-[1.05]">
            Ingeniería de detalle y mecánica de <span className="underline decoration-cyan-400 decoration-4 underline-offset-8">alta precisión</span>.
          </h1>
          
          <p className="mt-8 text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
            Cuidado milimétrico para vehículos de alto desempeño y gama ejecutiva. Corrección óptica de pintura sin hologramas, blindaje cerámico 9H y servicio técnico bajo estándares de fábrica.
          </p>
        </div>

        {/* Key Metrics Strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">
          <div className="p-4 bg-white/80 backdrop-blur-xs border border-slate-200">
            <span className="block font-mono-tech text-[10px] text-slate-400 tracking-widest uppercase">Tolerancia Óptica</span>
            <span className="block font-display font-bold text-2xl text-[#0F1115] mt-1">&lt; 1.5 μm</span>
            <span className="block text-[11px] text-slate-500 mt-0.5">Sin desgaste excesivo de laca</span>
          </div>
          <div className="p-4 bg-white/80 backdrop-blur-xs border border-slate-200">
            <span className="block font-mono-tech text-[10px] text-slate-400 tracking-widest uppercase">Cabina de Luz</span>
            <span className="block font-display font-bold text-2xl text-[#0F1115] mt-1">6,500 K</span>
            <span className="block text-[11px] text-slate-500 mt-0.5">CRI 98+ detección total</span>
          </div>
          <div className="p-4 bg-white/80 backdrop-blur-xs border border-slate-200">
            <span className="block font-mono-tech text-[10px] text-slate-400 tracking-widest uppercase">Blindaje Cerámico</span>
            <span className="block font-display font-bold text-2xl text-[#0F1115] mt-1">Dureza 9H</span>
            <span className="block text-[11px] text-slate-500 mt-0.5">Certificado 3 a 5 años</span>
          </div>
          <div className="p-4 bg-white/80 backdrop-blur-xs border border-slate-200">
            <span className="block font-mono-tech text-[10px] text-slate-400 tracking-widest uppercase">Satisfacción Google</span>
            <span className="block font-display font-bold text-2xl text-[#0F1115] mt-1">5.0 ★</span>
            <span className="block text-[11px] text-slate-500 mt-0.5">Clientes verificados</span>
          </div>
        </div>

        {/* CTA Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onExploreBlueprint}
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#0F1115] text-white hover:bg-slate-800 text-xs font-mono-tech tracking-[0.15em] uppercase transition-all shadow-md cursor-pointer"
          >
            <span>Inspeccionar Blueprint 360°</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </button>
          
          <button
            onClick={onOpenIntake}
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#0F1115] hover:bg-slate-100 text-xs font-mono-tech tracking-[0.15em] uppercase border border-slate-300 transition-all cursor-pointer"
          >
            <span>Solicitar Cotización Inmediata</span>
          </button>
        </div>
      </div>
    </section>
  )
}
