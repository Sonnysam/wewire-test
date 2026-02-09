import MainContainer from '@/components/common/MainContainer';
import WalletCard from '@/components/home/WalletCard';
import { colors } from '@/constants/colors';
import { useWallets } from '@/store/wallets';
import { filterWalletsBySearch } from '@/utils/wallets';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export default function WalletsScreen() {
  const router = useRouter();
  const wallets = useWallets().wallets;
  const [search, setSearch] = useState('');
  const filtered = filterWalletsBySearch(wallets, search);

  return (
    <MainContainer contentContainerStyle={styles.content}>
      <View style={styles.searchWrap}>
        <Ionicons name="search-outline" size={20} color={colors.grey} style={styles.searchIcon} />
        <TextInput
          style={styles.search}
          placeholder="Name or currency"
          placeholderTextColor={colors.grey}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {filtered.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>No wallets match</Text>
          <Text style={styles.emptyHint}>
            {search.trim() ? 'Try a different search' : 'Add a wallet from home'}
          </Text>
        </View>
      ) : (
        <>
          {search.trim() ? (
            <Text style={styles.resultCount}>{filtered.length} wallet{filtered.length !== 1 ? 's' : ''}</Text>
          ) : null}
          {filtered.map((item) => (
            <WalletCard
              key={item.id}
              wallet={item}
              onPress={() => router.push({ pathname: '/wallet/[id]', params: { id: item.id } })}
            />
          ))}
        </>
      )}
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: Platform.OS === 'ios' ? 15 : 10,
    paddingBottom: 40,
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  searchIcon: {
    marginRight: 12,
  },
  search: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.white,
  },
  resultCount: {
    fontSize: 13,
    color: colors.grey,
    marginBottom: 12,
  },
  empty: {
    paddingVertical: 56,
    alignItems: 'center',
    gap: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
  },
  emptyHint: {
    fontSize: 14,
    color: colors.grey,
  },
});
