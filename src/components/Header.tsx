import React, { useState } from 'react'
import { ShieldCheck, Phone, Wrench, Menu, X, ArrowUpRight } from 'lucide-react'

interface HeaderProps {
  onOpenIntake: () => void
  selectedCount: number
}

export const Header: React.FC<HeaderProps> = ({ onOpenIntake, selectedCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[#F6F7F9]/90 backdrop-blur-md border-b border-hairline transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - Porsche Design Style */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-[0.25em] text-[#0F1115] uppercase leading-none">
                KRONOS
              </span>
              <span className="font-mono-tech text-[10px] text-slate-500 tracking-[0.2em] uppercase mt-1">
                Precision Auto Studio
              </span>
            </a>
            <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono-tech text-[10px] text-slate-600 tracking-wider uppercase">
                CABINA 01 · ACTIVA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#blueprint" className="font-mono-tech text-xs tracking-wider text-slate-600 hover:text-[#0F1115] transition-colors uppercase">
              // 01. Blueprint 360°
            </a>
            <a href="#protocolo" className="font-mono-tech text-xs tracking-wider text-slate-600 hover:text-[#0F1115] transition-colors uppercase">
              // 02. Protocolo 5 Etapas
            </a>
            <a href="#servicios" className="font-mono-tech text-xs tracking-wider text-slate-600 hover:text-[#0F1115] transition-colors uppercase">
              // 03. Servicios
            </a>
            <a href="#garantia" className="font-mono-tech text-xs tracking-wider text-slate-600 hover:text-[#0F1115] transition-colors uppercase">
              // 04. Garantía KRONOS
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenIntake}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1115] text-white hover:bg-[#1E232E] text-xs font-mono-tech tracking-wider uppercase transition-all duration-200 border border-[#0F1115] shadow-sm cursor-pointer"
            >
              <span>Diagnóstico</span>
              {selectedCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold bg-cyan-400 text-[#0F1115] rounded-full">
                  {selectedCount}
                </span>
              )}
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-black"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-hairline bg-[#F6F7F9] space-y-3">
            <a
              href="#blueprint"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono-tech text-xs tracking-wider text-slate-700 hover:text-black px-2 py-1.5"
            >
              // 01. Blueprint 360°
            </a>
            <a
              href="#protocolo"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono-tech text-xs tracking-wider text-slate-700 hover:text-black px-2 py-1.5"
            >
              // 02. Protocolo 5 Etapas
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono-tech text-xs tracking-wider text-slate-700 hover:text-black px-2 py-1.5"
            >
              // 03. Servicios
            </a>
            <a
              href="#garantia"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono-tech text-xs tracking-wider text-slate-700 hover:text-black px-2 py-1.5"
            >
              // 04. Garantía KRONOS
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
