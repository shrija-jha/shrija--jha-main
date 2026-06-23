import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, FolderOpen, FileText, Mail, Menu, X } from 'lucide-react'
import logo from '../Assets/logo.png'

const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/project', label: 'Projects', icon: FolderOpen },
  { path: '/resume', label: 'Resume', icon: FileText },
  { path: '/contact', label: 'Contact', icon: Mail },
]

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === 'undefined' ? 1280 : window.innerWidth,
  )
  const location = useLocation()

  const isMobile = viewportWidth < 960
  const isCompact = viewportWidth < 1180

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleResize = () => setViewportWidth(window.innerWidth)

    handleResize()
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location, isMobile])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        ...(scrolled
          ? {
              background: 'rgba(13, 11, 30, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 4px 30px rgba(199, 112, 240, 0.08)',
              borderBottom: '1px solid rgba(199, 112, 240, 0.1)',
            }
          : { background: 'transparent' }),
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: isMobile ? '0 1rem' : '0 1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '18px',
            height: isMobile ? '74px' : '78px',
          }}
        >
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              filter: 'drop-shadow(0 0 8px rgba(199, 112, 240, 0.5))',
              transform: 'scale(1.06)',
              flexShrink: 0,
            }}
            onMouseEnter={(event) => {
              if (isMobile) return
              event.currentTarget.style.filter =
                'drop-shadow(0 0 15px rgba(199, 112, 240, 0.8)) drop-shadow(0 0 25px rgba(199, 112, 240, 0.4))'
              event.currentTarget.style.transform = 'scale(1.12)'
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(199, 112, 240, 0.5))'
              event.currentTarget.style.transform = 'scale(1.06)'
            }}
          >
            <img
              src={logo}
              alt="SJ"
              style={{ height: isMobile ? '2.1rem' : '2.5rem', width: 'auto' }}
            />
          </Link>

          {!isMobile && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isCompact ? '4px' : '8px',
                flex: 1,
                minWidth: 0,
              }}
            >
              {navLinks.map(({ path, label, icon: Icon }) => {
                const isActive = location.pathname === path
                return (
                  <Link
                    key={path}
                    to={path}
                    style={{ textDecoration: 'none', position: 'relative' }}
                  >
                    <motion.div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: isCompact ? '6px' : '8px',
                        padding: isCompact ? '11px 16px' : '12px 20px',
                        borderRadius: '14px',
                        fontSize: isCompact ? '0.9rem' : '0.95rem',
                        fontWeight: 600,
                        color: isActive ? '#c770f0' : '#d1d5db',
                        background: isActive ? 'rgba(199, 112, 240, 0.15)' : 'transparent',
                        border: isActive
                          ? '1px solid rgba(199, 112, 240, 0.4)'
                          : '1px solid transparent',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        boxShadow: isActive ? '0 0 20px rgba(199, 112, 240, 0.3)' : 'none',
                        minWidth: isCompact ? '104px' : '120px',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap',
                      }}
                      whileHover={{
                        color: '#c770f0',
                        background: 'rgba(199, 112, 240, 0.15)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 0 20px rgba(199, 112, 240, 0.3)',
                        border: '1px solid rgba(199, 112, 240, 0.5)',
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={isCompact ? 17 : 18} />
                      {label}
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          )}

          {isMobile && (
            <motion.button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'rgba(199, 112, 240, 0.1)',
                border: '1px solid rgba(199, 112, 240, 0.2)',
                borderRadius: '12px',
                padding: '12px',
                color: '#c770f0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 10px rgba(199, 112, 240, 0.1)',
                filter: 'drop-shadow(0 0 5px rgba(199, 112, 240, 0.2))',
                flexShrink: 0,
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            style={{
              background: 'rgba(13, 11, 30, 0.97)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(199, 112, 240, 0.1)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '12px 16px 18px' }}>
              {navLinks.map(({ path, label, icon: Icon }) => {
                const isActive = location.pathname === path
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <motion.div
                      whileHover={{ x: 6, background: 'rgba(199, 112, 240, 0.12)' }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        marginBottom: '6px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: isActive ? '#c770f0' : '#d1d5db',
                        background: isActive ? 'rgba(199, 112, 240, 0.15)' : 'transparent',
                        border: isActive
                          ? '1px solid rgba(199, 112, 240, 0.3)'
                          : '1px solid transparent',
                        transition: 'all 0.3s ease',
                        boxShadow: isActive ? '0 0 15px rgba(199, 112, 240, 0.2)' : 'none',
                      }}
                    >
                      <Icon size={18} />
                      {label}
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar
