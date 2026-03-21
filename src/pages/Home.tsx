import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  const featured = products.filter(p => ['colore', 'intemporel', 'orchidee', 'pastel'].includes(p.id))

  return (
    <>
      <title>ARMAND. Artisan Fleuriste — Saint Marceau, Orléans</title>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
        <div className="absolute inset-0 bg-dark/30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 w-full">
          <p className="text-cream/80 text-xs tracking-widest uppercase mb-4">Artisan Fleuriste · Orléans</p>
          <h1 className="font-display text-5xl md:text-7xl text-cream font-light leading-tight mb-8 max-w-2xl">
            Votre écrin de<br />verdure au cœur<br />de Saint Marceau.
          </h1>
          <Link to="/boutique" className="btn-primary bg-cream text-dark hover:bg-cream-dark">
            Découvrir la boutique
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-4">Notre histoire</p>
            <h2 className="font-display text-4xl text-dark font-light leading-tight mb-6">
              L'ancienne boutique des<br />Tapissiers Drufin, réinventée.
            </h2>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Située dans le quartier horticole d'Orléans, l'institution Orléanaise depuis 1960 a fait peau neuve pour accueillir une sélection de fleurs fraîches, de plantes d'intérieur et d'extérieur, de décoration et d'accessoires choisis avec soin.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-8">
              Depuis le premier jour, nous avons à cœur de mettre à l'honneur artistes et artisans locaux : Miel 1991, Chloé Céramique, La Fabrique du Clos et Florence Gossec.
            </p>
            <Link to="/boutique" className="btn-outline">Explorer nos créations</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/boutique-1.png" alt="Boutique Armand Fleuriste Orléans" className="w-full aspect-[3/4] object-cover" />
            <img src="/images/boutique-2.png" alt="Fleurs fraîches artisan fleuriste" className="w-full aspect-[3/4] object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Produits mis en avant */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-2">Sélection du moment</p>
              <h2 className="font-display text-4xl text-dark font-light">Nos créations</h2>
            </div>
            <Link to="/boutique" className="text-xs tracking-widest uppercase text-charcoal hover:text-dark transition-colors hidden md:block">
              Voir tout →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center mt-12 md:hidden">
            <Link to="/boutique" className="btn-outline">Voir toute la boutique</Link>
          </div>
        </div>
      </section>

      {/* Artisans locaux */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-3">
            <img src="/images/boutique-3.png" alt="Artisans locaux Orléans" className="w-full aspect-[3/4] object-cover" />
            <img src="/images/boutique-4.png" alt="Créations florales" className="w-full aspect-[3/4] object-cover mt-8" />
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-4">Savoir-faire local</p>
            <h2 className="font-display text-4xl text-dark font-light leading-tight mb-6">
              4 artisans,<br />producteurs et artistes<br />de la région Orléanaise.
            </h2>
            <p className="text-charcoal text-sm leading-relaxed mb-6">
              Vous retrouverez de manière continue le délicieux miel de Miel 1991, les créations de Chloé Céramique et La Fabrique du Clos ainsi que le travail délicat de la créatrice Florence Gossec.
            </p>
            <p className="text-charcoal text-sm leading-relaxed">
              Pour l'intérieur, mais pas que — vous trouverez également une gamme de plantes et accessoires de jardins pour agrémenter vos massifs, pots, terrasses et balcons.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark text-cream text-center">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-4">Commander en ligne</p>
        <h2 className="font-display text-4xl font-light mb-6">Livraison sur Orléans & environs</h2>
        <p className="text-cream/60 text-sm mb-10 max-w-md mx-auto">Commandez en ligne, nous préparons votre bouquet avec soin et vous le livrons à domicile ou en click & collect.</p>
        <Link to="/boutique" className="btn-primary bg-cream text-dark hover:bg-cream-dark">
          Commander maintenant
        </Link>
      </section>
    </>
  )
}
