import { motion } from 'motion/react'
import { Mail, MapPin, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { profile } from '../data'
import { LinkedinIcon, Reveal, SectionHeading } from './ui'
import { ContactCard } from './contact-card'

const field =
  'mt-2 block min-h-12 w-full rounded-xl border border-line bg-cream px-4 py-3 text-base text-brown placeholder:text-brown-muted/60 transition-colors duration-200 focus:border-burgundy focus:outline-none focus:ring-2 focus:ring-burgundy/20'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Contact portfolio — ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\n${data.get('name')} — ${data.get('email')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow="Contact" title="Travaillons ensemble" />
        <Reveal>
          <ContactCard
            title="Écrivez-moi"
            description="Une offre, une question ou simplement envie d'échanger ? Je vous réponds avec plaisir."
            contactInfo={[
              { icon: Mail, label: 'E-mail', value: profile.email },
              { icon: MapPin, label: 'Localisation', value: profile.location },
            ]}
            footer={
              <div className="flex gap-2 pt-2">
                {[
                  { href: profile.socials.linkedin, label: 'LinkedIn', icon: <LinkedinIcon /> },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                    aria-label={s.label}
                    className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-line text-brown transition-colors duration-200 hover:border-burgundy hover:bg-burgundy hover:text-cream"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            }
          >
            <form onSubmit={onSubmit} className="w-full space-y-4">
              <label className="block text-sm font-medium text-brown">
                Nom
                <input name="name" required autoComplete="name" className={field} placeholder="Votre nom" />
              </label>
              <label className="block text-sm font-medium text-brown">
                E-mail
                <input name="email" type="email" required autoComplete="email" inputMode="email" className={field} placeholder="vous@exemple.fr" />
              </label>
              <label className="block text-sm font-medium text-brown">
                Message
                <textarea name="message" required rows={4} className={`${field} resize-y`} placeholder="Votre message" />
              </label>
              <motion.button
                type="submit"
                className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-burgundy px-7 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-burgundy-dark"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', bounce: 0.2, visualDuration: 0.25 }}
              >
                <Send className="size-4" aria-hidden="true" /> Envoyer
              </motion.button>
              <p role="status" className="min-h-5 text-sm text-brown-muted">
                {sent && 'Votre logiciel de messagerie va s’ouvrir avec le message prêt à envoyer.'}
              </p>
            </form>
          </ContactCard>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-brown-muted sm:flex-row md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName}
        </p>
        <a href="#accueil" className="inline-flex min-h-11 items-center hover:text-burgundy">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  )
}
