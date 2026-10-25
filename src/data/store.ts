// Central data store with localStorage persistence
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  weight?: string;
  karat?: string;
  image: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parent: 'gold' | 'silver';
  itemCount: number;
  image: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  goldPrice18k: number;
  silverPrice: number;
  announcements: string[];
  aboutText: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    tiktok: string;
    instagram: string;
    facebook: string;
  };
}

const defaultSettings: SiteSettings = {
  siteName: 'Jaylan Gold & Metals',
  tagline: 'Specialists in buying and selling gold and silver bullion',
  goldPrice18k: 96.35,
  silverPrice: 1.25,
  announcements: [
    'Prices on the site include commission',
    'Specialists in buying and selling gold and silver bullion',
    'Gold price movement for 2026: Open $4,325 | High $5,600 | Low $3,942',
  ],
  aboutText: 'Jaylan Gold & Metals, founded in 2021 with over 20 years of experience, specializes in buying and selling gold while offering flexible investment solutions with minimal fees. We provide trusted products with real-time price updates, and our showroom in central Beirut ensures a smooth and transparent customer experience.',
  email: 'info@jaylan-gold-lebanon.com',
  phone: '+961 71 288772',
  address: 'Beirut, Lebanon',
  socialLinks: {
    tiktok: 'https://www.tiktok.com/@jaylan_jewelry',
    instagram: 'https://www.instagram.com/jaylan__jewelry',
    facebook: 'https://www.facebook.com/',
  },
};

const defaultCategories: Category[] = [
  { id: '1', name: 'Swiss Gold', slug: 'swiss-gold', parent: 'gold', itemCount: 15, image: '🇨🇭' },
  { id: '2', name: 'Local Ounce Gold', slug: 'local-ounce-gold', parent: 'gold', itemCount: 10, image: '🏅' },
  { id: '3', name: 'Gold Coin 21K/22K', slug: 'gold-coin', parent: 'gold', itemCount: 10, image: '🪙' },
  { id: '4', name: 'Used Gold', slug: 'used-gold', parent: 'gold', itemCount: 55, image: '💎' },
  { id: '5', name: 'Local Silver', slug: 'local-silver', parent: 'silver', itemCount: 8, image: '🥈' },
  { id: '6', name: 'Imported Silver', slug: 'imported-silver', parent: 'silver', itemCount: 6, image: '✨' },
];

