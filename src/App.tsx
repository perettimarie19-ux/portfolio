import { useEffect, useState } from 'react'
import { Contact, Footer } from './components/Contact'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectPage } from './components/ProjectPage'
import { About, Journey, Projects, Skills } from './components/Sections'
import { projects } from './data'

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHash()
  const slug = hash.match(/^#\/projets\/([\w-]+)/)?.[1]
  const project = slug ? projects.find((p) => p.slug === slug && p.slides > 0) : undefined

  useEffect(() => {
    if (project || !hash || hash.startsWith('#/')) return
    const id = decodeURIComponent(hash.slice(1))
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }, [hash, project])

  return (
    <>
      <a
        href="#a-propos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-burgundy focus:px-4 focus:py-2 focus:text-cream"
      >
        Aller au contenu
      </a>
      <Header />
      {project ? (
        <ProjectPage project={project} />
      ) : (
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  )
}
