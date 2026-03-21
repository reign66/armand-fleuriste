import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <main className="pt-16 min-h-screen bg-cream">
      <title>Contact — ARMAND. Artisan Fleuriste Orléans</title>
      <section className="py-20 bg-dark text-cream text-center">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">Nous écrire</p>
        <h1 className="font-display text-5xl font-light">Contact</h1>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-light text-dark mb-8">Nous rendre visite</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-1">Adresse</p>
                <p className="text-sm text-charcoal">Quartier Saint Marceau<br />Orléans (45)</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-1">Horaires</p>
                <p className="text-sm text-charcoal">Mar – Sam : 9h00 – 19h00<br />Dimanche : 9h00 – 13h00<br />Lundi : Fermé</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-1">Instagram</p>
                <a href="https://www.instagram.com/armand.fleuriste" target="_blank" rel="noopener noreferrer" className="text-sm text-charcoal hover:text-dark">@armand.fleuriste</a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-light text-dark mb-8">Nous écrire</h2>
            {sent ? (
              <div className="bg-cream-dark p-8">
                <p className="font-display text-xl text-dark mb-2">Message envoyé !</p>
                <p className="text-sm text-charcoal">Nous vous répondrons dans les meilleurs délais.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-4">
                <input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} placeholder="Nom complet"
                  className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full" />
                <input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} placeholder="Email"
                  className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full" />
                <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} placeholder="Votre message..."
                  className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full resize-none" />
                <button type="submit" className="btn-primary w-full">Envoyer</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
