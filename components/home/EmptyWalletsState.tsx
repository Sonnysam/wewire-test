import { colors } from '@/constants/colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EmptyWalletsState() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No wallets yet</Text>
      <Text style={styles.hint}>Tap + to add one</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    gap: 8,
  },
  text: {
    fontSize: 16,
    color: colors.grey,
    fontWeight: '500',
  },
  hint: {
    fontSize: 14,
    color: colors.grey,
  },
});
