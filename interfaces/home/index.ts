import type { Transaction } from '@/interfaces';
import { ViewStyle } from 'react-native';
import type { Wallet } from '../wallet';

export interface BalanceCardProps {
  totalBalance: string;
  walletCount: number;
}

export interface WalletCardProps {
  wallet: Wallet;
  onPress: () => void;
}

export interface WalletsSectionProps {
  wallets: Wallet[];
  onWalletPress: (id: string) => void;
  onViewAll: () => void;
}

export interface WalletDetailHeaderProps {
  wallet: Wallet;
}

export interface TransactionRowProps {
  transaction: Transaction;
  formatDate: (dateStr: string) => string;
}

export interface FabProps {
    onPress: () => void;
    style?: ViewStyle;
  }