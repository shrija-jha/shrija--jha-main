import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { ArrowUpRight, Sparkles, X } from 'lucide-react'
import Particle from '../Particle'
import Aboutcard from './AboutCard'
import Techstack from './Techstack'
import Toolstack from './Toolstack'
import Github from './Github'
import AboutScene from './AboutScene'
import laptopImg from '../../Assets/about.png'
import useViewport from '../../hooks/useViewport'

const focusCards = [
  { title: 'Frontend Craft', body: 'Responsive interfaces with motion, clarity, and strong visual rhythm.' },
  { title: 'Product Thinking', body: 'I like turning screens into experiences that feel intentional and easy to use.' },
  { title: 'Build Energy', body: 'Fast iteration, clean UI systems, and interactive details that stay useful.' },
]

function About() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const { isMobile, isTablet } = useViewport()
  const heroMetrics = useMemo(
    () => [
      { value: 'UI', label: 'first mindset' },
      { value: '3D', label: 'motion layer' },
      { value: 'Live', label: 'interactive feel' },
    ],
    [],
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45 }}
    >
      <section
        style={{
          position: 'relative',
          paddingTop: '110px',
          paddingBottom: '80px',
          minHeight: '100vh',
          background: 'linear-gradient(180deg, #0d0b1e 0%, #130f2a 45%, #0d0b1e 100%)',
          overflow: 'hidden',
        }}
      >
        <Particle />
        <AboutScene />

        <motion.div
          animate={{ x: [-20, 20, -20], y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '-140px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(199,112,240,0.2) 0%, transparent 70%)',
            filter: 'blur(24px)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          animate={{ x: [0, 24, 0], y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            right: '-120px',
            bottom: '-100px',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.16) 0%, transparent 72%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1180px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          <section
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '34px',
              padding: isMobile ? '20px' : isTablet ? '26px' : '34px',
              marginBottom: isMobile ? '48px' : '80px',
              border: '1px solid rgba(255,255,255,0.08)',
              background:
                'linear-gradient(145deg, rgba(12, 11, 31, 0.84) 0%, rgba(18, 21, 42, 0.86) 100%)',
              boxShadow: '0 28px 70px rgba(2, 6, 23, 0.45)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
            }}
          >
            <motion.div
              animate={{ backgroundPositionX: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(120deg, transparent 0%, transparent 42%, rgba(255,255,255,0.06) 50%, transparent 58%, transparent 100%)',
                backgroundSize: '220% 100%',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isTablet
                  ? 'minmax(0, 1fr)'
                  : 'minmax(0, 1.15fr) minmax(300px, 420px)',
                gap: isMobile ? '22px' : '34px',
                alignItems: 'center',
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 16px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#dbe4f0',
                    fontSize: '0.82rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '22px',
                  }}
                >
                  <Sparkles size={16} color="#c770f0" />
                  About Universe
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.05 }}
                  style={{
                    margin: 0,
                    fontSize: 'clamp(2.4rem, 5vw, 4.8rem)',
                    lineHeight: 0.94,
                    fontWeight: 800,
                    letterSpacing: '-0.05em',
                    color: '#f8fafc',
                  }}
                >
                  Know who I am.
                  <br />
                  <motion.span
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                    style={{
                      display: 'inline-block',
                      background:
                        'linear-gradient(90deg, #c770f0 0%, #22d3ee 40%, #f9a8d4 100%)',
                      backgroundSize: '200% 200%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Designed with motion.
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.12 }}
                  style={{
                    margin: '24px 0 0 0',
                    maxWidth: '620px',
                    color: '#cbd5e1',
                    lineHeight: 1.9,
                    fontSize: '1.04rem',
                  }}
                >
                  A more cinematic window into my work style, visual instincts, and the tools I use
                  to turn ideas into clean interactive products.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile
                      ? 'minmax(0, 1fr)'
                      : 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: '14px',
                    marginTop: '28px',
                  }}
                >
                  {focusCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      whileHover={{ y: -8, rotateX: 5, rotateY: index % 2 === 0 ? -5 : 5 }}
                      transition={{ duration: 0.28 }}
                      style={{
                        minHeight: '150px',
                        borderRadius: '24px',
                        padding: '18px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow:
                          index === 1
                            ? 'inset 0 0 0 1px rgba(34,211,238,0.16)'
                            : 'inset 0 0 0 1px rgba(199,112,240,0.16)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: index === 1 ? '#22d3ee' : '#c770f0',
                          boxShadow:
                            index === 1 ? '0 0 18px #22d3ee' : '0 0 18px #c770f0',
                          marginBottom: '14px',
                        }}
                      />
                      <h3
                        style={{
                          margin: '0 0 10px 0',
                          color: '#f8fafc',
                          fontSize: '1rem',
                          fontWeight: 800,
                        }}
                      >
                        {card.title}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          color: '#94a3b8',
                          fontSize: '0.9rem',
                          lineHeight: 1.7,
                        }}
                      >
                        {card.body}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.08 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} perspective={1200} glareEnable>
                  <motion.div
                    whileHover={{ y: -10 }}
                    style={{
                      position: 'relative',
                      width: 'min(100%, 380px)',
                      padding: isMobile ? '16px' : '22px',
                      borderRadius: '30px',
                      background:
                        'linear-gradient(160deg, rgba(9, 11, 28, 0.88) 0%, rgba(17, 23, 42, 0.88) 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 28px 60px rgba(2, 6, 23, 0.4)',
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                      style={{
                        position: 'absolute',
                        inset: '20px',
                        borderRadius: '28px',
                        border: '1px solid rgba(199,112,240,0.14)',
                        pointerEvents: 'none',
                      }}
                    />

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                    >
                      <div
                        onClick={() => setIsLightboxOpen(true)}
                        style={{
                          position: 'relative',
                          borderRadius: '26px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          background:
                            'linear-gradient(135deg, rgba(199,112,240,0.28), rgba(34,211,238,0.2))',
                          padding: '5px',
                          boxShadow: '0 0 60px rgba(199, 112, 240, 0.18)',
                        }}
                      >
                        <div
                          style={{
                            borderRadius: '22px',
                            overflow: 'hidden',
                            background: '#0f172a',
                          }}
                        >
                          <img
                            src={laptopImg}
                            alt="Shrija workspace illustration"
                            style={{ width: '100%', display: 'block', objectFit: 'cover' }}
                          />
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.06 }}
                          style={{
                            position: 'absolute',
                            right: '16px',
                            bottom: '16px',
                            width: '54px',
                            height: '54px',
                            borderRadius: '18px',
                            display: 'grid',
                            placeItems: 'center',
                            color: '#fff',
                            background: 'rgba(10, 14, 30, 0.74)',
                            border: '1px solid rgba(255,255,255,0.14)',
                            backdropFilter: 'blur(14px)',
                            boxShadow: '0 12px 24px rgba(2, 6, 23, 0.28)',
                          }}
                        >
                          <ArrowUpRight size={22} />
                        </motion.div>
                      </div>
                    </motion.div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile
                          ? 'minmax(0, 1fr)'
                          : 'repeat(3, minmax(0, 1fr))',
                        gap: '12px',
                        marginTop: '18px',
                      }}
                    >
                      {heroMetrics.map((metric) => (
                        <motion.div
                          key={metric.label}
                          whileHover={{ y: -4 }}
                          style={{
                            padding: '12px',
                            borderRadius: '18px',
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          <div
                            style={{
                              color: '#f8fafc',
                              fontWeight: 800,
                              fontSize: '1.15rem',
                              marginBottom: '4px',
                            }}
                          >
                            {metric.value}
                          </div>
                          <div style={{ color: '#94a3b8', fontSize: '0.78rem' }}>{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            </div>
          </section>

          <section style={{ marginBottom: isMobile ? '44px' : '68px' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr)',
                gap: '22px',
              }}
            >
              <Aboutcard />
            </div>
          </section>

          <section style={{ marginBottom: isMobile ? '44px' : '68px' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
                fontWeight: 800,
                textAlign: 'center',
                marginBottom: '16px',
                color: '#f8fafc',
                letterSpacing: '-0.03em',
              }}
            >
              Professional <span style={{ color: '#c770f0' }}>Skillset</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              style={{
                margin: '0 auto 32px',
                maxWidth: '620px',
                color: '#94a3b8',
                textAlign: 'center',
                lineHeight: 1.8,
              }}
            >
              The tools and technologies I keep reaching for when I want products to feel fast,
              polished, and solid in production.
            </motion.p>
            <Techstack />
          </section>

          <section style={{ marginBottom: isMobile ? '44px' : '68px' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              style={{
                fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
                fontWeight: 800,
                textAlign: 'center',
                marginBottom: '16px',
                color: '#f8fafc',
                letterSpacing: '-0.03em',
              }}
            >
              <span style={{ color: '#22d3ee' }}>Tools</span> I Use
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              style={{
                margin: '0 auto 32px',
                maxWidth: '620px',
                color: '#94a3b8',
                textAlign: 'center',
                lineHeight: 1.8,
              }}
            >
              My day-to-day setup for designing, building, shipping, and keeping the workflow clean.
            </motion.p>
            <Toolstack />
          </section>

          <Github />
        </div>
      </section>

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
              display: 'grid',
              placeItems: 'center',
              padding: '22px',
              background:
                'radial-gradient(circle at top, rgba(199,112,240,0.2) 0%, rgba(5,8,22,0.94) 44%, rgba(2,6,23,0.98) 100%)',
              backdropFilter: 'blur(22px)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              style={{
                position: 'relative',
                width: 'min(900px, 100%)',
                borderRadius: '30px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.12)',
                background:
                  'linear-gradient(160deg, rgba(10, 12, 28, 0.96) 0%, rgba(16, 18, 38, 0.96) 100%)',
                boxShadow: '0 30px 80px rgba(2,6,23,0.72)',
              }}
            >
              <motion.button
                onClick={() => setIsLightboxOpen(false)}
                whileHover={{ rotate: 90, scale: 1.06 }}
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  zIndex: 2,
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
                  position: 'relative',
                  minHeight: '420px',
                  display: 'grid',
                  placeItems: 'center',
                  padding: '34px',
                  background:
                    'radial-gradient(circle at center, rgba(34,211,238,0.16) 0%, rgba(10,12,28,0.18) 44%, rgba(10,12,28,0.92) 100%)',
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    width: '360px',
                    height: '360px',
                    borderRadius: '50%',
                    border: '1px solid rgba(199,112,240,0.24)',
                  }}
                />

                <motion.img
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.55 }}
                  src={laptopImg}
                  alt="About illustration preview"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: 'min(100%, 720px)',
                    borderRadius: '24px',
                    display: 'block',
                    boxShadow: '0 24px 60px rgba(2, 6, 23, 0.46)',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default About