const defaultProducts: Product[] = [
  { id: '1', name: '1g Suisse Gold Bar', price: 146.47, category: 'gold', subcategory: 'swiss-gold', weight: '1g', karat: '24K', image: '🥇', description: 'Premium Swiss minted 1 gram gold bar' },
  { id: '2', name: '2.5g Suisse Gold Bar', price: 345.18, category: 'gold', subcategory: 'swiss-gold', weight: '2.5g', karat: '24K', image: '🥇', description: 'Premium Swiss minted 2.5 gram gold bar' },
  { id: '3', name: '5g Suisse Gold Bar', price: 669.35, category: 'gold', subcategory: 'swiss-gold', weight: '5g', karat: '24K', image: '🥇', description: 'Premium Swiss minted 5 gram gold bar' },
  { id: '4', name: '10g Suisse Gold Bar', price: 1317.71, category: 'gold', subcategory: 'swiss-gold', weight: '10g', karat: '24K', image: '🥇', description: 'Premium Swiss minted 10 gram gold bar' },
  { id: '5', name: '1/2 Ounce Suisse Gold', price: 2040.72, category: 'gold', subcategory: 'swiss-gold', weight: '15.5g', karat: '24K', image: '🥇', description: 'Half ounce Swiss gold bar' },
  { id: '6', name: '1g Local Gold', price: 137.34, category: 'gold', subcategory: 'local-ounce-gold', weight: '1g', karat: '24K', image: '🏅', description: 'Locally minted 1 gram gold bar' },
  { id: '7', name: '2.5g Local Gold', price: 332.18, category: 'gold', subcategory: 'local-ounce-gold', weight: '2.5g', karat: '24K', image: '🏅', description: 'Locally minted 2.5 gram gold bar' },
  { id: '8', name: '5g Local Gold', price: 655.35, category: 'gold', subcategory: 'local-ounce-gold', weight: '5g', karat: '24K', image: '🏅', description: 'Locally minted 5 gram gold bar' },
  { id: '9', name: '10g Local Gold', price: 1301.71, category: 'gold', subcategory: 'local-ounce-gold', weight: '10g', karat: '24K', image: '🏅', description: 'Locally minted 10 gram gold bar' },
  { id: '10', name: '1/2 Ounce Local Gold', price: 2017.72, category: 'gold', subcategory: 'local-ounce-gold', weight: '15.5g', karat: '24K', image: '🏅', description: 'Half ounce locally minted gold bar' },
  { id: '11', name: 'Quarter Lira 21K', price: 229.82, category: 'gold', subcategory: 'gold-coin', weight: '2.6g', karat: '21K', image: '🪙', description: 'Quarter Lira gold coin 21K' },
  { id: '12', name: 'Half Lira 21K', price: 455.65, category: 'gold', subcategory: 'gold-coin', weight: '5.2g', karat: '21K', image: '🪙', description: 'Half Lira gold coin 21K' },
  { id: '13', name: 'Full Lira 21K', price: 906.29, category: 'gold', subcategory: 'gold-coin', weight: '8.06g', karat: '21K', image: '🪙', description: 'Full Lira gold coin 21K' },
  { id: '14', name: 'Gold Bullion Coin 1/4 OZ Royal Mint', price: 1012.86, category: 'gold', subcategory: 'swiss-gold', weight: '7.78g', karat: '24K/999.9', image: '🥇', description: 'Royal Mint Britannia gold coin' },
  { id: '15', name: 'Gold Bracelet (13.63g/18K)', price: 1327.29, category: 'gold', subcategory: 'used-gold', weight: '13.63g', karat: '18K', image: '💍', description: 'Pre-owned gold bracelet' },
  { id: '16', name: 'Gold Necklace (8.44g/18K)', price: 938.22, category: 'gold', subcategory: 'used-gold', weight: '8.44g', karat: '18K', image: '💍', description: 'Pre-owned gold necklace' },
  { id: '17', name: 'Gold Earrings (14.15g/21K)', price: 1605.63, category: 'gold', subcategory: 'used-gold', weight: '14.15g', karat: '21K', image: '💍', description: 'Pre-owned gold earrings' },
  { id: '18', name: 'Diamond Ring (10.22g/18K)', price: 1134.73, category: 'gold', subcategory: 'used-gold', weight: '10.22g', karat: '18K', image: '💎', description: 'Pre-owned diamond ring' },
  { id: '19', name: 'Silver Ounce Suisse', price: 75.93, category: 'silver', subcategory: 'imported-silver', weight: '1oz', image: '🥈', description: 'Swiss minted silver ounce' },
  { id: '20', name: '50g Suisse Minted Bar Silver', price: 118.70, category: 'silver', subcategory: 'imported-silver', weight: '50g', image: '🥈', description: '50g Swiss minted silver bar' },
  { id: '21', name: '100g Suisse Minted Bar Silver', price: 223.40, category: 'silver', subcategory: 'imported-silver', weight: '100g', image: '🥈', description: '100g Swiss minted silver bar' },
  { id: '22', name: 'Ounce Cedar Local Silver', price: 59.93, category: 'silver', subcategory: 'local-silver', weight: '1oz', image: '🥈', description: 'Cedar design local silver ounce' },
  { id: '23', name: 'Ounce Lady Silver', price: 59.93, category: 'silver', subcategory: 'local-silver', weight: '1oz', image: '🥈', description: 'Lady design local silver ounce' },
  { id: '24', name: 'King George V Silver', price: 18.87, category: 'silver', subcategory: 'local-silver', weight: 'varies', image: '🥈', description: 'King George V silver coin' },
];

function loadData<T>(key: string, defaultValue: T): T {
  try {
    const stored = localStorage.getItem(key);
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.error('Error loading data:', e);
  }
  return defaultValue;
}

function saveData<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving data:', e);
  }
}

export function getSettings(): SiteSettings {
  return loadData('site_settings', defaultSettings);
}

export function saveSettings(settings: SiteSettings): void {
  saveData('site_settings', settings);
}

export function getCategories(): Category[] {
  return loadData('site_categories', defaultCategories);
}

export function saveCategories(categories: Category[]): void {
  saveData('site_categories', categories);
}

export function getProducts(): Product[] {
  return loadData('site_products', defaultProducts);
}

export function saveProducts(products: Product[]): void {
  saveData('site_products', products);
}

export function resetToDefaults(): void {
  localStorage.removeItem('site_settings');
  localStorage.removeItem('site_categories');
  localStorage.removeItem('site_products');
}
