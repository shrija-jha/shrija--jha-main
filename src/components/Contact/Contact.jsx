import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import {
  Send,
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageCircle as WhatsAppIcon,
  Instagram,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Star,
  MessageCircle,
  Rocket,
} from 'lucide-react'
import Particle from '../Particle'
import useViewport from '../../hooks/useViewport'

/**
 * 🔧 Contact form configured with FormSubmit
 * Using Shrija Jha's email: Shrijajha143@gmail.com
 * 
 * 📝 SETUP INSTRUCTIONS:
 * 1. Go to https://formsubmit.co/
 * 2. Sign up for free account
 * 3. Create a new form with email: Shrijajha143@gmail.com
 * 4. Copy the form ID from the form URL and replace 'YOUR_FORM_ID' below
 */
// FormSubmit endpoint (direct to Gmail)
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/Shrijajha143@gmail.com'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


const contactInfo = [
  { icon: Mail, label: 'Email', value: 'Shrijajha143@gmail.com', href: 'mailto:Shrijajha143@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Noida, Uttar Pradesh, India', href: null },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/shrija-jha', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shrija-jha-304777279/', label: 'LinkedIn' },
  { icon: WhatsAppIcon, href: 'https://wa.me/918340437120', label: 'WhatsApp' },
  { icon: Instagram, href: 'https://www.instagram.com/shrija__jha/', label: 'Instagram' },
]

const GLASS = {
  background: 'rgba(19, 15, 42, 0.65)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(199, 112, 240, 0.15)',
  boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
  borderRadius: '18px',
  padding: '28px 32px',
}

