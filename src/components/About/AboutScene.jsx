import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

function EnergyOrb({ position, color, scale, speed }) {
  const meshRef = useRef(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * speed * 0.2
    meshRef.current.rotation.y += delta * speed * 0.35
  })

  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 10]} />
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.18}
          roughness={0.2}
          metalness={0.45}
        />
      </mesh>
    </Float>
  )
}

function AboutScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.95,
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 46 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.25} />
        <pointLight position={[3, 3, 2]} intensity={18} color="#c770f0" />
        <pointLight position={[-3, -2, 3]} intensity={14} color="#22d3ee" />

        <Sparkles count={46} scale={[14, 8, 8]} speed={0.45} size={2.6} color="#f5d0fe" />

        <EnergyOrb position={[-2.9, 1.2, -0.6]} color="#22d3ee" scale={0.9} speed={1.4} />
        <EnergyOrb position={[3, -1, -1.2]} color="#c770f0" scale={1.2} speed={1.9} />
      </Canvas>
    </div>
  )
}

export default AboutScene
