import React, { useState } from 'react'
import { X, Send, ShieldCheck, Car, Calendar, User, Phone, CheckCircle2, AlertCircle } from 'lucide-react'
import { ZONES } from './VehicleBlueprint'

interface IntakeQuoteModalProps {
  isOpen: boolean
  onClose: () => void
  selectedZones: string[]
  initialService?: string
}

export const IntakeQuoteModal: React.FC<IntakeQuoteModalProps> = ({
  isOpen,
  onClose,
  selectedZones,
  initialService
}) => {
  const [make, setMake] = useState('')
  const [modelYear, setModelYear] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [timePreference, setTimePreference] = useState('Manana')
  const [notes, setNotes] = useState('')

  if (!isOpen) return null

  // Resolve selected zone names
  const selectedZoneNames = ZONES.filter((z) => selectedZones.includes(z.id)).map((z) => z.name)

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()

    const zonesText = selectedZoneNames.length > 0 
      ? selectedZoneNames.join(', ') 
      : (initialService || 'Inspección General KRONOS')

    const message = `🏎️ *SOLICITUD DE DIAGNÓSTICO // KRONOS AUTO STUDIO*

• *Vehículo:* ${make || 'Vehículo de Alta Gama'} ${modelYear ? `(${modelYear})` : ''}
• *Zonas / Servicios:* ${zonesText}
• *Cliente:* ${name || 'Cliente Particular'}
• *Teléfono:* ${phone || 'Contacto WhatsApp'}
• *Horario Preferido:* ${timePreference === 'Manana' ? '☀️ Mañana (09:00 - 13:00)' : '🌤️ Tarde (14:00 - 18:00)'}
${notes ? `• *Notas adicionales:* ${notes}` : ''}

Solicito confirmación de disponibilidad en cabina y presupuesto técnico estimado. Gracias.`

    const encoded = encodeURIComponent(message)
    // WhatsApp redirect to official advisor number
    const waUrl = `https://wa.me/525540112233?text=${encoded}`
    window.open(waUrl, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white border border-slate-300 w-full max-w-xl shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0F1115] text-white">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="font-mono-tech text-xs tracking-widest uppercase">
              FICHA DE INGRESO TÉCNICO // KRONOS
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 sm:p-8 space-y-5">
          
          {/* Selected Zones summary badge */}
          <div className="p-3 bg-slate-50 border border-slate-200 text-xs">
            <span className="block font-mono-tech text-[10px] text-slate-500 uppercase tracking-widest mb-1.5">
              // Diagnóstico preseleccionado en Blueprint:
            </span>
            {selectedZoneNames.length > 0 ? (
              <div className="flex flex-wrap gap-1">
                {selectedZoneNames.map((zn, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 px-2 py-0.5 bg-white border border-slate-300 text-slate-800 text-[10px] font-mono-tech">
                    <CheckCircle2 className="w-3 h-3 text-cyan-600" />
                    {zn.split('&')[0].trim()}
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-slate-600 text-[11px] font-mono-tech">
                {initialService ? `Servicio seleccionado: ${initialService}` : 'Inspección Técnica Integral 360°'}
              </span>
            )}
          </div>

          {/* Vehicle Make and Model Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono-tech uppercase text-slate-700 tracking-wider mb-1.5">
                Marca del Auto:
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Porsche, BMW, Mercedes"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-[#0F1115] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono-tech uppercase text-slate-700 tracking-wider mb-1.5">
                Modelo y Año:
              </label>
              <input
                type="text"
                required
                placeholder="Ej. 911 GT3 / 2024"
                value={modelYear}
                onChange={(e) => setModelYear(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-[#0F1115] transition-colors"
              />
            </div>
          </div>

          {/* Client Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono-tech uppercase text-slate-700 tracking-wider mb-1.5">
                Tu Nombre:
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Alejandro Morales"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-[#0F1115] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono-tech uppercase text-slate-700 tracking-wider mb-1.5">
                Teléfono WhatsApp:
              </label>
              <input
                type="tel"
                required
                placeholder="Ej. 55 1234 5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-[#0F1115] transition-colors"
              />
            </div>
          </div>

          {/* Time preference */}
          <div>
            <label className="block text-xs font-mono-tech uppercase text-slate-700 tracking-wider mb-1.5">
              Horario Preferido para Recepción:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTimePreference('Manana')}
                className={`py-2 text-xs font-mono-tech uppercase tracking-wider border cursor-pointer transition-all ${
                  timePreference === 'Manana'
                    ? 'bg-[#0F1115] text-white border-[#0F1115]'
                    : 'bg-slate-50 text-slate-600 border-slate-300'
                }`}
              >
                ☀️ Mañana (09:00 - 13:00)
              </button>
              <button
                type="button"
                onClick={() => setTimePreference('Tarde')}
                className={`py-2 text-xs font-mono-tech uppercase tracking-wider border cursor-pointer transition-all ${
                  timePreference === 'Tarde'
                    ? 'bg-[#0F1115] text-white border-[#0F1115]'
                    : 'bg-slate-50 text-slate-600 border-slate-300'
                }`}
              >
                🌤️ Tarde (14:00 - 18:00)
              </button>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-mono-tech uppercase text-slate-700 tracking-wider mb-1.5">
              Requerimiento Específico (Opcional):
            </label>
            <textarea
              rows={2}
              placeholder="Detalles sobre rayones profundos, zonas repintadas o servicios adicionales..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 text-sm focus:outline-none focus:border-[#0F1115] transition-colors resize-none"
            ></textarea>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-mono-tech text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Diagnóstico al WhatsApp del Asesor Técnico</span>
            </button>
            <p className="text-[10px] text-slate-400 font-mono-tech text-center mt-2">
              Respuesta técnica en menos de 5 minutos en horario de laboratorio.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
