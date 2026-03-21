import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream shadow-sm' : 'bg-cream/90 backdrop-blur-sm'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/images/logo.png" alt="ARMAND. Artisan Fleuriste" className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { to: '/', label: 'Accueil' },
            { to: '/boutique', label: 'Boutique' },
            { to: '/contact', label: 'Contact' },
          ].map(l => (
            <Link key={l.to} to={l.to}
              className={`text-xs tracking-widest uppercase font-sans transition-colors ${location.pathname === l.to ? 'text-dark font-medium' : 'text-charcoal hover:text-dark'}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/panier" className="relative flex items-center gap-1.5 text-xs tracking-widest uppercase font-sans text-charcoal hover:text-dark transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Panier
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-dark text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/panier" className="relative">
            <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {count > 0 && <span className="absolute -top-1.5 -right-1.5 bg-dark text-cream text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">{count}</span>}
          </Link>
          <button onClick={() => setOpen(!open)}>
            <svg className="w-5 h-5 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-cream border-t border-cream-dark px-6 py-4 flex flex-col gap-4">
          {[{ to: '/', label: 'Accueil' }, { to: '/boutique', label: 'Boutique' }, { to: '/contact', label: 'Contact' }].map(l => (
            <Link key={l.to} to={l.to} className="text-xs tracking-widest uppercase text-charcoal hover:text-dark">{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  )
}
