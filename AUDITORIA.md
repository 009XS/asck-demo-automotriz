# Auditoría — Taller Rodríguez (Automotriz) — 2026-07-12

**Stack:** HTML5 + CSS vanilla (custom properties, sin framework) + Google Fonts (Oswald, Inter). Todos los íconos son SVG inline (sin librería de íconos externa). Sin build step, sin dependencias npm.

**Categoría:** (a) Estático puro. Sin `localStorage`, sin carrito — solo navegación y CTAs.

**Cómo se sirve:** archivos estáticos; verificado con `python -m http.server`.

## Hallazgos

| Sev | Área | Hallazgo | Evidencia | Acción |
|-----|------|----------|-----------|--------|
| OK | Imágenes/Assets | 0 elementos `<img>` en toda la página — hero e iconografía 100% SVG inline | `document.images.length === 0` | Sin riesgo de imagen rota / alt visible. |
| OK | CDNs | Único CDN externo: Google Fonts (Oswald + Inter) | `fetch()` → 200 OK | Sin caídos. |
| OK | Consola | 0 errores propios del sitio | Verificado en pestaña limpia | Sin errores de JS ni de carga. |
| OK | Meta | `<title>`, `<meta description>`, `<meta viewport>`, `<meta robots content="noindex,nofollow">` (correcto para demo), favicon SVG inline (🔧) sin dependencia externa | Líneas 6-9 | Completo — el `noindex,nofollow` es buena práctica para no indexar una demo. |
| OK | JS | Sintaxis validada con `node --check` | 0 errores | Menú móvil + interceptor `demoWhatsApp()`. |
| OK | Anclas/IDs | 0 ids duplicados (verificado programáticamente) | — | Sin duplicados. |
| Info | Enlaces WhatsApp | Todos los `href="https://wa.me/"` (sin número) están interceptados por `onclick="demoWhatsApp(event,'...')"`, que hace `preventDefault()` y muestra un `alert()` explicando que es una demo y no se envía ningún mensaje real | Línea 1116-1121 | **Patrón intencional y más seguro** que un número placeholder real: evita que alguien probando la demo le escriba por error a un WhatsApp equivocado. No requiere fix — es el comportamiento esperado del prototipo. Reportado como referencia positiva. |
| Info | Negocio | Teléfono mostrado como `55-XXXX-XXXX` con nota "(Número por confirmar)"; dirección y horario también marcados "sujeto a validación/confirmar" | Líneas 989, 998, 1007 | Placeholders intencionales, ya autodocumentados en el propio sitio. Pendiente de dato real del negocio. |
| OK | Accesibilidad | Skip-link, `.visually-hidden`, `:focus-visible`, `aria-label`/`aria-hidden` consistentes, `prefers-reduced-motion` respetado | Revisión del CSS/HTML | Buena práctica, sin cambios necesarios. |
| OK | Secretos | Ningún hardcodeo de keys/tokens | Revisión visual del archivo | N/A. |

## Verificación (servidor de prueba)

- Consola: 0 errores en pestaña limpia (se descartaron falsos positivos de warnings de Tailwind/Three.js heredados de pestañas reutilizadas de otros sitios — este sitio no usa ninguna de esas librerías).
- 0 imágenes — nada que pueda romperse a nivel `naturalWidth`.
- Google Fonts: 200 OK.
- 0 ids duplicados, 0 markdown crudo visible.

## Pendientes de negocio (no técnicos)

- Confirmar teléfono real (hoy `55-XXXX-XXXX`, placeholder ya marcado en el propio sitio).
- Confirmar dirección exacta y horario (ya marcados "por confirmar" en el propio sitio).
- Decidir el número de WhatsApp real para cuando se conecte el flujo (hoy interceptado a propósito con `alert()` de demo).
