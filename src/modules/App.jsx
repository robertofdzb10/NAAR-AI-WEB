import { useEffect, useRef, useState } from 'react'

import Navbar from '../shared/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Methodology from '../sections/Methodology'
import Solutions from '../sections/Solutions'
import Contact from '../sections/Contact'
import Footer from '../shared/Footer'
import ChatWidget from '../components/ChatWidget'
import ScrollIndicator from '../components/ScrollIndicator'

export default function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[data-index]'))
    if (!sections.length) return

    // --- función única para moverse entre secciones ---
    function goToSection(nextIdx) {
      const clamped = Math.max(0, Math.min(nextIdx, sections.length - 1))
      const el = sections.find(
        s => parseInt(s.getAttribute('data-index'), 10) === clamped
      )
      if (!el) return

      isScrollingRef.current = true
      setCurrentSection(clamped)

      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      setTimeout(() => {
        isScrollingRef.current = false
      }, 700)
    }

    // --- scroll rueda -> navega por pantallas ---
    function onWheel(e) {
      if (isScrollingRef.current) {
        e.preventDefault()
        return
      }

      if (e.deltaY > 0) {
        goToSection(currentSection + 1)
      } else if (e.deltaY < 0) {
        goToSection(currentSection - 1)
      }

      e.preventDefault()
    }

    // --- evento personalizado desde los botones internos ---
    function onExternalNav(e) {
      const idx = e.detail?.targetIndex
      if (typeof idx === 'number') {
        goToSection(idx)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('naar-goToSection', onExternalNav)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('naar-goToSection', onExternalNav)
    }
  }, [currentSection])

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar currentSection={currentSection} />

      {/* padding-top para no tapar el hero con la navbar fija */}
      <main className="flex-1 pt-[96px] md:pt-[96px] sm:pt-[88px]">
        <Hero />
        <About />
        <Methodology />
        <Solutions />
        <Contact />
      </main>

      <Footer />

      <ScrollIndicator currentIndex={currentSection} />
      <ChatWidget />
    </div>
  )
}
