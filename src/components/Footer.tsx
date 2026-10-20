import React from 'react'
import { ShieldCheck, MapPin, Phone, Clock, Mail } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer id="garantia" className="bg-[#0F1115] text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-1">
            <span className="font-display font-extrabold text-2xl tracking-[0.25em] text-white uppercase block">
              KRONOS
            </span>
            <span className="font-mono-tech text-[10px] text-cyan-400 tracking-widest uppercase block mt-1">
              Precision Auto Studio
            </span>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed font-light">
              Laboratorio de ingeniería automotriz enfocado en estética de concurso, protección multicapa y mantenimiento de precisión sin tolerancias al error.
            </p>
          </div>

          {/* Col 2: Laboratory Location */}
          <div>
            <span className="font-mono-tech text-xs text-slate-300 uppercase tracking-widest block mb-4">
              // Ubicación del Estudio
            </span>
            <div className="flex items-start gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Blvd. Magnocentro 26, Bosques de las Palmas, Interlomas, Huixquilucan, Edo. Méx.
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2.5 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>+52 55 4011 2233</span>
            </div>
            <div className="mt-2 flex items-center gap-2.5 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>laboratorio@kronos-studio.mx</span>
            </div>
          </div>

          {/* Col 3: Hours & Reception */}
          <div>
            <span className="font-mono-tech text-xs text-slate-300 uppercase tracking-widest block mb-4">
              // Horarios de Cabina
            </span>
            <ul className="space-y-2 text-xs text-slate-400 font-mono-tech">
              <li className="flex justify-between">
                <span>LUNES — VIERNES:</span>
                <span className="text-white">08:30 — 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>SÁBADOS:</span>
                <span className="text-white">09:00 — 14:30</span>
              </li>
              <li className="flex justify-between">
                <span>DOMINGOS:</span>
                <span className="text-slate-500">CABIN CLOSED</span>
              </li>
            </ul>
            <span className="inline-block mt-3 text-[10px] text-cyan-400 font-mono-tech">
              * Atención únicamente con cita previa confirmada.
            </span>
          </div>

          {/* Col 4: Certifications & Warranty */}
          <div>
            <span className="font-mono-tech text-xs text-slate-300 uppercase tracking-widest block mb-4">
              // Certificaciones Homologadas
            </span>
            <div className="space-y-2 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Rupes Master Detailer Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Gyeon Quartz Authorized Studio</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Autel Diagnostic Partner</span>
              </div>
            </div>
            <div className="mt-4 p-2 bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-mono-tech">
              Garantía por escrito con certificado digital respaldado por número de serie (VIN).
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-slate-500">
          <span>&copy; {new Date().getFullYear()} KRONOS PRECISION AUTO STUDIO · ASCK SOFTWARE</span>
          <span className="mt-2 sm:mt-0">POLISHED CONCRETE EDITION // PORSCHE DESIGN ARCHITECTURE</span>
        </div>
      </div>
    </footer>
  )
}
