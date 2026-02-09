import type { Wallet } from '@/interfaces';

export function filterWalletsBySearch(wallets: Wallet[], query: string): Wallet[] {
  const q = query.trim().toLowerCase();
  if (!q) return wallets;
  return wallets.filter(
    (w) =>
      w.name.toLowerCase().includes(q) || w.currency.toLowerCase().includes(q)
  );
}

export function getTotalBalance(wallets: Wallet[]): string {
  return wallets
    .reduce((sum, w) => sum + parseFloat(w.balance), 0)
    .toFixed(2);
}
