import React, { useState } from 'react'
import { Check, Shield, Clock, Wrench, Sparkles, Plus, CheckCircle2, Eye, Gauge, Zap } from 'lucide-react'

export interface BlueprintZone {
  id: string
  name: string
  code: string
  tagline: string
  specs: { label: string; val: string }[]
  imagePreview: string
  time: string
  warranty: string
  hotspot: { x: number; y: number }
}

export const ZONES: BlueprintZone[] = [
  {
    id: 'carroceria',
    name: 'Carrocería & Protección PPF / Cerámico',
    code: 'ZONE-01 // COAT & PPF',
    tagline: 'Corrección al 95%+ sin hologramas y blindaje de cuarzo 9H',
    specs: [
      { label: 'Tolerancia Óptica', val: '< 1.5 μm laca' },
      { label: 'Dureza Superficie', val: '9H Quartz Certificada' },
      { label: 'Insumo Homologado', val: 'Gyeon Q² Mohs+ / Menzerna' },
      { label: 'Curado Térmico', val: 'Infrarrojo 60°C en Cabina' }
    ],
    imagePreview: '/assets/images/kronos_paint_correction_split.jpg',
    time: '24 - 48 hrs',
    warranty: '3 a 5 Años Escrita',
    hotspot: { x: 34, y: 56 } // Hood & front bumper on exploded view
  },
  {
    id: 'rines',
    name: 'Rines Forjados, Calipers & Carbo-Cerámicos',
    code: 'ZONE-02 // WHEELS & BRAKES',
    tagline: 'Descontaminación ferrosa horneada y sellado térmico a 800°C',
    specs: [
      { label: 'Protección Térmica', val: 'Hasta 800°C continuo' },
      { label: 'Torqueado Birlos', val: 'Snap-on Calibrado ±1%' },
      { label: 'Insumo Homologado', val: 'Gyeon Q² Rim Quartz' },
      { label: 'Efecto Visual', val: 'Satinado/Gloss sin polvo' }
    ],
    imagePreview: '/assets/images/kronos_wheel_caliper.jpg',
    time: '4 - 6 hrs',
    warranty: '12 Meses Repelencia',
    hotspot: { x: 53, y: 69 } // Exploded front wheel & brake assembly
  },
  {
    id: 'motor',
    name: 'Bahía de Motor Flat-Six & Tren Motriz',
    code: 'ZONE-03 // ENGINE & POWERTRAIN',
    tagline: 'Limpieza criogénica sin agua y plenum de carbono al vacío',
    specs: [
      { label: 'Temperatura Vapor', val: '140°C a baja presión' },
      { label: 'Seguridad ECU', val: 'Aislamiento 100% de arneses' },
      { label: 'Diagnóstico OBD', val: 'Autel MaxiSys Ultra OEM' },
      { label: 'Gomas y Mangueras', val: 'Polímeros antiestáticos' }
    ],
    imagePreview: '/assets/images/kronos_engine_bay.jpg',
    time: '3 - 5 hrs',
    warranty: '6 Meses Antiestático',
    hotspot: { x: 74, y: 38 } // Exploded rear engine block
  },
  {
    id: 'interiores',
    name: 'Habitáculo & Cuero Nappa / Alcántara',
    code: 'ZONE-04 // CABIN & NAPPA LEATHER',
    tagline: 'Restauración artesanal de piel mate sin brillo artificial',
    specs: [
      { label: 'Textura Original', val: '100% Mate de fábrica' },
      { label: 'Protección Mezclilla', val: 'Escudo anti-transferencia' },
      { label: 'Sanitización', val: 'Termonebulización de Ozono' },
      { label: 'Insumo Alemán', val: 'Colourlock Leather Shield' }
    ],
    imagePreview: '/assets/images/kronos_interior_leather.jpg',
    time: '6 - 8 hrs',
    warranty: 'Cero Grasa / Mate Real',
    hotspot: { x: 49, y: 45 } // Cockpit & door panel
  },
  {
    id: 'cristales',
    name: 'Cristales, Óptica Láser & Túnel LED',
    code: 'ZONE-05 // OPTICS & LIGHT TUNNEL',
    tagline: 'Eliminación de sarro mineral y sellado hidrofóbico 118°',
    specs: [
      { label: 'Pulido Cristales', val: 'Óxido de cerio grado óptico' },
      { label: 'Ángulo Gotas', val: '> 118° repelencia extrema' },
      { label: 'Protección Faros', val: 'PPF anti-amarilleo UV' },
      { label: 'Auditoría Final', val: 'Túnel 6,500K CRI 98+' }
    ],
    imagePreview: '/assets/images/kronos_light_tunnel.jpg',
    time: '2 - 4 hrs',
    warranty: '18 Meses Garantizados',
    hotspot: { x: 21, y: 44 } // Front optical lights & windshield
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
    <section id="blueprint" className="py-20 lg:py-28 bg-[#0B0D12] text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background blueprint grid on dark workstation */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="font-mono-tech text-xs text-cyan-400 tracking-[0.25em] uppercase">
                // 01. WORKSTATION CAD 360° · AUDITORÍA EXPLOSIONADA
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight mt-2">
              Blueprint de Carrocería & Diagnóstico
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-400 max-w-md">
            Toca los nodos de telemetría sobre el plano explosionado para inspeccionar evidencias macrofotográficas, tolerancias y añadir componentes a tu cotización.
          </p>
        </div>

        {/* Blueprint Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Blueprint Visual Canvas (7 Columns) - Dark CAD Terminal */}
          <div className="lg:col-span-7 bg-[#11141C] border border-slate-800 p-5 sm:p-7 relative overflow-hidden shadow-2xl">
            
            {/* Top terminal telemetry bar */}
            <div className="flex items-center justify-between font-mono-tech text-[10px] text-slate-400 border-b border-slate-800 pb-3 mb-5">
              <span className="text-slate-300">CAD MODEL: 911 GT3 RS (992) SCHEMATIC</span>
              <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                SCANNER LÁSER ACTIVO // 0.05 MM
              </span>
            </div>

            {/* CAD Exploded Canvas */}
            <div className="relative w-full aspect-16/10 bg-[#07090D] border border-slate-800/80 flex items-center justify-center p-1 overflow-hidden group">
              
              {/* Internal subtle technical crosshairs */}
              <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none"></div>

              {/* Laser Scanning Line Animation */}
              <div className="absolute inset-y-0 w-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-[scan_3.5s_ease-in-out_infinite] pointer-events-none z-10"></div>

              {/* Native High-Resolution Exploded CAD Blueprint */}
              <img
                src="/assets/images/kronos_blueprint_gt.jpg"
                alt="Plano Técnico CAD Porsche 911 GT3 RS KRONOS"
                className="w-full h-full object-contain select-none z-0 transition-transform duration-700 group-hover:scale-103"
              />

              {/* Interactive Pulsing Hotspots (Directly placed over exploded parts) */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {ZONES.map((zone) => {
                  const isSelected = selectedZones.includes(zone.id)
                  const isActive = activeZoneId === zone.id

                  return (
                    <button
                      key={zone.id}
                      onClick={() => setActiveZoneId(zone.id)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto p-2 group cursor-pointer transition-transform hover:scale-130"
                      style={{ left: `${zone.hotspot.x}%`, top: `${zone.hotspot.y}%` }}
                      aria-label={`Inspeccionar ${zone.name}`}
                    >
                      <span className="relative flex h-8 w-8 items-center justify-center">
                        {/* Outer Pulse */}
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isActive ? 'bg-cyan-400' : isSelected ? 'bg-emerald-400' : 'bg-slate-400'
                          }`}
                        ></span>
                        {/* Center Ring */}
                        <span
                          className={`relative inline-flex rounded-full h-4 w-4 border-2 border-white shadow-lg ${
                            isActive
                              ? 'bg-cyan-400 laser-glow-cyan'
                              : isSelected
                              ? 'bg-emerald-500'
                              : 'bg-black/90'
                          }`}
                        ></span>
                      </span>

                      {/* Tooltip on hover / active */}
                      <span
                        className={`absolute left-1/2 -translate-x-1/2 -bottom-7 whitespace-nowrap px-2 py-0.5 text-[9px] font-mono-tech uppercase tracking-wider border shadow-md transition-opacity duration-150 ${
                          isActive
                            ? 'bg-cyan-950 text-cyan-200 border-cyan-400 opacity-100 z-30'
                            : 'bg-black/90 text-slate-300 border-slate-700 opacity-0 group-hover:opacity-100 z-20'
                        }`}
                      >
                        {zone.code.split('//')[1]}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quick zone selector tabs */}
            <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {ZONES.map((zone) => {
                const isActive = activeZoneId === zone.id
                const isSelected = selectedZones.includes(zone.id)

                return (
                  <button
                    key={zone.id}
                    onClick={() => setActiveZoneId(zone.id)}
                    className={`px-3 py-1.5 text-[11px] font-mono-tech uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 border ${
                      isActive
                        ? 'bg-cyan-500 text-[#0F1115] font-bold border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                        : 'bg-[#161A22] text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-emerald-400" />}
                    <span>{zone.code.split('//')[0].trim()}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Technical Visual Card (5 Columns) - Dark Glassmorphism */}
          <div className="lg:col-span-5 bg-[#141820] border border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="font-mono-tech text-[10px] text-cyan-400 font-semibold tracking-[0.2em] uppercase">
                  {activeZone.code}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {activeZone.time}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display font-bold text-2xl text-white mt-4 uppercase">
                {activeZone.name}
              </h3>
              <p className="mt-1.5 text-xs text-cyan-400 font-mono-tech uppercase tracking-wider">
                // {activeZone.tagline}
              </p>

              {/* Visual Preview Thumbnail with High-Res Image */}
              <div className="mt-5 relative w-full h-44 overflow-hidden border border-slate-700 shadow-inner group">
                <img
                  src={activeZone.imagePreview}
                  alt={activeZone.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 bg-black/80 backdrop-blur-xs text-cyan-300 font-mono-tech text-[9px] uppercase tracking-wider border border-slate-700">
                  EVIDENCIA REAL KRONOS // MACRO 8K
                </div>
              </div>

              {/* Technical Specifications Grid (Zero text walls, pure high-impact data) */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {activeZone.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 bg-[#1B202A] border border-slate-800">
                    <span className="block font-mono-tech text-[9px] text-slate-400 uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="block font-mono-tech text-xs font-bold text-white mt-0.5">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Warranty badge */}
              <div className="mt-4 flex items-center gap-2 p-2.5 bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono-tech">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Garantía Respaldada: {activeZone.warranty}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-7 pt-5 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onToggleZone(activeZone.id)}
                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-mono-tech uppercase tracking-wider border transition-all cursor-pointer ${
                  selectedZones.includes(activeZone.id)
                    ? 'bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-700'
                    : 'bg-cyan-500 text-[#0F1115] font-bold border-cyan-400 hover:bg-cyan-400'
                }`}
              >
                {selectedZones.includes(activeZone.id) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Zona Añadida a Cotización</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-[#0F1115]" />
                    <span>Añadir a mi Diagnóstico</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenIntake}
                className="px-4 py-3 bg-[#1B202A] text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-mono-tech uppercase tracking-wider border border-slate-700 transition-all cursor-pointer"
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
