import type { Wallet } from '@/interfaces';

export const MOCK_WALLETS: Wallet[] = [
  { id: '1', name: 'Main Wallet', currency: 'USD', balance: '1250.00' },
  { id: '2', name: 'Savings', currency: 'EUR', balance: '3400.50' },
  { id: '3', name: 'Travel', currency: 'GBP', balance: '580.25' },
];
