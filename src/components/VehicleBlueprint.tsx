import React, { useState } from 'react'
import { Check, Shield, Clock, Wrench, Sparkles, AlertCircle, Plus, CheckCircle2 } from 'lucide-react'

export interface BlueprintZone {
  id: string
  name: string
  code: string
  description: string
  procedures: string[]
  tools: string[]
  time: string
  warranty: string
  hotspot: { x: number; y: number } // percentages for SVG overlay
}

export const ZONES: BlueprintZone[] = [
  {
    id: 'carroceria',
    name: 'Carrocería & Protección PPF / Cerámico',
    code: 'ZONE-01 // COAT',
    description: 'Corrección óptica de pintura al 95%+ sin hologramas. Eliminación de microrrayas (swirls), sellado cerámico de cuarzo 9H o blindaje con película autorregenerativa PPF.',
    procedures: [
      'Medición de espesor de laca micrométrica (Elcometer)',
      'Corrección en 3 pasos con abrasivos alemanes Menzerna',
      'Desengrasado con alcohol isopropílico grado óptico',
      'Aplicación de recubrimiento cerámico 9H o PPF transparente'
    ],
    tools: ['Rupes BigFoot Mark III', 'Gyeon Q² Mohs+', 'SunTek Reaction PPF', 'Cabina térmica 60°C'],
    time: '24 - 48 hrs',
    warranty: '3 a 5 Años por escrito',
    hotspot: { x: 50, y: 38 }
  },
  {
    id: 'rines',
    name: 'Rines, Calipers & Sistema de Frenado',
    code: 'ZONE-02 // WHEELS',
    description: 'Descontaminación ferrosa profunda de partículas de balata, pulido de calipers y sellado térmico hidrofóbico en rines para repeler polvo metálico.',
    procedures: [
      'Desmonte técnico con torquímetro calibrado',
      'Descontaminación química de polvo de freno horneado',
      'Pulido cerámico de calipers y rines internos',
      'Sellado de alta temperatura hasta 800°C'
    ],
    tools: ['Gyeon Q² Rim', 'Limpiador ferroso pH neutro', 'Torquímetro Snap-on'],
    time: '4 - 6 hrs',
    warranty: '12 Meses hidrofóbico',
    hotspot: { x: 74, y: 68 }
  },
  {
    id: 'motor',
    name: 'Bahía de Motor & Tren Motriz',
    code: 'ZONE-03 // ENGINE',
    description: 'Limpieza técnica criogénica / vapor seco sin inundación de agua. Protección de arneses y sensores electrónicos, hidratación de mangueras y escaneo OBD-II.',
    procedures: [
      'Aislamiento de módulos ECU, alternador y admisión',
      'Limpieza por vapor seco a 140°C a baja presión',
      'Hidratación de plásticos y gomas con polímeros no grasos',
      'Escaneo computarizado de parámetros y códigos de falla'
    ],
    tools: ['Vaporizador Optima Steamer', 'CarPro Perl', 'Scanner Autel MaxiSys Ultra'],
    time: '3 - 5 hrs',
    warranty: 'Protección antiestática 6 meses',
    hotspot: { x: 22, y: 55 }
  },
  {
    id: 'interiores',
    name: 'Habitáculo & Cuidado de Piel Nappa / Alcántara',
    code: 'ZONE-04 // CABIN',
    description: 'Detallado artesanal de interiores. Limpieza con espuma de pH neutro, desinfección por ozono y nutrición profunda de cueros para mantener acabado mate original de fábrica.',
    procedures: [
      'Aspirado con microfiltración HEPA de ductos y alfombra',
      'Limpieza de piel y alcántara sin alterar textura original',
      'Nutrición y sellado cerámico de asientos de piel',
      'Sanitización de cabina con generador de ozono grado médico'
    ],
    tools: ['Colourlock Leather Shield', 'Tornador Black Z-020', 'Extractor Kärcher Puzzi'],
    time: '6 - 8 hrs',
    warranty: 'Cero brillo artificial / Mate original',
    hotspot: { x: 45, y: 50 }
  },
  {
    id: 'cristales',
    name: 'Cristales & Óptica Láser / LED',
    code: 'ZONE-05 // OPTICS',
    description: 'Descontaminación de sarro y lluvia ácida en parabrisas y quemacocos. Sellado hidrofóbico cerámico con ángulo de contacto >110° y pulido de faros.',
    procedures: [
      'Pulido de cristales con óxido de cerio para lluvia ácida',
      'Aplicación de sellador nano-cerámico de repelencia extrema',
      'Pulido óptico de micas de faros delanteros y calaveras',
      'Película de protección UV en faros anti-amarilleo'
    ],
    tools: ['CarPro Ceriglass', 'Gyeon Q² View', 'PPF óptico para faros'],
    time: '2 - 4 hrs',
    warranty: '18 Meses de repelencia al agua',
    hotspot: { x: 38, y: 35 }
  }
]

interface VehicleBlueprintProps {
  selectedZones: string[]
  onToggleZone: (zoneId: string) => void
  onOpenIntake: () => void
}

