import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, ArrowLeft, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import IconButton from '../components/IconButton'

const Contact = () => {
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
              Contacto
            </h1>
            <p className="text-xl text-gray-mid max-w-2xl">
              ¿Tienes un proyecto en mente? Me encantaría escucharte y explorar cómo podemos trabajar juntos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Main CTA */}
            <div className="text-center space-y-6 py-12">
              <h2 className="text-3xl md:text-4xl font-serif text-white">
                Hablemos de tu proyecto
              </h2>
              <p className="text-gray-mid text-lg max-w-2xl mx-auto">
                Ya sea para desarrollo web, automatización con IA, o consultoría técnica,
                estoy aquí para ayudarte a materializar tus ideas.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <motion.a
                href="mailto:raulsorgo@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="group p-8 border border-white/10 rounded-xl hover:border-gold/50 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 group-hover:from-gold/30 group-hover:to-gold/10 transition-colors">
                    <Mail className="w-8 h-8 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">
                      Email
                    </h3>
                    <p className="text-sm text-gray-mid uppercase tracking-wider mb-2">
                      Respuesta en 24h
                    </p>
                    <p className="text-white font-medium">raulsorgo@gmail.com</p>
                  </div>
                  <Send className="w-5 h-5 text-gray-mid group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 border border-white/10 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5">
                    <MapPin className="w-8 h-8 text-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-white mb-2">
                      Ubicación
                    </h3>
                    <p className="text-sm text-gray-mid uppercase tracking-wider mb-2">
                      Disponible para remoto
                    </p>
                    <p className="text-white font-medium">Sevilla, España</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-12 border-t border-white/10"
            >
              <h3 className="text-sm text-gray-mid uppercase tracking-wider mb-6 text-center">
                También puedes encontrarme en
              </h3>
              <div className="flex gap-4 justify-center">
                <IconButton
                  href="https://github.com/RaulSorGo"
                  icon={Github}
                  label="GitHub"
                />
                <IconButton
                  href="https://www.linkedin.com/in/raul-soriano-dev/"
                  icon={Linkedin}
                  label="LinkedIn"
                />
              </div>
            </motion.div>

            {/* What I Can Help With */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-12 border-t border-white/10"
            >
              <h3 className="text-2xl font-serif text-white mb-8 text-center">
                ¿En qué puedo ayudarte?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Desarrollo Web",
                    description: "Aplicaciones web modernas con React, Vue o tecnologías fullstack"
                  },
                  {
                    title: "Automatización IA",
                    description: "Optimización de procesos con n8n y soluciones inteligentes"
                  },
                  {
                    title: "Consultoría",
                    description: "Asesoramiento técnico y arquitectura de software"
                  }
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="p-6 border border-white/10 rounded-xl hover:border-gold/30 transition-colors"
                  >
                    <h4 className="text-lg font-serif text-gold mb-3">{service.title}</h4>
                    <p className="text-gray-mid text-sm">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Availability Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-8 border border-gold/20 bg-gold/5 rounded-xl text-center"
            >
              <p className="text-gray-light">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Actualmente disponible para nuevos proyectos
              </p>
            </motion.div>
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

export default Contact
