import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function CarriereFreres() {
  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>Revendeur Officiel Carrière Frères — ARMAND. Artisan Fleuriste Orléans</title>
        <meta name="description" content="ARMAND. Artisan Fleuriste est revendeur officiel Carrière Frères à Orléans. Bougies, palets et diffuseurs. Sélection de fragrances variées disponibles en boutique." />
        <link rel="canonical" href="https://armand-fleuriste.vercel.app/carriere-freres" />
      </Helmet>

      <section className="py-24 bg-dark text-cream text-center px-6">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">Partenaire exclusif</p>
        <h1 className="font-display text-5xl font-light">Carrière Frères</h1>
        <p className="text-cream/60 text-sm mt-4">Revendeur officiel à Orléans</p>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src="/images/carriere-freres.webp" alt="Carrière Frères — Revendeur officiel Orléans" className="h-12 mb-8" />
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Après plus de 2 ans d'attente, la maison <strong>Carrière Frères</strong> fait confiance à ARMAND. Fleuriste pour la représenter sur notre belle ville d'Orléans.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              C'est avec une grande fierté que la gamme a fait son apparition ce printemps en boutique.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-8">
              Avec une sélection de fragrances variées, <strong>bougies, palets et diffuseurs</strong> sont maintenant disponibles. Venez les découvrir.
            </p>
            <Link to="/contact" className="btn-primary">Nous contacter</Link>
          </div>
          <div>
            <img src="/images/carriere-produit.png" alt="Produits Carrière Frères bougies diffuseurs Orléans" className="w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-2xl text-dark font-light mb-4">/ ARMAND.</p>
          <p className="text-charcoal text-sm leading-relaxed">
            Disponible uniquement en boutique — Quartier Saint Marceau, Orléans<br />
            Mardi – Samedi 9h–19h · Dimanche 9h–13h
          </p>
        </div>
      </section>
    </main>
  )
}
