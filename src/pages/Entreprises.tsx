import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const services = [
  {
    titre: 'Bouquets & Abonnement',
    texte: 'Vous avez votre restaurant, bar, cabinet, étude, bureau ? Vous avez envie d\'embellir chaque semaine votre desk, bureau, atelier, nous avons la solution. ARMAND. Artisan Fleuriste vous propose la livraison d\'un bouquet de fleurs fraîches et de saison dans son vase assorti sélectionné avec soin et en adéquation avec vos espaces. Il ne vous reste plus qu\'à choisir vos couleurs et styles et c\'est parti !',
    image: '/images/entreprises-2.png',
  },
  {
    titre: 'Végétalisation',
    texte: 'Envie de plantes sur votre bureau, espace d\'accueil ou salle de réunion ? ARMAND. Artisan Fleuriste est à l\'écoute de vos projets sur la végétalisation de vos espaces avec des plantes adaptées à votre rythme de vie. Une très large gamme de contenants est disponible sur commande pour réaliser l\'installation de vos rêves. N\'attendez plus, contactez-nous dès maintenant pour un devis détaillé.',
    image: '/images/entreprises-3.png',
  },
  {
    titre: 'Décor saisonnier',
    texte: 'Une envie de décor saisonnier, vitrine de Noël ou simplement agrémenter votre façade d\'un air printanier, ARMAND. Artisan Fleuriste vous propose des décors sur mesure, adaptés à vos entreprises. Végétaux naturels, stabilisés et/ou artificiels, en achat ou sous forme de location, nous avons forcément le décor adapté à vos besoins. Alors adressez-nous vos demandes dès maintenant.',
    image: '/images/entreprises-1.png',
  },
  {
    titre: 'Livraison & Cadeaux',
    texte: 'Remerciez un client, un collaborateur, un partenaire… c\'est possible en un simple clic ! ARMAND. Artisan Fleuriste dispose d\'un service de livraison soigné et adapté aux produits en proposant plusieurs types de livraison. Commandez dès maintenant.',
    image: '/images/boutique-1.png',
  },
]

export default function Entreprises() {
  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>Fleurs pour Entreprises — ARMAND. Artisan Fleuriste Orléans</title>
        <meta name="description" content="Laissez entrer les fleurs dans vos entreprises. Bouquets en abonnement, végétalisation de bureaux, décors saisonniers et livraison entreprise sur Orléans. ARMAND. Artisan Fleuriste." />
        <link rel="canonical" href="https://armand-fleuriste.vercel.app/entreprises" />
      </Helmet>

      <section className="relative py-32 bg-dark text-cream text-center px-6">
        <p className="text-xs tracking-widest uppercase text-cream/40 mb-3">B2B</p>
        <h1 className="font-display text-5xl font-light mb-4">Fleurs pour entreprises</h1>
        <p className="text-cream/60 text-lg max-w-xl mx-auto">
          Laissez entrer les fleurs dans vos entreprises… Imaginons ensemble comment sublimer vos espaces de travail avec fleurs, plantes et accessoires.
        </p>
        <p className="text-cream/50 text-sm mt-4">De manière ponctuelle ou sous forme d'abonnement, on aura forcément la solution florale qu'il vous faut !</p>
        <div className="mt-8">
          <Link to="/contact" className="btn-primary bg-cream text-dark hover:bg-cream-dark">Nous contacter</Link>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.titre} className={`py-20 ${i % 2 === 0 ? 'bg-cream' : 'bg-cream-dark'}`}>
          <div className={`max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className={i % 2 === 1 ? 'md:order-2' : ''}>
              <h2 className="font-display text-3xl text-dark font-light mb-5">{s.titre}</h2>
              <p className="text-charcoal text-sm leading-relaxed mb-6">{s.texte}</p>
              <Link to="/contact" className="btn-outline">Demander un devis</Link>
            </div>
            <div className={i % 2 === 1 ? 'md:order-1' : ''}>
              <img src={s.image} alt={s.titre} className="w-full object-cover aspect-[3/4]" />
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-dark text-cream text-center px-6">
        <h2 className="font-display text-3xl font-light mb-4">Ils nous font confiance</h2>
        <p className="text-cream/60 text-sm mb-8">Restaurants, cabinets, hôtels, boutiques d'Orléans et de la métropole</p>
        <Link to="/contact" className="btn-primary bg-cream text-dark hover:bg-cream-dark">Prendre contact</Link>
      </section>
    </main>
  )
}
