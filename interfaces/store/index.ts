import type { Wallet } from '@/interfaces';

export interface WalletsState {
  wallets: Wallet[];
  addWallet: (wallet: Omit<Wallet, 'id' | 'balance'>) => void;
}

export interface AuthState {
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  login: () => void;
}
