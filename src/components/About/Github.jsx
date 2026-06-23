import { motion } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar'

function Github() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '30px',
        padding: '28px',
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
        transition={{ repeat: Infinity, duration: 11, ease: 'linear' }}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(120deg, transparent 0%, transparent 44%, rgba(255,255,255,0.05) 50%, transparent 56%, transparent 100%)',
          backgroundSize: '220% 100%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2
          style={{
            fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
            fontWeight: 800,
            margin: '0 0 14px 0',
            color: '#f8fafc',
            letterSpacing: '-0.03em',
          }}
        >
          Days I <span style={{ color: '#c770f0' }}>Code</span>
        </h2>
        <p
          style={{
            margin: '0 auto 28px',
            maxWidth: '560px',
            color: '#94a3b8',
            lineHeight: 1.8,
          }}
        >
          A live snapshot of how consistently I show up and keep building.
        </p>

        <motion.div
          whileHover={{ y: -4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            overflowX: 'auto',
            borderRadius: '24px',
            padding: '22px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <GitHubCalendar
            username="shrija-jha"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Github
