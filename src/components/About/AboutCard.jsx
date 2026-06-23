import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const activities = ['Playing Games', 'Dancing', 'Travelling']

function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '30px',
        padding: '30px',
        background:
          'linear-gradient(145deg, rgba(12, 11, 31, 0.84) 0%, rgba(18, 21, 42, 0.86) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 24px 60px rgba(2, 6, 23, 0.36)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
      }}
    >
      <motion.div
        animate={{ backgroundPositionX: ['0%', '100%'] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(120deg, transparent 0%, transparent 44%, rgba(255,255,255,0.05) 50%, transparent 56%, transparent 100%)',
          backgroundSize: '220% 100%',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(220px, 0.8fr)',
          gap: '24px',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 15px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#cbd5e1',
              fontSize: '0.82rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Story Layer
          </div>

          <p style={{ color: '#d1d5db', lineHeight: 1.95, margin: 0, fontSize: '1rem' }}>
            Hi Everyone, I am <span style={{ color: '#c770f0', fontWeight: 700 }}>Shrija Jha</span>{' '}
            from <span style={{ color: '#22d3ee', fontWeight: 700 }}>Noida, India</span>.
            <br />
            <br />
            I am currently a Web Developer at IHO Digital, specializing in creating immersive, high-performance interfaces using React, Next.js, and Tailwind CSS.
            <br />
            <br />
            Beyond writing clean code, my background includes working as a Project Executive, where I acted as the essential bridge between project managers and internal technical teams. This means I don't just build websites—I understand project lifecycles, team communication, and how to align technical execution with business goals.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '14px',
            alignContent: 'start',
          }}
        >
          <div
            style={{
              padding: '18px',
              borderRadius: '22px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <h3 style={{ margin: '0 0 12px 0', color: '#f8fafc', fontSize: '1rem', fontWeight: 800 }}>
              Beyond the screen
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {activities.map((activity) => (
                <motion.li
                  key={activity}
                  whileHover={{ x: 6 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#d1d5db',
                    padding: '8px 0',
                  }}
                >
                  <ChevronRight size={16} style={{ color: '#c770f0', flexShrink: 0 }} />
                  {activity}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.blockquote
            whileHover={{ y: -4 }}
            style={{
              margin: 0,
              padding: '18px',
              borderRadius: '22px',
              background: 'linear-gradient(135deg, rgba(199,112,240,0.12), rgba(34,211,238,0.08))',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <p style={{ fontStyle: 'italic', color: '#e9d5ff', margin: '0 0 8px 0', lineHeight: 1.7 }}>
              &quot;Strive to build things that make a difference!&quot;
            </p>
            <footer style={{ fontSize: '0.9rem', color: '#94a3b8' }}>- Shrija Jha</footer>
          </motion.blockquote>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutCard