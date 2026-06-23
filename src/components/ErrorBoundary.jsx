import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorMessage: '' }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || 'Unknown rendering error',
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio render error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            background: 'linear-gradient(135deg, #0d0b1e 0%, #130f2a 100%)',
            color: '#f8fafc',
          }}
        >
          <div
            style={{
              maxWidth: '760px',
              width: '100%',
              borderRadius: '20px',
              padding: '28px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(199, 112, 240, 0.25)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            }}
          >
            <h1 style={{ marginTop: 0, marginBottom: '12px', color: '#c770f0' }}>
              Rendering error
            </h1>
            <p style={{ marginTop: 0, color: '#d1d5db', lineHeight: 1.7 }}>
              A component crashed while loading the page. The app is now showing the error instead
              of a blank screen so we can debug it safely.
            </p>
            <pre
              style={{
                margin: 0,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                color: '#f8fafc',
                background: 'rgba(10, 12, 28, 0.8)',
                borderRadius: '14px',
                padding: '16px',
              }}
            >
              {this.state.errorMessage}
            </pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
