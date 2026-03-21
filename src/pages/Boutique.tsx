import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function Boutique() {
  const [cat, setCat] = useState('Tous')
  const filtered = cat === 'Tous' ? products : products.filter(p => p.category === cat)

  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>Boutique en ligne — Bouquets & Plantes | ARMAND. Fleuriste Orléans</title>
        <meta name="description" content="Commandez vos bouquets, plantes et accessoires floraux en ligne. Livraison fleurs Orléans (45) ou click & collect quartier Saint Marceau. Préparation artisanale, fleurs fraîches garanties." />
        <meta name="keywords" content="bouquet fleurs Orléans commander, livraison bouquet Orléans, acheter fleurs en ligne Orléans, plantes intérieur Orléans, orchidée Orléans, bouquet mariage Orléans" />
        <link rel="canonical" href="https://armand-fleuriste.vercel.app/boutique" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Boutique ARMAND. Artisan Fleuriste",
          "description": "Bouquets, plantes et accessoires floraux",
          "itemListElement": products.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Product",
              "name": p.name,
              "description": p.description,
              "image": `https://armand-fleuriste.vercel.app${p.image}`,
              "offers": {
                "@type": "Offer",
                "price": p.price === 0 ? "0" : p.price.toString(),
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              }
            }
          }))
        })}</script>
      </Helmet>

      <section className="py-20 bg-dark text-cream text-center">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">Orléans · Saint Marceau</p>
        <h1 className="font-display text-5xl font-light">La Boutique</h1>
        <p className="text-cream/60 text-sm mt-4">Bouquets, plantes et accessoires · Préparation artisanale · Fleurs fraîches</p>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-6 mb-12 border-b border-cream-dark pb-6">
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`text-xs tracking-widest uppercase transition-colors ${cat === c ? 'text-dark border-b-2 border-dark pb-1 font-medium' : 'text-charcoal/60 hover:text-dark'}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          {/* Texte SEO bas de page */}
          <div className="mt-20 pt-12 border-t border-cream-dark">
            <h2 className="font-display text-2xl text-dark font-light mb-4">Fleuriste artisan à Orléans</h2>
            <p className="text-charcoal text-sm leading-relaxed max-w-3xl">
              ARMAND. est un artisan fleuriste indépendant installé dans le quartier Saint Marceau à Orléans. Chaque bouquet est composé à la commande avec des fleurs fraîches sélectionnées selon la saison. Livraison possible sur Orléans et ses environs (20 km), ou retrait gratuit en boutique en click & collect. Nous proposons également des prestations florales sur mesure pour vos mariages, anniversaires et événements.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
