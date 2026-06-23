import { motion } from 'framer-motion'
import {
  Bot,
  Boxes,
  Flame,
  Globe,
  Landmark,
  Music4,
  Orbit,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Gem,
  Armchair
} from 'lucide-react'
import Particle from '../Particle'
import ProjectCard from './ProjectCards'
import ProjectScene from './ProjectScene'
import leaf from '../../Assets/Projects/page.png'
import emotion from '../../Assets/Projects/temperature.jpg'
import editor from '../../Assets/Projects/zing.jpg'
import chatify from '../../Assets/Projects/gym.jpg'
import suicide from '../../Assets/Projects/sephora.jpg'
import bitsOfCode from '../../Assets/Projects/rock.jpg'
import ihoDigital from '../../Assets/iho.png'
import aarvifarm from '../../Assets/aarvi.png'

// Make sure to add these two screenshot images to your Assets/Projects folder!
import furnitureImg from '../../Assets/Projects/furniture.png'
import jewelryImg from '../../Assets/Projects/jewelry.png'

import useViewport from '../../hooks/useViewport'

const freelanceProjects = [
  {
    img: ihoDigital,
    title: 'IHO Digital',
    description:
      'A digital agency website focused on bold messaging, clear services, and a stronger conversion path.',
    github: 'https://github.com/shrija-jha/IHO',
    demo: 'https://ihodigital.com/',
    accent: '#22d3ee',
    icon: Globe,
    category: 'Agency Experience',
    section: 'Freelance',
  },
  {
    img: aarvifarm,
    title: 'Aarvi Farms',
    description:
      'A luxury farmhouse showcase with elegant branding, clean listing flow, and hospitality-led storytelling.',
    demo: 'https://aarvifarm.com/',
    accent: '#34d399',
    icon: Landmark,
    category: 'Luxury Property',
    section: 'Freelance',
  },
  {
    img: furnitureImg,
    title: 'Shrija Furniture',
    description:
      'A modern e-commerce platform for premium furniture, featuring clean product displays and intuitive navigation.',
    demo: 'https://shrijafurniture.vercel.app/',
    accent: '#f59e0b',
    icon: Armchair,
    category: 'E-Commerce',
    section: 'Freelance',
  },
  {
    img: jewelryImg,
    title: 'Jewelry Store',
    description:
      'An elegant digital storefront for fine jewelry, designed with a luxury aesthetic and seamless shopping experience.',
    demo: 'https://jewelry-store-pi.vercel.app/',
    accent: '#e879f9',
    icon: Gem,
    category: 'Luxury Retail',
    section: 'Freelance',
  },
]

const personalProjects = [
  {
    img: editor,
    title: 'Zing MP3 Music Player',
    description: 'A music-player UI with playlist browsing and a more immersive playback experience.',
    github: 'https://github.com/shrija-jha/music_player',
    demo: 'https://shrija-jha.github.io/music_player/',
    accent: '#f472b6',
    icon: Music4,
    category: 'Frontend UI',
    section: 'Personal',
  },
  {
    img: leaf,
    title: 'Login / Signup Page',
    description: 'A polished authentication layout with crisp visual hierarchy and clean form structure.',
    github: 'https://github.com/shrija-jha/Login-Signup-Page',
    demo: 'https://shrija-jha.github.io/Login-Signup-Page/',
    accent: '#a78bfa',
    icon: ShieldCheck,
    category: 'Auth Concept',
    section: 'Personal',
  },
  {
    img: suicide,
    title: 'Sephora Cosmetics',
    description: 'A beauty-commerce concept centered on product presentation and a stylish retail feel.',
    github: 'https://github.com/shrija-jha/Sephora_Cosmetics',
    accent: '#fb7185',
    icon: Flame,
    category: 'E-Commerce',
    section: 'Personal',
  },
  {
    img: emotion,
    title: 'Temperature Conversion',
    description: 'A compact utility tool with quick conversion logic and a clear single-task interface.',
    github: 'https://github.com/shrija-jha/temperature-conversion',
    demo: 'https://shrija-jha.github.io/temperature-conversion/',
    accent: '#38bdf8',
    icon: Bot,
    category: 'Micro Tool',
    section: 'Personal',
  },
  {
    img: chatify,
    title: 'Muscle Headquarter',
    description: 'A fitness website concept with strong sections, bold calls to action, and responsive layout.',
    github: 'https://github.com/shrija-jha/Muscle-Headquarter',
    demo: 'https://shrija-jha.github.io/Muscle-Headquarter/',
    accent: '#f59e0b',
    icon: Rocket,
    category: 'Brand Website',
    section: 'Personal',
  },
  {
    img: bitsOfCode,
    title: 'Rock Paper Scissors',
    description: 'A playful browser game with clear feedback, simple logic, and lightweight motion.',
    github: 'https://github.com/shrija-jha/rock-paper-scissors',
    demo: 'https://shrija-jha.github.io/rock-paper-scissors/',
    accent: '#60a5fa',
    icon: ScanSearch,
    category: 'Browser Game',
    section: 'Personal',
  },
]

