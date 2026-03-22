import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Boutique from './pages/Boutique'
import ProductDetail from './pages/ProductDetail'
import Panier from './pages/Panier'
import Checkout from './pages/Checkout'
import Confirmation from './pages/Confirmation'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite'
import Histoire from './pages/Histoire'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/produit/:id" element={<ProductDetail />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/commande" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="*" element={
          <main className="pt-32 text-center min-h-screen bg-cream">
            <p className="font-display text-5xl text-dark font-light mb-4">404</p>
            <p className="text-charcoal text-sm mb-8">Page introuvable</p>
            <a href="/" className="btn-primary">Retour à l'accueil</a>
          </main>
        } />
      </Routes>
      <Footer />
    </CartProvider>
  )
}
