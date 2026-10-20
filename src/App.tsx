import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { VehicleBlueprint } from './components/VehicleBlueprint'
import { ProtocolTimeline } from './components/ProtocolTimeline'
import { ServicesGrid } from './components/ServicesGrid'
import { IntakeQuoteModal } from './components/IntakeQuoteModal'
import { Footer } from './components/Footer'
import { ArrowRight, Send, CheckCircle2 } from 'lucide-react'

export const App: React.FC = () => {
  const [selectedZones, setSelectedZones] = useState<string[]>(['carroceria'])
  const [isIntakeOpen, setIsIntakeOpen] = useState<boolean>(false)
  const [initialServiceForQuote, setInitialServiceForQuote] = useState<string | undefined>()

  const handleToggleZone = (zoneId: string) => {
    setSelectedZones((prev) =>
      prev.includes(zoneId) ? prev.filter((id) => id !== zoneId) : [...prev, zoneId]
    )
  }

  const handleOpenIntakeWithService = (serviceTitle?: string) => {
    setInitialServiceForQuote(serviceTitle)
    setIsIntakeOpen(true)
  }

  const scrollToBlueprint = () => {
    const el = document.getElementById('blueprint')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#F6F7F9] text-[#0F1115] flex flex-col">
      {/* Top Header */}
      <Header
        onOpenIntake={() => handleOpenIntakeWithService()}
        selectedCount={selectedZones.length}
      />

      {/* Hero Section */}
      <Hero
        onExploreBlueprint={scrollToBlueprint}
        onOpenIntake={() => handleOpenIntakeWithService()}
      />

      {/* Feature 1: Interactive Vehicle Blueprint */}
      <VehicleBlueprint
        selectedZones={selectedZones}
        onToggleZone={handleToggleZone}
        onOpenIntake={() => handleOpenIntakeWithService()}
      />

      {/* Feature 2: 5-Stage Pinned Horizontal Scroll Sequence */}
      <ProtocolTimeline />

      {/* Specialized Services Catalog */}
      <ServicesGrid onOpenIntake={handleOpenIntakeWithService} />

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Action Bar for Mobile & Desktop */}
      {selectedZones.length > 0 && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 z-30 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-[#0F1115] text-white px-5 py-3.5 border border-slate-700 shadow-2xl flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-mono-tech text-xs tracking-wider uppercase">
                {selectedZones.length} {selectedZones.length === 1 ? 'Zona Seleccionada' : 'Zonas Seleccionadas'}
              </span>
            </div>

            <button
              onClick={() => handleOpenIntakeWithService()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-[#0F1115] font-mono-tech text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Cotizar en WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Technical Intake & Quote Modal */}
      <IntakeQuoteModal
        isOpen={isIntakeOpen}
        onClose={() => setIsIntakeOpen(false)}
        selectedZones={selectedZones}
        initialService={initialServiceForQuote}
      />
    </div>
  )
}

export default App
