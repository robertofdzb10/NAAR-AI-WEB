import Navbar from '../shared/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Methodology from '../sections/Methodology'
import Solutions from '../sections/Solutions'
import Contact from '../sections/Contact'
import Footer from '../shared/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Methodology />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}