import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SiNetlify, SiVercel, SiGithub, SiCanva } from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger)

const tools = [
  { icon: SiNetlify, label: 'Netlify', color: '#2dd4bf' },
  { icon: SiGithub, label: 'GitHub', color: '#d1d5db' },
  { icon: SiNetlify, label: 'Netlify', color: '#2dd4bf' },
  { icon: SiVercel, label: 'Vercel', color: '#f8fafc' },
  { icon: SiCanva, label: 'Canva', color: '#c084fc' },
]

function ToolItem({ icon: Icon, label, color }) {
  const [isHovered, setIsHovered] = useState(false)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const springX = useSpring(glowX, { stiffness: 180, damping: 24, mass: 0.5 })
  const springY = useSpring(glowY, { stiffness: 180, damping: 24, mass: 0.5 })

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    glowX.set(((event.clientX - bounds.left) / bounds.width) * 100)
    glowY.set(((event.clientY - bounds.top) / bounds.height) * 100)
  }

  return (
    <motion.div
      className="tool-icon-item"
      whileHover={{ y: -10, rotateX: 8, rotateY: 8, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        glowX.set(50)
        glowY.set(50)
      }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '130px',
        borderRadius: '24px',
        padding: '22px 18px',
        background: 'rgba(19, 15, 42, 0.72)',
        border: `1px solid ${isHovered ? `${color}66` : 'rgba(255,255,255,0.08)'}`,
        boxShadow: isHovered ? `0 24px 40px ${color}18` : '0 18px 30px rgba(0,0,0,0.22)',
        display: 'grid',
        placeItems: 'center',
        gap: '10px',
        textAlign: 'center',
        transformStyle: 'preserve-3d',
        cursor: 'pointer',
      }}
    >
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-20%',
          background: `radial-gradient(circle at ${springX}% ${springY}%, ${color}36 0%, rgba(255,255,255,0.05) 18%, transparent 42%)`,
          opacity: isHovered ? 1 : 0.55,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ rotateY: isHovered ? -180 : 0, rotateZ: isHovered ? -8 : 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '22px',
          background: `${color}16`,
          border: `1px solid ${color}44`,
          display: 'grid',
          placeItems: 'center',
          boxShadow: `0 0 0 1px ${color}12 inset, 0 14px 28px ${color}16`,
        }}
      >
        <Icon style={{ fontSize: '2.4rem', color }} />
      </motion.div>

      <span style={{ color: '#dbe4f0', fontSize: '0.86rem', fontWeight: 700 }}>{label}</span>
    </motion.div>
  )
}

function Toolstack() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tool-icon-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 82%',
        },
        opacity: 0,
        y: 40,
        duration: 0.58,
        stagger: 0.08,
        ease: 'power3.out',
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '18px',
      }}
    >
      {tools.map((item) => (
        <ToolItem key={item.label} {...item} />
      ))}
    </div>
  )
}

export default Toolstack
