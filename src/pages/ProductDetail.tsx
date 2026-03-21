import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { getProduct } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = getProduct(id || '')
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)
  const [qty, setQty] = useState(1)
  const [message, setMessage] = useState('')

  if (!product) return (
    <main className="pt-32 text-center min-h-screen">
      <p>Produit introuvable</p>
      <Link to="/boutique" className="btn-outline mt-4 inline-block">Retour boutique</Link>
    </main>
  )

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>{product.name} — Fleuriste Orléans | ARMAND. Artisan Fleuriste</title>
        <meta name="description" content={`${product.name} — ${product.description} Commandez en ligne chez ARMAND. Artisan Fleuriste à Orléans. Livraison fleurs Orléans ou click & collect Saint Marceau.`} />
        <link rel="canonical" href={`https://armand-fleuriste.vercel.app/produit/${product.id}`} />
        <meta property="og:title" content={`${product.name} — ARMAND. Fleuriste Orléans`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={`https://armand-fleuriste.vercel.app${product.image}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": `https://armand-fleuriste.vercel.app${product.image}`,
          "brand": { "@type": "Brand", "name": "ARMAND. Artisan Fleuriste" },
          "offers": {
            "@type": "Offer",
            "price": product.price === 0 ? "0" : product.price.toString(),
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "seller": { "@type": "LocalBusiness", "name": "ARMAND. Artisan Fleuriste" }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://armand-fleuriste.vercel.app/" },
              { "@type": "ListItem", "position": 2, "name": "Boutique", "item": "https://armand-fleuriste.vercel.app/boutique" },
              { "@type": "ListItem", "position": 3, "name": product.name }
            ]
          }
        })}</script>
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal/40 mb-10">
          <Link to="/" className="hover:text-dark">Accueil</Link>
          <span>›</span>
          <Link to="/boutique" className="hover:text-dark">Boutique</Link>
          <span>›</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-cream-dark aspect-[3/4] overflow-hidden">
            <img src={product.image} alt={`${product.name} — ARMAND. Fleuriste Orléans`} className="w-full h-full object-cover" />
          </div>
          <div className="md:pt-8">
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-3">{product.category}</p>
            <h1 className="font-display text-5xl font-light text-dark mb-4">{product.name}</h1>
            <p className="text-2xl text-dark mb-8">{product.price === 0 ? 'Offerte' : `${product.price.toFixed(2)} €`}</p>
            <p className="text-charcoal text-sm leading-relaxed mb-8">{product.description}</p>

            <div className="mb-6">
              <label className="text-xs tracking-widest uppercase text-charcoal/60 block mb-2">Message personnalisé (optionnel)</label>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={3}
                placeholder="Votre message pour le destinataire..."
                className="w-full border border-charcoal/20 bg-transparent px-4 py-3 text-sm text-dark placeholder-charcoal/40 focus:outline-none focus:border-dark resize-none"
              />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs tracking-widest uppercase text-charcoal/60">Qté</span>
              <div className="flex items-center border border-charcoal/30">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-10 text-charcoal hover:text-dark transition-colors">−</button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-10 h-10 text-charcoal hover:text-dark transition-colors">+</button>
              </div>
            </div>

            <button onClick={handleAdd}
              className={`w-full py-4 text-sm tracking-widest uppercase font-medium transition-all ${added ? 'bg-charcoal text-cream' : 'bg-dark text-cream hover:bg-charcoal'}`}>
              {added ? '✓ Ajouté au panier' : 'Ajouter au panier'}
            </button>

            <div className="mt-8 pt-8 border-t border-cream-dark">
              <p className="text-xs text-charcoal/60 leading-relaxed">
                🌿 Bouquet préparé à la commande par notre artisan fleuriste<br />
                🚚 Livraison sur Orléans et environs (20 km) — 5,90 €<br />
                📦 Click & collect gratuit en boutique, quartier Saint Marceau
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
