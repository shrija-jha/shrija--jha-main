function Home2Scene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.9,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '8%',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.16) 0%, transparent 70%)',
          filter: 'blur(22px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '8%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(199,112,240,0.18) 0%, transparent 72%)',
          filter: 'blur(26px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '18%',
          right: '22%',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          border: '1px solid rgba(199,112,240,0.16)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(233, 213, 255, 0.28) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
          opacity: 0.16,
        }}
      />
    </div>
  )
}

export default Home2Scene
