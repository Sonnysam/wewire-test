import { colors } from '@/constants/colors';
import { WalletCardProps } from '@/interfaces/home';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function WalletCard({ wallet, onPress }: WalletCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <View style={styles.left}>
        <View style={styles.currencyBadge}>
          <Text style={styles.currencyText}>{wallet.currency}</Text>
        </View>
        <Text style={styles.name} numberOfLines={1}>{wallet.name}</Text>
      </View>
      <Text style={styles.balance}>{wallet.balance}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    backgroundColor: '#1c1c1e',
    borderRadius: 16,
    marginBottom: 12,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  currencyBadge: {
    backgroundColor: 'rgba(229, 68, 6, 0.2)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  currencyText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
  name: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.white,
    flex: 1,
  },
  balance: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
    marginLeft: 12,
  },
});
