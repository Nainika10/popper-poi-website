
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'burgers' | 'sandwich' | 'starters' | 'shawarma' | 'combos' | 'pizza';
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export type Category = MenuItem['category'] | 'all';
