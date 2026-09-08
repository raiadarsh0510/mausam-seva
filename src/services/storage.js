import { artisans as defaultArtisans } from '../data/artisans';
import { products as defaultProducts } from '../data/products';

const ARTISANS_STORAGE_KEY = 'karigarsetu_artisans_v1';
const PRODUCTS_STORAGE_KEY = 'karigarsetu_products_v1';

export function getInitialArtisans() {
  try {
    const stored = localStorage.getItem(ARTISANS_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load stored artisans:', e);
  }
  return defaultArtisans;
}

export function getInitialProducts() {
  try {
    const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load stored products:', e);
  }
  return defaultProducts;
}

export function saveStoredArtisans(artisans) {
  try {
    localStorage.setItem(ARTISANS_STORAGE_KEY, JSON.stringify(artisans));
  } catch (e) {
    console.error('Failed to persist artisans to localStorage:', e);
  }
}

export function saveStoredProducts(products) {
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
  } catch (e) {
    console.error('Failed to persist products to localStorage:', e);
  }
}

export function exportDataAsJsonFile(artisans, products) {
  const data = {
    exportedAt: new Date().toISOString(),
    version: '1.0',
    registry: 'Lucknow Chikankari GI #119 Provenance Ledger',
    artisans,
    products
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `karigarsetu-real-data-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

export function resetStorageToDefaults() {
  try {
    localStorage.removeItem(ARTISANS_STORAGE_KEY);
    localStorage.removeItem(PRODUCTS_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to reset localStorage:', e);
  }
}
