import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Particle from '../Particle'
import pdf from '../../Assets/Shrija_Jha_CV.pdf'
import useViewport from '../../hooks/useViewport'

function ResumeNew() {
  const [frameLoaded, setFrameLoaded] = useState(false)
  const { isMobile } = useViewport()

  useEffect(() => {
    const timer = window.setTimeout(() => setFrameLoaded(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  const DownloadBtn = ({ className = '' }) => (
    <motion.a
      href={pdf}
      target="_blank"
      rel="noreferrer"
      download="Shrija_Jha_CV.pdf"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-sm shadow-2xl hover:shadow-purple-500/25 transition-all ${className}`}
      style={isMobile ? { width: '100%', justifyContent: 'center' } : undefined}
    >
      <Download size={18} />
      Download CV
    </motion.a>
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen pt-28 pb-16 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
    >
      <Particle />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-8"
            style={{
              background: 'linear-gradient(to right, #c084fc, #f472b6, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            My <span>Resume</span>
          </h1>
          <DownloadBtn />
        </motion.div>

        {/* Curtain Container */}
        <motion.div
          className="relative mx-auto max-w-5xl h-[62vh] md:h-[84vh] rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl backdrop-blur-sm"
          style={{ background: 'rgba(7, 10, 24, 0.82)' }}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {!frameLoaded && (
            <div className="absolute inset-0 z-20 grid place-items-center bg-slate-950/80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
              />
            </div>
          )}

          <div className="absolute inset-0 z-10 p-3 md:p-5">
            <div className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.45)]">
              <iframe
                src={pdf}
                title="Shrija Jha Resume"
                className="h-full w-full"
                style={{ border: 'none', background: '#ffffff' }}
                onLoad={() => setFrameLoaded(true)}
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom Download */}
        <div className="text-center mt-12">
          <DownloadBtn />
        </div>
      </div>
    </motion.div>
  )
}

export default ResumeNew

