import { motion, type HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: { children: ReactNode; delay?: number; className?: string; as?: 'div' | 'li' }) {
  const Tag = as === 'li' ? motion.li : motion.div
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease, delay }}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-burgundy">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-brown sm:text-4xl md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base text-brown-muted md:text-lg">{intro}</p>}
    </Reveal>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  className?: string
} & Omit<HTMLMotionProps<'a'>, 'href' | 'children'>

export function Button({ href, children, variant = 'primary', className = '', ...rest }: ButtonProps) {
  const base =
    'inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-200'
  const styles =
    variant === 'primary'
      ? 'bg-burgundy text-cream shadow-[0_8px_24px_-12px_rgba(123,30,46,0.6)] hover:bg-burgundy-dark'
      : 'border border-brown/25 bg-cream/60 text-brown hover:border-burgundy hover:text-burgundy'
  return (
    <motion.a
      href={href}
      className={`${base} ${styles} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', bounce: 0.2, visualDuration: 0.25 }}
      {...rest}
    >
      {children}
    </motion.a>
  )
}

export function Todo({ children = '[à compléter]' }: { children?: ReactNode }) {
  return <span className="rounded bg-butter/70 px-1.5 py-0.5 text-brown">{children}</span>
}

export function LinkedinIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}


export function asset(path: string) {
  if (!path || path === '#' || /^(https?:|mailto:)/.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
