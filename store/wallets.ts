import { MOCK_WALLETS } from '@/data/wallets';
import type { WalletsState } from '@/interfaces/store';
import { create } from 'zustand';

export const useWalletsStore = create<WalletsState>((set) => ({
  wallets: MOCK_WALLETS,
  addWallet: (wallet) =>
    set((state) => ({
      wallets: [
        ...state.wallets,
        {
          ...wallet,
          id: Date.now().toString(),
          balance: '0.00',
        },
      ],
    })),
}));

export const useWallets = () => ({
  wallets: useWalletsStore((s) => s.wallets),
  addWallet: useWalletsStore((s) => s.addWallet),
});
