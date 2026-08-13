'use client'

import { useState } from 'react'

const inputClass =
  'w-full border-b border-forest/20 bg-transparent px-0 py-3 font-sans text-sm text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none transition-colors'

export default function EnquiryForm({ timepiece }: { timepiece?: string }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-forest/5 p-10 text-center">
        <span className="mx-auto mb-5 block h-px w-10 bg-gold" />
        <h3 className="font-display text-3xl text-forest">Thank you</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/70">
          Your enquiry has been noted. A member of our client team will be in touch to arrange a
          private viewing at your convenience.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-sans text-xs uppercase tracking-widest2 text-gold-dark hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-sans text-[10px] uppercase tracking-widest2 text-ink/50">
            Full Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Jane Doe" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-widest2 text-ink/50">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="font-sans text-[10px] uppercase tracking-widest2 text-ink/50">
            Telephone
          </label>
          <input id="phone" name="phone" type="tel" placeholder="Optional" className={inputClass} />
        </div>
        <div>
          <label htmlFor="timepiece" className="font-sans text-[10px] uppercase tracking-widest2 text-ink/50">
            Timepiece of Interest
          </label>
          <input
            id="timepiece"
            name="timepiece"
            type="text"
            defaultValue={timepiece}
            placeholder="e.g. Heritage Slim 39"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-sans text-[10px] uppercase tracking-widest2 text-ink/50">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us what you are looking for."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-forest px-8 py-4 font-sans text-xs uppercase tracking-widest2 text-ivory transition-colors hover:bg-gold hover:text-forest sm:w-auto"
      >
        Submit Enquiry
      </button>
    </form>
  )
}
