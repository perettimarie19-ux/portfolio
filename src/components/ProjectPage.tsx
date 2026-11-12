import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ExternalLink, Mail } from 'lucide-react'
import { useEffect } from 'react'
import { profile, projects, type Project } from '../data'
import { asset, Button } from './ui'

const ease = [0.22, 1, 0.36, 1] as const

export const projectHref = (p: Project) => `#/projets/${p.slug}`

const slideSrc = (p: Project, n: number) => asset(`/projets/${p.slug}/${String(n).padStart(2, '0')}.jpg`)

export function ProjectPage({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  useEffect(() => {
    document.title = `${project.title} — ${profile.firstName} ${profile.lastName}`
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => {
      document.title = `${profile.firstName} ${profile.lastName} — Portfolio`
    }
  }, [project])

  return (
    <main className="pt-24 pb-20 md:pt-32">
      <article className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.a
          href="#projets"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-brown-muted hover:text-burgundy"
          whileHover={{ x: -3 }}
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Retour aux projets
        </motion.a>

        <motion.header
          className="mt-6 mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">{project.context}</p>
          <h1 className="text-4xl font-semibold text-brown md:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-base text-brown-muted md:text-lg">{project.description}</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            {project.role && (
              <p className="rounded-full bg-burgundy px-4 py-2 text-sm text-cream">
                <span className="font-semibold">Mon rôle : </span>
                {project.role}
              </p>
            )}
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <li key={t} className="rounded-full bg-sky-soft px-3 py-1.5 text-xs font-medium text-sky-ink">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-burgundy underline-offset-4 hover:underline"
            >
              Voir le projet en ligne <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          )}
        </motion.header>

        <section aria-label="Présentation du projet">
          <div className="mb-6 flex items-end justify-between gap-4 border-b border-line pb-4">
            <h2 className="text-2xl font-semibold text-brown md:text-3xl">La présentation</h2>
            <p className="text-sm text-brown-muted">{project.slides} diapositives</p>
          </div>
          <p className="mb-6 text-sm text-brown-muted">Touchez ou cliquez sur une diapositive pour l’agrandir.</p>

          <ol className="space-y-5 md:space-y-8">
            {Array.from({ length: project.slides }, (_, i) => i + 1).map((n) => (
              <motion.li
                key={n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -8% 0px' }}
                transition={{ duration: 0.45, ease }}
              >
                <a
                  href={slideSrc(project, n)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Agrandir la diapositive ${n} sur ${project.slides}`}
                  className="group relative block overflow-hidden rounded-xl border border-line bg-butter-soft shadow-[0_16px_40px_-28px_rgba(74,46,31,0.5)] md:rounded-2xl"
                >
                  <img
                    src={slideSrc(project, n)}
                    alt={`${project.title} — diapositive ${n}`}
                    loading={n <= 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    width={1600}
                    height={899}
                    className="block aspect-video w-full object-cover"
                  />
                  <span className="absolute right-2 bottom-2 rounded-full bg-brown/75 px-2.5 py-0.5 text-[11px] font-medium text-cream md:right-3 md:bottom-3">
                    {n} / {project.slides}
                  </span>
                </a>
              </motion.li>
            ))}
          </ol>
        </section>

        <nav aria-label="Autres projets" className="mt-16 grid gap-4 sm:grid-cols-2">
          {[
            { p: prev, label: 'Projet précédent', icon: <ArrowLeft className="size-4" aria-hidden="true" />, align: '' },
            { p: next, label: 'Projet suivant', icon: <ArrowRight className="size-4" aria-hidden="true" />, align: 'sm:text-right' },
          ].map(({ p, label, icon, align }) => (
            <motion.a
              key={label}
              href={projectHref(p)}
              className={`flex min-h-20 flex-col justify-center rounded-2xl border border-line bg-cream p-5 transition-colors duration-200 hover:border-burgundy ${align}`}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', bounce: 0.2, visualDuration: 0.3 }}
            >
              <span className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy ${align ? 'sm:justify-end' : ''}`}>
                {label === 'Projet précédent' && icon}
                {label}
                {label === 'Projet suivant' && icon}
              </span>
              <span className="mt-1 font-display text-lg font-semibold text-brown">{p.title}</span>
            </motion.a>
          ))}
        </nav>

        <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl bg-butter-soft p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold text-brown md:text-3xl">Envie d’en parler ?</h2>
          <p className="max-w-xl text-brown-muted">Je serai ravie de vous présenter ce projet plus en détail.</p>
          <Button href="#contact">
            <Mail className="size-4" aria-hidden="true" /> Me contacter
          </Button>
        </div>
      </article>
    </main>
  )
}
