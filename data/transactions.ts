import type { Transaction } from '@/interfaces';

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', walletId: '1', description: 'Coffee shop', amount: '-12.50', date: '2025-02-08' },
  { id: 't2', walletId: '1', description: 'Salary', amount: '2500.00', date: '2025-02-01' },
  { id: 't3', walletId: '2', description: 'Transfer in', amount: '500.00', date: '2025-02-07' },
  { id: 't4', walletId: '2', description: 'Utility bill', amount: '-85.20', date: '2025-02-05' },
  { id: 't5', walletId: '3', description: 'Hotel booking', amount: '-120.00', date: '2025-02-06' },
];
