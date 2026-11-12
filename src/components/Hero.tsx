import { motion } from 'motion/react'
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '../data'
import { asset, Button, LinkedinIcon } from './ui'

const ease = [0.22, 1, 0.36, 1] as const
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease },
})

export function Hero() {
  const socials = [
    { href: profile.socials.linkedin, label: 'LinkedIn', icon: <LinkedinIcon /> },
    { href: `mailto:${profile.email}`, label: `Écrire à ${profile.email}`, icon: <Mail className="size-5" aria-hidden="true" /> },
  ]

  return (
    <section
      id="accueil"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-x-clip px-5 pt-24 pb-24 md:pt-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#4a2e1f0d_1px,transparent_1px),linear-gradient(to_bottom,#4a2e1f0d_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 size-80 rounded-full bg-sky/70 blur-3xl md:size-[28rem]" />
        <div className="absolute bottom-0 -left-32 size-72 rounded-full bg-butter/70 blur-3xl md:size-96" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', bounce: 0.3, visualDuration: 0.5 }}
          className="mb-6 inline-block"
        >
          <div className="relative mx-auto flex size-32 items-center justify-center overflow-hidden rounded-full border-4 border-cream bg-gradient-to-br from-butter via-butter-soft to-sky shadow-[0_12px_32px_-12px_rgba(123,30,46,0.45)] ring-2 ring-burgundy/30 md:size-40">
            {profile.photo ? (
              <img
                src={asset(profile.photo)}
                alt={`Portrait de ${profile.firstName} ${profile.lastName}`}
                width={128}
                height={128}
                className="size-full rounded-full object-cover"
              />
            ) : (
              <>
                <span className="font-display text-4xl font-semibold text-burgundy md:text-5xl">
                  {profile.firstName[0]}
                  {profile.lastName[0]}
                </span>
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-cream px-2.5 py-0.5 text-[11px] text-brown-muted">
                  Photo [à compléter]
                </span>
              </>
            )}
          </div>
        </motion.div>

        <motion.p
          {...rise(0.25)}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-line bg-cream/70 px-4 py-1.5 text-sm text-brown-muted"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-burgundy/50 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-burgundy" />
          </span>
          Disponibilité : {profile.availability}
        </motion.p>

        <motion.h1 {...rise(0.3)} className="mb-5 text-[2.6rem] font-semibold text-brown sm:text-6xl md:text-7xl">
          Bonjour, je suis <span className="italic text-burgundy">{profile.firstName}</span> {profile.lastName}.
        </motion.h1>

        <motion.p {...rise(0.4)} className="mx-auto mb-3 max-w-3xl font-display text-xl text-brown-muted md:text-2xl">
          {profile.role}
        </motion.p>
        <motion.p {...rise(0.45)} className="mx-auto mb-3 max-w-2xl text-base text-brown-muted md:text-lg">
          {profile.tagline}
        </motion.p>
        <motion.p {...rise(0.5)} className="mb-8 inline-flex items-center gap-2 text-sm text-brown-muted">
          <MapPin className="size-4 text-burgundy" aria-hidden="true" /> {profile.location}
        </motion.p>

        <motion.div {...rise(0.55)} className="mb-10 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <Button href="#contact">
            <Mail className="size-4" aria-hidden="true" /> Me contacter
          </Button>
          <Button href="#projets" variant="ghost">
            Voir mes projets <ArrowDown className="size-4" aria-hidden="true" />
          </Button>
          {profile.cvUrl !== '#' && (
            <Button href={asset(profile.cvUrl)} variant="ghost" target="_blank" rel="noreferrer">
              <Download className="size-4" aria-hidden="true" /> Mon CV
            </Button>
          )}
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex justify-center gap-3"
          aria-label="Réseaux"
        >
          {socials.map((s) => (
            <li key={s.label}>
              <motion.a
                href={s.href}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                aria-label={s.label}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-sky-soft text-brown transition-colors duration-200 hover:bg-burgundy hover:text-cream"
              >
                {s.icon}
              </motion.a>
            </li>
          ))}
        </motion.ul>
      </div>

      <motion.a
        href="#a-propos"
        aria-label="Aller à la section À propos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-6 left-1/2 hidden size-11 -translate-x-1/2 items-center justify-center text-brown-muted hover:text-burgundy sm:flex"
      >
        <ArrowDown className="size-6" />
      </motion.a>
    </section>
  )
}
