import { Helmet } from 'react-helmet-async'

export default function PolitiqueConfidentialite() {
  return (
    <main className="pt-16 min-h-screen bg-cream">
      <Helmet>
        <title>Politique de confidentialité — ARMAND. Artisan Fleuriste</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="py-16 bg-dark text-cream text-center">
        <h1 className="font-display text-4xl font-light">Politique de confidentialité</h1>
      </section>
      <section className="py-16 max-w-3xl mx-auto px-6">
        <div className="space-y-8 text-sm text-charcoal leading-relaxed">
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Collecte des données</h2>
            <p>ARMAND. Artisan Fleuriste collecte vos données personnelles (nom, adresse e-mail, adresse postale, téléphone) uniquement dans le cadre du traitement de vos commandes et de votre relation avec notre boutique.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Utilisation des données</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Le traitement et la livraison de vos commandes</li>
              <li>La gestion de votre relation client</li>
              <li>L'envoi de communications relatives à vos commandes</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Conservation des données</h2>
            <p>Vos données sont conservées pour la durée nécessaire au traitement de vos commandes et au respect de nos obligations légales (5 ans maximum pour les données comptables).</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Vos droits</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous via le formulaire de contact.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Cookies</h2>
            <p>Ce site utilise des cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire ou de traçage tiers n'est utilisé.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-dark mb-3">Paiement</h2>
            <p>Les paiements sont traités de manière sécurisée. Aucune donnée bancaire n'est stockée sur nos serveurs.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
