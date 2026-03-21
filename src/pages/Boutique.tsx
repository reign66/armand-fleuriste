import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function Boutique() {
  const [cat, setCat] = useState('Tous')

  const filtered = cat === 'Tous' ? products : products.filter(p => p.category === cat)

  return (
    <main className="pt-16 min-h-screen bg-cream">
      <title>La Boutique — ARMAND. Artisan Fleuriste Orléans</title>

      <section className="py-20 bg-dark text-cream text-center">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">Orléans · Saint Marceau</p>
        <h1 className="font-display text-5xl font-light">La Boutique</h1>
        <p className="text-cream/60 text-sm mt-4">Bouquets, plantes et accessoires · Préparation artisanale</p>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filtres */}
          <div className="flex gap-6 mb-12 border-b border-cream-dark pb-6">
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`text-xs tracking-widest uppercase transition-colors ${cat === c ? 'text-dark border-b-2 border-dark pb-1 font-medium' : 'text-charcoal/60 hover:text-dark'}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Grille */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
