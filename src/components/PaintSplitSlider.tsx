import React, { useState, useRef, useCallback } from 'react'
import { Sparkles, Shield, ArrowLeftRight, CheckCircle2 } from 'lucide-react'

export const PaintSplitSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-hairline relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <span className="font-mono-tech text-xs text-cyan-600 tracking-[0.2em] uppercase">
              // CONTROL ÓPTICO INTERACTIVO
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0F1115] uppercase tracking-tight mt-2">
              Corrección de Pintura: Antes vs Después
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 font-mono-tech text-xs text-slate-500">
            <ArrowLeftRight className="w-4 h-4 text-cyan-500" />
            <span>ARRASTRA EL DIVISOR // COMPARACIÓN EN VIVO</span>
          </div>
        </div>

        {/* Split Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-16/9 select-none overflow-hidden border border-slate-300 shadow-2xl cursor-ew-resize bg-black"
          >
            {/* Background Full Image: Complete After view (Clean / Corrected) */}
            <img
              src="/assets/images/kronos_paint_correction_split.jpg"
              alt="Corrección óptica de pintura KRONOS"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Left Image: Clipped version with filter to emphasize the untreated swirl side */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/assets/images/kronos_paint_correction_split.jpg"
                alt="Pintura con microrrayas y swirls antes del tratamiento"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
              {/* Subtle tint overlay on before side */}
              <div className="absolute inset-0 bg-red-950/15 pointer-events-none"></div>

              {/* Tag Label: ANTES */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#0F1115]/90 text-white font-mono-tech text-xs uppercase tracking-wider border border-slate-700 backdrop-blur-xs flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                <span>ORIGINAL // SWIRLS & OPACIDAD</span>
              </div>
            </div>

            {/* Tag Label: DESPUÉS (on right side) */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-cyan-950/90 text-cyan-200 font-mono-tech text-xs uppercase tracking-wider border border-cyan-500/50 backdrop-blur-xs flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>KRONOS 9H // ESPEJO LÍQUIDO</span>
            </div>

            {/* Draggable Vertical Hairline Bar */}
            <div
              className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Circular Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F1115] border-2 border-white flex items-center justify-center shadow-xl">
                <ArrowLeftRight className="w-4 h-4 text-cyan-400" />
              </div>
            </div>

            {/* Live percentage badge at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-black/80 text-white font-mono-tech text-[10px] tracking-widest uppercase border border-slate-800 backdrop-blur-xs">
              COMPARACIÓN: {Math.round(sliderPosition)}% LACA ORIGINAL / {100 - Math.round(sliderPosition)}% CERÁMICO 9H
            </div>
          </div>

          {/* Quick Technical Specs Chips underneath */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono-tech">
            <div className="p-3.5 bg-[#F6F7F9] border border-slate-200 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-600 shrink-0" />
              <div>
                <span className="block text-[9px] text-slate-400 uppercase tracking-widest">NIVEL DE CORTE</span>
                <span className="block text-xs font-bold text-[#0F1115] uppercase">95%+ SIN HOLOGRAMAS</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#F6F7F9] border border-slate-200 flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="block text-[9px] text-slate-400 uppercase tracking-widest">SELLADO CERÁMICO</span>
                <span className="block text-xs font-bold text-[#0F1115] uppercase">DUREZA 9H QUARTZ</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#F6F7F9] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
              <div>
                <span className="block text-[9px] text-slate-400 uppercase tracking-widest">HIDROFOBICIDAD</span>
                <span className="block text-xs font-bold text-[#0F1115] uppercase">&gt; 118° ÁNGULO GOTAS</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#F6F7F9] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="block text-[9px] text-slate-400 uppercase tracking-widest">GARANTÍA KRONOS</span>
                <span className="block text-xs font-bold text-[#0F1115] uppercase">3 A 5 AÑOS ESCRITA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