const INPUT_STYLE = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(199, 112, 240, 0.2)',
  color: '#f5f5f5',
  fontSize: '0.875rem',
  outline: 'none',
  fontFamily: 'Raleway, sans-serif',
  transition: 'border-color 0.2s ease',
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const successRef = useRef(null)
  const { isMobile, isTablet } = useViewport()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFocus = (e) => {
    e.target.style.borderColor = 'rgba(199, 112, 240, 0.65)'
  }
  const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(199, 112, 240, 0.2)'
  }

  const validateEmail = (email) => EMAIL_REGEX.test(email)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Client-side validation
    if (!formData.name.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error')
      return
    }
    if (!validateEmail(formData.email)) {
      setStatus('error')
      return
    }
    
    setStatus('loading')
    try {
      const formDataObj = new FormData()
      formDataObj.append('name', formData.name)
      formDataObj.append('email', formData.email)
      formDataObj.append('subject', formData.subject)
      formDataObj.append('message', formData.message)
      formDataObj.append('_formsubmit_id', 'shrija-portfolio-contact')
      formDataObj.append('_email', 'Shrijajha143@gmail.com')
      formDataObj.append('_subject', `New Contact Form Submission from ${formData.name}`)
      formDataObj.append('_autoresponse', 'Thank you for your message! I will get back to you soon.')
      formDataObj.append('_next', 'https://formsubmit.co/thanks') // For AJAX success
      
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        body: formDataObj,
      })
      
      const text = await res.text()
      if (res.ok && text.includes('Thank you')) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        if (successRef.current) {
          gsap.from(successRef.current, {
            scale: 0.7,
            opacity: 0,
            duration: 0.45,
            ease: 'back.out(1.7)',
          })
        }
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 6000)
  }

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
          paddingTop: '110px',
          paddingBottom: '80px',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0d0b1e 0%, #130f2a 100%)',
        }}
      >
        <Particle />

        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '35%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: '#c770f0',
            opacity: 0.04,
            filter: 'blur(100px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1100px',
            margin: '0 auto',
            padding: isMobile ? '0 16px' : '0 24px',
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                marginBottom: '12px',
              }}
            >
              Get In <span style={{ color: '#c770f0' }}>Touch</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
              Have a project in mind or just want to say hello? I&apos;d love to hear from you!
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isTablet ? 'minmax(0, 1fr)' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: isMobile ? '20px' : '32px',
              alignItems: 'start',
            }}
          >
            {/* ── Left: Info ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div style={{ ...GLASS, padding: isMobile ? '22px 18px' : GLASS.padding }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px' }}>
                  Let&apos;s Talk
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
                  {contactInfo.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                      <div
                        style={{
                          flexShrink: 0,
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: 'rgba(199, 112, 240, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={18} style={{ color: '#c770f0' }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.72rem', color: '#6b7280', marginBottom: '2px' }}>
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            style={{ color: '#e5e7eb', textDecoration: 'none', fontSize: '0.9rem' }}
                          >
                            {value}
                          </a>
                        ) : (
                          <p style={{ color: '#e5e7eb', fontSize: '0.9rem', margin: 0 }}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '12px' }}>
                    Find me on
                  </p>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        title={label}
                        whileHover={{ scale: 1.2, y: -3 }}
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'rgba(199, 112, 240, 0.1)',
                          border: '1px solid rgba(199, 112, 240, 0.25)',
                          color: '#c770f0',
                          textDecoration: 'none',
                        }}
                      >
                        <Icon size={17} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating availability badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                style={{
                  ...GLASS,
                  padding: isMobile ? '22px 18px' : GLASS.padding,
                  textAlign: 'center',
                  background:
                    'linear-gradient(135deg, rgba(199, 112, 240, 0.08), rgba(124, 58, 237, 0.08))',
                }}
              >
                <p style={{ color: '#c770f0', fontWeight: 600, fontSize: '1rem', margin: '0 0 6px' }}>
                  🟢 Open to opportunities
                </p>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>
                  Available for freelance &amp; full-time roles
                </p>
              </motion.div>
            </motion.div>

            {/* ── Right: Form ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.25 }}
            >
              <div style={{ ...GLASS, padding: isMobile ? '22px 18px' : GLASS.padding }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                  <MessageCircle size={24} style={{ color: '#c770f0' }} />
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
                    Send a Message
                  </h2>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  >
                    <Sparkles size={18} style={{ color: '#7c3aed' }} />
                  </motion.div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Name + Email row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile
                        ? 'minmax(0, 1fr)'
                        : 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '16px',
                    }}
                  >
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af', marginBottom: '6px' }}>
                        <Star size={12} style={{ marginRight: '4px', color: '#c770f0' }} />
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="Shrija Jha"
                        required
                        style={INPUT_STYLE}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af', marginBottom: '6px' }}>
                        <Mail size={12} style={{ marginRight: '4px', color: '#c770f0' }} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="hello@example.com"
                        required
                        style={INPUT_STYLE}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af', marginBottom: '6px' }}>
                      <Rocket size={12} style={{ marginRight: '4px', color: '#c770f0' }} />
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="Project Collaboration"
                      required
                      style={INPUT_STYLE}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#9ca3af', marginBottom: '6px' }}>
                      <MessageCircle size={12} style={{ marginRight: '4px', color: '#c770f0' }} />
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project or just say hello…"
                      rows={5}
                      required
                      style={{ ...INPUT_STYLE, resize: 'vertical' }}
                    />
                  </div>

                  {/* Status messages */}
                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        ref={successRef}
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          background: 'rgba(74, 222, 128, 0.1)',
                          border: '1px solid rgba(74, 222, 128, 0.3)',
                        }}
                      >
                        <CheckCircle size={18} style={{ color: '#4ade80' }} />
                        <span style={{ color: '#4ade80', fontSize: '0.875rem' }}>
                          Message sent! I'll get back to you soon. ✨
                        </span>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 16px',
                          borderRadius: '10px',
                          background: 'rgba(248, 113, 113, 0.1)',
                          border: '1px solid rgba(248, 113, 113, 0.3)',
                        }}
                      >
                        <AlertCircle size={18} style={{ color: '#f87171' }} />
                        <span style={{ color: '#f87171', fontSize: '0.875rem' }}>
                          Oops! Something went wrong. Please try again.
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(199, 112, 240, 0.5)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '14px',
                      borderRadius: '12px',
                      border: 'none',
                      background:
                        status === 'loading'
                          ? 'rgba(199, 112, 240, 0.45)'
                          : 'linear-gradient(135deg, #c770f0, #7c3aed)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      fontFamily: 'Raleway, sans-serif',
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      boxShadow: '0 0 30px rgba(199, 112, 240, 0.3)',
                      transition: 'all 0.2s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{ width: '16px', height: '16px' }}
                        >
                          <svg viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
                            <path
                              fill="currentColor"
                              opacity="0.75"
                              d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                            />
                          </svg>
                        </motion.div>
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                          style={{ position: 'absolute', right: '16px' }}
                        >
                          <Rocket size={16} />
                        </motion.div>
                      </>
                    )}
                  </motion.button>

                  {/* Form tips */}
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '8px' }}>
                    <p style={{ margin: 0 }}>🔒 Your information is secure • 📧 Direct to my inbox</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </motion.div>
  )
}

export default Contact
