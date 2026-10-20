import React, { useState } from 'react'
import { Sun, Flame, Zap, ShieldCheck, Eye, Sparkles } from 'lucide-react'

type LightMode = 'daylight' | 'warm' | 'uv'

export const LightTunnelSimulator: React.FC = () => {
  const [activeMode, setActiveMode] = useState<LightMode>('daylight')

  const modes = [
    {
      id: 'daylight' as LightMode,
      name: '6,500K LUZ DÍA',
      desc: 'CRI 98+ Detección de brillo absoluto',
      badge: 'SPECTRUM 01',
      filterStyle: 'brightness(1.05) contrast(1.05) saturate(1.05)',
      overlayColor: 'rgba(6, 182, 212, 0.04)',
      icon: <Sun className="w-4 h-4 text-cyan-400" />
    },
    {
      id: 'warm' as LightMode,
      name: '3,200K LUZ RASANTE',
      desc: 'Angulación oblicua para microrrayas',
      badge: 'SPECTRUM 02',
      filterStyle: 'sepia(0.35) brightness(0.95) contrast(1.25) saturate(1.2)',
      overlayColor: 'rgba(245, 158, 11, 0.1)',
      icon: <Flame className="w-4 h-4 text-amber-400" />
    },
    {
      id: 'uv' as LightMode,
      name: '395nm ULTRAVIOLETA',
      desc: 'Fluorescencia de sellador cerámico',
      badge: 'SPECTRUM 03',
      filterStyle: 'hue-rotate(240deg) brightness(0.9) contrast(1.4) saturate(1.8)',
      overlayColor: 'rgba(147, 51, 234, 0.15)',
      icon: <Zap className="w-4 h-4 text-purple-400" />
    }
  ]

  const currentMode = modes.find((m) => m.id === activeMode) || modes[0]

  return (
    <section className="py-20 lg:py-28 bg-[#0F1115] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <span className="font-mono-tech text-xs text-cyan-400 tracking-[0.2em] uppercase">
              // CABINA ÓPTICA DE 18 ARCOS LED
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white mt-2">
              Simulador de Túnel de Inspección
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-400 max-w-md">
            Selecciona el espectro de luz para simular cómo auditamos cada centímetro de carrocería antes de la entrega final.
          </p>
        </div>

        {/* Spectrum Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {modes.map((mode) => {
            const isActive = activeMode === mode.id
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`p-4 border text-left transition-all cursor-pointer flex items-center justify-between ${
                  isActive
                    ? 'bg-[#161A22] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'bg-[#12151C] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-tech text-[10px] text-slate-400 tracking-wider">
                      {mode.badge}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    )}
                  </div>
                  <span className="block font-display font-bold text-base text-white uppercase mt-1">
                    {mode.name}
                  </span>
                  <span className="block text-xs text-slate-400 font-light mt-0.5">
                    {mode.desc}
                  </span>
                </div>
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-sm">
                  {mode.icon}
                </div>
              </button>
            )
          })}
        </div>

        {/* Visual Stage with Dynamic Filter */}
        <div className="relative w-full aspect-16/9 overflow-hidden border border-slate-800 shadow-2xl bg-black">
          <img
            src="/assets/images/kronos_light_tunnel.jpg"
            alt="Túnel de luz de inspección KRONOS"
            className="w-full h-full object-cover transition-all duration-500 ease-out"
            style={{ filter: currentMode.filterStyle }}
          />

          {/* Color Tint Overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-colors duration-500"
            style={{ backgroundColor: currentMode.overlayColor }}
          ></div>

          {/* Technical HUD Overlay on Image */}
          <div className="absolute top-4 left-4 p-3 bg-black/80 backdrop-blur-xs border border-slate-800 font-mono-tech text-xs space-y-1">
            <div className="text-cyan-400 flex items-center gap-2">
              <Eye className="w-3.5 h-3.5" />
              <span>SENSOR ÓPTICO // ACTIVO</span>
            </div>
            <div className="text-slate-300 text-[10px]">
              MODO: {currentMode.name}
            </div>
            <div className="text-slate-400 text-[9px]">
              CALIBRACIÓN: ISO 9001 DETECT
            </div>
          </div>

          <div className="absolute bottom-4 right-4 p-3 bg-black/80 backdrop-blur-xs border border-slate-800 font-mono-tech text-[10px] text-right space-y-0.5">
            <span className="block text-slate-400">CABINA DE FLUJO LAMINAR</span>
            <span className="block text-emerald-400 font-semibold">CERO POLVO SUSPENDIDO (FILTRO HEPA H14)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
