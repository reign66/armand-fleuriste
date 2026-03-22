import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>Services & Livraison — ARMAND. Artisan Fleuriste Orléans</title>
        <meta name="description" content="Livraison de fleurs sur Orléans et alentours, livraison France et international (Interflora, Florajet). Abonnement bouquets particuliers. ARMAND. Artisan Fleuriste." />
        <link rel="canonical" href="https://armand-fleuriste.vercel.app/services" />
      </Helmet>

      <section className="py-24 bg-dark text-cream text-center px-6">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">Nos prestations</p>
        <h1 className="font-display text-5xl font-light">Services & Livraison</h1>
      </section>

      {/* Livraison */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-3">Livraison</p>
            <h2 className="font-display text-3xl text-dark font-light mb-5">Partout, tout le temps et pour tout le monde.</h2>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              ARMAND. Artisan Fleuriste dispose d'un service de livraison soigné et adapté aux produits en proposant plusieurs types de livraison.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              La livraison sur Orléans et la métropole est assurée par nos soins ou par nos partenaires à vélo afin de vous garantir une livraison dans les meilleurs délais et toujours avec le sourire !
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-6">
              Vous désirez envoyer n'importe où en France ou à l'étranger, c'est également possible avec nos prestataires <strong>Interflora</strong> et <strong>Florajet</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs tracking-widest uppercase border border-charcoal/30 text-charcoal px-4 py-2">Livraison Orléans & alentours</span>
              <span className="text-xs tracking-widest uppercase border border-charcoal/30 text-charcoal px-4 py-2">Livraison France & International</span>
            </div>
          </div>
          <div>
            <img src="/images/services-1.jpg" alt="Livraison fleurs Orléans" className="w-full aspect-[2/3] object-cover" />
          </div>
        </div>
      </section>

      {/* Abonnement */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="md:order-2">
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-3">Pour vous ou pour offrir</p>
            <h2 className="font-display text-3xl text-dark font-light mb-5">Abonnement bouquets particuliers</h2>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Vous avez envie de fleurs chaque semaine ? quinzaine ? mois ? … mais vous n'avez pas le temps de vous rendre chez votre fleuriste préféré ? Nous avons la solution !
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              ARMAND. Artisan Fleuriste vous propose la livraison d'un bouquet de fleurs fraîches et de saison au rythme qui vous convient.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-6">
              Les couleurs, le style, les fleurs, tout vous appartient, il ne vous reste plus qu'à faire votre choix, déterminer votre budget et nous nous chargeons du reste ! <strong>Avec cet abonnement, la livraison à domicile est offerte !*</strong>
            </p>
            <Link to="/contact" className="btn-primary">Je m'abonne</Link>
          </div>
          <div className="md:order-1">
            <img src="/images/services-2.jpg" alt="Abonnement bouquets fleurs Orléans" className="w-full aspect-[2/3] object-cover" />
          </div>
        </div>
      </section>

      {/* CTA Entreprises */}
      <section className="py-16 bg-dark text-cream text-center px-6">
        <h2 className="font-display text-3xl font-light mb-3">Vous êtes une entreprise ?</h2>
        <p className="text-cream/60 text-sm mb-8 max-w-md mx-auto">Bouquets en abonnement, végétalisation, décors saisonniers… découvrez nos offres dédiées aux professionnels.</p>
        <Link to="/entreprises" className="btn-primary bg-cream text-dark hover:bg-cream-dark">Nos offres entreprises</Link>
      </section>
    </main>
  )
}
