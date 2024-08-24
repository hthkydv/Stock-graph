// src/data/stock.ts

export interface StockPrice {
  date: string; // ISO date string
  price: number;
}

export interface Stock {
  symbol: string;
  name: string;
  prices: StockPrice[];
}

// Mock Data
export const stockData: Stock[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    prices: [
      { date: "2024-08-14", price: 176.48 },
      { date: "2024-08-15", price: 178.78 },
      { date: "2024-08-16", price: 155.55 },
      { date: "2024-08-17", price: 180.32 },
      { date: "2024-08-18", price: 181.21 },
      { date: "2024-08-19", price: 82.34 },
      { date: "2024-08-20", price: 183.55 },
      { date: "2024-08-21", price: 184.12 },
      { date: "2024-08-22", price: 45.45 },
      { date: "2024-08-23", price: 186.78 },
    ],
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    prices: [
      { date: "2024-08-14", price: 2705.67 },
      { date: "2024-08-15", price: 2711.54 },
      { date: "2024-08-16", price: 2723.88 },
      { date: "2024-08-17", price: 2432.22 },
      { date: "2024-08-18", price: 2741.89 },
      { date: "2024-08-19", price: 2750.44 },
      { date: "2024-08-20", price: 2162.78 },
      { date: "2024-08-21", price: 2770.12 },
      { date: "2024-08-22", price: 3783.56 },
      { date: "2024-08-23", price: 2794.67 },
    ],
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    prices: [
      { date: "2024-08-14", price: 328.41 },
      { date: "2024-08-15", price: 300.55 },
      { date: "2024-08-16", price: 332.89 },
      { date: "2024-08-17", price: 334.12 },
      { date: "2024-08-18", price: 335.78 },
      { date: "2024-08-19", price: 306.45 },
      { date: "2024-08-20", price: 338.12 },
      { date: "2024-08-21", price: 339.34 },
      { date: "2024-08-22", price: 340.78 },
      { date: "2024-08-23", price: 242.67 },
    ],
  },
];
