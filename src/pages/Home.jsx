import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Languages,
  Award,
  ArrowRight,
  Github,
  Linkedin,
} from 'lucide-react'
import RotatingButton from '../components/RotatingButton'
import IconButton from '../components/IconButton'

// Componente de efecto de escritura minimalista
const TypeWriter = ({ text, delay = 50 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <span>{displayText}<span className="opacity-50">|</span></span>
}

// Componente de tarjeta minimalista
const MinimalCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`border border-white/10 rounded-xl p-8 transition-all duration-200 hover:border-gold/50 ${className}`}
    >
      {children}
    </motion.div>
  )
}

// Componente Hero
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tight"
            >
              Raúl Soriano
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-mid font-light h-16 flex items-center"
            >
              <TypeWriter
                text="Desarrollador Web & Multiplataforma"
                delay={60}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="space-y-3 text-gray-mid"
          >
            <p className="text-lg flex items-center gap-2">
              <span className="w-1 h-1 bg-gold rounded-full"></span>
              Especialista en Interfaces Intuitivas & Automatización con IA
            </p>
            <p className="text-lg flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" />
              Sevilla, España
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex gap-4 pt-8 flex-wrap"
          >
            <RotatingButton href="/contacto" icon={ArrowRight} variant="primary">
              Contáctame
            </RotatingButton>
            <RotatingButton href="#experiencia" variant="secondary">
              Ver trabajos
            </RotatingButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Sobre Mí
