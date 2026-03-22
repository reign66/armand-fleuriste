import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Histoire() {
  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>Notre Histoire — ARMAND. Artisan Fleuriste Orléans</title>
        <meta name="description" content="L'histoire d'ARMAND. Artisan Fleuriste à Orléans. Un hommage à Armand, grand-père passionné de nature et de fleurs, disparu en 2017. La boutique porte son nom." />
        <link rel="canonical" href="https://armand-fleuriste.vercel.app/histoire" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-dark text-cream text-center px-6">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">Notre âme</p>
        <h1 className="font-display text-5xl font-light">Histoire</h1>
      </section>

      {/* Texte principal */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-2xl text-dark font-light leading-relaxed mb-6 italic">
              « C'est l'histoire d'un homme amoureux de la nature et des animaux qui tout au long de sa vie n'a fait qu'embellir son quotidien par les plantes et les fleurs. »
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Au cœur d'un tout petit village d'Auvergne, Rose de Jardin, Dahlia, Glaïeul… autant de variétés qui ornementaient par dizaines ce grand jardin que je côtoyais depuis mon plus jeune âge.
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-4">
              Disparu en 2017, <strong>Armand.</strong> c'est ma manière de lui rendre hommage à travers le goût du travail bien fait et d'une certaine tendresse à travers les fleurs.
            </p>
            <p className="text-charcoal text-sm leading-relaxed font-medium">
              C'est l'histoire d'un homme amoureux de la nature et des animaux.<br />
              Celle de mon grand-père.
            </p>
          </div>
          <div>
            <img
              src="/images/histoire-2.jpg"
              alt="Armand — histoire du fleuriste d'Orléans"
              className="w-full max-w-xs mx-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Image large */}
      <section className="bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <img
            src="/images/histoire-1.jpg"
            alt="La boutique Armand Fleuriste Orléans"
            className="w-full object-cover rounded-sm"
          />
          <img
            src="/images/histoire-3.jpg"
            alt="Artisan fleuriste Orléans Saint Marceau"
            className="w-full object-cover rounded-sm"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark text-cream text-center px-6">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-4">Venez nous rendre visite</p>
        <h2 className="font-display text-4xl font-light mb-4">Quartier Saint Marceau, Orléans</h2>
        <p className="text-cream/60 text-sm mb-8 max-w-sm mx-auto">Mardi – Samedi : 9h00 – 19h00<br />Dimanche : 9h00 – 13h00</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/boutique" className="btn-primary bg-cream text-dark hover:bg-cream-dark">
            Découvrir la boutique
          </Link>
          <Link to="/contact" className="border border-white text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-white/10 transition-colors">
            Nous contacter
          </Link>
        </div>
      </section>
    </main>
  )
}
