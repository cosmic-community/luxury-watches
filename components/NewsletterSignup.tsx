'use client'

import { useState, FormEvent } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) throw new Error('Failed')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <p className="text-gold text-sm">Thank you for joining our private circle.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 bg-transparent border border-ivory/30 px-4 py-3 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="border border-gold text-gold px-6 py-3 text-xs uppercase tracking-widest2 hover:bg-gold hover:text-ink transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs mt-2 sm:hidden">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}