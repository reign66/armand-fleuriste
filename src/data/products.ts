import { type Product } from '../context/CartContext'

export const products: Product[] = [
  // Bouquets
  { id: 'colore', name: 'Le Coloré', price: 30, image: '/images/produit-colore-hd.jpg', category: 'Bouquets', description: 'Un bouquet vibrant aux couleurs éclatantes, composé de fleurs de saison soigneusement sélectionnées. Idéal pour égayer une pièce ou surprendre vos proches.' },
  { id: 'intemporel', name: "L'Intemporel", price: 30, image: '/images/produit-intemporel-hd.jpg', category: 'Bouquets', description: "La sobriété élégante d'un bouquet classique. Des fleurs blanches et crèmes qui traversent le temps avec grâce. Un cadeau toujours juste." },
  { id: 'pastel', name: 'Le Pastel', price: 30, image: '/images/produit-pastel-hd.jpg', category: 'Bouquets', description: 'Douceur et délicatesse dans un bouquet aux teintes pastels. Roses poudré, lilas, crème — pour les instants de tendresse.' },
  { id: 'audacieux', name: "L'Audacieux", price: 30, image: '/images/produit-audacieux-hd.jpg', category: 'Bouquets', description: "Pour les amateurs d'originalité. Un bouquet structuré, aux associations inattendues et aux textures contrastées." },
  // Plantes
  { id: 'plante-fleurie', name: 'La Plante Fleurie', price: 30, image: '/images/produit-plante-fleurie.jpg', category: 'Plantes', description: "Une plante fleurie sélectionnée selon la saison. Facile d'entretien et longue durée de vie, elle apporte une touche végétale à votre intérieur." },
  { id: 'plante-verte', name: 'La Plante Verte', price: 30, image: '/images/produit-plante-verte.jpg', category: 'Plantes', description: "Épurée et contemporaine, cette plante verte s'intègre dans tous les intérieurs. Sélectionnée pour sa robustesse et son esthétique." },
  { id: 'orchidee', name: "L'Orchidée", price: 42, image: '/images/produit-orchidee.jpg', category: 'Plantes', description: 'La reine des fleurs. Une orchidée Phalaenopsis en pot, fleurie, prête à illuminer votre espace pendant plusieurs semaines.' },
  // Accessoires
  { id: 'vase', name: 'Mini Vase Acrylique', price: 5, image: '/images/produit-vase.jpg', category: 'Accessoires', description: 'Un petit vase acrylique transparent pour mettre en valeur une fleur unique ou un bouquet minimaliste. Design épuré.' },
  { id: 'carte-parfumee', name: 'Carte Message Parfumée', price: 2, image: '/images/produit-carte.jpg', category: 'Accessoires', description: 'Une carte message délicatement parfumée pour accompagner votre commande d\'un mot sincère. Papier texturé, parfum fleuri.' },
  { id: 'carte-message', name: 'Carte Message', price: 0, image: '/images/produit-carte.jpg', category: 'Accessoires', description: 'Une carte message simple pour accompagner votre bouquet d\'un message personnalisé. Offerte avec toute commande.' },
]

export const categories = ['Tous', 'Bouquets', 'Plantes', 'Accessoires']

export function getProduct(id: string) {
  return products.find(p => p.id === id)
}
