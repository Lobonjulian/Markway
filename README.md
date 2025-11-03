# 🌐 Markway — Frontend

**Markway** es una aplicación web de una sola página (**SPA**) que centraliza **recursos, guías y herramientas de marketing digital actualizadas**.  
El objetivo no es solo publicar artículos, sino **organizar conocimiento y ofrecer descubrimiento inteligente** de contenido relevante.

> 🔍 Esta versión corresponde **solo al Frontend (UI)**.  
> Todas las APIs y datos serán simulados mediante **Mock Service Worker (MSW)**.

---

## 📋 Propósito

- Construir una interfaz moderna, rápida y accesible que permita a los usuarios **descubrir, guardar y aprender** sobre marketing digital.
- La aplicación servirá como **repositorio inteligente de conocimiento**, con búsqueda, filtros, recomendaciones y colecciones temáticas.
- No incluye backend ni integraciones reales (solo mocks).

---

## 🎯 Objetivos Funcionales

1. **Catálogo navegable** de recursos (artículos, guías, herramientas, plantillas, cursos).
2. **Página de recurso** con contenido enriquecido, metadatos, tags y elementos relacionados.
3. **Búsqueda rápida y fuzzy** con filtros (tag, tipo, dificultad, duración).
4. **Learning Paths** (colecciones curadas) con seguimiento de progreso.
5. **Favoritos y notas personales** (persistencia en localStorage).
6. **Recomendaciones inteligentes** basadas en tags, popularidad e historial local.
7. **Panel de administración (UI-only)** para crear o editar recursos en mocks.
8. **Landing pública** con CTA, secciones de destacados y buscador global.
9. **Sistema de tags y taxonomía** editable desde el panel UI.

---

## ⚙️ Requisitos No Funcionales

- SPA basada en **React + Vite**.
- Tiempo de respuesta < **1.5s** en vistas críticas (mocked data).
- **Virtualización** en listados largos (react-window o similar).
- **Lazy-load** de librerías pesadas (editor, canvas, charts).
- **Accesibilidad** mínima: WCAG AA.
- SEO básico para páginas públicas (meta tags).
- **Internacionalización:** ES (default) + EN.
- **Seguridad UI:** sanitización de contenido (DOMPurify).

---

## 🎨 Requisitos de Diseño

- Estilo profesional, claro y mobile-first.
- Paleta neutra con color de acento definido por cliente.
- Componentes UI documentados en **Storybook**.
- Transiciones y microInteracciones suaves.
- Feedback visible en acciones (toasts, loaders, empty states).

---

## 🧪 Mocks y Datos

- Uso de **Mock Service Worker (MSW)** para todas las APIs simuladas.
- Fixtures con al menos **200 recursos de ejemplo** (diversos tipos y tags).
- Latencia configurable para testing.
- Mock de recomendaciones basado en similitud de contenido.

---

---

## 🧩 Entregables

- Repositorio
- SPA buildable (`npm run build`).
- Storybook documentado.
- Tests unitarios y 3 E2E.
- README técnico + guía de instalación.
- Checklist de accesibilidad y rendimiento.

> **Duración total estimada:** 4–5 semanas (equipo 1–2 devs).

---

## 📄 Supuestos y Limitaciones

- No hay autenticación ni backend real.
- Sin integraciones externas (OAuth, Analytics, Payments).
- Sin SEO avanzado ni SSR en esta etapa.
- No se contempla sistema de usuarios ni sincronización entre dispositivos.

---

## 💬 Notas del Cliente

> “Queremos un frontend rápido, claro y útil.  
> Que los usuarios puedan **encontrar, guardar y aprender** sin fricción.  
> La prioridad es la organización del conocimiento y la experiencia de descubrimiento.”

---

📅 **Versión:** 1.0.0  
🧱 **Estado:** MVP — En desarrollo  
📍 **Deploy (demo):** _pendiente de definir_  
🧾 **Autor:** Equipo Markway — Frontend
