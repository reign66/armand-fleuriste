import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  const featured = products.filter(p => ['colore', 'intemporel', 'orchidee', 'pastel'].includes(p.id))

  return (
    <>
      <Helmet>
        <title>Fleuriste Orléans | ARMAND. Artisan Fleuriste — Saint Marceau</title>
        <meta name="description" content="ARMAND. Artisan Fleuriste à Orléans, quartier Saint Marceau. Bouquets sur mesure, plantes, créations locales. Livraison fleurs Orléans et click & collect. Artisan fleuriste indépendant depuis Orléans (45)." />
        <meta name="keywords" content="fleuriste Orléans, bouquet Orléans, fleurs Orléans livraison, artisan fleuriste Orléans 45, fleurs Saint Marceau Orléans, bouquet sur mesure Orléans" />
        <link rel="canonical" href="https://armand-fleuriste.vercel.app/" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
        <div className="absolute inset-0 bg-dark/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 w-full">
          <p className="text-cream/80 text-xs tracking-widest uppercase mb-4">Artisan Fleuriste · Orléans</p>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-light leading-tight mb-8 max-w-2xl">
            Votre écrin de<br />verdure au cœur<br />de Saint Marceau.
          </h1>
          <Link to="/boutique" className="btn-primary bg-cream text-dark hover:bg-cream-dark">
            Découvrir la boutique
          </Link>
        </div>
      </section>

      {/* Bienvenue / Intro */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-4">Bienvenue</p>
            <h2 className="font-display text-4xl text-dark font-light leading-tight mb-6">
              L'ancienne boutique des<br />Tapissiers Drufin, réinventée.
            </h2>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Venez découvrir votre nouvel écrin de verdure au cœur du quartier de Saint Marceau.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Située dans le quartier horticole d'Orléans, cette institution orléanaise, fondée en 1960, a fait peau neuve pour vous accueillir dans un univers dédié aux fleurs fraîches, aux plantes d'intérieur et d'extérieur, ainsi qu'à une sélection soignée de décorations et d'accessoires.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Nous vous invitons à découvrir notre univers floral unique et à ajouter une touche de nature à votre quotidien. Que ce soit pour offrir ou s'offrir, une large sélection de végétaux et d'articles sélectionnés avec soin sont renouvelés au fil des saisons pour vous proposer toujours plus de nouveautés. De quoi vous surprendre à chaque visite…
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-8">
              Nous sommes à votre écoute pour vous accompagner dans vos achats.
            </p>
            <Link to="/boutique" className="btn-outline">Explorer nos créations</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/section-1.jpg" alt="Boutique ARMAND. Artisan Fleuriste Orléans Saint Marceau" className="w-full aspect-[3/4] object-cover" />
            <img src="/images/section-2.jpg" alt="Fleurs fraîches artisan fleuriste Orléans" className="w-full aspect-[3/4] object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Produits mis en avant */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-2">Sélection du moment</p>
              <h2 className="font-display text-4xl text-dark font-light">Nos créations florales</h2>
            </div>
            <Link to="/boutique" className="text-xs tracking-widest uppercase text-charcoal hover:text-dark transition-colors hidden md:block">
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link to="/boutique" className="btn-outline">Voir toute la boutique</Link>
          </div>
        </div>
      </section>

      {/* Artisans locaux */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/section-3.jpg" alt="Artisans locaux Orléans — ARMAND. Fleuriste" className="w-full aspect-[3/4] object-cover" />
            <img src="/images/section-4.jpg" alt="Créations artisanales Orléans" className="w-full aspect-[3/4] object-cover mt-8" />
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-4">Savoir-faire local</p>
            <h2 className="font-display text-4xl text-dark font-light leading-tight mb-6">
              Artistes et artisans<br />locaux à l'honneur.
            </h2>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Depuis toujours, nous avons à cœur de mettre à l'honneur des artistes et artisans locaux, dont les créations uniques enrichissent notre univers : Miel 1991, Chloé Céramique, La Fabrique du Clos et Florence Gossec.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Vous retrouverez ainsi des créations originales et uniques de nos 4 artisans, producteurs et artistes, tous issus de la région orléanaise, dans le but de mettre en lumière leur travail.
            </p>
            <p className="text-charcoal text-sm leading-relaxed">
              Pour l'intérieur, mais pas que… Vous trouverez également une gamme de plantes et accessoires de jardins pour agrémenter vos massifs, pots, terrasses & balcons au gré de vos envies.
            </p>
          </div>
        </div>
      </section>

      {/* Outdoor */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-4">Outdoor</p>
            <h2 className="font-display text-4xl text-dark font-light leading-tight mb-6">
              Des prestations complètes<br />pour vos projets extérieurs.
            </h2>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Peu importe la plante, qu'elle soit vivace ou plus éphémère, nous serons là pour vous conseiller afin de vous apporter une solution florale adaptée à vos besoins.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-8">
              En parallèle de la boutique, ARMAND. Artisan Fleuriste c'est aussi des prestations complètes destinées à l'Outdoor pour réaliser vos projets extérieurs en proposant une large gamme de contenants, plantes, luminaires et accessoires.
            </p>
            <Link to="/contact" className="btn-outline">Nous contacter</Link>
          </div>
          <div>
            <img src="/images/outdoor.jpg" alt="Plantes extérieur et aménagement outdoor Orléans" className="w-full aspect-[3/4] object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl text-dark font-light text-center mb-10">Questions fréquentes</h2>
          <div className="space-y-6">
            {[
              { q: 'Livrez-vous les fleurs à Orléans ?', a: 'Oui, nous livrons vos bouquets et plantes sur Orléans et dans un rayon de 20 km. Les frais de livraison sont de 5,90 €. Vous pouvez aussi opter pour le click & collect gratuit en boutique.' },
              { q: 'Peut-on commander des fleurs en ligne ?', a: 'Absolument. Notre boutique en ligne vous permet de commander bouquets, plantes et accessoires directement depuis notre site. Paiement sécurisé par carte bancaire.' },
              { q: 'Où se trouve la boutique ARMAND. Fleuriste ?', a: "Nous sommes situés dans le quartier Saint Marceau à Orléans (45), dans l'ancienne boutique-atelier des Tapissiers Drufin. Ouverts du mardi au samedi de 9h à 19h et le dimanche de 9h à 13h." },
              { q: 'Faites-vous des bouquets pour les mariages et événements ?', a: 'Oui, nous réalisons des compositions florales sur mesure pour mariages, anniversaires et événements professionnels. Contactez-nous pour discuter de votre projet.' },
              { q: 'Quels artisans locaux sont présents en boutique ?', a: "Nous mettons à l'honneur Miel 1991, Chloé Céramique, La Fabrique du Clos et la créatrice Florence Gossec. Toutes des créations originales de la région orléanaise." },
            ].map(faq => (
              <details key={faq.q} className="border-b border-charcoal/10 pb-6 group">
                <summary className="font-display text-lg text-dark cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-charcoal/40 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-charcoal text-sm leading-relaxed mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Schema FAQ */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Livrez-vous les fleurs à Orléans ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, nous livrons sur Orléans et dans un rayon de 20 km. Frais de livraison : 5,90 €. Click & collect gratuit disponible." } },
            { "@type": "Question", "name": "Peut-on commander des fleurs en ligne ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, notre boutique en ligne permet de commander bouquets, plantes et accessoires. Paiement sécurisé par carte." } },
            { "@type": "Question", "name": "Où se trouve la boutique ARMAND. Fleuriste ?", "acceptedAnswer": { "@type": "Answer", "text": "Quartier Saint Marceau, Orléans (45). Du mardi au samedi 9h-19h, dimanche 9h-13h." } },
          ]
        })}</script>
      </Helmet>

      {/* CTA */}
      <section className="py-24 bg-dark text-cream text-center">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-4">Commander en ligne</p>
        <h2 className="font-display text-4xl font-light mb-6">Livraison sur Orléans & environs</h2>
        <p className="text-cream/60 text-sm mb-10 max-w-md mx-auto">Commandez en ligne, nous préparons votre bouquet avec soin et vous le livrons à domicile ou en click & collect en boutique Saint Marceau.</p>
        <Link to="/boutique" className="btn-primary bg-cream text-dark hover:bg-cream-dark">
          Commander maintenant
        </Link>
      </section>
    </>
  )
}
