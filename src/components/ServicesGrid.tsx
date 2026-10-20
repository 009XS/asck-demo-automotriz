import React from 'react'
import { Shield, Sparkles, Wrench, Gauge, Flame, Eye, ArrowUpRight, Check } from 'lucide-react'

interface ServiceItem {
  id: string
  code: string
  title: string
  tagline: string
  image: string
  bullets: string[]
  warranty: string
  priceFrom: string
}

const SERVICES: ServiceItem[] = [
  {
    id: 'ppf',
    code: 'SVC-01 // ARMOR',
    title: 'Paint Protection Film (PPF)',
    tagline: 'Blindaje físico autoregenerativo contra impactos en autopista',
    image: '/assets/images/kronos_paint_correction_split.jpg',
    bullets: [
      'Poliuretano termoplástico 200 micras (8 mils)',
      'Autocuración de micro-rayas con el calor ambiental',
      'Corte milimétrico por plotter sin navajas sobre carrocería'
    ],
    warranty: '7 a 10 Años Escrita',
    priceFrom: 'Desde $18,500 MXN'
  },
  {
    id: 'ceramico',
    code: 'SVC-02 // QUARTZ',
    title: 'Recubrimiento Cerámico 9H',
    tagline: 'Nanotecnología de cuarzo puro con brillo espejo permanente',
    image: '/assets/images/kronos_paint_correction_split.jpg',
    bullets: [
      'Dureza certificada 9H anti-rayas leves',
      'Hidrofobicidad extrema con ángulo de contacto > 118°',
      'Protección química contra lluvia ácida y desechos'
    ],
    warranty: '3 a 5 Años Escrita',
    priceFrom: 'Desde $7,900 MXN'
  },
  {
    id: 'rines',
    code: 'SVC-03 // WHEELS',
    title: 'Rines, Calipers & Frenos',
    tagline: 'Tratamiento cerámico térmico y descontaminación a 800°C',
    image: '/assets/images/kronos_wheel_caliper.jpg',
    bullets: [
      'Descontaminación química de polvo de balata quemado',
      'Sellado cerámico de alta temperatura Gyeon Q² Rim',
      'Torqueado con torquímetro digital calibrado Snap-on'
    ],
    warranty: '12 Meses Repelencia',
    priceFrom: 'Desde $3,800 MXN'
  },
  {
    id: 'tunel',
    code: 'SVC-04 // OPTICS',
    title: 'Túnel de Inspección & Entrega',
    tagline: 'Auditoría óptica de 18 arcos LED bajo 6,500K CRI 98+',
    image: '/assets/images/kronos_light_tunnel.jpg',
    bullets: [
      'Detección de microrrayas bajo luz rasante de precisión',
      'Cabina con filtración de aire HEPA H14 grado médico',
      'Certificado digital transferible por número de serie VIN'
    ],
    warranty: 'Auditoría Certificada',
    priceFrom: 'Incluido en Servicios'
  },
  {
    id: 'mecanica',
    code: 'SVC-05 // POWERTRAIN',
    title: 'Mecánica Fina & Diagnóstico',
    tagline: 'Mantenimiento preventivo sin tolerancias para autos deportivos',
    image: '/assets/images/kronos_blueprint_dark_transparent.png',
    bullets: [
      'Fluidos 100% sintéticos Motul 300V / Liqui Moly',
      'Escaneo con scanner oficial OEM Autel MaxiSys',
      'Limpieza criogénica de bahía de motor sin agua'
    ],
    warranty: '12 Meses / 20,000 km',
    priceFrom: 'Presupuesto a la Medida'
  },
  {
    id: 'interiores',
    code: 'SVC-06 // CABIN',
    title: 'Spa de Cuero Nappa & Alcántara',
    tagline: 'Nutrición y protección mate original sin brillos grasos',
    image: '/assets/images/kronos_blueprint_dark_transparent.png',
    bullets: [
      'Insumos alemanes Colourlock certificados',
      'Escudo cerámico anti-transferencia de mezclilla',
      'Desinfección por termonebulización de ozono'
    ],
    warranty: 'Mate Original Garantizado',
    priceFrom: 'Desde $4,200 MXN'
  }
]

interface ServicesGridProps {
  onOpenIntake: (serviceTitle?: string) => void
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenIntake }) => {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-[#F6F7F9] border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
          <div>
            <span className="font-mono-tech text-xs text-cyan-600 tracking-[0.2em] uppercase">
              // 03. CATÁLOGO VISUAL DE INGENIERÍA
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0F1115] uppercase tracking-tight mt-2">
              Servicios Especializados KRONOS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-500 max-w-md">
            Tratamientos de concurso ejecutados bajo cabinas cerradas con temperatura y humedad relativa controladas.
          </p>
        </div>

        {/* Services Grid with Visual Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 flex flex-col justify-between hover:border-slate-400 hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative w-full h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Top code badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/80 text-cyan-400 font-mono-tech text-[9px] uppercase tracking-wider border border-slate-800">
                    {service.code}
                  </div>

                  {/* Price badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-white text-[#0F1115] font-mono-tech text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {service.priceFrom}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <span className="block font-mono-tech text-[11px] text-cyan-700 font-semibold uppercase tracking-wider">
                    {service.tagline}
                  </span>
                  
                  <h3 className="font-display font-bold text-xl text-[#0F1115] uppercase tracking-tight mt-1.5">
                    {service.title}
                  </h3>

                  {/* Bullets */}
                  <div className="mt-5 space-y-2">
                    {service.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-light">
                        <Check className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono-tech text-[10px] text-emerald-800 bg-emerald-100/70 px-2.5 py-1 border border-emerald-200">
                  {service.warranty}
                </span>

                <button
                  onClick={() => onOpenIntake(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#0F1115] group-hover:text-cyan-600 font-semibold tracking-wider uppercase cursor-pointer transition-colors"
                >
                  <span>Cotizar</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
