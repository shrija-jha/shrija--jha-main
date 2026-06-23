import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function HeroScene() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
    camera.position.set(0, 0.2, 8.5)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    container.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight('#d8b4fe', 1.6)
    const keyLight = new THREE.PointLight('#22d3ee', 16, 30, 2)
    keyLight.position.set(3, 2, 5)
    const fillLight = new THREE.PointLight('#c770f0', 9, 30, 2)
    fillLight.position.set(-4, -2, 4)
    const rimLight = new THREE.PointLight('#f9a8d4', 8, 30, 2)
    rimLight.position.set(0, 5, -4)

    scene.add(ambientLight, keyLight, fillLight, rimLight)

    const starsCount = 1500
    const positions = new Float32Array(starsCount * 3)
    for (let index = 0; index < starsCount; index += 1) {
      const stride = index * 3
      const radius = 5.5 + Math.random() * 5.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[stride] = radius * Math.sin(phi) * Math.cos(theta)
      positions[stride + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.65
      positions[stride + 2] = radius * Math.cos(phi)
    }

    const starsGeometry = new THREE.BufferGeometry()
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starsMaterial = new THREE.PointsMaterial({
      color: '#f5d0fe',
      size: 0.035,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    const pointer = { x: 0, y: 0 }
    let width = 0
    let height = 0
    let frameId = 0

    const setSize = () => {
      width = container.clientWidth
      height = container.clientHeight
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const handlePointerMove = (event) => {
      const bounds = container.getBoundingClientRect()
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1
      pointer.y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1)
    }

    const handlePointerLeave = () => {
      pointer.x = 0
      pointer.y = 0
    }

    const clock = new THREE.Clock()
    const animate = () => {
      const elapsed = clock.getElapsedTime()
      stars.rotation.y = elapsed * 0.025
      stars.rotation.x = elapsed * 0.01

      camera.position.x += (pointer.x * 0.28 - camera.position.x) * 0.03
      camera.position.y += (pointer.y * 0.18 + 0.2 - camera.position.y) * 0.03
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }

    const resizeObserver = new ResizeObserver(setSize)
    resizeObserver.observe(container)

    setSize()
    animate()

    container.addEventListener('pointermove', handlePointerMove)
    container.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      container.removeEventListener('pointermove', handlePointerMove)
      container.removeEventListener('pointerleave', handlePointerLeave)
      renderer.dispose()
      starsGeometry.dispose()
      starsMaterial.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '32px',
      }}
    />
  )
}

export default HeroScene
