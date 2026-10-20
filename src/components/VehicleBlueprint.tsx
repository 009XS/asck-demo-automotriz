import React, { useState } from 'react'
import { Check, Shield, Clock, Wrench, Sparkles, Plus, CheckCircle2, Eye, Gauge } from 'lucide-react'

export interface BlueprintZone {
  id: string
  name: string
  code: string
  tagline: string
  specs: { label: string; val: string }[]
  imagePreview?: string
  time: string
  warranty: string
  hotspot: { x: number; y: number }
}

export const ZONES: BlueprintZone[] = [
  {
    id: 'carroceria',
    name: 'Carrocería & Protección PPF / Cerámico',
    code: 'ZONE-01 // COAT',
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
    hotspot: { x: 50, y: 38 }
  },
  {
    id: 'rines',
    name: 'Rines Forjados, Calipers & Carbo-Cerámicos',
    code: 'ZONE-02 // WHEELS',
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
    hotspot: { x: 74, y: 68 }
  },
  {
    id: 'motor',
    name: 'Bahía de Motor & Tren Motriz',
    code: 'ZONE-03 // ENGINE',
    tagline: 'Limpieza criogénica/vapor seco sin inundación de agua',
    specs: [
      { label: 'Temperatura Vapor', val: '140°C a baja presión' },
      { label: 'Seguridad ECU', val: 'Aislamiento 100% de arneses' },
      { label: 'Diagnóstico OBD', val: 'Autel MaxiSys Ultra OEM' },
      { label: 'Gomas y Mangueras', val: 'Polímeros antiestáticos' }
    ],
    time: '3 - 5 hrs',
    warranty: '6 Meses Antiestático',
    hotspot: { x: 22, y: 55 }
  },
  {
    id: 'interiores',
    name: 'Habitáculo & Cuero Nappa / Alcántara',
    code: 'ZONE-04 // CABIN',
    tagline: 'Restauración artesanal de piel mate sin brillo artificial',
    specs: [
      { label: 'Textura Original', val: '100% Mate de fábrica' },
      { label: 'Protección Mezclilla', val: 'Escudo anti-transferencia' },
      { label: 'Sanitización', val: 'Termonebulización de Ozono' },
      { label: 'Insumo Alemán', val: 'Colourlock Leather Shield' }
    ],
    time: '6 - 8 hrs',
    warranty: 'Cero Grasa / Mate Real',
    hotspot: { x: 45, y: 50 }
  },
  {
    id: 'cristales',
    name: 'Cristales & Óptica Láser / LED',
    code: 'ZONE-05 // OPTICS',
    tagline: 'Eliminación de sarro mineral y sellado hidrofóbico 110°',
    specs: [
      { label: 'Pulido Cristales', val: 'Óxido de cerio grado óptico' },
      { label: 'Ángulo Gotas', val: '> 110° repelencia' },
      { label: 'Protección Faros', val: 'PPF anti-amarilleo UV' },
      { label: 'Activación Agua', val: 'Desde 45 km/h' }
    ],
    imagePreview: '/assets/images/kronos_light_tunnel.jpg',
    time: '2 - 4 hrs',
    warranty: '18 Meses Garantizados',
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
              // 01. INSPECCIÓN VISUAL CAD 360°
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0F1115] uppercase tracking-tight mt-2">
              Blueprint de Carrocería & Diagnóstico
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-500 max-w-md">
            Toca los puntos de telemetría sobre el chasis para inspeccionar tolerancias, herramientas y añadir zonas a tu ficha.
          </p>
        </div>

        {/* Blueprint Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Blueprint Visual Canvas (7 Columns) */}
          <div className="lg:col-span-7 bg-[#F6F7F9] border border-slate-300 p-6 sm:p-8 relative overflow-hidden shadow-xs">
            
            {/* Top specs badge */}
            <div className="flex items-center justify-between font-mono-tech text-[10px] text-slate-400 border-b border-slate-200 pb-3 mb-6">
              <span>SCANNER CAD // 911 GT3 SCHEMATIC</span>
              <span className="text-cyan-600 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping"></span>
                SCANNER LÁSER ACTIVO
              </span>
            </div>

            {/* CAD Blueprint Canvas with Real Transparent Image */}
            <div className="relative w-full aspect-16/9 bg-white border border-slate-200 flex items-center justify-center p-2 overflow-hidden group">
              
              {/* Background blueprint grid */}
              <div className="absolute inset-0 bg-blueprint-grid opacity-75 pointer-events-none"></div>

              {/* Laser Scanning Line Animation */}
              <div className="absolute inset-y-0 w-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-[scan_4s_ease-in-out_infinite] pointer-events-none z-10"></div>

              {/* Real Transparent CAD Blueprint Layer */}
              <img
                src="/assets/images/kronos_blueprint_dark_transparent.png"
                alt="Diagrama Blueprint CAD Porsche GT3 KRONOS"
                className="w-full h-full object-contain select-none z-0 filter drop-shadow-sm transition-transform duration-500 group-hover:scale-102"
              />

              {/* Interactive Pulsing Hotspots (Mapped by Coordinates) */}
              <div className="absolute inset-0 pointer-events-none z-20">
                {ZONES.map((zone) => {
                  const isSelected = selectedZones.includes(zone.id)
                  const isActive = activeZoneId === zone.id

                  return (
                    <button
                      key={zone.id}
                      onClick={() => setActiveZoneId(zone.id)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto p-2 group cursor-pointer transition-transform hover:scale-125"
                      style={{ left: `${zone.hotspot.x}%`, top: `${zone.hotspot.y}%` }}
                      aria-label={`Inspeccionar ${zone.name}`}
                    >
                      <span className="relative flex h-7 w-7 items-center justify-center">
                        {/* Outer Pulse */}
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                            isActive ? 'bg-cyan-400' : isSelected ? 'bg-emerald-400' : 'bg-slate-400'
                          }`}
                        ></span>
                        {/* Core Dot */}
                        <span
                          className={`relative inline-flex rounded-full h-3.5 w-3.5 border-2 border-white shadow-md ${
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
                            ? 'bg-[#0F1115] text-white border-[#0F1115] opacity-100 z-30'
                            : 'bg-white text-slate-700 border-slate-300 opacity-0 group-hover:opacity-100 z-20'
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

          {/* Technical Visual Card (5 Columns) */}
          <div className="lg:col-span-5 bg-white border border-slate-300 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="font-mono-tech text-[10px] text-cyan-600 font-semibold tracking-[0.2em] uppercase">
                  {activeZone.code}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono-tech text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {activeZone.time}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display font-bold text-2xl text-[#0F1115] mt-4 uppercase">
                {activeZone.name}
              </h3>
              <p className="mt-1.5 text-xs text-cyan-700 font-mono-tech uppercase tracking-wider">
                // {activeZone.tagline}
              </p>

              {/* Visual Preview Thumbnail if available */}
              {activeZone.imagePreview && (
                <div className="mt-5 relative w-full h-36 overflow-hidden border border-slate-200 shadow-inner group">
                  <img
                    src={activeZone.imagePreview}
                    alt={activeZone.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 backdrop-blur-xs text-white font-mono-tech text-[9px] uppercase tracking-wider">
                    EVIDENCIA KRONOS // MACRO
                  </div>
                </div>
              )}

              {/* Technical Specifications Grid (Punchy, No Long Text) */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {activeZone.specs.map((spec, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 border border-slate-200">
                    <span className="block font-mono-tech text-[9px] text-slate-400 uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="block font-mono-tech text-xs font-bold text-slate-800 mt-0.5">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Warranty badge */}
              <div className="mt-5 flex items-center gap-2 p-2.5 bg-emerald-50/70 border border-emerald-200 text-emerald-800 text-xs font-mono-tech">
                <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Garantía Respaldada: {activeZone.warranty}</span>
              </div>
            </div>

            {/* Actions */}
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
