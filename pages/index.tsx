import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}
