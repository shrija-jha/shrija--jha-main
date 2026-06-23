import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/ResumeNew'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
        <Navbar />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
