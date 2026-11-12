import { Contact, Footer } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About, Journey, Projects, Skills } from './components/Sections'

export default function App() {
  return (
    <>
      <a
        href="#a-propos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-burgundy focus:px-4 focus:py-2 focus:text-cream"
      >
        Aller au contenu
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
