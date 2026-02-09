import { colors } from '@/constants/colors';
import type { TransactionRowProps } from '@/interfaces/home';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TransactionRow({ transaction, formatDate }: TransactionRowProps) {
  const isNegative = transaction.amount.startsWith('-');

  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.description}>{transaction.description}</Text>
        <Text style={styles.date}>{formatDate(transaction.date)}</Text>
      </View>
      <Text style={[styles.amount, isNegative ? styles.amountNeg : styles.amountPos]}>
        {transaction.amount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#1c1c1e',
    marginBottom: 12,
    borderRadius: 14,
  },
  left: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 4,
  },
  date: {
    fontSize: 13,
    color: colors.grey,
  },
  amount: {
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 16,
  },
  amountNeg: {
    color: colors.error,
  },
  amountPos: {
    color: colors.primary,
  },
});
