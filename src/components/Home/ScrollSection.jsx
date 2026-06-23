import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import {
  HiOutlineArrowRight,
  HiOutlineBolt,
  HiOutlineCodeBracket,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
} from 'react-icons/hi2'
import { ArrowUpRight, X } from 'lucide-react'
import gsap from 'gsap'
import ScrollSectionScene from './ScrollSectionScene'

const features = [
  {
    icon: HiOutlineRocketLaunch,
    title: 'Innovative Solutions',
    tagline: 'Fast launch energy',
    description:
      'Creating cutting-edge web applications with modern technologies and best practices.',
    accent: '#c770f0',
    label: 'Strategy',
  },
  {
    icon: HiOutlineCodeBracket,
    title: 'Clean Code',
    tagline: 'Readable systems',
    description: 'Writing maintainable, scalable code that follows industry standards.',
    accent: '#7c3aed',
    label: 'Engineering',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Creative Design',
    tagline: 'Visual personality',
    description: 'Designing beautiful, user-friendly interfaces that captivate users.',
    accent: '#d896f8',
    label: 'Design',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'Problem Solving',
    tagline: 'Sharp decisions',
    description: 'Tackling complex challenges with innovative and efficient solutions.',
    accent: '#22d3ee',
    label: 'Thinking',
  },
  {
    icon: HiOutlineGlobeAlt,
    title: 'Global Impact',
    tagline: 'Built to reach',
    description: 'Building applications that reach and serve users worldwide.',
    accent: '#818cf8',
    label: 'Product',
  },
  {
    icon: HiOutlineBolt,
    title: 'Performance',
    tagline: 'Feel it instantly',
    description: 'Optimizing applications for lightning-fast performance and user experience.',
    accent: '#f59e0b',
    label: 'Delivery',
  },
]

function ScrollSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const railRef = useRef([])
  const stageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      gsap.from(railRef.current, {
        x: -26,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: 'power3.out',
      })

      gsap.from(stageRef.current, {
        x: 34,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const activeFeature = features[activeIndex]
  const ActiveIcon = activeFeature.icon

  return (
    <>
      <section
        ref={containerRef}
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '110px 24px',
          background: 'linear-gradient(180deg, #130f2a 0%, #0d0b1e 45%, #130f2a 100%)',
        }}
      >
        <ScrollSectionScene />

        <motion.div
          animate={{ x: [-18, 18, -18], y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '8%',
            left: '-140px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(199,112,240,0.18) 0%, transparent 72%)',
            filter: 'blur(26px)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          animate={{ x: [0, 22, 0], y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            right: '-120px',
            bottom: '-120px',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 72%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1220px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '54px' }}
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
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
              Motion Showcase
            </motion.div>

            <h2
              style={{
                fontSize: 'clamp(2.3rem, 5vw, 4.8rem)',
                fontWeight: 800,
                margin: 0,
                lineHeight: 0.94,
                letterSpacing: '-0.05em',
                color: '#f8fafc',
              }}
            >
              What I{' '}
              <motion.span
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(90deg, #c770f0 0%, #22d3ee 45%, #f9a8d4 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                shape
              </motion.span>
              .
              <br />
              What users{' '}
              <span style={{ color: '#c770f0' }}>
                feel.
              </span>
            </h2>

            <p
              style={{
                color: '#9ca3af',
                fontSize: '1.08rem',
                maxWidth: '700px',
                margin: '18px auto 0',
                lineHeight: 1.8,
              }}
            >
              Not a grid of cards, but one interactive stage where each capability gets its own
              motion-led spotlight, hover response, 3D depth, and immersive preview.
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 0.9fr) minmax(0, 1.1fr)',
              gap: '28px',
              alignItems: 'stretch',
            }}
          >
            <div
              style={{
                display: 'grid',
                gap: '14px',
              }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                const isActive = activeIndex === index

                return (
                  <motion.button
                    key={feature.title}
                    ref={(element) => (railRef.current[index] = element)}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '24px',
                      padding: '18px 20px',
                      border: `1px solid ${
                        isActive ? `${feature.accent}66` : 'rgba(255,255,255,0.08)'
                      }`,
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))'
                        : 'rgba(255,255,255,0.035)',
                      boxShadow: isActive
                        ? `0 24px 40px ${feature.accent}16`
                        : '0 14px 28px rgba(2, 6, 23, 0.2)',
                      color: '#fff',
                      textAlign: 'left',
                      cursor: 'pointer',
                      backdropFilter: 'blur(14px)',
                    }}
                  >
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.5,
                        backgroundPositionX: ['0%', '100%'],
                      }}
                      transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(120deg, transparent 0%, transparent 44%, rgba(255,255,255,0.07) 50%, transparent 56%, transparent 100%)',
                        backgroundSize: '220% 100%',
                        pointerEvents: 'none',
                      }}
                    />

                    <div
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'grid',
                        gridTemplateColumns: '58px minmax(0, 1fr) auto',
                        gap: '16px',
                        alignItems: 'center',
                      }}
                    >
                      <motion.div
                        animate={{ rotateY: isActive ? 180 : 0, rotateZ: isActive ? 8 : 0 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          width: '58px',
                          height: '58px',
                          borderRadius: '18px',
                          display: 'grid',
                          placeItems: 'center',
                          background: `${feature.accent}15`,
                          border: `1px solid ${feature.accent}40`,
                          boxShadow: `0 0 0 1px ${feature.accent}12 inset`,
                        }}
                      >
                        <Icon size={26} color={feature.accent} />
                      </motion.div>

                      <div>
                        <div
                          style={{
                            color: '#f8fafc',
                            fontWeight: 800,
                            fontSize: '1.08rem',
                            marginBottom: '4px',
                          }}
                        >
                          {feature.title}
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.86rem' }}>{feature.tagline}</div>
                      </div>

                      <div
                        style={{
                          color: isActive ? feature.accent : '#64748b',
                          fontSize: '0.76rem',
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {feature.label}
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            <div ref={stageRef}>
              <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} perspective={1400} glareEnable>
                <motion.div
                  key={activeFeature.title}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: 'relative',
                    minHeight: '540px',
                    overflow: 'hidden',
                    borderRadius: '34px',
                    padding: '28px',
                    border: `1px solid ${activeFeature.accent}44`,
                    background:
                      'linear-gradient(145deg, rgba(10, 11, 28, 0.88) 0%, rgba(17, 20, 42, 0.88) 100%)',
                    boxShadow: `0 28px 70px ${activeFeature.accent}14`,
                    backdropFilter: 'blur(18px)',
                    WebkitBackdropFilter: 'blur(18px)',
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
                    style={{
                      position: 'absolute',
                      width: '420px',
                      height: '420px',
                      top: '-120px',
                      right: '-110px',
                      borderRadius: '50%',
                      border: `1px solid ${activeFeature.accent}20`,
                    }}
                  />

                  <motion.div
                    animate={{ x: [-20, 20, -20], y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
                    style={{
                      position: 'absolute',
                      inset: 'auto auto -120px -120px',
                      width: '320px',
                      height: '320px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${activeFeature.accent}24 0%, transparent 70%)`,
                      filter: 'blur(24px)',
                    }}
                  />

                  <motion.div
                    animate={{ backgroundPositionX: ['0%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 9, ease: 'linear' }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(120deg, transparent 0%, transparent 44%, rgba(255,255,255,0.07) 50%, transparent 56%, transparent 100%)',
                      backgroundSize: '220% 100%',
                      pointerEvents: 'none',
                    }}
                  />

                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      height: '100%',
                      display: 'grid',
                      gridTemplateRows: 'auto 1fr auto',
                      gap: '22px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: '16px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 14px',
                            borderRadius: '999px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: activeFeature.accent,
                            fontSize: '0.78rem',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                          }}
                        >
                          <ActiveIcon size={18} />
                          {activeFeature.label}
                        </div>

                        <h3
                          style={{
                            margin: 0,
                            color: '#f8fafc',
                            fontSize: 'clamp(2rem, 4vw, 3.4rem)',
                            lineHeight: 0.95,
                            letterSpacing: '-0.05em',
                            fontWeight: 800,
                          }}
                        >
                          {activeFeature.title}
                        </h3>
                      </div>

                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setIsLightboxOpen(true)}
                        style={{
                          width: '58px',
                          height: '58px',
                          borderRadius: '18px',
                          border: '1px solid rgba(255,255,255,0.12)',
                          background: 'rgba(255,255,255,0.06)',
                          color: '#fff',
                          display: 'grid',
                          placeItems: 'center',
                          cursor: 'pointer',
                          backdropFilter: 'blur(14px)',
                        }}
                        aria-label="Open feature preview"
                      >
                        <ArrowUpRight size={24} />
                      </motion.button>
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr) minmax(200px, 260px)',
                        gap: '20px',
                        alignItems: 'stretch',
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: '28px',
                          minHeight: '260px',
                          padding: '24px',
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <motion.div
                          animate={{ scale: [1, 1.08, 1] }}
                          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                          style={{
                            position: 'absolute',
                            inset: 'auto -40px -40px auto',
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${activeFeature.accent}30 0%, transparent 70%)`,
                            filter: 'blur(6px)',
                          }}
                        />

                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '86px',
                            height: '86px',
                            borderRadius: '26px',
                            marginBottom: '22px',
                            background: `${activeFeature.accent}16`,
                            border: `1px solid ${activeFeature.accent}40`,
                            boxShadow: `0 16px 30px ${activeFeature.accent}18`,
                          }}
                        >
                          <ActiveIcon size={40} color={activeFeature.accent} />
                        </div>

                        <div
                          style={{
                            color: '#cbd5e1',
                            lineHeight: 1.9,
                            fontSize: '1.02rem',
                            maxWidth: '40ch',
                          }}
                        >
                          {activeFeature.description}
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gap: '14px',
                        }}
                      >
                        <motion.div
                          whileHover={{ y: -4 }}
                          style={{
                            padding: '18px',
                            borderRadius: '22px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          <div
                            style={{
                              color: '#f8fafc',
                              fontWeight: 800,
                              fontSize: '1.8rem',
                              marginBottom: '6px',
                            }}
                          >
                            0{activeIndex + 1}
                          </div>
                          <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>active focus lane</div>
                        </motion.div>

                        <motion.div
                          whileHover={{ y: -4 }}
                          style={{
                            padding: '18px',
                            borderRadius: '22px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          <div
                            style={{
                              color: activeFeature.accent,
                              fontWeight: 800,
                              fontSize: '1.4rem',
                              marginBottom: '6px',
                            }}
                          >
                            Live
                          </div>
                          <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                            hover to switch the stage
                          </div>
                        </motion.div>

                        <motion.div
                          whileHover={{ y: -4 }}
                          style={{
                            padding: '18px',
                            borderRadius: '22px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          <div
                            style={{
                              color: '#f8fafc',
                              fontWeight: 800,
                              fontSize: '1.25rem',
                              marginBottom: '6px',
                            }}
                          >
                            3D Motion
                          </div>
                          <div style={{ color: '#94a3b8', fontSize: '0.88rem' }}>
                            tilt, glow, scene, and lightbox depth
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '10px',
                          color: '#dbe4f0',
                          fontWeight: 600,
                        }}
                      >
                        Explore the next capability
                        <HiOutlineArrowRight size={20} color={activeFeature.accent} />
                      </motion.div>

                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {features.map((feature, index) => (
                          <button
                            key={feature.title}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            style={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              border: 'none',
                              cursor: 'pointer',
                              background: activeIndex === index ? feature.accent : 'rgba(255,255,255,0.18)',
                              boxShadow:
                                activeIndex === index ? `0 0 18px ${feature.accent}` : 'none',
                            }}
                            aria-label={`Show ${feature.title}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </div>
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
              padding: '20px',
              background:
                'radial-gradient(circle at top, rgba(199,112,240,0.2) 0%, rgba(5,8,22,0.92) 45%, rgba(2,6,23,0.97) 100%)',
              backdropFilter: 'blur(24px)',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              style={{
                position: 'relative',
                width: 'min(860px, 100%)',
                borderRadius: '30px',
                overflow: 'hidden',
                border: `1px solid ${activeFeature.accent}44`,
                background:
                  'linear-gradient(160deg, rgba(10, 12, 28, 0.96) 0%, rgba(16, 18, 38, 0.96) 100%)',
                boxShadow: `0 30px 80px ${activeFeature.accent}24`,
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
                  minHeight: '480px',
                  display: 'grid',
                  placeItems: 'center',
                  padding: '34px',
                  background: `radial-gradient(circle at center, ${activeFeature.accent}22 0%, rgba(10,12,28,0.1) 44%, rgba(10,12,28,0.92) 100%)`,
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    width: '340px',
                    height: '340px',
                    borderRadius: '50%',
                    border: `1px solid ${activeFeature.accent}30`,
                  }}
                />

                <motion.div
                  initial={{ scale: 0.96 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: 'min(100%, 620px)',
                    borderRadius: '28px',
                    padding: '32px',
                    background:
                      'linear-gradient(145deg, rgba(255,255,255,0.09), rgba(255,255,255,0.03))',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: `0 24px 60px ${activeFeature.accent}18`,
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '90px',
                      height: '90px',
                      borderRadius: '28px',
                      marginBottom: '24px',
                      background: `${activeFeature.accent}16`,
                      border: `1px solid ${activeFeature.accent}40`,
                    }}
                  >
                    <ActiveIcon size={42} color={activeFeature.accent} />
                  </div>

                  <div
                    style={{
                      color: activeFeature.accent,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      fontSize: '0.82rem',
                      marginBottom: '14px',
                    }}
                  >
                    {activeFeature.label}
                  </div>

                  <h3
                    style={{
                      margin: 0,
                      color: '#f8fafc',
                      fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                      lineHeight: 0.95,
                      letterSpacing: '-0.05em',
                    }}
                  >
                    {activeFeature.title}
                  </h3>

                  <p
                    style={{
                      margin: '18px 0 0 0',
                      color: '#cbd5e1',
                      lineHeight: 1.9,
                      fontSize: '1.02rem',
                      maxWidth: '46ch',
                    }}
                  >
                    {activeFeature.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ScrollSection
