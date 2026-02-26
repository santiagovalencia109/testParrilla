export enum Category {
  ENTRANTES = 'Entrantes',
  PRINCIPALES = 'Principales',
  POSTRES = 'Postres',
  BEBIDAS = 'Bebidas'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface AIChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}