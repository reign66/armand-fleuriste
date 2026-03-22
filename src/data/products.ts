import { type Product } from '../context/CartContext'

export const products: Product[] = [
  // Bouquets
  {
    id: 'colore',
    name: 'Le Coloré',
    price: 30,
    image: '/images/produit-colore-hd.jpg',
    category: 'Bouquets',
    description: 'Bouquet composé de fleurs fraîches et de feuillages de saison dans les tons vifs et colorés.\n\nATTENTION ! Visuel non contractuel. Les fleurs changent chaque semaine, la sélection est faite à partir de l\'arrivage du jour. Pour toute question, n\'hésitez pas à nous appeler au 02 38 47 00 47.',
    tags: ['Bonne Conservation !']
  },
  {
    id: 'intemporel',
    name: "L'Intemporel",
    price: 30,
    image: '/images/produit-intemporel-hd.jpg',
    category: 'Bouquets',
    description: 'Bouquet composé de fleurs fraîches et de feuillages de saison dans les tons blanc et vert.\nBLANC · VERT · CRÈME · ANIS\n\nATTENTION ! Visuel non contractuel. Les fleurs changent chaque semaine, la sélection est faite à partir de l\'arrivage du jour. Pour toute question, n\'hésitez pas à nous appeler au 02 38 47 00 47.',
    tags: ['Bonne Conservation !']
  },
  {
    id: 'pastel',
    name: 'Le Pastel',
    price: 30,
    image: '/images/produit-pastel-hd.jpg',
    category: 'Bouquets',
    description: 'Bouquet composé de fleurs fraîches et de feuillages de saison dans les tons pastel.\nROSE · LILAS · CRÈME\n\nATTENTION ! Visuel non contractuel. Les fleurs changent chaque semaine, la sélection est faite à partir de l\'arrivage du jour. Pour toute question, n\'hésitez pas à nous appeler au 02 38 47 00 47.',
    tags: ['Bonne Conservation !']
  },
  {
    id: 'audacieux',
    name: "L'Audacieux",
    price: 30,
    image: '/images/produit-audacieux-hd.jpg',
    category: 'Bouquets',
    description: 'Bouquet composé de fleurs fraîches et de feuillages de saison dans des tons audacieux et structurés. Pour les amateurs d\'originalité.\n\nATTENTION ! Visuel non contractuel. Les fleurs changent chaque semaine, la sélection est faite à partir de l\'arrivage du jour. Pour toute question, n\'hésitez pas à nous appeler au 02 38 47 00 47.',
    tags: ['Bonne Conservation !']
  },
  // Plantes
  {
    id: 'plante-fleurie',
    name: 'La Plante Fleurie',
    price: 30,
    image: '/images/produit-plante-fleurie-hd.jpg',
    category: 'Plantes',
    description: 'Plante fleurie assortie à son cache-pot en céramique.\nExemples : hibiscus, hortensia, kalanchoë, etc.\n\nATTENTION ! Visuel non contractuel. La plante et le pot peuvent varier en fonction de l\'arrivage. Pour toute question, n\'hésitez pas à nous appeler au 02 38 47 00 47.',
    tags: []
  },
  {
    id: 'plante-verte',
    name: 'La Plante Verte',
    price: 30,
    image: '/images/produit-plante-verte-hd.jpg',
    category: 'Plantes',
    description: 'Plante verte assortie à son cache-pot en céramique.\n\nATTENTION ! Visuel non contractuel. La plante et le pot peuvent varier en fonction de l\'arrivage. Pour toute question, n\'hésitez pas à nous appeler au 02 38 47 00 47.',
    tags: []
  },
  {
    id: 'orchidee',
    name: "L'Orchidée",
    price: 42,
    image: '/images/produit-orchidee-hd.jpg',
    category: 'Plantes',
    description: 'La reine des fleurs. Une orchidée Phalaenopsis en pot, fleurie, prête à illuminer votre espace pendant plusieurs semaines.\n\nATTENTION ! Visuel non contractuel. La plante peut varier en fonction de l\'arrivage. Pour toute question, n\'hésitez pas à nous appeler au 02 38 47 00 47.',
    tags: []
  },
  // Accessoires
  {
    id: 'vase',
    name: 'Mini Vase Acrylique',
    price: 5,
    image: '/images/produit-vase-hd.jpg',
    category: 'Accessoires',
    description: 'Mini Vase Acrylique\n(Recommandé pour les bouquets jusqu\'à 50 €)',
    tags: []
  },
  {
    id: 'carte-parfumee',
    name: 'Carte Message Parfumée',
    price: 2,
    image: '/images/produit-carte-hd.jpg',
    category: 'Accessoires',
    description: 'Carte message parfumée pour accompagner votre bouquet d\'un mot sincère. Papier texturé, parfum fleuri.',
    tags: []
  },
  {
    id: 'carte-message',
    name: 'Carte Message',
    price: 0,
    image: '/images/produit-carte-hd.jpg',
    category: 'Accessoires',
    description: 'Carte Message + Enveloppe\nFormat carte postale ; bristol blanc glacé pour inscrire tous les petits messages qui vous passent par la tête..!',
    tags: ['Offerte']
  },
]

export const categories = ['Tous', 'Bouquets', 'Plantes', 'Accessoires']

export function getProduct(id: string) {
  return products.find(p => p.id === id)
}