export const VehicleBlueprint: React.FC<VehicleBlueprintProps> = ({
  selectedZones,
  onToggleZone,
  onOpenIntake
}) => {
  const [activeZoneId, setActiveZoneId] = useState<string>('carroceria')
  const activeZone = ZONES.find((z) => z.id === activeZoneId) || ZONES[0]

  return (
    <section id="blueprint" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-hairline relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <span className="font-mono-tech text-xs text-cyan-600 tracking-[0.2em] uppercase">
              // 01. INSPECCIÓN TÉCNICA INTERACTIVA
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0F1115] uppercase tracking-tight mt-2">
              Blueprint de Carrocería & Diagnóstico
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-500 max-w-md">
            Selecciona los puntos táctiles sobre el vehículo para inspeccionar especificaciones, herramientas empleadas y añadir el servicio a tu cotización.
          </p>
        </div>

        {/* Blueprint Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Blueprint SVG Canvas (7 Columns) */}
          <div className="lg:col-span-7 bg-[#F6F7F9] border border-slate-300 p-6 sm:p-8 relative overflow-hidden shadow-xs">
            
            {/* Top specs badge */}
            <div className="flex items-center justify-between font-mono-tech text-[10px] text-slate-400 border-b border-slate-200 pb-3 mb-6">
              <span>SCANNER // CAD-MODEL: GT-COUPE 2026</span>
              <span className="text-cyan-600 font-semibold">TOLERANCIA ACTIVA: &plusmn;0.05 MM</span>
            </div>

            {/* Technical SVG of Car Blueprint */}
            <div className="relative w-full aspect-16/9 bg-white border border-slate-200 flex items-center justify-center p-4">
              
              {/* Background grid inside canvas */}
              <div className="absolute inset-0 bg-blueprint-dots opacity-60 pointer-events-none"></div>

              {/* Vector Silhouette of High-End Vehicle (Side View) */}
              <svg
                viewBox="0 0 800 350"
                className="w-full h-full max-h-80 drop-shadow-sm select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Reference measurement lines */}
                <line x1="40" y1="310" x2="760" y2="310" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="40" y1="20" x2="40" y2="310" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="760" y1="20" x2="760" y2="310" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
                <text x="50" y="305" fill="#94A3B8" fontSize="10" fontFamily="monospace">LONGITUD: 4,519 MM</text>
                <text x="660" y="305" fill="#94A3B8" fontSize="10" fontFamily="monospace">BATALLA: 2,450 MM</text>

                {/* Car Body Hairline Profile */}
                <path
                  d="M 100 250 
                     C 105 210, 130 190, 180 185 
                     C 220 185, 260 170, 310 135 
                     C 370 95, 470 90, 560 120 
                     C 620 140, 680 180, 715 200 
                     C 740 215, 750 235, 745 250
                     L 680 250
                     A 50 50 0 0 0 580 250
                     L 280 250
                     A 50 50 0 0 0 180 250
                     Z"
                  fill="#F8FAFC"
                  stroke="#0F1115"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Windshield & Cabin Roof Profile */}
                <path
                  d="M 315 140 
                     C 365 105, 460 100, 550 125 
                     C 590 140, 630 170, 650 190 
                     L 345 190 
                     Z"
                  fill={activeZoneId === 'cristales' || activeZoneId === 'interiores' ? 'rgba(6, 182, 212, 0.15)' : '#EDF2F7'}
                  stroke="#475569"
                  strokeWidth="1.8"
                />

                {/* Front Wheel */}
                <circle cx="230" cy="250" r="46" fill="#1E293B" stroke="#0F1115" strokeWidth="2" />
                <circle cx="230" cy="250" r="34" fill="#E2E8F0" stroke="#0F1115" strokeWidth="1.5" />
                <circle cx="230" cy="250" r="14" fill="#0F1115" />
                {/* Caliper highlight */}
                <path
                  d="M 238 225 A 28 28 0 0 1 254 250"
                  stroke={activeZoneId === 'rines' ? '#F59E0B' : '#DC2626'}
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Rear Wheel */}
                <circle cx="630" cy="250" r="46" fill="#1E293B" stroke="#0F1115" strokeWidth="2" />
                <circle cx="630" cy="250" r="34" fill="#E2E8F0" stroke="#0F1115" strokeWidth="1.5" />
                <circle cx="630" cy="250" r="14" fill="#0F1115" />
                {/* Rear Caliper */}
                <path
                  d="M 638 225 A 28 28 0 0 1 654 250"
                  stroke={activeZoneId === 'rines' ? '#F59E0B' : '#DC2626'}
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Character Lines & Aerodynamics */}
                <path d="M 180 195 Q 350 205 600 205" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="6 3" />
                <path d="M 280 230 L 580 230" stroke="#94A3B8" strokeWidth="1" />
                <path d="M 110 240 L 150 240" stroke="#0F1115" strokeWidth="1.5" />
                {/* Front Light */}
                <path d="M 120 215 L 145 220 L 135 230 Z" fill={activeZoneId === 'cristales' ? '#06B6D4' : '#E2E8F0'} stroke="#0F1115" />
                {/* Exhaust */}
                <rect x="740" y="246" width="16" height="8" rx="2" fill="#475569" stroke="#0F1115" />

                {/* Zone Highlight Overlay on body */}
                {activeZoneId === 'carroceria' && (
                  <path
                    d="M 100 250 C 105 210, 130 190, 180 185 C 220 185, 260 170, 310 135 C 370 95, 470 90, 560 120 C 620 140, 680 180, 715 200 C 740 215, 750 235, 745 250 L 680 250 A 50 50 0 0 0 580 250 L 280 250 A 50 50 0 0 0 180 250 Z"
                    fill="rgba(6, 182, 212, 0.08)"
                    stroke="#0891B2"
                    strokeWidth="2"
                    strokeDasharray="4 2"
                  />
                )}
              </svg>

              {/* Interactive Pulsing Hotspots (Mapped by Coordinates) */}
              <div className="absolute inset-0 pointer-events-none">
                {ZONES.map((zone) => {
                  const isSelected = selectedZones.includes(zone.id)
                  const isActive = activeZoneId === zone.id

                  return (
                    <button
                      key={zone.id}
                      onClick={() => setActiveZoneId(zone.id)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto p-2 group cursor-pointer transition-transform hover:scale-110`}
                      style={{ left: `${zone.hotspot.x}%`, top: `${zone.hotspot.y}%` }}
                      aria-label={`Inspeccionar ${zone.name}`}
                    >
                      <span className="relative flex h-6 w-6 items-center justify-center">
                        {/* Outer Pulse */}
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isActive ? 'bg-cyan-400' : isSelected ? 'bg-emerald-400' : 'bg-slate-400'
                          }`}
                        ></span>
                        {/* Core Dot */}
                        <span
                          className={`relative inline-flex rounded-full h-3 w-3 border-2 border-white ${
                            isActive
                              ? 'bg-cyan-500 laser-glow-cyan'
                              : isSelected
                              ? 'bg-emerald-500'
                              : 'bg-[#0F1115]'
                          }`}
                        ></span>
                      </span>

                      {/* Tooltip on hover / active */}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-7 whitespace-nowrap px-2 py-0.5 text-[9px] font-mono-tech uppercase tracking-wider border shadow-xs transition-opacity duration-150 ${
                          isActive
                            ? 'bg-[#0F1115] text-white border-[#0F1115] opacity-100 z-20'
                            : 'bg-white text-slate-700 border-slate-300 opacity-0 group-hover:opacity-100 z-10'
                        }`}
                      >
                        {zone.code.split('//')[1]}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quick zone selector tabs underneath */}
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-slate-200">
              {ZONES.map((zone) => {
                const isActive = activeZoneId === zone.id
                const isSelected = selectedZones.includes(zone.id)

                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZoneId(zone.id)}
                    className={`px-3 py-1.5 text-[11px] font-mono-tech uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 border ${
                      isActive
                        ? 'bg-[#0F1115] text-white border-[#0F1115]'
                        : 'bg-white text-slate-600 border-slate-300 hover:border-slate-500'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-emerald-400" />}
                    <span>{zone.code.split('//')[0].trim()}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Technical Zone Detail Card (5 Columns) */}
          <div className="lg:col-span-5 bg-white border border-slate-300 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header of Card */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="font-mono-tech text-[10px] text-cyan-600 font-semibold tracking-[0.2em] uppercase">
                  {activeZone.code}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {activeZone.time}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-2xl text-[#0F1115] mt-4 uppercase">
                {activeZone.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed font-light">
                {activeZone.description}
              </p>

              {/* Procedures List */}
              <div className="mt-6">
                <span className="block font-mono-tech text-[10px] text-slate-400 uppercase tracking-widest mb-3">
                  // Protocolo Específico de Laboratorio:
                </span>
                <ul className="space-y-2">
                  {activeZone.procedures.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="font-mono-tech text-cyan-600 font-bold select-none">0{idx + 1}.</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consumables / Tools */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="block font-mono-tech text-[10px] text-slate-400 uppercase tracking-widest mb-2">
                  // Insumos & Herramental Homologado:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeZone.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-mono-tech border border-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Warranty */}
              <div className="mt-5 flex items-center gap-2 p-2.5 bg-emerald-50/60 border border-emerald-200 text-emerald-800 text-xs font-mono-tech">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garantía: {activeZone.warranty}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onToggleZone(activeZone.id)}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono-tech uppercase tracking-wider border transition-all cursor-pointer ${
                  selectedZones.includes(activeZone.id)
                    ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
                    : 'bg-[#0F1115] text-white border-[#0F1115] hover:bg-slate-800'
                }`}
              >
                {selectedZones.includes(activeZone.id) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Zona Añadida a Cotización</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-cyan-400" />
                    <span>Añadir a mi Diagnóstico</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenIntake}
                className="px-4 py-3 bg-white text-slate-800 hover:bg-slate-50 text-xs font-mono-tech uppercase tracking-wider border border-slate-300 transition-all cursor-pointer"
              >
                Cotizar Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
