# Documentación del Proyecto

## Registro de Cambios

### [31-01-2026] - Inicialización del Plan de Trabajo
**Cambio:** Creación del archivo `plan.md`.
**Descripción:** Se analizó el archivo `gemini.md` que contenía las instrucciones de la "Sprint 1" y se estructuró un plan de trabajo detallado en `plan.md`.
**Detalles:**
- Se definieron 3 tareas principales para la Fase 1 (Configuración Core):
    1.  Implementación de Lenis (Smooth Scroll).
    2.  Definición de estructura de datos para proyectos (`src/data/projects.ts`).
    3.  Configuración de `framer-motion` para animaciones globales.

### [31-01-2026] - Actualización del Plan de Trabajo (Fase 2)
**Cambio:** Inclusión de la Fase 2 en `plan.md`.
**Descripción:** Se incorporaron las tareas de "Interfaz de Impacto" basándose en las nuevas instrucciones de `gemini.md`.
**Detalles:**
- **Fase 2:**
    1.  **Hero Section 3D:** Integración de `react-three-fiber`.
    2.  **Título Dinámico:** Efecto Scramble/Typewriter.
    3.  **Bento Grid:** Grid de proyectos con efecto Glow.

### [31-01-2026] - Implementación Fase 2 (Interfaz de Impacto)
**Cambio:** Implementación de componentes de la página de inicio.
**Descripción:** Se desarrollaron e integraron los componentes visuales principales definidos en la Fase 2.
**Detalles:**
- **HeroScene (`src/components/3d/HeroScene.tsx`):** Escena 3D con partículas rotatorias usando `react-three-fiber` y `maath`.
- **DynamicTitle (`src/components/ui/DynamicTitle.tsx`):** Título con efecto "decoding" que alterna entre roles profesionales.
- **ProjectGrid (`src/components/ui/ProjectGrid.tsx`):** Grid de proyectos con tarjetas interactivas (efecto glow al pasar el mouse) y datos reales/dummy desde `src/data/projects.ts`.
- **Página Principal (`src/app/page.tsx`):** Integración de todos los componentes anteriores.
- **Datos (`src/data/projects.ts`):** Poblado con información de proyectos y definición de tipos.

### [01-02-2026] - Actualización del Plan de Trabajo (Fase 3)
**Cambio:** Inclusión de la Fase 3 en `plan.md`.
**Descripción:** Se agregaron las tareas correspondientes a la sección del portafolio completo y detalles de proyectos.
**Detalles:**
- **Fase 3:**
    1.  **Filtro de Categorías:** Lógica y UI para filtrar proyectos.
    2.  **Tarjetas Avanzadas:** Refinamiento del componente de tarjeta.
    3.  **Página de Detalle:** Ruta dinámica `[slug]` con información técnica y galería.

### [01-02-2026] - Implementación Fase 3 (Galería Inmersiva)
**Cambio:** Desarrollo de la sección de portafolio y detalles de proyecto.
**Descripción:** Se crearon las páginas y componentes necesarios para navegar y visualizar los proyectos en detalle.
**Detalles:**
- **ProjectCard (`src/components/ui/ProjectCard.tsx`):** Componente de tarjeta extraído y mejorado con efecto glow y visualización de stack.
- **Portafolio (`src/app/portafolio/page.tsx`):** Página principal del portafolio con filtrado por categorías animado con Framer Motion.
- **Detalle de Proyecto (`src/app/portafolio/[slug]/page.tsx`):** Página dinámica que muestra información detallada, arquitectura y galería de imágenes del proyecto seleccionado.

### [01-02-2026] - Actualización del Plan de Trabajo (Fase 4)
**Cambio:** Inclusión de la Fase 4 en `plan.md`.
**Descripción:** Se agregaron las tareas para la sección "Sobre Mí", incluyendo timeline de experiencia y visualización de habilidades.
**Detalles:**
- **Fase 4:**
    1.  **Timeline de Experiencia:** Visualización cronológica.
    2.  **AI-Augmented Block:** Metodología de trabajo.
    3.  **Radar de Habilidades:** Gráfico o lista interactiva de skills.

