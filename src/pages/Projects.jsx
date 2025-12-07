import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import RotatingButton from '../components/RotatingButton'
import { projects } from '../data/projects'

const ProjectCard = ({ project, delay = 0 }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="border border-white/10 rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-200 group"
    >
      {/* Project Image/Placeholder - Clickable */}
      <Link to={`/proyectos/${project.id}`}>
        <div className="aspect-video bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center border-b border-white/10 cursor-pointer">
          <div className="text-center space-y-4 p-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Tag className="w-12 h-12 text-gold" />
            </div>
            <p className="text-gray-mid text-sm">Vista previa próximamente</p>
          </div>
        </div>
      </Link>

      {/* Project Info */}
      <div className="p-8 space-y-6">
        {/* Title and Description */}
        <div className="space-y-3">
          <Link to={`/proyectos/${project.id}`}>
            <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-gold transition-colors cursor-pointer">
              {project.title}
            </h3>
          </Link>
          <p className="text-gray-mid leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm border border-white/10 rounded-full text-gray-light"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-mid pt-4 border-t border-white/10">
          <Calendar className="w-4 h-4 text-gold" />
          <span>{project.date}</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 pt-4">
          <RotatingButton
            href={`/proyectos/${project.id}`}
            icon={ArrowRight}
            variant="primary"
            size="small"
          >
            Ver detalles
          </RotatingButton>
          {project.links?.github && (
            <RotatingButton
              href={project.links.github}
              icon={Github}
              variant="ghost"
              size="small"
              external={true}
            >
              Código
            </RotatingButton>
          )}
        </div>
      </div>
    </motion.article>
  )
}

const Projects = () => {
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
        <div className="max-w-6xl mx-auto">
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
              Proyectos
            </h1>
            <p className="text-xl text-gray-mid max-w-2xl">
              Una colección de proyectos en los que he trabajado, desde aplicaciones web hasta experimentos
              con automatización e IA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} delay={idx * 0.1} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="max-w-md mx-auto space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <Tag className="w-12 h-12 text-gold" />
                </div>
                <h3 className="text-2xl font-serif text-white">Próximamente</h3>
                <p className="text-gray-mid">
                  Estoy trabajando en documentar mis proyectos con capturas y descripciones detalladas.
                  Vuelve pronto para ver actualizaciones.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-xl p-12 text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-mid text-lg max-w-2xl mx-auto">
              Siempre estoy abierto a colaborar en proyectos interesantes que involucren desarrollo web,
              automatización o IA.
            </p>
            <RotatingButton
              href="/contacto"
              icon={ExternalLink}
              variant="primary"
            >
              Hablemos
            </RotatingButton>
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

export default Projects
