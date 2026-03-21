import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    adresse: '', ville: '', code_postal: '',
    livraison: 'livraison',
    carte: '', expiry: '', cvv: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  const fraisLivraison = form.livraison === 'livraison' ? 5.90 : 0
  const totalFinal = total + fraisLivraison

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulation paiement Stripe (fake)
    setTimeout(() => {
      clearCart()
      navigate('/confirmation', { state: { email: form.email, prenom: form.prenom } })
    }, 2000)
  }

  return (
    <main className="pt-16 min-h-screen bg-cream">
      <title>Commande — ARMAND. Artisan Fleuriste</title>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="font-display text-4xl font-light text-dark mb-12">Finaliser la commande</h1>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-[1fr_340px] gap-12">
          <div className="space-y-8">

            {/* Infos personnelles */}
            <div>
              <h2 className="text-xs tracking-widest uppercase text-charcoal/60 mb-5">Vos coordonnées</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input required value={form.prenom} onChange={e => set('prenom', e.target.value)} placeholder="Prénom" className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark" />
                <input required value={form.nom} onChange={e => set('nom', e.target.value)} placeholder="Nom" className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark" />
              </div>
              <input required type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="Email" className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full mb-4" />
              <input value={form.telephone} onChange={e => set('telephone', e.target.value)} placeholder="Téléphone" className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full" />
            </div>

            {/* Mode de livraison */}
            <div>
              <h2 className="text-xs tracking-widest uppercase text-charcoal/60 mb-5">Mode de réception</h2>
              <div className="grid grid-cols-2 gap-3">
                {[{ val: 'livraison', label: 'Livraison à domicile', prix: '5,90 €', desc: 'Orléans & 20km' },
                  { val: 'click', label: 'Click & Collect', prix: 'Gratuit', desc: 'En boutique, Saint Marceau' }].map(o => (
                  <button type="button" key={o.val} onClick={() => set('livraison', o.val)}
                    className={`p-4 text-left border transition-colors ${form.livraison === o.val ? 'border-dark bg-cream-dark' : 'border-charcoal/20 hover:border-charcoal/40'}`}>
                    <p className="text-sm font-medium text-dark">{o.label}</p>
                    <p className="text-xs text-charcoal/60 mt-1">{o.desc}</p>
                    <p className="text-sm text-dark mt-2">{o.prix}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Adresse (si livraison) */}
            {form.livraison === 'livraison' && (
              <div>
                <h2 className="text-xs tracking-widest uppercase text-charcoal/60 mb-5">Adresse de livraison</h2>
                <input required value={form.adresse} onChange={e => set('adresse', e.target.value)} placeholder="Adresse" className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full mb-4" />
                <div className="grid grid-cols-[140px_1fr] gap-4">
                  <input required value={form.code_postal} onChange={e => set('code_postal', e.target.value)} placeholder="Code postal" className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark" />
                  <input required value={form.ville} onChange={e => set('ville', e.target.value)} placeholder="Ville" className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark" />
                </div>
              </div>
            )}

            {/* Message */}
            <div>
              <h2 className="text-xs tracking-widest uppercase text-charcoal/60 mb-5">Message (optionnel)</h2>
              <textarea value={form.message} onChange={e => set('message', e.target.value)} rows={3} placeholder="Un message pour accompagner votre commande..."
                className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full resize-none" />
            </div>

            {/* Paiement */}
            <div>
              <h2 className="text-xs tracking-widest uppercase text-charcoal/60 mb-2">Paiement sécurisé</h2>
              <p className="text-xs text-charcoal/40 mb-5">Powered by Stripe · SSL 256-bit</p>
              <input required value={form.carte} onChange={e => set('carte', e.target.value)} placeholder="Numéro de carte" maxLength={19}
                className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark w-full mb-4" />
              <div className="grid grid-cols-2 gap-4">
                <input required value={form.expiry} onChange={e => set('expiry', e.target.value)} placeholder="MM/AA" maxLength={5}
                  className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark" />
                <input required value={form.cvv} onChange={e => set('cvv', e.target.value)} placeholder="CVV" maxLength={3}
                  className="border border-charcoal/20 px-4 py-3 text-sm bg-transparent focus:outline-none focus:border-dark" />
              </div>
            </div>
          </div>

          {/* Récap */}
          <div className="h-fit">
            <div className="bg-cream-dark p-8 mb-4">
              <h2 className="font-display text-xl font-light text-dark mb-6">Votre commande</h2>
              <div className="space-y-3 mb-6">
                {items.map(i => (
                  <div key={i.id} className="flex justify-between text-sm text-charcoal">
                    <span>{i.name} × {i.quantity}</span>
                    <span>{(i.price * i.quantity).toFixed(2)} €</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-charcoal/20 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-charcoal">
                  <span>Sous-total</span><span>{total.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-sm text-charcoal">
                  <span>Livraison</span><span>{fraisLivraison === 0 ? 'Gratuit' : `${fraisLivraison.toFixed(2)} €`}</span>
                </div>
                <div className="flex justify-between font-medium text-dark pt-2 border-t border-charcoal/20">
                  <span>Total</span>
                  <span className="font-display text-xl">{totalFinal.toFixed(2)} €</span>
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className={`w-full py-4 text-sm tracking-widest uppercase font-medium text-cream transition-all ${loading ? 'bg-charcoal/60' : 'bg-dark hover:bg-charcoal'}`}>
              {loading ? 'Paiement en cours...' : `Payer ${totalFinal.toFixed(2)} €`}
            </button>
            <p className="text-xs text-charcoal/40 text-center mt-3">🔒 Paiement 100% sécurisé</p>
          </div>
        </form>
      </div>
    </main>
  )
}
