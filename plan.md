# Plan de Trabajo - Portafolio Victor Saldaña

## Fase 1: El "Motor" del Sistema (Configuración Core)

- [x] **Tarea 1.1: Proveedor de Scroll Suave (Lenis)**
    - [x] Crear `src/components/layout/SmoothScroll.tsx`.
    - [x] Integrar librería `@studio-freight/react-lenis` (o `@lenis/react`).
    - [x] Envolver `children` en `src/app/layout.tsx`.

- [x] **Tarea 1.2: Estructura de Datos (El Cerebro)**
    - [x] Crear `src/data/projects.ts`.
    - [x] Definir interfaz `Project`: slug, title, description, stack[], category, architecture, images[].
    - [x] Poblar con datos iniciales.

- [ ] **Tarea 1.3: Sistema de Animación Global**
    - [ ] Instalar y configurar `framer-motion`.
    - [ ] Configurar transiciones de página en `layout.tsx`.

## Fase 2: Interfaz de Impacto (Página de Inicio)

- [x] **Tarea 2.1: Hero Section 3D**
    - [x] Integrar `react-three-fiber` en `src/app/page.tsx`.
    - [x] Crear componente `Canvas` con una malla de puntos o modelo abstracto rotatorio (`src/components/3d/HeroScene.tsx`).

- [x] **Tarea 2.2: Título Dinámico**
    - [x] Implementar componente de texto con efecto "Scramble" o "Typewriter" (`src/components/ui/DynamicTitle.tsx`).
    - [x] Alternar textos: "Senior Fullstack Engineer" / "Game Developer".

- [x] **Tarea 2.3: Bento Grid de Proyectos**
    - [x] Crear sección de "Destacados" consumiendo `projects.ts` (`src/components/ui/ProjectGrid.tsx`).
    - [x] Diseño tipo Bento Grid.
    - [x] Implementar efecto "Glow" que sigue el cursor en las tarjetas.

## Fase 3: La Galería Inmersiva (Portafolio)

- [x] **Tarea 3.1: Filtro de Categorías**
    - [x] En `src/app/portafolio/page.tsx`, crear lógica de filtrado (Web vs Videojuegos).
    - [x] Crear UI de botones de filtro.

- [x] **Tarea 3.2: Tarjetas de Proyecto Avanzadas**
    - [x] Refactorizar/Crear `src/components/ui/ProjectCard.tsx` (Separar del Grid si es necesario).
    - [x] Asegurar visualización de stack al hover.

- [x] **Tarea 3.3: Página de Detalle Dinámica**
    - [x] Crear `src/app/portafolio/[slug]/page.tsx`.
    - [x] Diseño: Hero Image, Título, Sección "Ingeniería detrás del código", Galería de imágenes.

## Fase 4: Narrativa de Carrera (Sobre Mí & Experiencia)

- [x] **Tarea 4.1: Timeline de Experiencia**
    - [x] Crear `src/data/experience.ts`.
    - [x] Implementar componente `Timeline` con `framer-motion` (scroll-triggered).
    - [x] Integrar en `src/app/sobre-mi/page.tsx`.

- [x] **Tarea 4.2: Bloque "AI-Augmented Engineering"**
    - [x] Crear sección visual explicando metodología con Agentes IA.
    - [x] Destacar velocidad y calidad.

- [x] **Tarea 4.3: Radar de Habilidades**
    - [x] Implementar visualización de habilidades (Radar Chart o Grupos de Iconos Animados).
    - [x] Clasificar en Senior, Mid, etc.

## Fase 5: Conversión y Pulido (Contacto & SEO)

- [x] **Tarea 5.1: Formulario de Contacto Premium**
    - [x] Instalar `zod` y `react-hook-form`.
    - [x] Crear componente `ContactForm` con validación y estados de carga.
    - [x] Integrar en `src/app/contacto/page.tsx` con estilos neón.

