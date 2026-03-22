import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-cream">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src="/images/logo.png" alt="ARMAND. Artisan Fleuriste" className="h-8 w-auto mb-4 brightness-0 invert" />
          <p className="text-cream/60 text-sm leading-relaxed mt-3 max-w-xs">
            Artisan fleuriste au cœur du quartier Saint Marceau, Orléans. Fleurs fraîches, plantes et créations d'artisans locaux.
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-cream/50 text-xs">📍 Quartier Saint Marceau, Orléans (45)</p>
            <p className="text-cream/50 text-xs">📞 02 38 47 00 47</p>
            <p className="text-cream/50 text-xs">🕐 Mar–Sam 9h–19h · Dim 9h–13h · Lun fermé</p>
          </div>
          <div className="mt-4">
            <a href="https://www.instagram.com/armand.fleuriste" target="_blank" rel="noopener noreferrer"
              className="text-cream/60 hover:text-cream text-xs transition-colors">
              Instagram @armand.fleuriste
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase mb-4 text-cream/40">Navigation</h3>
          <ul className="space-y-2">
            {[
              { to: '/', l: 'Accueil' },
              { to: '/boutique', l: 'La Boutique' },
              { to: '/histoire', l: 'Notre Histoire' },
              { to: '/contact', l: 'Contact' },
              { to: '/mentions-legales', l: 'Mentions légales' },
              { to: '/politique-de-confidentialite', l: 'Politique de confidentialité' },
            ].map(({ to, l }) => (
              <li key={to}><Link to={to} className="text-cream/60 hover:text-cream text-sm transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest uppercase mb-4 text-cream/40">Artisans locaux</h3>
          <ul className="space-y-2 text-cream/60 text-sm">
            <li>Miel 1991</li>
            <li>Chloé Céramique</li>
            <li>La Fabrique du Clos</li>
            <li>Florence Gossec</li>
          </ul>
          <div className="mt-6">
            <p className="text-xs tracking-widest uppercase text-cream/40 mb-2">Partenaire</p>
            <img src="/images/carriere-freres.webp" alt="Carrière Frères" className="h-6 w-auto brightness-0 invert opacity-60" />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-cream/30 text-xs">© 2026 ARMAND. Artisan Fleuriste — Tous droits réservés</p>
          <div className="flex items-center gap-4">
            <Link to="/mentions-legales" className="text-cream/30 hover:text-cream/60 text-xs transition-colors">Mentions légales</Link>
            <span className="text-cream/20">·</span>
            <Link to="/politique-de-confidentialite" className="text-cream/30 hover:text-cream/60 text-xs transition-colors">Confidentialité</Link>
            <span className="text-cream/20">·</span>
            <span className="text-cream/30 text-xs">REVENDEUR OFFICIEL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
