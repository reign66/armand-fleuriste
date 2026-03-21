import { createContext, useContext, useState, type ReactNode } from 'react'

export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
}

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, qty: number) => void
  clearCart: () => void
  total: number
  count: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id: string) => setItems(prev => prev.filter(i => i.id !== id))
  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) return removeFromCart(id)
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i))
  }
  const clearCart = () => setItems([])

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
