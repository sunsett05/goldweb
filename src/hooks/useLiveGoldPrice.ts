import { useState, useEffect, useCallback } from 'react';

interface MetalPrice {
  price: number;
  currency: string;
  updatedAt: string;
  loading: boolean;
  error: string | null;
}

export function useLiveGoldPrice(refreshInterval: number = 60000) {
  const [goldPrice, setGoldPrice] = useState<MetalPrice>({
    price: 0,
    currency: 'USD',
    updatedAt: '',
    loading: true,
    error: null,
  });

  const [silverPrice, setSilverPrice] = useState<MetalPrice>({
    price: 0,
    currency: 'USD',
    updatedAt: '',
    loading: true,
    error: null,
  });

  const fetchGoldPrice = useCallback(async () => {
    try {
      const response = await fetch('https://api.gold-api.com/price/XAU');
      if (!response.ok) throw new Error('Failed to fetch gold price');
      const data = await response.json();
      setGoldPrice({
        price: data.price,
        currency: data.currency,
        updatedAt: data.updatedAtReadable || new Date().toLocaleTimeString(),
        loading: false,
        error: null,
      });
    } catch (error) {
      setGoldPrice(prev => ({
        ...prev,
        loading: false,
        error: 'Unable to fetch live price',
      }));
    }
  }, []);

  const fetchSilverPrice = useCallback(async () => {
    try {
      const response = await fetch('https://api.gold-api.com/price/XAG');
      if (!response.ok) throw new Error('Failed to fetch silver price');
      const data = await response.json();
      setSilverPrice({
        price: data.price,
        currency: data.currency,
        updatedAt: data.updatedAtReadable || new Date().toLocaleTimeString(),
        loading: false,
        error: null,
      });
    } catch (error) {
      setSilverPrice(prev => ({
        ...prev,
        loading: false,
        error: 'Unable to fetch live price',
      }));
    }
  }, []);

  useEffect(() => {
    fetchGoldPrice();
    fetchSilverPrice();

    const interval = setInterval(() => {
      fetchGoldPrice();
      fetchSilverPrice();
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [fetchGoldPrice, fetchSilverPrice, refreshInterval]);

  // Calculate 18K gold price per gram (24K is per troy ounce, 1 troy oz = 31.1035 grams)
  // 18K = 75% of 24K
  const goldPricePerGram18K = (goldPrice.price / 31.1035) * 0.75;

  return {
    goldPrice,
    silverPrice,
    goldPricePerGram18K,
    refresh: () => {
      fetchGoldPrice();
      fetchSilverPrice();
    },
  };
}