### [01-02-2026] - Implementación Fase 4 (Narrativa de Carrera)
**Cambio:** Desarrollo de la página "Sobre Mí".
**Descripción:** Se implementaron componentes para mostrar la trayectoria profesional y habilidades.
**Detalles:**
- **Timeline (`src/components/ui/Timeline.tsx`):** Línea de tiempo vertical animada que muestra la experiencia laboral desde `src/data/experience.ts`.
- **AiAugmentedSection (`src/components/ui/AiAugmentedSection.tsx`):** Sección visual tipo "feature card" que explica la metodología de trabajo asistida por IA.
- **SkillsRadar (`src/components/ui/SkillsRadar.tsx`):** Visualización de habilidades agrupadas (Frontend, Backend, Game Dev, Architecture) con animaciones de entrada.
- **Sobre Mí (`src/app/sobre-mi/page.tsx`):** Página integradora de todos los componentes narrativos.

### [01-02-2026] - Implementación Fase 5 (Conversión y Pulido)
**Cambio:** Finalización de características de contacto y optimización.
**Descripción:** Se integró el formulario de contacto avanzado y se optimizó el SEO.
**Detalles:**
- **ContactForm (`src/components/ui/ContactForm.tsx`):** Formulario funcional con validación Zod, react-hook-form y animaciones de carga.
- **SEO Global (`src/app/layout.tsx`):** Metadatos base y configuración OpenGraph.

### [01-02-2026] - Implementación Fase 6 (Navegación y Conectividad)
**Cambio:** Integración de sistema de navegación global y CTAs.
**Descripción:** Se conectaron todas las secciones del sitio mediante un Navbar persistente y enlaces estratégicos.

### [01-02-2026] - Actualización de Contenido Real y Perfil Profesional
**Cambio:** Actualización masiva de proyectos e información personal.
**Descripción:** Se integraron los 10 proyectos reales con sus assets .WebP y videos, y se personalizó la sección "Sobre Mí" con los datos reales de Victor Hugo Saldaña Ortiz.
**Detalles:**
- **Datos de Proyectos:** Carga de 4 juegos y 6 sistemas web con descripciones técnicas Senior y enlaces a GitHub/YouTube.
- **Perfil Personal:** Actualización de `sobre-mi/page.tsx` con foto real, descripción profesional optimizada para ATS y enlaces a LinkedIn/GitHub.

### [01-02-2026] - Personalización de Contacto
**Cambio:** Integración de datos de contacto reales y mejoras de UX en la página de contacto.
**Descripción:** Se actualizaron los canales de comunicación con información verídica y se mejoró la jerarquía visual.
**Detalles:**
- **Datos Reales:** Integración de correo `gsaldana709@gmail.com` y teléfono `+591 67679528`.
- **Canal Directo:** Se añadió un enlace directo a WhatsApp para facilitar la comunicación.
- **Diseño:** Refinamiento de la UI con iconos en contenedores estilizados y efectos de resplandor sutiles.

### [01-02-2026] - Galería Interactiva (Lightbox)
**Cambio:** Implementación de visor de imágenes a pantalla completa.
**Descripción:** Se mejoró la experiencia de usuario en el detalle de proyectos permitiendo ampliar las imágenes.
**Detalles:**
- **ImageGallery (`src/components/ui/ImageGallery.tsx`):** Componente cliente con estado que maneja la apertura/cierre del modal, navegación por teclado (flechas/ESC) y animaciones fluidas con Framer Motion.
- **Integración:** Reemplazo de la grilla estática en `[slug]/page.tsx` por el nuevo componente interactivo.
- **Skills Radar:** Reestructuración de habilidades para destacar arquitectura, .NET 10, React 19 e IA.
- **Mejora Detail Page:** Implementación de reproducción automática de videos de YouTube en el Hero de proyectos.

