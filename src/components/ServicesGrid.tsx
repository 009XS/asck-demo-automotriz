import React from 'react'
import { Shield, Sparkles, Wrench, Gauge, Flame, Eye, ArrowUpRight } from 'lucide-react'

interface ServiceItem {
  id: string
  code: string
  title: string
  subtitle: string
  description: string
  specs: string[]
  warranty: string
  icon: React.ReactNode
}

const SERVICES: ServiceItem[] = [
  {
    id: 'ppf',
    code: 'SVC-01 // ARMOR',
    title: 'Paint Protection Film (PPF)',
    subtitle: 'Blindaje Físico Autoregenerativo',
    description: 'Película de poliuretano termoplástico de 200 micras que absorbe y disipa impactos de grava en autopista. Se regenera automáticamente con el calor del sol.',
    specs: ['Grosor: 8 mils (200 μm)', 'Corte digital por plotter sin navajas sobre pintura', 'Acabado ultra brillante o mate satinado'],
    warranty: '7 a 10 Años de garantía',
    icon: <Shield className="w-5 h-5 text-cyan-500" />
  },
  {
    id: 'ceramico',
    code: 'SVC-02 // QUARTZ',
    title: 'Recubrimiento Cerámico 9H',
    subtitle: 'Nanotecnología de Cuarzo Puro',
    description: 'Enlace molecular permanente con la capa transparente de la pintura. Proporciona brillo espejo, máxima repelencia al agua y protección contra excrementos de ave y lluvia ácida.',
    specs: ['Dureza superficial certificada 9H', 'Ángulo de contacto hidrofóbico >110°', 'Resistencia química pH 2 a 12'],
    warranty: '3 a 5 Años de garantía escrita',
    icon: <Sparkles className="w-5 h-5 text-cyan-500" />
  },
  {
    id: 'mecanica',
    code: 'SVC-03 // POWERTRAIN',
    title: 'Mecánica Fina & Afinación Mayor',
    subtitle: 'Mantenimiento Preventivo sin Tolerancias',
    description: 'Servicio técnico especializado para motores turbo, aspirados y transmisiones de doble embrague (PDK, DSG, M-DCT). Diagnóstico con scanner OEM de agencia.',
    specs: ['Fluidos 100% sintéticos Motul / Liqui Moly', 'Diagnóstico electrónico computarizado', 'Refacciones originales certificadas'],
    warranty: '12 Meses o 20,000 km',
    icon: <Wrench className="w-5 h-5 text-cyan-500" />
  },
  {
    id: 'piel',
    code: 'SVC-04 // LEATHER',
    title: 'Spa de Interiores & Piel Nappa',
    subtitle: 'Restauración y Protección de Cuero',
    description: 'Desinfección profunda sin agentes abrasivos. Hidratación de cueros resecos y aplicación de escudo cerámico anti-transferencia de mezclilla en vestiduras claras.',
    specs: ['Productos alemanes Colourlock homologados', 'Sanitización de ductos con ozono', 'Mantiene el olor y tacto mate de fábrica'],
    warranty: 'Acabado mate original garantizado',
    icon: <Flame className="w-5 h-5 text-cyan-500" />
  },
  {
    id: 'trackday',
    code: 'SVC-05 // CHASSIS',
    title: 'Frenos & Setup de Pista',
    subtitle: 'Seguridad en Alta Velocidad',
    description: 'Sustitución de balatas por compuestos de alto coeficiente de fricción, purgado de frenos con líquido de alto punto de ebullición y alineación milimétrica.',
    specs: ['Líquido Castrol SRF / Motul RBF 660', 'Inspección de desgaste de discos y calipers', 'Torqueado de birlos con torquímetro digital'],
    warranty: 'Prueba de frenado y telemetría',
    icon: <Gauge className="w-5 h-5 text-cyan-500" />
  },
  {
    id: 'cristales',
    code: 'SVC-06 // OPTICS',
    title: 'Desmanchado Óptico de Cristales',
    subtitle: 'Visibilidad Total bajo Tormenta',
    description: 'Eliminación completa de depósitos de sarro mineral incrustado mediante pulido con óxido de cerio. Aplicación de sellador fluoropolímero hidrofóbico.',
    specs: ['Pulido con óxido de cerio de grado óptico', 'Repelencia de agua a partir de 45 km/h', 'Restaura y protege faros LED'],
    warranty: '18 Meses de repelencia garantizada',
    icon: <Eye className="w-5 h-5 text-cyan-500" />
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
              // 03. CATÁLOGO DE INGENIERÍA
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0F1115] uppercase tracking-tight mt-2">
              Servicios Especializados KRONOS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono-tech text-xs text-slate-500 max-w-md">
            Cada procedimiento se ejecuta en cabina cerrada con climatización y filtración de aire para evitar contaminantes en la superficie.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="font-mono-tech text-[10px] text-slate-400 tracking-widest uppercase">
                    {service.code}
                  </span>
                  <div className="p-2 bg-slate-50 border border-slate-200">
                    {service.icon}
                  </div>
                </div>

                <span className="block font-mono-tech text-[11px] text-cyan-600 font-semibold tracking-wider uppercase mt-4">
                  {service.subtitle}
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0F1115] uppercase tracking-tight mt-1">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="block font-mono-tech text-[9px] text-slate-400 uppercase tracking-widest mb-2">
                    // ESPECIFICACIONES CLAVE:
                  </span>
                  <ul className="space-y-1.5">
                    {service.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="font-mono-tech text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 border border-emerald-200">
                  {service.warranty}
                </span>

                <button
                  onClick={() => onOpenIntake(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#0F1115] hover:text-cyan-600 font-semibold tracking-wider uppercase cursor-pointer transition-colors"
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
