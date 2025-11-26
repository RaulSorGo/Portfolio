import { useState } from 'react'
import { Link } from 'react-router-dom'

const RotatingButton = ({
  href,
  children,
  icon: Icon,
  variant = 'primary',
  className = '',
  external = false,
  size = 'default'
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    default: "px-8 py-4",
    small: "px-4 py-2 text-sm"
  }

  const baseClasses = `group relative ${sizeClasses[size]} rounded-xl font-medium transition-all duration-200 inline-flex items-center gap-2 overflow-hidden`

  const variantClasses = {
    primary: "border border-gold text-white hover:border-gold",
    secondary: "border border-white/20 text-white hover:border-white/40",
    ghost: "border border-white/10 text-gray-mid hover:border-gold/50 hover:text-gold"
  }

  const commonProps = {
    className: `${baseClasses} ${variantClasses[variant]} ${className}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  }

  const content = (
    <>
      {Icon && (
        <Icon className={`w-4 h-4 transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} />
      )}
      <span
        className="relative inline-block transition-all duration-300"
        style={{
          animation: isHovered ? 'rotateText 0.6s ease-in-out' : 'none'
        }}
      >
        {children}
      </span>
    </>
  )

  // Si es un enlace externo o empieza con # (anchor), usar <a>
  if (external || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    const linkProps = external ? {
      target: "_blank",
      rel: "noopener noreferrer"
    } : {}

    return (
      <a href={href} {...commonProps} {...linkProps}>
        {content}
      </a>
    )
  }

  // Para rutas internas, usar Link de React Router
  return (
    <Link to={href} {...commonProps}>
      {content}
    </Link>
  )
}

export default RotatingButton
