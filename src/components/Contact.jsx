import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Wire this up to your backend or a service like Formspree/EmailJS.
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 900)
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <div className="glass-card rounded-2xl p-7 grid lg:grid-cols-[1fr_1.6fr_auto] gap-8 items-start">
        {/* Left: contact info */}
        <div>
          <h2 className="font-display font-bold text-xl mb-5">Get In Touch</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 text-text-secondary">
              <Mail size={16} className="text-brand-purple shrink-0" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-text-primary">
                {personalInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-text-secondary">
              <Phone size={16} className="text-brand-purple shrink-0" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-text-primary">
                {personalInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-3 text-text-secondary">
              <MapPin size={16} className="text-brand-purple shrink-0" />
              {personalInfo.location}
            </li>
          </ul>
        </div>

        {/* Middle: form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-brand-purple outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-brand-purple outline-none"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-brand-purple outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-brand-purple outline-none resize-none"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-gradient font-semibold text-white text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            <Send size={15} />
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent!' : 'Send Message'}
          </button>
        </form>

        {/* Right: illustration placeholder */}
        <div className="hidden lg:flex w-40 h-40 rounded-2xl bg-brand-gradient/10 border border-brand-purple/20 items-center justify-center">
          <Send size={48} className="text-brand-purple/60" />
        </div>
      </div>
    </section>
  )
}
