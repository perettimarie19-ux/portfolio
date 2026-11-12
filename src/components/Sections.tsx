import { motion } from 'motion/react'
import { ArrowUpRight, Briefcase, GraduationCap, Sparkles } from 'lucide-react'
import { about, education, experience, projects, skillGroups, type SkillGroup, type Step } from '../data'
import { asset, Reveal, SectionHeading } from './ui'

const wrap = 'mx-auto max-w-6xl px-5 md:px-8'

export function About() {
  return (
    <section id="a-propos" className="py-20 md:py-28">
      <div className={wrap}>
        <SectionHeading eyebrow="À propos" title="Qui suis-je ?" />
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <Reveal className="space-y-5 text-base text-brown-muted md:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <ul className="grid gap-4">
            {about.values.map((v, i) => (
              <Reveal as="li" key={i} delay={i * 0.08} className="flex gap-4 rounded-2xl border border-line bg-cream p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky text-sky-ink">
                    <Sparkles className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-brown">{v.title}</h3>
                    <p className="mt-1 text-sm text-brown-muted">{v.text}</p>
                  </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

const tones: Record<SkillGroup['tone'], { card: string; chip: string; title: string }> = {
  butter: { card: 'bg-butter-soft border-butter', chip: 'bg-cream text-brown', title: 'text-brown' },
  sky: { card: 'bg-sky-soft border-sky', chip: 'bg-cream text-sky-ink', title: 'text-sky-ink' },
  burgundy: { card: 'bg-burgundy border-burgundy', chip: 'bg-cream/15 text-cream', title: 'text-cream' },
}

export function Skills() {
  return (
    <section id="competences" className="bg-cream py-20 md:py-28">
      <div className={wrap}>
        <SectionHeading
          eyebrow="Compétences"
          title="Ma boîte à outils"
          intro="Stratégie, IA, social media, CRM, ads et data : les outils du marketing d’aujourd’hui."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((g, i) => {
            const t = tones[g.tone]
            return (
              <Reveal key={g.title} delay={i * 0.08}>
                <motion.div
                  className={`h-full rounded-3xl border p-6 md:p-8 ${t.card}`}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', bounce: 0.2, visualDuration: 0.3 }}
                >
                  <h3 className={`text-2xl font-semibold ${t.title}`}>{g.title}</h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {g.items.map((s, j) => (
                      <li key={j} className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${t.chip}`}>
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const projectBg = ['from-butter to-butter-soft', 'from-sky to-sky-soft', 'from-[#e9c6c9] to-butter-soft']

export function Projects() {
  return (
    <section id="projets" className="py-20 md:py-28">
      <div className={wrap}>
        <SectionHeading eyebrow="Projets" title="Quelques réalisations" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const hasLink = p.link && p.link !== '#'
            const Card = hasLink ? motion.a : motion.div
            return (
              <Reveal key={i} delay={i * 0.08}>
                <Card
                  {...(hasLink ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {})}
                  className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-cream ${hasLink ? 'cursor-pointer' : ''}`}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', bounce: 0.2, visualDuration: 0.3 }}
                >
                  <div className={`flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br ${projectBg[i % 3]}`}>
                    {p.image ? (
                      <img
                        src={asset(p.image)}
                        alt={`Couverture du projet ${p.title}`}
                        loading="lazy"
                        width={1200}
                        height={675}
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <span className="rounded-full bg-cream/80 px-3 py-1 text-xs text-brown-muted">Visuel [à compléter]</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {p.context && (
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-burgundy">{p.context}</p>
                    )}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-brown">{p.title}</h3>
                      {hasLink && (
                        <ArrowUpRight
                          className="size-5 shrink-0 text-burgundy transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <p className="mt-3 text-sm text-brown-muted">{p.description}</p>
                    {p.role && (
                      <p className="mt-3 text-sm text-brown">
                        <span className="font-semibold">Mon rôle : </span>
                        {p.role}
                      </p>
                    )}
                    <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                      {p.tags.map((t, j) => (
                        <li key={j} className="rounded-full bg-sky-soft px-3 py-1 text-xs font-medium text-sky-ink">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Timeline({ title, icon, steps }: { title: string; icon: React.ReactNode; steps: Step[] }) {
  return (
    <div>
      <Reveal className="mb-6 flex items-center gap-3">
        <span className="flex size-10 items-center justify-center rounded-full bg-burgundy text-cream">{icon}</span>
        <h3 className="text-2xl font-semibold text-brown">{title}</h3>
      </Reveal>
      <ol className="relative ml-5 border-l-2 border-line">
        {steps.map((s, i) => (
          <Reveal as="li" key={i} delay={i * 0.08} className="relative pb-8 pl-7 last:pb-0">
              <span className="absolute top-1.5 -left-[9px] size-4 rounded-full border-2 border-cream bg-butter ring-2 ring-burgundy/40" />
              <p className="text-xs font-semibold uppercase tracking-wider text-burgundy">{s.period}</p>
              <h4 className="mt-1 text-lg font-semibold text-brown">{s.title}</h4>
              <p className="text-sm text-brown-muted">{s.place}</p>
              {Array.isArray(s.text) ? (
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-brown-muted marker:text-burgundy/60">
                  {s.text.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              ) : (
                s.text && <p className="mt-2 text-sm text-brown-muted">{s.text}</p>
              )}
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

export function Journey() {
  return (
    <section id="parcours" className="bg-butter-soft/60 py-20 md:py-28">
      <div className={wrap}>
        <SectionHeading eyebrow="Parcours" title="Expériences et formations" />
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          <Timeline title="Expériences" icon={<Briefcase className="size-5" aria-hidden="true" />} steps={experience} />
          <Timeline title="Formations" icon={<GraduationCap className="size-5" aria-hidden="true" />} steps={education} />
        </div>
      </div>
    </section>
  )
}
