import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Microscope, Sparkles, Shield, Eye, Flame, CheckCircle, ArrowRight } from 'lucide-react'

interface ProtocolStep {
  step: string
  time: string
  title: string
  eyebrow: string
  description: string
  specs: string[]
  icon: React.ReactNode
  image: string
}

const STEPS: ProtocolStep[] = [
  {
    step: '01',
    time: '00 MIN',
    eyebrow: 'INSPECCIÓN PREVIA',
    title: 'Escaneo y Mapeo Micrométrico',
    description: 'Diagnóstico científico del estado de la laca. Medimos el espesor de pintura en 24 puntos del vehículo con medidor magnético digital Elcometer para garantizar que la corrección no comprometa la capa transparente.',
    specs: ['Medidor Elcometer 456 digital', 'Mapeo de 24 puntos de carrocería', 'Reporte fotográfico macro de defectos'],
    icon: <Microscope className="w-6 h-6 text-cyan-400" />,
    image: '/assets/images/kronos_slider_before.jpg'
  },
  {
    step: '02',
    time: '45 MIN',
    eyebrow: 'DESCONTAMINACIÓN',
    title: 'Lavado Técnico de Tres Fases',
    description: 'Descontaminación química de lluvia ácida y sales minerales mediante baño de espuma de nieve pH neutro. Descontaminado de partículas ferrosas de freno con reactivo químico y barra de arcilla ultra fina.',
    specs: ['Espuma de nieve Gyeon Foam pH neutro', 'Descontaminante férrico reactivo', 'Método de 2 cubetas con filtros Grit Guard'],
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    image: '/assets/images/kronos_ceramic_beading.jpg'
  },
  {
    step: '03',
    time: '120 MIN',
    eyebrow: 'CORRECCIÓN ÓPTICA',
    title: 'Pulido Micrométrico en 3 Pasos',
    description: 'Eliminación permanente del 95% de microrrayas, marcas circulares (swirls) y oxidación. Trabajamos con pulidoras orbitales alemanas e italianas y pastas con óxido de aluminio puro sin siliconas ni rellenadores.',
    specs: ['Pulidoras Rupes BigFoot LHR21 Mark III', 'Pastas abrasivas Menzerna Germany', 'Cero rellenos cosméticos (resultados reales)'],
    icon: <Flame className="w-6 h-6 text-amber-400" />,
    image: '/assets/images/kronos_slider_after.jpg'
  },
  {
    step: '04',
    time: '240 MIN',
    eyebrow: 'BLINDAJE',
    title: 'Aplicación Cerámica 9H o PPF',
    description: 'Instalación de película autorregenerativa PPF en zonas de impacto o aplicación manual de recubrimiento cerámico de cuarzo grado 9H. Curado térmico acelerado mediante lámparas infrarrojas a 60°C.',
    specs: ['Dureza 9H certificada por laboratorio', 'Curado infrarrojo de onda corta', 'Garantía escrita de 3 a 5 años'],
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    image: '/assets/images/kronos_ppf_installation.jpg'
  },
  {
    step: '05',
    time: 'FINAL',
    eyebrow: 'CERTIFICACIÓN',
    title: 'Túnel de Inspección & Entrega',
    description: 'Revisión final bajo cabina de luz de 18 luminarias LED de 6,500 Kelvin con índice de reproducción cromática CRI 98+. El vehículo se entrega sellado, sanitizado y con certificado digital de garantía.',
    specs: ['Inspección bajo 6,500K CRI 98+', 'Certificado digital transferible', 'Kit de mantenimiento inicial de cortesía'],
    icon: <Eye className="w-6 h-6 text-cyan-400" />,
    image: '/assets/images/kronos_light_tunnel.jpg'
  }
]

export const ProtocolTimeline: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  })

  // Smooth spring physics for pinned horizontal track
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001
  })

  // Transform scroll progress to percentage translation
  const x = useTransform(smoothProgress, [0, 1], ['0%', '-68%'])

  return (
    <section id="protocolo" ref={targetRef} className="relative h-[300vh] bg-[#0F1115] text-white">
      
      {/* Sticky viewport container (offset for sticky header) */}
      <div className="sticky top-16 h-[calc(100vh-64px)] flex flex-col justify-between overflow-hidden pt-6 pb-8 sm:pt-8 sm:pb-10">
        
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-800 pb-6">
            <div>
              <span className="font-mono-tech text-xs text-cyan-400 tracking-[0.25em] uppercase">
                // 02. PROTOCOLO DE PRECISIÓN DE 5 ETAPAS
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white mt-1">
                La Secuencia KRONOS
              </h2>
            </div>
            
            <div className="mt-4 sm:mt-0 flex items-center gap-2 font-mono-tech text-xs text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>DESPLAZA HORIZONTALMENTE // PASO A PASO</span>
            </div>
          </div>
        </div>

        {/* Pinned Horizontal Track */}
        <div className="w-full relative my-auto overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-8 px-4 sm:px-12 w-max cursor-grab active:cursor-grabbing"
          >
            {STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="w-[320px] sm:w-[440px] bg-[#161A22] border border-slate-800 p-5 sm:p-7 flex flex-col justify-between relative group hover:border-cyan-500/50 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Visual Step Banner */}
                <div className="relative w-full h-36 bg-black border border-slate-800/80 overflow-hidden mb-5">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161A22] via-[#161A22]/30 to-transparent"></div>
                  
                  {/* Step Badge Over Image */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-xs border border-cyan-500/40 text-cyan-400 font-mono-tech text-[10px] uppercase tracking-wider">
                    FASE // {step.step}
                  </div>
                </div>

                {/* Top Step & Time */}
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-[10px] text-cyan-400 tracking-widest uppercase font-semibold">
                        {step.eyebrow}
                      </span>
                    </div>
                    <div className="p-1.5 bg-slate-900 border border-slate-800 rounded-sm">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-bold text-lg sm:text-xl uppercase mt-3.5 text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                {/* Specs list */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="block font-mono-tech text-[9px] text-slate-500 uppercase tracking-widest mb-2">
                    // CONTROL TÉCNICO:
                  </span>
                  <ul className="space-y-1.5">
                    {step.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2 text-[11px] font-mono-tech text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Time Badge at bottom */}
                  <div className="mt-5 flex items-center justify-between pt-3 border-t border-slate-800 font-mono-tech text-[10px] text-slate-400">
                    <span>DURACIÓN EN CABINA</span>
                    <span className="text-cyan-400 font-semibold">{step.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
          <div className="flex items-center justify-between text-xs font-mono-tech text-slate-500 pt-4 border-t border-slate-900">
            <span>KRONOS PROTOCOL // VERSION 4.2 HIGH-END</span>
            <div className="flex items-center gap-1.5 text-cyan-400">
              <span>5 ETAPAS RIGUROSAS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
