import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const NoteCard = ({ title, date, author, content, delay = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="border border-white/10 rounded-xl p-8 md:p-12 hover:border-gold/50 transition-all duration-200"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-white">{title}</h2>

          <div className="flex flex-wrap gap-4 text-sm text-gray-mid">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gold" />
              <span>{author}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {content}
        </div>
      </div>
    </motion.article>
  )
}

const Notes = () => {
  const notes = [
    {
      title: "Hola, soy Raúl",
      date: "26 de Enero, 2025",
      author: "Raúl Soriano",
      content: (
        <div className="space-y-6 text-gray-light leading-relaxed">
          <p className="text-xl font-serif text-gold">
            Bienvenido a mi espacio personal de reflexión y aprendizaje.
          </p>

          <p>
            Me presento: soy <strong className="text-white">Raúl Soriano</strong>, desarrollador web y multiplataforma
            con base en Sevilla, España. Este espacio nace de la necesidad de documentar mi viaje profesional,
            compartir aprendizajes y conectar con personas que comparten mi pasión por la tecnología.
          </p>

          <h3 className="text-2xl font-serif text-white mt-8 mb-4">¿Qué hago?</h3>

          <p>
            Mi trabajo se centra en crear <strong className="text-white">interfaces intuitivas</strong> que
            resuelvan problemas reales. No me conformo con que algo "simplemente funcione" — busco que la
            experiencia del usuario sea fluida, elegante y memorable.
          </p>

          <p>
            Lo que realmente me diferencia es mi enfoque en la <strong className="text-gold">automatización
            con IA</strong>. Utilizo herramientas como <strong className="text-white">n8n</strong> para optimizar
            procesos, reducir tareas repetitivas y permitir que los equipos se enfoquen en lo que realmente importa:
            crear valor.
          </p>

          <h3 className="text-2xl font-serif text-white mt-8 mb-4">Mi filosofía</h3>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="italic text-gray-mid">
              "El mejor código es aquel que no necesita escribirse. La mejor interfaz es aquella que se siente
              invisible. La mejor automatización es la que nadie nota porque todo fluye perfectamente."
            </p>
          </div>

          <p>
            Creo firmemente en la <strong className="text-white">mejora continua</strong>. Cada proyecto es una
            oportunidad para aprender algo nuevo, cada error es una lección disfrazada, y cada tecnología emergente
            es una posibilidad de crear algo mejor.
          </p>

          <h3 className="text-2xl font-serif text-white mt-8 mb-4">¿Por qué este espacio?</h3>

          <p>
            Estas notas son mi compromiso público con el aprendizaje constante. Aquí compartiré:
          </p>

          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span><strong className="text-white">Reflexiones técnicas</strong> sobre proyectos en los que estoy trabajando</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span><strong className="text-white">Aprendizajes</strong> de nuevas tecnologías y frameworks</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span><strong className="text-white">Experimentos</strong> con IA y automatización</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0"></span>
              <span><strong className="text-white">Recursos útiles</strong> que descubro en el camino</span>
            </li>
          </ul>

          <h3 className="text-2xl font-serif text-white mt-8 mb-4">Conectemos</h3>

          <p>
            Si estás leyendo esto, probablemente compartimos intereses similares. Me encantaría conocer tu perspectiva,
            colaborar en proyectos interesantes o simplemente charlar sobre tecnología.
          </p>

          <p>
            Puedes encontrarme en <a href="https://github.com/RaulSorGo" target="_blank" rel="noopener noreferrer"
            className="text-gold hover:underline">GitHub</a> donde comparto código, en <a
            href="https://www.linkedin.com/in/raul-soriano-dev/" target="_blank" rel="noopener noreferrer"
            className="text-gold hover:underline">LinkedIn</a> para conexiones profesionales, o escribirme directamente
            a <a href="mailto:raulsorgo@gmail.com" className="text-gold hover:underline">raulsorgo@gmail.com</a>.
          </p>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-mid text-center italic">
              "El viaje de mil kilómetros comienza con un solo paso. Esta es mi primera nota,
              y estoy emocionado por lo que viene."
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black"
    >
      {/* Header Section */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-mid hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">
              Notas Personales
            </h1>
            <p className="text-xl text-gray-mid max-w-2xl">
              Reflexiones, aprendizajes y experimentos en el camino del desarrollo web y la automatización con IA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notes List */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {notes.map((note, idx) => (
            <NoteCard
              key={idx}
              title={note.title}
              date={note.date}
              author={note.author}
              content={note.content}
              delay={idx * 0.2}
            />
          ))}

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center py-16"
          >
            <p className="text-gray-mid text-lg">
              Más notas próximamente...
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-mid">
            <p>© 2025 Raúl Soriano. Todos los derechos reservados.</p>
            <p className="font-serif">Desarrollado con atención al detalle</p>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default Notes
