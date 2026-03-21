import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>Contact — ARMAND. Artisan Fleuriste Orléans Saint Marceau</title>
        <meta name="description" content="Contactez ARMAND. Artisan Fleuriste à Orléans, quartier Saint Marceau. Ouvert mar-sam 9h-19h, dim 9h-13h. Commandes spéciales, mariages, événements floraux sur mesure." />
        <link rel="canonical" href="https://armand-fleuriste.vercel.app/contact" />
      </Helmet>

      <section className="py-20 bg-dark text-cream text-center">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">Nous écrire</p>
        <h1 className="font-display text-5xl font-light">Contact</h1>
        <p className="text-cream/60 text-sm mt-4">Artisan fleuriste — Orléans, quartier Saint Marceau</p>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-light text-dark mb-8">Nous rendre visite</h2>
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-1">Adresse</p>
                <p className="text-sm text-charcoal">Quartier Saint Marceau<br />Orléans (45100)</p>
                <p className="text-xs text-charcoal/40 mt-1">Ancienne boutique des Tapissiers Drufin</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-1">Horaires d'ouverture</p>
                <p className="text-sm text-charcoal">
                  Mardi – Samedi : 9h00 – 19h00<br />
                  Dimanche : 9h00 – 13h00<br />
                  Lundi : Fermé
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-1">Instagram</p>
                <a href="https://www.instagram.com/armand.fleuriste" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-charcoal hover:text-dark">@armand.fleuriste</a>
              </div>
              <div className="pt-4 border-t border-cream-dark">
                <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-2">Click & Collect</p>
                <p className="text-xs text-charcoal/60 leading-relaxed">Commandez en ligne, récupérez votre bouquet en boutique à Saint Marceau. Gratuit et sans attente.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl font-light text-dark mb-8">Nous écrire</h2>
            {sent ? (
              <div className="bg-cream-dark p-8">
                <p className="font-display text-xl text-dark mb-2">Message envoyé !</p>
                <p className="text-sm text-charcoal">Nous vous répondrons dans les meilleurs délais. À bientôt en boutique !</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-4">
                <input required value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} placeholder="Nom complet"
                  className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full" />
                <input required type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} placeholder="Adresse e-mail"
                  className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full" />
                <textarea required rows={5} value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
                  placeholder="Votre message (commande spéciale, mariage, événement...)"
                  className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full resize-none" />
                <button type="submit" className="btn-primary w-full">Envoyer le message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
