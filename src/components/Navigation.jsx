import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, BookOpen, FolderOpen, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navigation = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/proyectos', label: 'Proyectos', icon: FolderOpen },
    { path: '/notas', label: 'Notas', icon: BookOpen },
    { path: '/contacto', label: 'Contacto', icon: Mail },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Navigation Desktop */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-serif font-bold text-white hover:text-gold transition-colors">
              RS
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${
                    isActive(item.path)
                      ? 'text-gold'
                      : 'text-gray-mid hover:text-white'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-mid hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[73px] left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 md:hidden"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 text-lg transition-colors ${
                  isActive(item.path)
                    ? 'text-gold'
                    : 'text-gray-mid hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {/* Spacer for fixed navigation */}
      <div className="h-[73px]"></div>
    </>
  )
}

export default Navigation
