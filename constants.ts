import { Product, Bead } from './types';

export const BEADS: Bead[] = [
  { id: 'b1', name: 'Matte Onyx', type: 'stone', color: '#292524', price: 11 },
  { id: 'b2', name: 'Lapis Lazuli', type: 'stone', color: '#1e3a8a', price: 11 },
  { id: 'b3', name: 'Tiger Eye', type: 'stone', color: '#854d0e', price: 11 },
  { id: 'b4', name: 'Rose Quartz', type: 'stone', color: '#fbcfe8', price: 11 },
  { id: 'b5', name: 'Howlite', type: 'stone', color: '#f5f5f5', price: 11 },
  { id: 'b6', name: 'Lava Stone', type: 'stone', color: '#171717', price: 9 }, // Porous
  { id: 'b7', name: 'Sandalwood', type: 'wood', color: '#d6d3d1', price: 8 },
  { id: 'b_gold', name: 'Gold Spacer', type: 'metal', color: '#fbbf24', price: 15 },
  { id: 'b_incense', name: 'Ritual Incense Bead', type: 'incense', color: '#78350f', price: 40 },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Anchor',
    price: 148,
    category: 'bracelet',
    intention: 'strength',
    stone: 'Onyx',
    image: 'https://picsum.photos/id/1011/400/500',
    hoverImage: 'https://picsum.photos/id/1012/400/500'
  },
  {
    id: 'p2',
    name: 'The Clarity',
    price: 158,
    category: 'bracelet',
    intention: 'focus',
    stone: 'Howlite',
    image: 'https://picsum.photos/id/1015/400/500',
    hoverImage: 'https://picsum.photos/id/1016/400/500'
  },
  {
    id: 'p3',
    name: 'The Serene',
    price: 168,
    category: 'bracelet',
    intention: 'calm',
    stone: 'Lapis',
    image: 'https://picsum.photos/id/1025/400/500',
    hoverImage: 'https://picsum.photos/id/1024/400/500'
  },
  {
    id: 'p4',
    name: 'The Origin',
    price: 148,
    category: 'bracelet',
    intention: 'energy',
    stone: 'Tiger Eye',
    image: 'https://picsum.photos/id/103/400/500',
    hoverImage: 'https://picsum.photos/id/104/400/500'
  },
];

export const NAV_LINKS = [
  { label: 'Shop', path: '/shop' },
  { label: 'Create Your Own', path: '/builder' },
  { label: 'Ritual Guide', path: '/analysis' },
  { label: 'Subscription', path: '/subscribe' },
  { label: 'Journal', path: '/journal' },
];