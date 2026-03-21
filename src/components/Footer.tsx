import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src="/images/logo.png" alt="ARMAND." className="h-8 w-auto mb-4 brightness-0 invert" />
          <p className="text-cream/60 text-sm leading-relaxed mt-3">
            Artisan fleuriste au cœur du quartier Saint Marceau, Orléans. Fleurs fraîches, plantes et créations locales.
          </p>
        </div>
        <div>
          <h3 className="text-xs tracking-widest uppercase mb-4 text-cream/40">Navigation</h3>
          <ul className="space-y-2">
            {[{to:'/', l:'Accueil'}, {to:'/boutique', l:'Boutique'}, {to:'/contact', l:'Contact'}, {to:'/mentions-legales', l:'Mentions légales'}].map(({to, l}) => (
              <li key={to}><Link to={to} className="text-cream/60 hover:text-cream text-sm transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs tracking-widest uppercase mb-4 text-cream/40">La boutique</h3>
          <p className="text-cream/60 text-sm leading-relaxed">Ancienne boutique-atelier des Tapissiers Drufin<br />Quartier Saint Marceau<br />Orléans (45)</p>
          <p className="text-cream/60 text-sm mt-3">Artisans locaux sélectionnés :<br />Miel 1991 · Chloé Céramique<br />La Fabrique du Clos · Florence Gossec</p>
        </div>
      </div>
      <div className="border-t border-cream/10 text-center py-4 text-cream/30 text-xs">
        © 2026 ARMAND. Artisan Fleuriste — Tous droits réservés
      </div>
    </footer>
  )
}