const About = () => {
  return (
    <section id="sobre-mi" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-sm uppercase tracking-widest text-gold font-medium">
            Sobre mí
          </h2>

          <p className="text-2xl md:text-3xl font-serif text-gray-light leading-relaxed">
            Desarrollador enfocado en la mejora continua y la adopción de nuevas tecnologías.
            Fusiono código robusto con soluciones de IA para resolver problemas reales y crear
            experiencias digitales que marcan la diferencia.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            {[
              { label: "Clean Code", value: "100%" },
              { label: "Performance", value: "Fast" },
              { label: "IA Solutions", value: "n8n" },
              { label: "Responsive", value: "Always" }
            ].map((item, idx) => (
              <div key={idx} className="text-center space-y-2">
                <div className="text-3xl font-serif text-gold">{item.value}</div>
                <div className="text-sm text-gray-mid uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Skills
const Skills = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      skills: ["Java", "JavaScript", "PHP", "SQL", "Python"],
    },
    {
      title: "Frameworks & Platforms",
      skills: [".NET (C#)", "WordPress", "Dart"],
    },
    {
      title: "Automatización IA",
      skills: ["n8n", "Workflow Automation", "Process Optimization"],
      featured: true
    },
    {
      title: "Herramientas",
      skills: ["Jira", "Slack", "Excel", "Git"],
    }
  ]

  return (
    <section id="skills" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-gold font-medium">
            Habilidades Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <MinimalCard key={idx} delay={idx * 0.1}>
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-1 h-8 rounded-full ${category.featured ? 'bg-gold' : 'bg-white/20'}`}></div>
                    <h3 className={`text-2xl font-serif ${category.featured ? 'text-gold' : 'text-white'}`}>
                      {category.title}
                    </h3>
                  </motion.div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + skillIdx * 0.05, duration: 0.3 }}
                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                        className="flex items-center gap-3 text-gray-mid group cursor-default"
                      >
                        <motion.span
                          className={`w-1.5 h-1.5 rounded-full ${category.featured ? 'bg-gold' : 'bg-white/30'}`}
                          whileHover={{
                            scale: [1, 1.5, 1.2],
                            rotate: [0, 180, 360],
                            transition: { duration: 0.5 }
                          }}
                        ></motion.span>
                        <span className="group-hover:text-white transition-colors duration-200">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </MinimalCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Experiencia
const Experience = () => {
  const experiences = [
    {
      company: "Agencia Mamá Pato",
      role: "Desarrollador Web",
      description: "Creación de proyectos desde cero, diseño, maquetación y prototipado. Mantenimiento para clientes finales.",
      highlights: ["Diseño UI/UX", "Desarrollo Full-Stack", "Gestión de Clientes"],
    },
    {
      company: "Media Interactiva",
      role: "Desarrollador de Software",
      description: "Mantenimiento en C# (.NET). Reuniones técnicas en inglés con clientes multinacionales. Auditoría de datos.",
      highlights: ["C# / .NET", "Inglés Profesional", "Clientes Internacionales"],
    },
    {
      company: "Braun & Hotel Casa del Poeta",
      role: "Atención al Cliente & Logística",
      description: "Experiencias que demuestran versatilidad, trato humano y capacidad de adaptación a diferentes entornos.",
      highlights: ["Soft Skills", "Atención al Cliente", "Trabajo en Equipo"],
    }
  ]

  return (
    <section id="experiencia" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-gold font-medium">
            Experiencia Profesional
          </h2>

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <MinimalCard key={idx} delay={idx * 0.15}>
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-3xl font-serif text-white mb-2">{exp.company}</h3>
                      <p className="text-lg text-gold">{exp.role}</p>
                    </div>
                    <Briefcase className="w-6 h-6 text-gray-mid" />
                  </div>

                  <p className="text-gray-mid leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {exp.highlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-light"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </MinimalCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Formación
const Education = () => {
  const education = [
    {
      title: "Desarrollo de Aplicaciones Web",
      institution: "CoreNetworks Sevilla",
      year: "2025",
    },
    {
      title: "Desarrollo de Aplicaciones Multiplataforma",
      institution: "CoreNetworks Sevilla",
      year: "2023",
    },
    {
      title: "Curso Java Oracle",
      institution: "Certificación Oficial",
      year: "Completado",
    },
    {
      title: "Automatización con n8n",
      institution: "Especialización IA",
      year: "Completado",
    }
  ]

  return (
    <section id="formacion" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-gold font-medium">
            Formación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <MinimalCard key={idx} delay={idx * 0.1}>
                <div className="flex gap-4">
                  <GraduationCap className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-white">{edu.title}</h3>
                    <p className="text-gray-mid">{edu.institution}</p>
                    <p className="text-sm text-gold">{edu.year}</p>
                  </div>
                </div>
              </MinimalCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Idiomas
const LanguagesSection = () => {
  return (
    <section className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-gold font-medium">
            Idiomas
          </h2>

          <MinimalCard>
            <div className="flex items-start gap-8">
              <div className="relative">
                <Languages className="w-12 h-12 text-gold" />
                <Award className="w-6 h-6 text-gold absolute -top-2 -right-2" />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2">Inglés</h3>
                  <p className="text-xl text-gold mb-4">Nivel C1 - Alto / Profesional</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {["Reuniones Internacionales", "Documentación Técnica", "Comunicación Fluida"].map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 border border-gold/30 rounded-full text-sm text-gray-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </MinimalCard>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Contacto
const Contact = () => {
  return (
    <section id="contacto" className="py-32 px-6 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-gold font-medium">
            Contacto
          </h2>

          <div className="space-y-8">
            <p className="text-3xl md:text-4xl font-serif text-white leading-relaxed">
              ¿Tienes un proyecto en mente?<br />
              Me encantaría escucharte.
            </p>

            <div className="grid grid-cols-1 gap-6 pt-8">
              <a
                href="mailto:raulsorgo@gmail.com"
                className="group flex items-center gap-4 p-6 border border-white/10 rounded-xl hover:border-gold/50 transition-all duration-200"
              >
                <Mail className="w-6 h-6 text-gold" />
                <div>
                  <p className="text-sm text-gray-mid uppercase tracking-wider">Email</p>
                  <p className="text-white group-hover:text-gold transition-colors">raulsorgo@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="pt-12 border-t border-white/10">
              <p className="text-sm text-gray-mid uppercase tracking-wider mb-6">También en redes</p>
              <div className="flex gap-4">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Componente Footer
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-mid">
          <p>© 2025 Raúl Soriano. Todos los derechos reservados.</p>
          <p className="font-serif">Desarrollado con atención al detalle</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Home Principal
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <LanguagesSection />
      <Contact />
      <Footer />
    </motion.div>
  )
}

export default Home