- [x] **Tarea 5.2: Optimización de Imágenes**
    - [x] Revisar uso de `next/image` en todo el proyecto.
    - [x] Asegurar formatos modernos (ya manejado por Next.js automáticamente, verificar configuración).

- [x] **Tarea 5.3: SEO y Metadata**
    - [x] Configurar `Metadata` global en `layout.tsx`.
    - [x] Configurar `generateMetadata` dinámico en `src/app/portafolio/[slug]/page.tsx`.

## Fase 6: Navegación y Conectividad (Mejoras UX)

- [x] **Tarea 6.1: Barra de Navegación Global (Navbar)**
    - [x] Crear `src/components/layout/Navbar.tsx`.
    - [x] Incluir enlaces: Home, Portfolio, Experience (Sobre Mí), Contact.
    - [x] Integrar en `src/app/layout.tsx` para persistencia global.

- [x] **Tarea 6.2: Conectividad en Portafolio**
    - [x] Modificar `src/app/portafolio/page.tsx`.
    - [x] Agregar sección final "CTA" con enlaces directos a "Sobre Mí" y "Contacto".
    - [x] Asegurar flujo de navegación lógico (Ver proyectos -> Conocer al autor -> Contactar).

## Fase 7: Contenido Masivo (Proyectos Reales)

- [x] **Tarea 7.1: Actualización de Data Interface**
    - [x] Actualizar `src/data/projects.ts` para soportar videos y nuevos campos.

- [x] **Tarea 7.2: Carga de Juegos (Fase 1)**
    - [x] Implementar: Dino Adventure, Dino Legends, Warrior Instinct, Warrior Reborn.
    - [x] Mapear imágenes `.WebP` y enlaces de video.

- [x] **Tarea 7.3: Carga de Proyectos Web (Fase 2)**
    - [x] Implementar: ERP Adulto Mayor, Personal Ecosystem, Cybercorp, Doctemia, SprinterApp, Tagwear.
    - [x] Incluir descripciones técnicas detalladas y stacks "Bleeding Edge".

## Fase 8: Internacionalización (i18n)

- [x] **Tarea 8.1: Sistema de Contexto y Datos Bilingües**
    - [x] Crear `src/context/LanguageContext.tsx`.
    - [x] Actualizar `src/data/projects.ts` con descripciones en inglés.
    - [x] Actualizar `src/data/experience.ts` con descripciones en inglés.

- [x] **Tarea 8.2: UI Switcher & Integración**
    - [x] Crear `src/components/ui/LanguageSwitcher.tsx`.
    - [x] Integrar en Navbar.
    - [x] Refactorizar Home, Portfolio, About, Contact y ProjectDetail para usar traducciones dinámicas.

## Fase 9: Pulido Visual y UX (Mejoras Finales)

- [ ] **Tarea 9.1: Home Impactante**
    - [ ] Mejorar Hero Scene: Añadir interactividad con el mouse (partículas dinámicas).
    - [ ] Agregar CTA principal "Ver Proyectos" con diseño de gradiente.

- [ ] **Tarea 9.2: Portafolio Premium (Glassmorphism & Cards)**
    - [ ] Estandarizar miniaturas a Aspect Ratio 16:9 fijo.
    - [ ] Aplicar efecto Glassmorphism (backdrop-filter) y bordes sutiles.
    - [ ] Mejorar micro-interacciones hover: Elevación, Zoom, Brillo.
    - [ ] Estilizar badges de tecnologías con colores del tema.

- [ ] **Tarea 9.3: Sobre Mí Visual**
    - [ ] Mejorar presentación de foto (Integración/Lighting).
    - [ ] Incorporar logos de tecnologías (SVG) en lugar de solo texto en Skills.

- [ ] **Tarea 9.4: UX Global**
    - [ ] Implementar transiciones de página suaves (Page Transitions) con `AnimatePresence`.
    - [ ] Verificar Navbar sticky y su comportamiento con el contenido.
