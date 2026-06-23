import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Sparkles,
  X,
} from 'lucide-react'

const entryVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function ProjectCard({
  img,
  title,
  description,
  github,
  demo,
  accent = '#c770f0',
  icon: Icon = Sparkles,
  category = 'Featured Build',
  index = 0,
  section = 'Project',
}) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)

  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.6 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.6 })
  const smoothGlowX = useSpring(glowX, { stiffness: 150, damping: 20, mass: 0.5 })
  const smoothGlowY = useSpring(glowY, { stiffness: 150, damping: 20, mass: 0.5 })

  const boxShadow = useTransform(
    smoothRotateY,
    [-10, 0, 10],
    [
      `-12px 24px 50px rgba(34, 211, 238, 0.15), 0 24px 60px rgba(5, 8, 22, 0.45)`,
      `0 22px 55px rgba(5, 8, 22, 0.5)`,
      `12px 24px 50px rgba(199, 112, 240, 0.18), 0 24px 60px rgba(5, 8, 22, 0.45)`,
    ]
  )

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const px = ((event.clientX - bounds.left) / bounds.width) * 100
    const py = ((event.clientY - bounds.top) / bounds.height) * 100

    glowX.set(px)
    glowY.set(py)
    rotateY.set((px - 50) / 4.5)
    rotateX.set((50 - py) / 5.5)
  }

  const resetTilt = () => {
    rotateX.set(0)
    rotateY.set(0)
    glowX.set(50)
    glowY.set(50)
    setIsHovered(false)
  }

  const cardActions = [
    github
      ? { href: github, label: 'Code', icon: Github, background: 'rgba(255,255,255,0.08)' }
      : null,
    demo
      ? { href: demo, label: 'Launch', icon: ExternalLink, background: accent }
      : null,
  ].filter(Boolean)

  return (
    <>
      <motion.article
        custom={index}
        variants={entryVariants}
        initial="hidden"
        animate="visible"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={resetTilt}
        onClick={() => setIsLightboxOpen(true)}
        style={{
          position: 'relative',
          minHeight: '390px',
          borderRadius: '28px',
          overflow: 'hidden',
          cursor: 'pointer',
          transformStyle: 'preserve-3d',
          perspective: '1400px',
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          boxShadow,
          border: '1px solid rgba(255,255,255,0.09)',
          background:
            'linear-gradient(160deg, rgba(13, 11, 30, 0.92) 0%, rgba(18, 15, 41, 0.9) 45%, rgba(10, 12, 28, 0.95) 100%)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
        }}
      >
        <motion.div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '-25%',
            background: `radial-gradient(circle at ${smoothGlowX}% ${smoothGlowY}%, ${accent}55 0%, rgba(255,255,255,0.05) 18%, transparent 42%)`,
            opacity: isHovered ? 1 : 0.6,
            transition: 'opacity 0.25s ease',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(125deg, rgba(255,255,255,0.12) 0%, transparent 28%, transparent 72%, rgba(255,255,255,0.08) 100%)',
            mixBlendMode: 'screen',
            opacity: isHovered ? 0.55 : 0.28,
            transition: 'opacity 0.25s ease',
          }}
        />

        <motion.div
          aria-hidden="true"
          animate={{ opacity: isHovered ? 0.95 : 0.5 }}
          style={{
            position: 'absolute',
            inset: '1px',
            borderRadius: '27px',
            border: `1px solid ${accent}33`,
            boxShadow: isHovered ? `0 0 0 1px ${accent}44 inset` : 'none',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          animate={{ backgroundPositionX: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(105deg, transparent 0%, transparent 44%, rgba(255,255,255,0.08) 50%, transparent 56%, transparent 100%)',
            backgroundSize: '220% 100%',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'grid',
            gridTemplateRows: '180px auto',
            minHeight: '390px',
          }}
        >
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <motion.img
              src={img}
              alt={title}
              animate={{
                scale: isHovered ? 1.08 : 1,
                rotate: isHovered ? -1.2 : 0,
                y: isHovered ? -6 : 0,
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'saturate(1.05) contrast(1.04)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(11, 10, 28, 0.04) 0%, rgba(11, 10, 28, 0.28) 58%, rgba(11, 10, 28, 0.88) 100%)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: '16px 16px auto 16px',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  borderRadius: '999px',
                  background: 'rgba(7, 11, 25, 0.62)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: '#f8fafc',
                  fontSize: '0.7rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: accent,
                    boxShadow: `0 0 14px ${accent}`,
                  }}
                />
                {section}
              </div>

              <motion.div
                animate={{ rotateY: isHovered ? 180 : 0, rotateZ: isHovered ? 8 : 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  display: 'grid',
                  placeItems: 'center',
                  color: '#fff',
                  background: `linear-gradient(145deg, ${accent}, rgba(10, 12, 28, 0.8))`,
                  boxShadow: `0 18px 30px ${accent}35`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <Icon size={22} />
              </motion.div>
            </div>

            <div
              style={{
                position: 'absolute',
                left: '16px',
                bottom: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 12px',
                borderRadius: '14px',
                background: 'rgba(7, 11, 25, 0.58)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#e2e8f0',
                fontSize: '0.72rem',
                backdropFilter: 'blur(14px)',
              }}
            >
              <Sparkles size={14} color={accent} />
              Tap to expand
            </div>
          </div>

          <div
            style={{
              padding: '18px',
              display: 'grid',
              gap: '14px',
              alignContent: 'start',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div>
                <div
                  style={{
                    color: accent,
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  {category}
                </div>
                <h3
                  style={{
                    margin: 0,
                    color: '#f8fafc',
                    fontSize: '1.12rem',
                    lineHeight: 1.15,
                    fontWeight: 800,
                  }}
                >
                  {title}
                </h3>
              </div>

              <motion.div
                animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0, rotate: isHovered ? 12 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#fff',
                  background: 'rgba(255,255,255,0.05)',
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={18} />
              </motion.div>
            </div>

            <p
              style={{
                margin: 0,
                color: '#cbd5e1',
                fontSize: '0.84rem',
                lineHeight: 1.65,
              }}
            >
              {description}
            </p>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {cardActions.map(({ href, label, icon: ActionIcon, background }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    color: '#fff',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    background,
                    border:
                      label === 'Launch'
                        ? '1px solid transparent'
                        : '1px solid rgba(255,255,255,0.12)',
                    boxShadow:
                      label === 'Launch'
                        ? `0 10px 24px ${accent}35`
                        : 'none',
                  }}
                >
                  <ActionIcon size={15} />
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              padding: '20px',
              display: 'grid',
              placeItems: 'center',
              background:
                'radial-gradient(circle at top, rgba(199,112,240,0.18) 0%, rgba(5,8,22,0.9) 45%, rgba(2,6,23,0.96) 100%)',
              backdropFilter: 'blur(22px)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              style={{
                position: 'relative',
                width: 'min(1120px, 100%)',
                maxHeight: 'min(88vh, 920px)',
                overflow: 'auto',
                borderRadius: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                background:
                  'linear-gradient(160deg, rgba(10, 12, 28, 0.96) 0%, rgba(16, 18, 38, 0.96) 100%)',
                boxShadow: `0 30px 80px rgba(2,6,23,0.7), 0 0 0 1px ${accent}22`,
              }}
            >
              <motion.button
                onClick={() => setIsLightboxOpen(false)}
                whileHover={{ rotate: 90, scale: 1.05 }}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  zIndex: 3,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#fff',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </motion.button>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  minHeight: '100%',
                }}
              >
                <div
                  style={{
                    flex: '1 1 520px',
                    minHeight: '360px',
                    position: 'relative',
                    background:
                      `radial-gradient(circle at 30% 20%, ${accent}33 0%, transparent 40%), linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(10,12,28,0.2) 100%)`,
                  }}
                >
                  <motion.img
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                    src={img}
                    alt={title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(10,12,28,0) 0%, rgba(10,12,28,0.18) 50%, rgba(10,12,28,0.74) 100%)',
                    }}
                  />
                </div>

                <div
                  style={{
                    flex: '1 1 360px',
                    padding: '32px',
                    display: 'grid',
                    gap: '20px',
                    alignContent: 'center',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      width: 'fit-content',
                      padding: '10px 14px',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#e2e8f0',
                      fontSize: '0.78rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <Icon size={16} color={accent} />
                    {section}
                  </div>

                  <div>
                    <div
                      style={{
                        color: accent,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      {category}
                    </div>
                    <h2
                      style={{
                        margin: 0,
                        color: '#fff',
                        fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                        lineHeight: 0.95,
                        fontWeight: 800,
                      }}
                    >
                      {title}
                    </h2>
                  </div>

                  <p
                    style={{
                      margin: 0,
                      color: '#cbd5e1',
                      fontSize: '1rem',
                      lineHeight: 1.8,
                    }}
                  >
                    {description}
                  </p>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {cardActions.map(({ href, label, icon: ActionIcon, background }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 18px',
                          borderRadius: '999px',
                          textDecoration: 'none',
                          color: '#fff',
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          background,
                          border:
                            label === 'Launch'
                              ? '1px solid transparent'
                              : '1px solid rgba(255,255,255,0.12)',
                          boxShadow:
                            label === 'Launch'
                              ? `0 12px 28px ${accent}33`
                              : 'none',
                        }}
                      >
                        <ActionIcon size={17} />
                        {label === 'Launch' ? 'Visit Live Site' : 'Open Repository'}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
