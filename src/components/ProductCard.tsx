import { Link } from 'react-router-dom'
import { type Product, useCart } from '../context/CartContext'
import { useState } from 'react'

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link to={`/produit/${product.id}`} className="group block">
      <div className="overflow-hidden bg-cream-dark aspect-[3/4] mb-3">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-0.5">{product.category}</p>
          <h3 className="font-display text-lg text-dark">{product.name}</h3>
          <p className="text-sm text-charcoal mt-0.5">{product.price === 0 ? 'Offerte' : `${product.price.toFixed(2)} €`}</p>
        </div>
        <button
          onClick={handleAdd}
          className={`mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center border transition-all ${added ? 'bg-dark border-dark text-cream' : 'border-charcoal/40 text-charcoal hover:border-dark hover:text-dark'}`}
          title="Ajouter au panier"
        >
          {added ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          )}
        </button>
      </div>
    </Link>
  )
}
