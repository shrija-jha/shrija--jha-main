import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Delay smooth scroll to sync with AnimatePresence exit animations (~150ms)
    const timer = setTimeout(() => {
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        // Fallback smooth scroll polyfill
        window.scrollTo({ top: 0 })
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop > 0) {
          window.requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          })
        }
      }
    }, 150)
    return () => clearTimeout(timer)
  }, [pathname])
  return null
}

export default ScrollToTop
