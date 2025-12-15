export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'bracelet' | 'incense' | 'kit';
  intention: 'calm' | 'focus' | 'strength' | 'energy';
  stone: string;
  image: string;
  hoverImage: string;
}

export interface Bead {
  id: string;
  name: string;
  type: 'stone' | 'wood' | 'metal' | 'incense';
  color: string;
  price: number;
  image?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customConfiguration?: Bead[]; // If it's a custom bracelet
}

export interface ElementalAnalysisResult {
  element: string;
  stone: string;
  reading: string;
}

export enum PageState {
  HOME,
  SHOP,
  BUILDER,
  ANALYSIS,
  SUBSCRIBE,
  JOURNAL
}