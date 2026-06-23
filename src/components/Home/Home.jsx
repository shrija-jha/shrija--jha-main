import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Rocket, Sparkles } from 'lucide-react'
import Type from './Type'
import HeroScene from './HeroScene'
import Home2 from './Home2'
import ScrollSection from './ScrollSection'
import MagneticButton from '../MagneticButton.jsx'

const nameParts = ['SHRIJA', 'JHA']

function Home() {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  const springScroll = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.2 })
  const heroY = useTransform(springScroll, [0, 1], ['0%', '12%'])
  const heroOpacity = useTransform(springScroll, [0, 0.28], [1, 0.35])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section
        className="hero-shell"
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at top, rgba(199,112,240,0.18) 0%, transparent 30%), linear-gradient(135deg, #090612 0%, #120b25 42%, #0d0b1e 100%)',
        }}
      >
        <HeroScene />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.04) 0%, transparent 22%, transparent 76%, rgba(255,255,255,0.03) 100%)',
          }}
        />

        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            y: heroY,
            opacity: heroOpacity,
            pointerEvents: 'none',
          }}
        >
          <div className="hero-grid-overlay" />
        </motion.div>

        <div className="hero-noise-overlay" />

        <div
          className="hero-layout"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '1280px',
            margin: '0 auto',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '110px 24px 36px',
            transform: `translateY(${scrollY * 0.03}px)`,
          }}
        >
          <div className="hero-main-grid hero-main-grid-single">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              style={{
                minWidth: 0,
                width: '100%',
                maxWidth: '980px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="hero-inline-chip"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
              >
                <Sparkles size={16} color="#c770f0" />
                Hi There!{' '}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  style={{
                    color: '#f5f5f5',
                    fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    textShadow: '0 0 18px rgba(255,255,255,0.1)',
                  }}
                >
                  I&apos;M
                </motion.div>

                <motion.h1
                  style={{
                    margin: 0,
                    fontSize: 'clamp(3rem, 9vw, 6.5rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    letterSpacing: '-0.06em',
                    color: '#f5f5f5',
                    textShadow: '0 0 28px rgba(199, 112, 240, 0.2)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.22em',
                    flexWrap: 'wrap',
                  }}
                >
                  {nameParts.map((part, index) => (
                    <motion.span
                      key={part}
                      initial={{
                        opacity: 0,
                        x: index === 0 ? -180 : 180,
                        y: index === 0 ? -36 : 36,
                        scale: 0.78,
                        rotate: index === 0 ? -10 : 10,
                        filter: 'blur(10px)',
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        filter: 'blur(0px)',
                      }}
                      transition={{
                        duration: 1.05,
                        delay: 0.22 + index * 0.16,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #c770f0, #7c3aed, #d896f8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        backgroundSize: '200% 200%',
                        animation: 'gradientShift 4s ease-in-out infinite',
                        paddingBottom: '0.06em',
                      }}
                    >
                      {part}
                    </motion.span>
                  ))}
                </motion.h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.16 }}
                style={{
                  marginTop: '18px',
                  marginBottom: '18px',
                  minHeight: '52px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Type />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '14px',
                  marginTop: '30px',
                }}
              >
                <Link to="/project" style={{ textDecoration: 'none' }}>
                  <MagneticButton>
                    <motion.div
                      className="hero-btn"
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '15px 24px',
                        borderRadius: '999px',
                        background: 'linear-gradient(135deg, #c770f0 0%, #7c3aed 48%, #22d3ee 100%)',
                        color: '#fff',
                        fontWeight: 800,
                        boxShadow: '0 20px 40px rgba(199, 112, 240, 0.32)',
                      }}
                    >
                      <Rocket size={18} />
                      View Projects <ArrowRight size={17} />
                    </motion.div>
                  </MagneticButton>
                </Link>

                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <MagneticButton>
                    <motion.div
                      className="hero-btn"
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '15px 24px',
                        borderRadius: '999px',
                        background: 'rgba(199, 112, 240, 0.08)',
                        border: '1px solid rgba(199, 112, 240, 0.28)',
                        color: '#c770f0',
                        fontWeight: 700,
                        backdropFilter: 'blur(16px)',
                      }}
                    >
                      <Code size={18} />
                      Contact Me
                    </motion.div>
                  </MagneticButton>
                </Link>

               
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              paddingTop: '18px',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '44px',
                borderRadius: '14px',
                border: '2px solid rgba(199, 112, 240, 0.45)',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '8px',
                boxShadow: '0 0 24px rgba(199, 112, 240, 0.16)',
              }}
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                style={{
                  width: '6px',
                  height: '10px',
                  borderRadius: '3px',
                  background: 'linear-gradient(180deg, #c770f0, #22d3ee)',
                  boxShadow: '0 0 14px rgba(199, 112, 240, 0.6)',
                }}
              />
            </div>
            <span
              style={{
                color: '#94a3b8',
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </section>

      <ScrollSection />
      <Home2 />
    </motion.div>
  )
}

export default Home
