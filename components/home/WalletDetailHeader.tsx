import { colors } from '@/constants/colors';
import type { WalletDetailHeaderProps } from '@/interfaces/home';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function WalletDetailHeader({ wallet }: WalletDetailHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.name}>{wallet.name}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.currency}>{wallet.currency}</Text>
        <Text style={styles.balance}>{wallet.balance}</Text>
      </View>
      <View style={styles.iconWrap} pointerEvents="none">
        <Ionicons name="wallet-outline" size={96} color="rgba(229, 68, 6, 0.18)" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 28,
    paddingHorizontal: 24,
    paddingVertical: 32,
    minHeight: 140,
    backgroundColor: '#1c1c1e',
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    overflow: 'hidden',
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.white,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 12,
  },
  currency: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  balance: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
  },
  iconWrap: {
    position: 'absolute',
    right: -24,
    bottom: -24,
    transform: [{ rotate: '-15deg' }],
  },
});