const panelStyle = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '30px',
  border: '1px solid rgba(255,255,255,0.08)',
  background: 'linear-gradient(145deg, rgba(12, 11, 29, 0.82) 0%, rgba(10, 13, 27, 0.86) 100%)',
  boxShadow: '0 24px 70px rgba(2, 6, 23, 0.42)',
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
}

function SectionBlock({ eyebrow, title, accent, description, projects }) {
  const { isMobile } = useViewport()
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      style={{
        ...panelStyle,
        padding: isMobile ? '18px' : '28px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-10% auto auto -8%',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: `${accent}1f`,
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            color: accent,
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '10px',
          }}
        >
          {eyebrow}
        </div>
        <h2
          style={{
            margin: 0,
            color: '#f8fafc',
            fontSize: 'clamp(1.55rem, 3vw, 2.35rem)',
            fontWeight: 800,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            margin: '10px 0 0 0',
            color: '#94a3b8',
            maxWidth: '640px',
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: isMobile
            ? 'minmax(0, 1fr)'
            : 'repeat(auto-fit, minmax(255px, 1fr))',
          gap: '18px',
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`${title}-${project.title}`} index={index} {...project} />
        ))}
      </div>
    </motion.section>
  )
}

function Projects() {
  const { isMobile, isTablet } = useViewport()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          paddingTop: '110px',
          paddingBottom: '80px',
          background:
            'radial-gradient(circle at top, rgba(34, 211, 238, 0.12) 0%, rgba(13, 11, 30, 0) 24%), linear-gradient(180deg, #090816 0%, #0d0b1e 48%, #090816 100%)',
          overflow: 'hidden',
        }}
      >
        <Particle />
        <ProjectScene />

        <div
          style={{
            position: 'absolute',
            top: '120px',
            right: '-80px',
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'rgba(199, 112, 240, 0.12)',
            filter: 'blur(90px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1320px',
            margin: '0 auto',
            padding: isMobile ? '0 16px' : '0 24px',
            display: 'grid',
            gap: isMobile ? '18px' : '26px',
          }}
        >
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              ...panelStyle,
              padding: isMobile ? '22px 18px' : isTablet ? '30px 24px' : '40px 34px',
              minHeight: 'clamp(340px, 52vw, 500px)',
            }}
          >
            <motion.div
              aria-hidden="true"
              animate={{ x: [-10, 18, -10], y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-30px',
                width: '280px',
                height: '280px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 68%)',
                filter: 'blur(28px)',
                pointerEvents: 'none',
              }}
            />

            <motion.div
              aria-hidden="true"
              animate={{ x: [0, 16, 0], y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: '-90px',
                left: '-60px',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(199,112,240,0.18) 0%, transparent 68%)',
                filter: 'blur(34px)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(115deg, rgba(255,255,255,0.05) 0%, transparent 32%, transparent 60%, rgba(34,211,238,0.1) 100%)',
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: isTablet ? 'center' : 'space-between',
                gap: '28px',
              }}
            >
              <div style={{ flex: '1 1 560px', maxWidth: '760px', textAlign: isTablet ? 'center' : 'left' }}>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: '999px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#cbd5e1',
                    fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                  }}
                >
                  <Orbit size={16} color="#22d3ee" />
                  My Work
                </motion.div>

                <h1
                  style={{
                    margin: 0,
                    color: '#f8fafc',
                    fontSize: 'clamp(2.6rem, 8vw, 5.4rem)',
                    lineHeight: 0.9,
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                  }}
                >
                  Built with care.
                  <br />
                  <motion.span
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
                    style={{
                      display: 'inline-block',
                      background:
                        'linear-gradient(90deg, #f8fafc 0%, #22d3ee 35%, #c770f0 68%, #f8fafc 100%)',
                      backgroundSize: '200% 200%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 24px rgba(34,211,238,0.12)',
                    }}
                  >
                    Shown with motion.
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.12 }}
                  style={{
                    margin: isTablet ? '20px auto 0' : '20px 0 0 0',
                    color: '#94a3b8',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    lineHeight: 1.8,
                    maxWidth: '650px',
                  }}
                >
                  A selected collection of freelance websites and personal frontend builds,
                  presented with a cleaner structure, subtle transformations, live background
                  motion, and interactive project previews.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30, rotateY: -12 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.85, delay: 0.16 }}
                whileHover={{ rotateY: 8, rotateX: -4, y: -6 }}
                style={{
                  flex: '0 1 320px',
                  minHeight: 'clamp(200px, 30vw, 280px)',
                  padding: 'clamp(16px, 4vw, 22px)',
                  borderRadius: '28px',
                  background:
                    'linear-gradient(160deg, rgba(8, 12, 26, 0.82) 0%, rgba(17, 26, 45, 0.88) 100%)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  boxShadow: '0 28px 60px rgba(2, 6, 23, 0.34)',
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <motion.div
                  aria-hidden="true"
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-60px',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />

                <motion.div
                  aria-hidden="true"
                  animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.65, 0.35] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    inset: '22% 18% auto auto',
                    width: '110px',
                    height: '110px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(34,211,238,0.28) 0%, transparent 70%)',
                    filter: 'blur(10px)',
                  }}
                />

                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    display: 'grid',
                    placeItems: 'center',
                    background: 'linear-gradient(145deg, rgba(34,211,238,0.9), rgba(199,112,240,0.85))',
                    boxShadow: '0 16px 30px rgba(34,211,238,0.2)',
                    marginBottom: '18px',
                  }}
                >
                  <Boxes size={28} color="#08101f" />
                </motion.div>

                <div
                  style={{
                    position: 'relative',
                    height: '170px',
                    display: 'grid',
                    placeItems: 'center',
                    marginTop: '8px',
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                    style={{
                      position: 'absolute',
                      width: '180px',
                      height: '180px',
                      borderRadius: '28px',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  />
                  <motion.div
                    animate={{ rotate: [360, 0] }}
                    transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
                    style={{
                      position: 'absolute',
                      width: '120px',
                      height: '120px',
                      borderRadius: '24px',
                      border: '1px solid rgba(34,211,238,0.3)',
                    }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                    style={{
                      width: '92px',
                      height: '92px',
                      borderRadius: '26px',
                      display: 'grid',
                      placeItems: 'center',
                      background:
                        'linear-gradient(145deg, rgba(34,211,238,0.9), rgba(199,112,240,0.85))',
                      boxShadow: '0 18px 32px rgba(34,211,238,0.18)',
                    }}
                  >
                    <Boxes size={38} color="#08101f" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          <SectionBlock
            eyebrow="Section 02"
            title="Freelance Projects"
            accent="#22d3ee"
            description="Client work focused on production-ready websites, stronger storytelling, and live launch quality."
            projects={freelanceProjects}
          />

          <SectionBlock
            eyebrow="Section 03"
            title="Personal Projects"
            accent="#c770f0"
            description="Frontend experiments, utility tools, and interface concepts built with React, motion, and custom styling."
            projects={personalProjects}
          />
        </div>
      </section>
    </motion.div>
  )
}

export default Projects