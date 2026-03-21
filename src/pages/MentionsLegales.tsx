export default function MentionsLegales() {
  return (
    <main className="pt-16 min-h-screen bg-cream">
      <title>Mentions légales — ARMAND. Artisan Fleuriste</title>
      <section className="py-16 bg-dark text-cream text-center">
        <h1 className="font-display text-4xl font-light">Mentions légales</h1>
      </section>
      <section className="py-16 max-w-3xl mx-auto px-6">
        <div className="space-y-8 text-sm text-charcoal leading-relaxed">
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Éditeur</h2>
            <p>ARMAND. Artisan Fleuriste — Orléans (45), France</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Données personnelles</h2>
            <p>Conformément au RGPD, les données collectées sont utilisées uniquement pour le traitement de vos commandes. Elles ne sont pas transmises à des tiers à des fins commerciales.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Paiement</h2>
            <p>Les paiements sont sécurisés via Stripe. Aucune donnée bancaire n'est stockée sur nos serveurs.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
