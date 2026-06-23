import { useEffect, useState } from 'react'

function useViewport() {
  const [width, setWidth] = useState(() =>
    typeof window === 'undefined' ? 1280 : window.innerWidth,
  )

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    width,
    isMobile: width < 768,
    isTablet: width < 1024,
    isLaptop: width < 1180,
  }
}

export default useViewport