### [01-02-2026] - Planificación de Internacionalización (Fase 8)
**Cambio:** Definición de estrategia para soporte bilingüe (ES/EN).
**Descripción:** Se planea implementar un sistema de contexto global para cambio de idioma en tiempo real.
**Detalles:**
- **Fase 8:**
    1.  **Contexto:** `LanguageContext` para manejo de estado.
    2.  **Datos:** Duplicación de campos de texto en modelos de datos (ej: `description` y `description_en`).
    3.  **UI:** Componente Switcher en Navbar y adaptación de vistas.

### [01-02-2026] - Implementación de i18n (Sitio Bilingüe)
**Cambio:** Integración completa de soporte Español/Inglés.
**Descripción:** Se habilitó la funcionalidad de cambio de idioma en toda la plataforma mediante Context API.
**Detalles:**
- **LanguageContext:** Estado global persistente (localStorage) para manejar el idioma.
- **Diccionario (`i18n.ts`):** Traducciones completas para UI estática.
- **Datos Bilingües:** Actualización de `projects.ts` con campos `description_en` y `title_en`.
- **Adaptación de Vistas:** Refactorización de `Home`, `About`, `Contact` y `ProjectPage` para consumir el contexto y renderizar el contenido apropiado dinámicamente.
- **ProjectDetail:** Separación en componente cliente `ProjectContent` para permitir cambio de idioma en descripciones manteniendo SEO server-side.

### [01-02-2026] - Refactorización de Navegación Móvil
**Cambio:** Rediseño del Navbar para UX móvil optimizada.
**Descripción:** Se reemplazó el menú de hamburguesa por una barra de navegación inferior (Dock) visible.
**Detalles:**
- **Top Bar (Mobile):** Solo muestra el selector de idioma para limpieza visual.
- **Bottom Dock (Mobile):** Barra flotante inferior con iconos y etiquetas para navegación rápida (Home, Portfolio, Experience, Contact).
- **Desktop:** Mantiene la barra superior flotante original.

### [01-02-2026] - Pulido Visual y UX (High-End)
**Cambio:** Mejoras estéticas y de interacción en todo el sitio.
**Descripción:** Se elevó la calidad visual implementando partículas interactivas, tarjetas glassmorphism y transiciones de página.
**Detalles:**
- **Home:** Fondo de estrellas reactivo al mouse y CTA principal con gradiente.
- **Project Cards:** Diseño Premium con efecto vidrio, aspect ratio 16:9 fijo y micro-interacciones hover.
- **Skills:** Visualización de habilidades mejorada.
- **About:** Foto de perfil con marco de luz y efectos de entrada.
- **Transiciones:** Implementación de `template.tsx` para animaciones suaves entre rutas.

### [01-02-2026] - Integración de Correo y Correcciones Finales (Backend & UI)
**Cambio:** Implementación funcional del formulario de contacto y ajustes responsive.
**Descripción:** Se conectó el formulario de contacto con la API de Resend para el envío real de correos y se solucionaron problemas de usabilidad en móviles.
**Detalles:**
- **Backend (Server Actions):** Creación de `src/actions/send-email.ts` con `Resend`.
- **Frontend (ContactForm):** Feedback visual (loading/success) y botón sólido.
- **Responsive (Mobile):** Padding inferior ajustado en Contacto.

### [02-02-2026] - Optimizaciones de Navegación y Estructura
**Cambio:** Mejoras en la jerarquía de proyectos y navegación global.
**Descripción:** Se reordenó la presentación de proyectos y se integró un pie de página funcional.
**Detalles:**
- **Reordenamiento de Proyectos:** Actualización de `src/data/projects.ts` para priorizar Proyectos Web sobre Juegos en la vista principal, destacando el perfil Fullstack.
- **Global Footer (ScrollToTop):** Transformación del botón flotante "Volver Arriba" en un footer estático integrado en `layout.tsx`. Esto mejora la estética y evita conflictos visuales con la navegación móvil.
- **Project Detail Navigation:** Rediseño del botón "Volver al Portafolio" en las páginas de detalle, adoptando un estilo "Glassmorphism" con icono para mayor visibilidad y facilidad de uso en móviles.