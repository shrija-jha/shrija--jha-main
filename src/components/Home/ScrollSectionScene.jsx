function ScrollSectionScene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.95,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '-8%',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)',
          filter: 'blur(18px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '18%',
          right: '-6%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(199,112,240,0.18) 0%, transparent 72%)',
          filter: 'blur(24px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '24%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '1px solid rgba(216,150,248,0.18)',
          boxShadow: '0 0 50px rgba(199,112,240,0.12)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(245, 208, 254, 0.32) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
          opacity: 0.18,
        }}
      />
    </div>
  )
}

export default ScrollSectionScene
