import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, CheckCircle, Code, Wrench } from 'lucide-react'
import { getProjectById } from '../data/projects'
import RotatingButton from '../components/RotatingButton'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return <Navigate to="/proyectos" replace />
  }

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
            to="/proyectos"
            className="inline-flex items-center gap-2 text-gray-mid hover:text-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white">
              {project.title}
            </h1>

            <p className="text-xl text-gray-mid leading-relaxed">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-sm border border-white/10 rounded-full text-gray-light bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta info and links */}
            <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-gray-mid">
                <Calendar className="w-5 h-5 text-gold" />
                <span>{project.date}</span>
              </div>

              <div className="flex gap-4">
                {project.links?.github && (
                  <RotatingButton
                    href={project.links.github}
                    icon={Github}
                    variant="ghost"
                    size="small"
                    external={true}
                  >
                    Ver código
                  </RotatingButton>
                )}
                {project.links?.demo && project.links.demo !== "#" && (
                  <RotatingButton
                    href={project.links.demo}
                    icon={ExternalLink}
                    variant="primary"
                    size="small"
                    external={true}
                  >
                    Ver demo
                  </RotatingButton>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image Placeholder */}
      <section className="py-12 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center border border-white/10"
          >
            <div className="text-center space-y-4 p-8">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center">
                <Tag className="w-12 h-12 text-gold" />
              </div>
              <p className="text-gray-mid">Vista previa próximamente</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Long Description */}
      {project.longDescription && (
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <h2 className="text-3xl font-serif text-white mb-8">Sobre el proyecto</h2>
              <div className="text-gray-mid leading-relaxed whitespace-pre-line">
                {project.longDescription.split('## ').map((section, idx) => {
                  if (idx === 0) {
                    return <p key={idx} className="text-lg mb-8">{section}</p>
                  }
                  const [title, ...content] = section.split('\n')
                  return (
                    <div key={idx} className="mb-8">
                      <h3 className="text-xl font-serif text-gold mb-4">{title}</h3>
                      <div className="text-gray-mid">
                        {content.map((line, lineIdx) => {
                          if (line.startsWith('- **')) {
                            const match = line.match(/- \*\*(.+?)\*\*: (.+)/)
                            if (match) {
                              return (
                                <p key={lineIdx} className="mb-2">
                                  <span className="text-white font-medium">{match[1]}:</span> {match[2]}
                                </p>
                              )
                            }
                          }
                          if (line.startsWith('- ')) {
                            return (
                              <p key={lineIdx} className="mb-2 flex items-start gap-2">
                                <span className="text-gold mt-1">•</span>
                                {line.substring(2)}
                              </p>
                            )
                          }
                          if (line.trim()) {
                            return <p key={lineIdx} className="mb-4">{line}</p>
                          }
                          return null
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && (
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-gold" />
                Características
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 p-4 border border-white/10 rounded-lg bg-white/5"
                  >
                    <span className="text-gold mt-0.5">✓</span>
                    <span className="text-gray-light">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Technologies */}
      {project.technologies && (
        <section className="py-16 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-white mb-8 flex items-center gap-3">
                <Code className="w-8 h-8 text-gold" />
                Tecnologías
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(project.technologies).map(([category, techs], idx) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 border border-white/10 rounded-xl bg-white/5"
                  >
                    <h3 className="text-lg font-serif text-gold mb-4 capitalize flex items-center gap-2">
                      <Wrench className="w-4 h-4" />
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 text-sm border border-white/10 rounded-full text-gray-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation to other projects */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-2xl font-serif text-white">¿Quieres ver más proyectos?</h2>
            <RotatingButton
              href="/proyectos"
              icon={ArrowLeft}
              variant="primary"
            >
              Ver todos los proyectos
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

export default ProjectDetail
