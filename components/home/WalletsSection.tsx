import { colors } from '@/constants/colors';
import { WalletsSectionProps } from '@/interfaces/home';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EmptyWalletsState from './EmptyWalletsState';
import WalletCard from './WalletCard';


export default function WalletsSection({ wallets, onWalletPress, onViewAll }: WalletsSectionProps) {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>My wallets</Text>
        <TouchableOpacity onPress={onViewAll} style={styles.viewAll}>
          <Text style={styles.viewAllText}>View all</Text>
          <Ionicons name="chevron-forward" size={18} color={colors.primary} />
        </TouchableOpacity>
      </View>
      {wallets.length === 0 ? (
        <EmptyWalletsState />
      ) : (
        wallets.map((w) => (
          <WalletCard
            key={w.id}
            wallet={w}
            onPress={() => onWalletPress(w.id)}
          />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  viewAllText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '600',
  },
});
