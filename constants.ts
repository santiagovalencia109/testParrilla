import { Category, MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Entrantes
  {
    id: '1',
    name: 'Bruschetta Toscana',
    description: 'Pan rústico tostado con tomates cherry frescos, albahaca, ajo y reducción de balsámico.',
    price: 8.50,
    category: Category.ENTRANTES,
    image: 'https://picsum.photos/400/300?random=1',
  },
  {
    id: '2',
    name: 'Carpaccio de Res',
    description: 'Finas láminas de solomillo, rúcula, queso parmesano y aceite de trufa.',
    price: 14.00,
    category: Category.ENTRANTES,
    image: 'https://picsum.photos/400/300?random=2',
    popular: true
  },
  {
    id: '3',
    name: 'Calamares a la Romana',
    description: 'Anillos de calamar frescos rebozados, servidos con salsa tártara casera.',
    price: 11.00,
    category: Category.ENTRANTES,
    image: 'https://picsum.photos/400/300?random=3',
  },

  // Principales
  {
    id: '4',
    name: 'Ribeye a la Parrilla',
    description: '400g de corte premium a las brasas, acompañado de puré de patatas trufado y espárragos.',
    price: 32.00,
    category: Category.PRINCIPALES,
    image: 'https://picsum.photos/400/300?random=4',
    popular: true
  },
  {
    id: '5',
    name: 'Salmón Glaseado',
    description: 'Filete de salmón fresco con glaseado de miel y mostaza, sobre cama de quinoa y verduras.',
    price: 24.50,
    category: Category.PRINCIPALES,
    image: 'https://picsum.photos/400/300?random=5',
  },
  {
    id: '6',
    name: 'Risotto de Setas',
    description: 'Arroz arborio cremoso con mezcla de setas silvestres, vino blanco y parmesano reggiano.',
    price: 19.00,
    category: Category.PRINCIPALES,
    image: 'https://picsum.photos/400/300?random=6',
  },
  {
    id: '7',
    name: 'Hamburguesa Gourmet',
    description: 'Carne Angus, queso brie, cebolla caramelizada y rúcula en pan brioche artesanal.',
    price: 16.50,
    category: Category.PRINCIPALES,
    image: 'https://picsum.photos/400/300?random=7',
  },

  // Postres
  {
    id: '8',
    name: 'Tiramisú Clásico',
    description: 'Capas de bizcocho de soletilla empapadas en café y crema de mascarpone.',
    price: 7.50,
    category: Category.POSTRES,
    image: 'https://picsum.photos/400/300?random=8',
    popular: true
  },
  {
    id: '9',
    name: 'Coulant de Chocolate',
    description: 'Volcán de chocolate negro caliente con helado de vainilla de Madagascar.',
    price: 9.00,
    category: Category.POSTRES,
    image: 'https://picsum.photos/400/300?random=9',
  },

  // Bebidas
  {
    id: '10',
    name: 'Limonada de Menta',
    description: 'Refrescante limonada casera con hojas de menta fresca y hielo picado.',
    price: 4.50,
    category: Category.BEBIDAS,
    image: 'https://picsum.photos/400/300?random=10',
  },
  {
    id: '11',
    name: 'Vino Tinto Reserva',
    description: 'Copa de vino tinto de la casa, D.O. Rioja.',
    price: 6.00,
    category: Category.BEBIDAS,
    image: 'https://picsum.photos/400/300?random=11',
  },
];

export const SYSTEM_INSTRUCTION = `Eres el "Chef Virtual" de un restaurante llamado "Sabor & Fuego". 
Tu objetivo es ayudar a los clientes a elegir platos del menú y sugerir maridajes.
Sé amable, sofisticado pero accesible y muy conciso (máximo 2-3 frases por respuesta).
Siempre recomienda platos basándote en lo que el usuario pregunte o lo que tenga en su carrito.
Si te preguntan por alérgenos, sugiere preguntar al camarero humano por seguridad.`;
