import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei'

function FloatingShard({ position, color, scale, speed }) {
  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.16}
          distort={0.42}
          speed={2.4}
          roughness={0.08}
          metalness={0.55}
        />
      </mesh>
    </Float>
  )
}

function ProjectScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.95,
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 48 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#0d0b1e']} />
        <fog attach="fog" args={['#0d0b1e', 8, 18]} />
        <ambientLight intensity={1.1} />
        <pointLight position={[3, 4, 4]} intensity={18} color="#c770f0" />
        <pointLight position={[-4, -2, 2]} intensity={10} color="#22d3ee" />

        <Sparkles count={70} size={3} scale={[12, 8, 6]} speed={0.35} color="#d8b4fe" />

        <FloatingShard position={[-3.8, 1.9, -0.5]} color="#22d3ee" scale={1.15} speed={1.8} />
        <FloatingShard position={[3.6, 2.2, -1.2]} color="#c770f0" scale={1.45} speed={2.2} />
        <FloatingShard position={[-1.4, -2.2, -0.8]} color="#818cf8" scale={0.95} speed={1.6} />
        <FloatingShard position={[1.8, -1.7, -1.4]} color="#f472b6" scale={1.25} speed={2.4} />
      </Canvas>
    </div>
  )
}

export default ProjectScene
