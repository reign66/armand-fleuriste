import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Panier() {
  const { items, removeFromCart, updateQuantity, total, count } = useCart()

  if (count === 0) return (
    <main className="pt-16 min-h-screen bg-cream flex flex-col items-center justify-center text-center px-6">
      <title>Panier — ARMAND. Artisan Fleuriste</title>
      <p className="font-display text-3xl text-dark font-light mb-4">Votre panier est vide</p>
      <p className="text-charcoal/60 text-sm mb-8">Découvrez notre sélection de fleurs et plantes</p>
      <Link to="/boutique" className="btn-primary">Explorer la boutique</Link>
    </main>
  )

  return (
    <main className="pt-16 min-h-screen bg-cream">
      <title>Panier — ARMAND. Artisan Fleuriste</title>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="font-display text-4xl font-light text-dark mb-12">Votre panier</h1>

        <div className="grid md:grid-cols-[1fr_320px] gap-12">
          {/* Articles */}
          <div className="space-y-6">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 pb-6 border-b border-cream-dark">
                <img src={item.image} alt={item.name} className="w-24 h-32 object-cover bg-cream-dark flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-1">{item.category}</p>
                  <h3 className="font-display text-xl text-dark font-light">{item.name}</h3>
                  <p className="text-sm text-charcoal mt-1">{item.price.toFixed(2)} €</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border border-charcoal/20">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 text-charcoal hover:text-dark text-sm">−</button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 text-charcoal hover:text-dark text-sm">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-xs text-charcoal/40 hover:text-dark tracking-widest uppercase ml-2">Retirer</button>
                  </div>
                </div>
                <p className="text-sm font-medium text-dark">{(item.price * item.quantity).toFixed(2)} €</p>
              </div>
            ))}
          </div>

          {/* Récap commande */}
          <div className="bg-cream-dark p-8 h-fit">
            <h2 className="font-display text-xl font-light text-dark mb-6">Récapitulatif</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-charcoal">
                <span>Sous-total</span>
                <span>{total.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-sm text-charcoal">
                <span>Livraison</span>
                <span>Calculée à l'étape suivante</span>
              </div>
            </div>
            <div className="border-t border-charcoal/20 pt-4 mb-8">
              <div className="flex justify-between font-medium text-dark">
                <span>Total</span>
                <span className="font-display text-xl">{total.toFixed(2)} €</span>
              </div>
            </div>
            <Link to="/commande" className="btn-primary w-full text-center block">
              Passer la commande
            </Link>
            <Link to="/boutique" className="text-xs tracking-widest uppercase text-charcoal/60 hover:text-dark text-center block mt-4">
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
