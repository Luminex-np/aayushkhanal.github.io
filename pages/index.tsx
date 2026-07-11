import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Miscellaneous from '../components/Miscellaneous'
import Footer from '../components/Footer'
import Starfield from '../components/Starfield'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0f]">
      <Starfield />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Miscellaneous />
      <Footer />
      <BackToTop />
    </main>
  )
}
