export const projects = [
  {
    id: "portfolio-personal",
    title: "Portfolio Personal Minimalista",
    description: "Portfolio profesional desarrollado con React, Vite, Tailwind CSS y Framer Motion. Diseño minimalista con estética elegante inspirada en tipografía serif y espacios en blanco generosos.",
    longDescription: `Portfolio profesional desarrollado con React, Vite, Tailwind CSS y Framer Motion.

El diseño sigue una estética minimalista elegante inspirada en tipografía serif y espacios en blanco generosos, creando una experiencia visual limpia y profesional.

## Características Principales

- **Diseño Minimalista**: Interfaz limpia con tipografía serif elegante y espacios generosos
- **Animaciones Fluidas**: Transiciones suaves con Framer Motion para una experiencia premium
- **Responsive Design**: Adaptación perfecta a todos los dispositivos
- **Performance Optimizada**: Build rápido con Vite y lazy loading de componentes
- **SEO Friendly**: Estructura semántica y metadatos optimizados`,
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    date: "Enero 2025",
    features: [
      "Diseño minimalista con tipografía serif",
      "Animaciones fluidas con Framer Motion",
      "Navegación con transiciones suaves",
      "Formulario de contacto funcional",
      "Sección de notas/blog integrada",
      "Optimizado para SEO"
    ],
    technologies: {
      frontend: ["React 18", "Vite", "Tailwind CSS", "Framer Motion"],
      tools: ["ESLint", "PostCSS", "Git"]
    },
    links: {
      github: "https://github.com/RaulSorGo",
      demo: "#"
    }
  },
  {
    id: "nailsbyglossy",
    title: "NailsByGlossy - E-commerce de Uñas Press-On",
    description: "Plataforma e-commerce completa especializada en uñas press-on con sistema de personalización en tiempo real. Incluye Custom Designer interactivo con React, carrito persistente, checkout completo, panel de administración con gestión de productos/categorías/órdenes, y diseño glass-morphism moderno.",
    longDescription: `NailsByGlossy es una plataforma e-commerce completa y moderna especializada en la venta de uñas press-on con un sistema avanzado de personalización.

El proyecto combina un robusto backend con Laravel y componentes interactivos React para ofrecer una experiencia de compra única donde los usuarios pueden diseñar sus propias uñas personalizadas en tiempo real.

## Sistema E-Commerce Completo

- **Catálogo de Productos**: Listado paginado con filtrado por categoría, precio y búsqueda
- **Carrito Persistente**: Vinculado al usuario con actualización en tiempo real
- **Checkout Completo**: Formulario de envío, métodos de pago y confirmación de orden
- **Historial de Pedidos**: Visualización de órdenes con estados detallados

## Custom Designer Interactivo

La característica estrella del proyecto permite a los usuarios crear diseños únicos:
- Selección de producto base personalizable
- Elección de colores con paleta completa
- Opciones de acabado: glossy, mate, shimmer
- Catálogo de decoraciones y patrones
- Vista previa del diseño en tiempo real

## Panel de Administración

Dashboard completo con estadísticas, gestión de productos, categorías, órdenes y usuarios.`,
    tags: ["Laravel 12", "React", "PHP 8.2", "MySQL", "Tailwind CSS", "Bootstrap 5"],
    date: "Diciembre 2025",
    features: [
      "Custom Designer interactivo con React",
      "Sistema de carrito persistente",
      "Proceso de checkout completo",
      "Panel de administración robusto",
      "Gestión de inventario en tiempo real",
      "Sistema de autenticación con roles",
      "Diseño glass-morphism moderno",
      "Importación/exportación de datos"
    ],
    technologies: {
      backend: ["Laravel 12", "PHP 8.2", "Eloquent ORM", "MySQL"],
      frontend: ["React 19", "Bootstrap 5", "Tailwind CSS", "Sass"],
      tools: ["Vite", "Axios", "Intervention Image"]
    },
    links: {
      github: "https://github.com/RaulSorGo"
    }
  },
  {
    id: "coleccion-cante-flamenco",
    title: "Colección de Cante Flamenco",
    description: "Aplicación web SPA para catalogación y preservación de 2,141 coplas flamencas de Santa Pola. Incluye búsqueda avanzada con filtros, gestión CRUD de coplas/artistas/guitarristas, importación/exportación Excel y JSON, estadísticas visuales con gráficos, y diseño glassmorphism con temática flamenca.",
    longDescription: `Aplicación web interactiva diseñada para la gestión, catalogación y preservación de una extensa colección de coplas flamencas procedentes de Santa Pola.

El proyecto combina tecnología web moderna con la conservación del patrimonio cultural andaluz, permitiendo organizar, buscar y analizar más de 2,141 coplas flamencas.

## Gestión Completa de Coplas

- **Visualización**: Grid responsivo con paginación (12 coplas por página)
- **Búsqueda Avanzada**: Filtrado por tipo de cante, cantaor, guitarrista
- **CRUD Completo**: Crear, editar y eliminar coplas con validación
- **Metadatos**: Código de soporte, archivo de música, observaciones

## Gestión de Artistas y Guitarristas

- Base de datos con biografías e información cultural
- Optimización automática de imágenes
- Hasta 50 canciones destacadas por artista
- Vista de detalles en modal

## Importación y Exportación

- Soporte para JSON y Excel (.xlsx, .xls)
- Drag & Drop interactivo
- Vista previa antes de importar
- Exportación con metadata y timestamp

## Estadísticas Visuales

- Gráficos de barras animados (CSS puro)
- Top 10 tipos de cante, cantaores y guitarristas
- Distribución por palo flamenco
- Artistas por década de nacimiento`,
    tags: ["JavaScript ES6+", "HTML5", "CSS3", "LocalStorage", "SheetJS"],
    date: "Noviembre 2025",
    features: [
      "Catalogación de 2,141 coplas flamencas",
      "Búsqueda con debounce en tiempo real",
      "Gestión CRUD de coplas/artistas/guitarristas",
      "Importación/exportación Excel y JSON",
      "Estadísticas visuales con gráficos animados",
      "Diseño glassmorphism con temática flamenca",
      "Atajos de teclado (Ctrl+N, Ctrl+F, Ctrl+E)",
      "Sistema de notificaciones toast"
    ],
    technologies: {
      frontend: ["JavaScript ES6+", "HTML5", "CSS3"],
      libraries: ["SheetJS (XLSX)", "Google Fonts"],
      storage: ["LocalStorage API", "FileReader API", "Blob API"]
    },
    links: {
      github: "https://github.com/RaulSorGo"
    }
  }
]

export const getProjectById = (id) => {
  return projects.find(project => project.id === id)
}

export const getProjectByIndex = (index) => {
  return projects[index]
}
