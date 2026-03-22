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
  const [taille, setTaille] = useState('')

  if (!product) return (
    <main className="pt-32 text-center min-h-screen bg-cream">
      <p className="font-display text-2xl text-dark mb-4">Cet article est introuvable</p>
      <Link to="/boutique" className="btn-outline mt-4 inline-block">Continuer vos achats</Link>
    </main>
  )

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  // Séparer la description en paragraphes
  const paragraphes = product.description.split('\n').filter(Boolean)

  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>{product.name} — Fleuriste Orléans | ARMAND. Artisan Fleuriste</title>
        <meta name="description" content={`${product.name} — ${product.description.split('\n')[0]}. Commandez en ligne chez ARMAND. Artisan Fleuriste à Orléans. Livraison ou click & collect Saint Marceau.`} />
        <link rel="canonical" href={`https://armand-fleuriste.vercel.app/produit/${product.id}`} />
        <meta property="og:title" content={`${product.name} — ARMAND. Fleuriste Orléans`} />
        <meta property="og:image" content={`https://armand-fleuriste.vercel.app${product.image}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description.split('\n')[0],
          "image": `https://armand-fleuriste.vercel.app${product.image}`,
          "brand": { "@type": "Brand", "name": "ARMAND. Artisan Fleuriste" },
          "offers": {
            "@type": "Offer",
            "price": product.price === 0 ? "0" : product.price.toString(),
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
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
          {/* Image */}
          <div className="bg-cream-dark overflow-hidden">
            <img
              src={product.image}
              alt={`${product.name} — ARMAND. Fleuriste Orléans`}
              className="w-full object-cover aspect-square"
            />
          </div>

          {/* Infos */}
          <div className="md:pt-4">
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-2">{product.category}</p>
            <h1 className="font-display text-4xl md:text-5xl font-light text-dark mb-4">{product.name}</h1>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex gap-2 mb-4">
                {product.tags.map(tag => (
                  <span key={tag} className="text-xs border border-charcoal/30 text-charcoal px-3 py-1">{tag}</span>
                ))}
              </div>
            )}

            <p className="text-2xl text-dark mb-6 font-light">
              {product.price === 0 ? 'Offerte' : `${product.price.toFixed(2)} €`}
              <span className="text-sm text-charcoal/60 ml-2">Prix</span>
            </p>

            {/* Description */}
            <div className="mb-6 space-y-3">
              {paragraphes.map((p, i) => (
                <p key={i} className={`text-sm leading-relaxed ${p.startsWith('ATTENTION') ? 'text-charcoal/50 text-xs italic border-l-2 border-charcoal/20 pl-3' : 'text-charcoal'}`}>
                  {p}
                </p>
              ))}
            </div>

            {/* Taille (si bouquet) */}
            {product.category === 'Bouquets' && (
              <div className="mb-5">
                <label className="text-xs tracking-widest uppercase text-charcoal/60 block mb-2">Taille *</label>
                <div className="flex gap-2">
                  {['S', 'M', 'L'].map(t => (
                    <button key={t} onClick={() => setTaille(t)}
                      className={`w-12 h-12 text-sm border transition-colors ${taille === t ? 'bg-dark text-cream border-dark' : 'border-charcoal/30 text-charcoal hover:border-dark'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message personnalisé */}
            {product.id === 'carte-message' && (
              <div className="mb-5">
                <label className="text-xs tracking-widest uppercase text-charcoal/60 block mb-2">Message *</label>
                <textarea
                  value={message}
                  onChange={e => setMessage(e.target.value.slice(0, 500))}
                  rows={4}
                  maxLength={500}
                  placeholder="Votre message..."
                  className="w-full border border-charcoal/20 bg-transparent px-4 py-3 text-sm text-dark placeholder-charcoal/40 focus:outline-none focus:border-dark resize-none"
                />
                <p className="text-xs text-charcoal/40 text-right mt-1">{message.length}/500</p>
              </div>
            )}

            {/* Quantité */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs tracking-widest uppercase text-charcoal/60">Quantité *</span>
              <div className="flex items-center border border-charcoal/30">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-10 text-charcoal hover:text-dark transition-colors flex items-center justify-center">−</button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-10 h-10 text-charcoal hover:text-dark transition-colors flex items-center justify-center">+</button>
              </div>
            </div>

            <button onClick={handleAdd}
              className={`w-full py-4 text-sm tracking-widest uppercase font-medium transition-all mb-4 ${added ? 'bg-charcoal text-cream' : 'bg-dark text-cream hover:bg-charcoal'}`}>
              {added ? '✓ Ajouté au panier' : 'Ajouter au panier'}
            </button>

            {/* Infos livraison */}
            <div className="pt-6 border-t border-cream-dark space-y-2">
              <p className="text-xs text-charcoal/60">🌿 Composé à la commande par notre artisan fleuriste</p>
              <p className="text-xs text-charcoal/60">🚚 Livraison sur Orléans et environs — 5,90 €</p>
              <p className="text-xs text-charcoal/60">📦 Click & collect gratuit · Quartier Saint Marceau</p>
              <p className="text-xs text-charcoal/60">📞 02 38 47 00 47</p>
            </div>
          </div>
        </div>

        {/* Produits similaires */}
        <div className="mt-24 pt-12 border-t border-cream-dark">
          <h2 className="font-display text-2xl text-dark font-light mb-8">Vous aimerez aussi</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Accessoires en suggestion */}
            {[
              { id: 'vase', name: 'Mini Vase Acrylique', price: 5, image: '/images/produit-vase-hd.jpg', category: 'Accessoires' },
              { id: 'carte-parfumee', name: 'Carte Message Parfumée', price: 2, image: '/images/produit-carte-hd.jpg', category: 'Accessoires' },
              { id: 'carte-message', name: 'Carte Message', price: 0, image: '/images/produit-carte-hd.jpg', category: 'Accessoires' },
            ].map(p => (
              <Link key={p.id} to={`/produit/${p.id}`} className="group block">
                <div className="bg-cream-dark aspect-square overflow-hidden mb-3">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-xs text-charcoal/60 tracking-widest uppercase mb-0.5">{p.category}</p>
                <p className="font-display text-lg text-dark">{p.name}</p>
                <p className="text-sm text-charcoal">{p.price === 0 ? 'Offerte' : `${p.price.toFixed(2)} €`}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
