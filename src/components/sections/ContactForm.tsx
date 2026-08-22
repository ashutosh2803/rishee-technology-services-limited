import { useState, type FormEvent } from 'react'
import { Button } from '../ui/Button'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-form-card relative rounded-[var(--r-sm)] border border-[var(--accent-line)] bg-[var(--surface-2)] p-6 shadow-[0_0_48px_-12px_rgba(226,59,66,0.25)] md:p-8">
      <p className="label-mono text-[var(--ink-3)]">Send an enquiry</p>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="contact-name" label="Name" required autoComplete="name" />
          <FormField id="contact-company" label="Company Name" autoComplete="organization" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="contact-phone" label="Phone" type="tel" autoComplete="tel" />
          <FormField id="contact-email" label="Email" type="email" required autoComplete="email" />
        </div>

        <FormField id="contact-message" label="Message" required multiline rows={6} />

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Button type="submit" size="lg">
            Get Started
          </Button>
          {submitted && (
            <p className="text-[length:var(--fs-sm)] text-[var(--ink-2)]" role="status">
              Thank you — we&apos;ll be in touch within one business day.
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

interface FormFieldProps {
  id: string
  label: string
  required?: boolean
  multiline?: boolean
  rows?: number
  type?: string
  autoComplete?: string
}

function FormField({
  id,
  label,
  required,
  multiline,
  rows = 4,
  type = 'text',
  autoComplete,
}: FormFieldProps) {
  const sharedClassName =
    'ac-input w-full rounded-[var(--r-sm)] border border-[var(--line-strong)] bg-[var(--surface-1)] px-4 py-3 text-[length:var(--fs-base)] text-[var(--ink-1)] transition-[border-color,box-shadow] duration-[var(--dur-2)] placeholder:text-[var(--ink-3)] focus:border-[var(--accent-line)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-dim)]'

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="label-mono text-[var(--ink-3)]">
        {label}
        {required && (
          <span className="ml-0.5 text-[var(--accent-hi)]" aria-hidden>
            *
          </span>
        )}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          required={required}
          className={`${sharedClassName} min-h-[9rem] resize-y leading-[var(--lh-body)]`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          autoComplete={autoComplete}
          className={`${sharedClassName} h-12`}
        />
      )}
    </div>
  )
}
