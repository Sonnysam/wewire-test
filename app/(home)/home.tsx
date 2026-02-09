import MainContainer from '@/components/common/MainContainer';
import BalanceCard from '@/components/home/BalanceCard';
import WalletsSection from '@/components/home/WalletsSection';
import Fab from '@/components/ui/Fab';
import { useWallets } from '@/store/wallets';
import { getTotalBalance } from '@/utils/wallets';
import { useRouter } from 'expo-router';
import { Platform, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const wallets = useWallets().wallets;
  const totalBalance = getTotalBalance(wallets);

  return (
    <View style={styles.screen}>
      <MainContainer contentContainerStyle={styles.content}>
        <BalanceCard totalBalance={totalBalance} walletCount={wallets.length} />
        <WalletsSection
          wallets={wallets}
          onWalletPress={(id) => router.push({ pathname: '/wallet/[id]', params: { id } })}
          onViewAll={() => router.push('/wallets')}
        />
      </MainContainer>
      <Fab onPress={() => router.push('/add-wallet')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
   paddingTop: Platform.OS === 'ios' ? 15 : 10,
    paddingHorizontal: 5,
    paddingBottom: 100,
  },
});
