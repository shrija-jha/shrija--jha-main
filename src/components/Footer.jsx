import { motion } from 'framer-motion'
import { Github, MessageCircle as WhatsAppIcon, Linkedin, Instagram, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/shrija-jha', label: 'GitHub' },
  { icon: WhatsAppIcon, href: 'https://wa.me/918340437120', label: 'WhatsApp' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shrija-jha-304777279/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/shrija__jha/', label: 'Instagram' },
]

function Footer() {
  return (
    <footer
      style={{
        background: '#06040f',
        borderTop: '1px solid rgba(199, 112, 240, 0.1)',
        padding: '24px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <p style={{ color: '#9ca3af', fontSize: '0.875rem', margin: 0 }}>
          Designed &amp; Developed by{' '}
          <span style={{ color: '#c770f0', fontWeight: 600 }}>Shrija Jha</span>
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                background: 'rgba(199, 112, 240, 0.08)',
                border: '1px solid rgba(199, 112, 240, 0.2)',
                color: '#c770f0',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        <p
          style={{
            color: '#6b7280',
            fontSize: '0.875rem',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          © {new Date().getFullYear()} SJ. Made with{' '}
          <Heart size={13} style={{ color: '#c770f0', fill: '#c770f0' }} />
        </p>
      </div>
    </footer>
  )
}

export default Footer
