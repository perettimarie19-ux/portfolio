import type { ComponentProps, ReactNode } from 'react'
import { PlusIcon, type LucideIcon } from 'lucide-react'

const cn = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ')

export type ContactInfoProps = ComponentProps<'div'> & {
  icon: LucideIcon
  label: string
  value: string
}

type ContactCardProps = ComponentProps<'div'> & {
  title?: string
  description?: string
  contactInfo?: ContactInfoProps[]
  formSectionClassName?: string
  footer?: ReactNode
}

export function ContactCard({
  title,
  description,
  contactInfo,
  className,
  formSectionClassName,
  footer,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        'relative grid h-full w-full rounded-[1.75rem] border border-line bg-cream shadow-[0_24px_60px_-32px_rgba(74,46,31,0.35)] md:grid-cols-2 lg:grid-cols-5',
        className,
      )}
      {...props}
    >
      <PlusIcon aria-hidden="true" className="absolute -top-3 -left-3 size-6 text-burgundy" />
      <PlusIcon aria-hidden="true" className="absolute -top-3 -right-3 size-6 text-burgundy" />
      <PlusIcon aria-hidden="true" className="absolute -bottom-3 -left-3 size-6 text-burgundy" />
      <PlusIcon aria-hidden="true" className="absolute -right-3 -bottom-3 size-6 text-burgundy" />
      <div className="flex flex-col justify-between lg:col-span-3">
        <div className="relative h-full space-y-5 px-5 py-8 md:p-10">
          {title && <h3 className="text-3xl font-semibold text-brown md:text-4xl">{title}</h3>}
          {description && <p className="max-w-xl text-base text-brown-muted lg:text-lg">{description}</p>}
          <div className="grid gap-2 sm:grid-cols-2">
            {contactInfo?.map((info, index) => <ContactInfo key={index} {...info} />)}
          </div>
          {footer}
        </div>
      </div>
      <div
        className={cn(
          'flex h-full w-full items-center rounded-b-[1.75rem] border-t border-line bg-butter-soft/60 p-5 md:col-span-1 md:rounded-r-[1.75rem] md:rounded-bl-none md:border-t-0 md:border-l md:p-8 lg:col-span-2',
          formSectionClassName,
        )}
      >
        {children}
      </div>
    </div>
  )
}

function ContactInfo({ icon: Icon, label, value, className, ...props }: ContactInfoProps) {
  return (
    <div className={cn('flex min-w-0 items-center gap-3 py-3', className)} {...props}>
      <div className="shrink-0 rounded-xl bg-sky p-3 text-sky-ink">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <p className="font-medium text-brown">{label}</p>
        <p className="break-words text-sm text-brown-muted">{value}</p>
      </div>
    </div>
  )
}
