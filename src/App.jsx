import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary font-body">
      <Navbar />
      <Hero />
      <Stats />

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.8fr_1.4fr] gap-6 mb-20">
        <About />
        <Skills />
      </section>

      <Projects />

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-20">
        <Experience />
        <Testimonials />
      </section>

      <Contact />
      <Footer />
    </div>
  )
}

export default App
