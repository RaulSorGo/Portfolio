# Cómo Añadir Contenido a tu Portfolio

Esta guía te muestra cómo añadir nuevas notas personales y proyectos a tu portfolio.

## Añadir una Nueva Nota Personal

1. Abre el archivo `src/pages/Notes.jsx`

2. Busca el array `notes` (alrededor de la línea 116)

3. Añade un nuevo objeto siguiendo este formato:

```javascript
{
  title: "Título de tu nota",
  date: "Día de Mes, Año",
  author: "Raúl Soriano",
  content: (
    <div className="space-y-6 text-gray-light leading-relaxed">
      <p>
        Tu contenido aquí. Puedes usar <strong className="text-white">negritas</strong>,
        <span className="text-gold">color dorado</span>, y otros estilos.
      </p>

      <h3 className="text-2xl font-serif text-white mt-8 mb-4">Subtítulo</h3>

      <p>Más contenido...</p>

      <ul className="space-y-3 ml-6">
        <li className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
          <span>Item de lista</span>
        </li>
      </ul>
    </div>
  )
}
```

### Ejemplo Completo

```javascript
const notes = [
  {
    title: "Aprendiendo React Router",
    date: "27 de Enero, 2025",
    author: "Raúl Soriano",
    content: (
      <div className="space-y-6 text-gray-light leading-relaxed">
        <p className="text-xl font-serif text-gold">
          Hoy implementé React Router en mi portfolio.
        </p>

        <p>
          Una de las mejores decisiones fue separar el contenido en diferentes páginas.
          Esto permite una <strong className="text-white">mejor organización</strong> y
          facilita la navegación del usuario.
        </p>

        <h3 className="text-2xl font-serif text-white mt-8 mb-4">
          Lo que aprendí
        </h3>

        <ul className="space-y-3 ml-6">
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
            <span>Cómo configurar rutas con React Router DOM</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
            <span>Navegación entre páginas con el componente Link</span>
          </li>
        </ul>
      </div>
    )
  },
  // ... tus otras notas
]
```

---

## Añadir un Nuevo Proyecto

1. Abre el archivo `src/pages/Projects.jsx`

2. Busca el array `projects` (alrededor de la línea 79)

3. Añade un nuevo objeto siguiendo este formato:

```javascript
{
  title: "Nombre del Proyecto",
  description: "Descripción detallada del proyecto. Explica qué hace, qué problema resuelve, y qué tecnologías utilizaste.",
  tags: ["React", "Node.js", "MongoDB", "API REST"],
  date: "Mes Año",
  links: {
    github: "https://github.com/RaulSorGo/nombre-proyecto",
    demo: "https://tu-proyecto.vercel.app"
  }
}
```

### Ejemplo Completo

```javascript
const projects = [
  {
    title: "E-commerce con React y Stripe",
    description: "Tienda online completa con carrito de compras, pasarela de pago con Stripe, y panel de administración. Incluye autenticación de usuarios, gestión de inventario y sistema de órdenes.",
    tags: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
    date: "Febrero 2025",
    links: {
      github: "https://github.com/RaulSorGo/ecommerce-react",
      demo: "https://mi-ecommerce.vercel.app"
    }
  },
  {
    title: "Automatización de Email con n8n",
    description: "Sistema de automatización que procesa emails entrantes, extrae información relevante usando IA, y actualiza automáticamente una base de datos. Reduce el trabajo manual en un 80%.",
    tags: ["n8n", "OpenAI API", "Webhook", "Automation"],
    date: "Enero 2025",
    links: {
      github: "https://github.com/RaulSorGo/n8n-email-automation"
      // No demo porque es un workflow backend
    }
  },
  // ... tus otros proyectos
]
```

### Notas sobre Proyectos

- **Sin enlace de demo:** Si el proyecto no tiene demo en vivo, simplemente omite la propiedad `demo`
- **Sin GitHub:** Si el proyecto es privado o no está en GitHub, omite la propiedad `github`
- **Tags:** Los tags ayudan a identificar rápidamente las tecnologías usadas. Recomiendo 3-5 tags por proyecto

---

## Añadir Imágenes a los Proyectos (Próximamente)

En una futura actualización, podrás añadir capturas de pantalla de tus proyectos. Por ahora, el sistema muestra un placeholder visual.

Para prepararte:

1. Crea una carpeta `public/projects/` en tu proyecto
2. Guarda las imágenes de tus proyectos ahí (formato: `nombre-proyecto.png`)
3. Mantén las imágenes optimizadas (máximo 800px de ancho)

---

## Estilos Disponibles para Contenido

### Texto con énfasis

```jsx
<strong className="text-white">Texto en blanco destacado</strong>
<span className="text-gold">Texto en dorado</span>
<em className="italic">Texto en cursiva</em>
```

### Títulos

```jsx
<h3 className="text-2xl font-serif text-white mt-8 mb-4">Subtítulo</h3>
<h4 className="text-xl font-serif text-gold mt-6 mb-3">Subtítulo Menor</h4>
```

### Citas destacadas

```jsx
<div className="bg-white/5 border border-white/10 rounded-xl p-6">
  <p className="italic text-gray-mid">
    "Una cita o texto destacado aquí"
  </p>
</div>
```

### Enlaces

```jsx
<a
  href="https://ejemplo.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gold hover:underline"
>
  Texto del enlace
</a>
```

### Listas con bullets personalizados

```jsx
<ul className="space-y-3 ml-6">
  <li className="flex items-start gap-3">
    <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
    <span>Item de la lista</span>
  </li>
</ul>
```

---

## Tips de Escritura

### Para Notas Personales

- Escribe en primera persona (más auténtico)
- Comparte aprendizajes específicos y accionables
- Incluye ejemplos de código cuando sea relevante
- Mantén un tono conversacional pero profesional
- Usa subtítulos para organizar el contenido

### Para Proyectos

- Empieza con el "qué" (qué hace el proyecto)
- Explica el "por qué" (qué problema resuelve)
- Menciona el "cómo" (tecnologías clave usadas)
- Sé específico con resultados o métricas cuando sea posible
- Mantén la descripción entre 2-4 líneas

---

## Preguntas Frecuentes

**¿Puedo usar HTML en el contenido?**
Sí, pero usa JSX (React). Recuerda que `class` se escribe `className` y los estilos inline usan objetos.

**¿Cómo añado código en las notas?**
Usa bloques de código pre-formateados:
```jsx
<pre className="bg-white/5 border border-white/10 rounded-xl p-4 overflow-x-auto">
  <code className="text-sm text-gray-light">
    tu código aquí
  </code>
</pre>
```

**¿Puedo cambiar el orden de notas/proyectos?**
Sí, simplemente reorganiza los objetos en el array. El primer elemento aparecerá primero.

**¿Cuántas notas/proyectos puedo añadir?**
No hay límite técnico, pero recomiendo mantener calidad sobre cantidad. 5-10 proyectos destacados y notas regulares son ideales.

---

¡Listo! Con esta guía podrás mantener tu portfolio actualizado con tus últimos proyectos y reflexiones.
