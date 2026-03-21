import { useLocation, Link } from 'react-router-dom'

export default function Confirmation() {
  const { state } = useLocation() as { state?: { email?: string; prenom?: string } }

  return (
    <main className="pt-16 min-h-screen bg-cream flex items-center justify-center px-6">
      <title>Commande confirmée — ARMAND. Artisan Fleuriste</title>
      <div className="max-w-lg w-full text-center py-20">
        <div className="w-16 h-16 bg-dark rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-8 h-8 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-xs tracking-widest uppercase text-charcoal/60 mb-3">Commande confirmée</p>
        <h1 className="font-display text-4xl font-light text-dark mb-6">
          {state?.prenom ? `Merci ${state.prenom} !` : 'Merci pour votre commande !'}
        </h1>
        <p className="text-charcoal text-sm leading-relaxed mb-4">
          Votre commande a bien été reçue et sera préparée avec soin par notre artisan fleuriste.
          {state?.email && ` Un email de confirmation a été envoyé à ${state.email}.`}
        </p>
        <p className="text-charcoal/60 text-sm mb-10">
          Notre équipe vous contactera pour confirmer le créneau de livraison ou vous informer de la disponibilité en click & collect.
        </p>
        <Link to="/" className="btn-primary">Retour à l'accueil</Link>
      </div>
    </main>
  )
}
