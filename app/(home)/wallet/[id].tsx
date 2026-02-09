import MainContainer from '@/components/common/MainContainer';
import TransactionRow from '@/components/home/TransactionRow';
import WalletDetailHeader from '@/components/home/WalletDetailHeader';
import { colors } from '@/constants/colors';
import { MOCK_TRANSACTIONS } from '@/data/transactions';
import { useWallets } from '@/store/wallets';
import { formatTransactionDate } from '@/utils/format';
import { useLocalSearchParams } from 'expo-router';
import { useMemo } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function WalletDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const wallets = useWallets().wallets;

  const wallet = useMemo(() => wallets.find((w) => w.id === id), [wallets, id]);
  const transactions = useMemo(
    () => (id ? MOCK_TRANSACTIONS.filter((t) => t.walletId === id) : []),
    [id]
  );

  if (!wallet) {
    return (
      <MainContainer contentContainerStyle={styles.content}>
        <Text style={styles.notFound}>Wallet not found</Text>
      </MainContainer>
    );
  }

  return (
    <MainContainer contentContainerStyle={styles.content}>
      <WalletDetailHeader wallet={wallet} />

      <Text style={styles.sectionTitle}>Recent transactions</Text>
      {transactions.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.empty}>No transactions yet.</Text>
        </View>
      ) : ( 
        transactions.map((tx) => (
          <TransactionRow
            key={tx.id} 
            transaction={tx}
            formatDate={formatTransactionDate}
          />
        ))
      )}
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: Platform.OS === 'ios' ? 15 : 10,
    paddingBottom: 40,
  },
  notFound: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  empty: {
    fontSize: 16,
    color: colors.grey,
    fontStyle: 'italic',
  },
});
