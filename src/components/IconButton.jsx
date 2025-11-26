import { useState } from 'react'

const IconButton = ({ href, icon: Icon, external = true, label }) => {
  const [isHovered, setIsHovered] = useState(false)

  const linkProps = external ? {
    target: "_blank",
    rel: "noopener noreferrer"
  } : {}

  return (
    <a
      href={href}
      className="group p-4 border border-white/10 rounded-xl hover:border-gold/50 transition-all duration-200 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={label}
      {...linkProps}
    >
      <Icon
        className="w-5 h-5 text-gray-mid group-hover:text-gold transition-colors duration-200 relative"
        style={{
          animation: isHovered ? 'rotateText 0.6s ease-in-out' : 'none'
        }}
      />
    </a>
  )
}

export default IconButton
