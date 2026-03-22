import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export default function Mariage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    prenom: '', nom: '', telephone: '', email: '', date: '', message: ''
  })
  const set = (k: string, v: string) => setForm(f => ({...f, [k]: v}))

  const photos = [
    '/images/mariage-1.jpg',
    '/images/mariage-2.jpg',
    '/images/mariage-3.jpg',
    '/images/mariage-4.jpg',
    '/images/mariage-5.jpg',
  ]

  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>Mariage & Événements — ARMAND. Artisan Fleuriste Orléans</title>
        <meta name="description" content="Décoration florale mariage à Orléans. ARMAND. Artisan Fleuriste crée le décor floral de votre journée. Bouquets mariée, centres de table, arches fleuries. Prise de rendez-vous en boutique ou visio." />
        <link rel="canonical" href="https://armand-fleuriste.vercel.app/mariage" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: 'url(/images/mariage-1.jpg)' }}>
        <div className="absolute inset-0 bg-dark/50" />
        <div className="relative z-10 text-center text-cream px-6">
          <p className="text-xs tracking-widest uppercase text-cream/50 mb-3">Notre Oui ! avec ARMAND.</p>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6">Mariage</h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto leading-relaxed">
            Vous avez choisi de vous dire oui et nous vous en félicitons ! Construisons ensemble le décor floral qui embellira votre journée.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-charcoal text-sm leading-relaxed mb-4 max-w-2xl mx-auto">
            Nous vous proposons une gamme complète de prestations qui s'adaptent à vos envies et votre budget. Il suffit de prendre rendez-vous… alors allons-y !
          </p>
          <a href="#formulaire" className="btn-primary">Formuler ma demande</a>
        </div>
      </section>

      {/* Galerie photos mariage */}
      <section className="py-4 bg-cream-dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-6xl mx-auto px-4">
          {photos.slice(1).map((p, i) => (
            <div key={i} className="overflow-hidden aspect-[3/4]">
              <img src={p} alt={`Décoration florale mariage Orléans ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Prestations */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl text-dark font-light text-center mb-12">Nos prestations mariage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '💐', titre: 'Bouquet de mariée', desc: 'Rond, en cascade, champêtre… votre bouquet unique, créé sur mesure selon vos envies et votre style.' },
              { icon: '🌿', titre: 'Décoration de salle', desc: 'Centres de table, arches fleuries, boutons de chaises, entrées… nous habillons chaque espace avec soin.' },
              { icon: '🌸', titre: 'Accessoires floraux', desc: 'Boutonnières, coiffures, bracelets floraux pour les demoiselles d\'honneur et les proches.' },
            ].map(p => (
              <div key={p.titre} className="text-center p-6 bg-cream-dark">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-display text-xl text-dark mb-2">{p.titre}</h3>
                <p className="text-charcoal text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section id="formulaire" className="py-20 bg-dark text-cream">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-cream/40 mb-3 text-center">Un premier contact</p>
          <h2 className="font-display text-3xl font-light text-center mb-4">Formulez ici votre demande</h2>
          <p className="text-cream/60 text-sm text-center mb-10">N'attendez plus, remplissez le formulaire et nous vous recontacterons afin de fixer un rendez-vous en boutique ou en visio.</p>

          {sent ? (
            <div className="text-center py-12">
              <p className="font-display text-2xl font-light mb-3">Merci pour votre demande !</p>
              <p className="text-cream/60 text-sm">Nous vous contacterons dans les meilleurs délais pour fixer un rendez-vous.</p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs tracking-widest uppercase text-cream/40 block mb-1">Prénom *</label>
                  <input required value={form.prenom} onChange={e => set('prenom', e.target.value)} placeholder="Marie"
                    className="w-full border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-cream/60" />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-cream/40 block mb-1">Nom *</label>
                  <input required value={form.nom} onChange={e => set('nom', e.target.value)} placeholder="Dupont"
                    className="w-full border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-cream/60" />
                </div>
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-cream/40 block mb-1">Téléphone *</label>
                <input required value={form.telephone} onChange={e => set('telephone', e.target.value)} placeholder="06 xx xx xx xx"
                  className="w-full border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-cream/60" />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-cream/40 block mb-1">E-mail *</label>
                <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="marie@email.fr"
                  className="w-full border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-cream/60" />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-cream/40 block mb-1">Date de l'événement *</label>
                <input required type="date" value={form.date} onChange={e => set('date', e.target.value)}
                  className="w-full border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream focus:outline-none focus:border-cream/60" />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-cream/40 block mb-1">Dites-nous tout juste ici !… *</label>
                <textarea required rows={5} value={form.message} onChange={e => set('message', e.target.value)}
                  placeholder="Votre projet floral, budget approximatif, nombre d'invités..."
                  className="w-full border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-cream/60 resize-none" />
              </div>
              <button type="submit"
                className="w-full py-4 text-sm tracking-widest uppercase font-medium bg-cream text-dark hover:bg-cream-dark transition-colors">
                Envoyer la demande
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
