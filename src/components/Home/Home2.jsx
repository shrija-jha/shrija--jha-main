import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Sparkles,
  MessageCircle as WhatsAppIcon,
  X,
} from 'lucide-react'
import myImg from '../../Assets/shrija.jpeg'
import Home2Scene from './Home2Scene'

const socialLinks = [
  { href: 'https://github.com/shrija-jha', icon: Github, label: 'GitHub', color: '#c770f0' },
{ href: 'https://wa.me/918340437120', icon: WhatsAppIcon, label: 'WhatsApp', color: '#25D366' },
  {
    href: 'https://www.linkedin.com/in/shrija-jha-304777279/',
    icon: Linkedin,
    label: 'LinkedIn',
    color: '#818cf8',
  },
  {
    href: 'https://www.instagram.com/shrija__jha/',
    icon: Instagram,
    label: 'Instagram',
    color: '#f472b6',
  },
]

const introCards = [
  {
    title: 'Core Stack',
    body: 'JavaScript, MySQL, React.js, Next.js, and Node.js across frontend-focused product work.',
    accent: '#22d3ee',
  },
  {
    title: 'What I Build',
    body: 'Modern web technologies, interactive products, and polished frontend experiences.',
    accent: '#c770f0',
  },
  {
    title: 'How I Work',
    body: 'I care about clean UI, thoughtful motion, and interfaces that feel intuitive and alive.',
    accent: '#f59e0b',
  },
]

function Home2() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <>
      <section
        style={{
          position: 'relative',
          padding: '90px 24px',
          background: 'linear-gradient(180deg, #0d0b1e 0%, #130f2a 100%)',
          overflow: 'hidden',
        }}
      >
        <Home2Scene />

        <motion.div
          animate={{ x: [-20, 20, -20], y: [0, -18, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '6%',
            right: '-120px',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(199,112,240,0.22) 0%, transparent 72%)',
            filter: 'blur(28px)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          animate={{ x: [0, 18, 0], y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '-140px',
            left: '-120px',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 72%)',
            filter: 'blur(34px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '34px',
              border: '1px solid rgba(255,255,255,0.08)',
              background:
                'linear-gradient(145deg, rgba(10, 11, 28, 0.86) 0%, rgba(17, 15, 41, 0.88) 100%)',
              boxShadow: '0 24px 70px rgba(2, 6, 23, 0.45)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              padding: '34px',
            }}
          >
            <motion.div
              animate={{ backgroundPositionX: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(120deg, transparent 0%, transparent 44%, rgba(255,255,255,0.06) 50%, transparent 56%, transparent 100%)',
                backgroundSize: '220% 100%',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.15fr) minmax(280px, 420px)',
                gap: '30px',
                alignItems: 'center',
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#cbd5e1',
                    fontSize: '0.8rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '22px',
                  }}
                >
                  <Sparkles size={16} color="#c770f0" />
                  About Me
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: 0.06 }}
                  style={{
                    margin: 0,
                    fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                    lineHeight: 0.96,
                    fontWeight: 800,
                    color: '#f8fafc',
                    letterSpacing: '-0.04em',
                  }}
                >
                  Let me{' '}
                  <motion.span
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                    style={{
                      display: 'inline-block',
                      background:
                        'linear-gradient(90deg, #c770f0 0%, #22d3ee 45%, #d896f8 100%)',
                      backgroundSize: '200% 200%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    introduce
                  </motion.span>{' '}
                  myself
                </motion.h2>

                <motion.div
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.75, delay: 0.14 }}
  style={{
    marginTop: '26px',
    color: '#d1d5db',
    lineHeight: 1.9,
    fontSize: '1.04rem',
  }}
>
  <p style={{ margin: '0 0 14px 0' }}>
    I craft high-end, interactive digital experiences that elevate brands and engage users. 
  </p>
  <p style={{ margin: '0 0 14px 0' }}>
    Acting as the <strong style={{ color: '#c770f0' }}>bridge between project vision and technical execution</strong>, I ensure seamless communication and flawless delivery from concept to deployment.
  </p>
  <p style={{ margin: '0 0 14px 0' }}>
    My expertise lies in blending striking visual aesthetics—utilizing 3D animations and smooth scroll effects—with robust <strong style={{ color: '#22d3ee' }}>React and Next.js</strong> architectures.
  </p>
  <p style={{ margin: 0 }}>
    Whether you need a luxury brand showcase or a complex web application, I build interfaces that feel intuitive, premium, and alive.
  </p>
</motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: 0.22 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '14px',
                    marginTop: '28px',
                  }}
                >
                  {introCards.map((card) => (
                    <motion.div
                      key={card.title}
                      whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        minHeight: '150px',
                        padding: '18px',
                        borderRadius: '22px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: `inset 0 0 0 1px ${card.accent}18`,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: card.accent,
                          boxShadow: `0 0 18px ${card.accent}`,
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
                          fontSize: '0.88rem',
                          lineHeight: 1.7,
                        }}
                      >
                        {card.body}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, delay: 0.28 }}
                  style={{ marginTop: '34px' }}
                >
                  <h3
                    style={{
                      margin: '0 0 10px 0',
                      color: '#f8fafc',
                      fontSize: '1.45rem',
                      fontWeight: 800,
                    }}
                  >
                    Find me on
                  </h3>
                  <p style={{ margin: '0 0 18px 0', color: '#94a3b8' }}>
                    Feel free to <span style={{ color: '#c770f0' }}>connect</span> with me
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                    {socialLinks.map(({ href, icon: Icon, label, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -6, scale: 1.08, rotate: -4 }}
                        whileTap={{ scale: 0.96 }}
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '16px',
                          display: 'grid',
                          placeItems: 'center',
                          textDecoration: 'none',
                          color,
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          boxShadow: `0 0 0 rgba(0,0,0,0)`,
                        }}
                        onMouseEnter={(event) => {
                          event.currentTarget.style.boxShadow = `0 16px 30px ${color}22`
                        }}
                        onMouseLeave={(event) => {
                          event.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)'
                        }}
                        title={label}
                      >
                        <Icon size={22} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Tilt tiltMaxAngleX={16} tiltMaxAngleY={16} perspective={1200} glareEnable>
                  <motion.div
                    whileHover={{ y: -10 }}
                    style={{
                      position: 'relative',
                      width: 'min(100%, 360px)',
                      padding: '22px',
                      borderRadius: '30px',
                      background:
                        'linear-gradient(160deg, rgba(12, 11, 29, 0.88) 0%, rgba(18, 26, 45, 0.88) 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 28px 60px rgba(2, 6, 23, 0.4)',
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                      style={{
                        position: 'absolute',
                        inset: '22px',
                        borderRadius: '28px',
                        border: '1px solid rgba(199,112,240,0.14)',
                        pointerEvents: 'none',
                      }}
                    />

                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{ repeat: Infinity, duration: 4.6, ease: 'easeInOut' }}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <div
                        onClick={() => setIsPreviewOpen(true)}
                        style={{
                          position: 'relative',
                          padding: '6px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #c770f0, #7c3aed, #22d3ee)',
                          boxShadow: '0 0 60px rgba(199, 112, 240, 0.32)',
                          cursor: 'pointer',
                        }}
                      >
                        <div
                          style={{
                            borderRadius: '50%',
                            overflow: 'hidden',
                            background: '#130f2a',
                            padding: '10px',
                          }}
                        >
                          <img
                            src={myImg}
                            alt="Shrija Jha"
                            style={{ width: '280px', height: '280px', objectFit: 'contain' }}
                          />
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.06 }}
                          style={{
                            position: 'absolute',
                            right: '10px',
                            bottom: '16px',
                            width: '52px',
                            height: '52px',
                            borderRadius: '16px',
                            display: 'grid',
                            placeItems: 'center',
                            color: '#fff',
                            background: 'rgba(10, 14, 30, 0.7)',
                            border: '1px solid rgba(255,255,255,0.14)',
                            backdropFilter: 'blur(14px)',
                          }}
                        >
                          <ArrowUpRight size={22} />
                        </motion.div>
                      </div>
                    </motion.div>

                    <div
                      style={{
                        display: 'grid',
                        gap: '12px',
                        marginTop: '22px',
                      }}
                    >
                      <div
                        style={{
                          padding: '12px 14px',
                          borderRadius: '18px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#dbe4f0',
                          fontSize: '0.88rem',
                        }}
                      >
                        Hover, tilt, and open the preview for a closer look.
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsPreviewOpen(false)}
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
                width: 'min(760px, 100%)',
                borderRadius: '30px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                background:
                  'linear-gradient(160deg, rgba(10, 12, 28, 0.96) 0%, rgba(16, 18, 38, 0.96) 100%)',
                boxShadow: '0 30px 80px rgba(2,6,23,0.72)',
              }}
            >
              <motion.button
                onClick={() => setIsPreviewOpen(false)}
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
                  background:
                    'radial-gradient(circle at center, rgba(199,112,240,0.18) 0%, rgba(10,12,28,0.1) 44%, rgba(10,12,28,0.92) 100%)',
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    width: '330px',
                    height: '330px',
                    borderRadius: '50%',
                    border: '1px solid rgba(199,112,240,0.25)',
                  }}
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    width: '260px',
                    height: '260px',
                    borderRadius: '50%',
                    border: '1px solid rgba(34,211,238,0.22)',
                  }}
                />

                <motion.img
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={myImg}
                  alt="Shrija Jha"
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    width: 'min(88vw, 360px)',
                    height: 'min(88vw, 360px)',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 18px 40px rgba(199,112,240,0.28))',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Home2
