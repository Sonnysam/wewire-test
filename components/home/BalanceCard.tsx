import { colors } from '@/constants/colors';
import type { BalanceCardProps } from '@/interfaces/home';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BalanceCard({ totalBalance, walletCount }: BalanceCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Total balance</Text>
      <Text style={styles.amount}>{totalBalance}</Text>
      <Text style={styles.hint}>
        Across {walletCount} wallet{walletCount !== 1 ? 's' : ''}
      </Text>
      <View style={styles.iconWrap} pointerEvents="none">
        <Ionicons name="wallet-outline" size={100} color="rgba(229, 68, 6, 0.18)" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 28,
    padding: 24,
    backgroundColor: '#1c1c1e',
    borderRadius: 20,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    overflow: 'hidden',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.grey,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  amount: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: -0.5,
  },
  hint: {
    fontSize: 13,
    color: colors.grey,
    marginTop: 6,
  },
  iconWrap: {
    position: 'absolute',
    right: -24,
    bottom: -24,
    transform: [{ rotate: '-15deg' }],
  },
});
