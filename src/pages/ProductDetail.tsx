import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
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
      <title>{product.name} — ARMAND. Artisan Fleuriste</title>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <Link to="/boutique" className="text-xs tracking-widest uppercase text-charcoal/60 hover:text-dark mb-10 inline-block">
          ← Retour boutique
        </Link>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-cream-dark aspect-[3/4] overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="md:pt-8">
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-3">{product.category}</p>
            <h1 className="font-display text-5xl font-light text-dark mb-4">{product.name}</h1>
            <p className="text-2xl text-dark mb-8">{product.price === 0 ? 'Offerte' : `${product.price.toFixed(2)} €`}</p>
            <p className="text-charcoal text-sm leading-relaxed mb-8">{product.description}</p>

            {/* Message card */}
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

            {/* Quantité */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs tracking-widest uppercase text-charcoal/60">Qté</span>
              <div className="flex items-center border border-charcoal/30">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-10 text-charcoal hover:text-dark transition-colors">−</button>
                <span className="w-10 text-center text-sm">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-10 h-10 text-charcoal hover:text-dark transition-colors">+</button>
              </div>
            </div>

            <button onClick={handleAdd} className={`w-full py-4 text-sm tracking-widest uppercase font-medium transition-all ${added ? 'bg-charcoal text-cream' : 'bg-dark text-cream hover:bg-charcoal'}`}>
              {added ? '✓ Ajouté au panier' : 'Ajouter au panier'}
            </button>

            <div className="mt-8 pt-8 border-t border-cream-dark">
              <p className="text-xs text-charcoal/60 leading-relaxed">
                🌿 Bouquet préparé à la commande par notre artisan<br />
                🚚 Livraison sur Orléans et environs<br />
                📦 Click & collect disponible en boutique
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
