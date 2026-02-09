import { colors } from '@/constants/colors';
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: 'bold' },
        contentStyle: { backgroundColor: colors.background },
        headerShadowVisible: false,
      }}>
      <Stack.Screen name="home" options={{ title: 'Home' }} />
      <Stack.Screen name="wallets" options={{ title: 'Wallets' }} />
      <Stack.Screen
        name="add-wallet"
        options={{
          title: 'Add Wallet',
          headerShown: true,
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.white,
          headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
          presentation: 'formSheet',
          sheetAllowedDetents: [0.25, 0.5, 1],
          sheetInitialDetentIndex: 1,
        }}
      />
      <Stack.Screen name="wallet/[id]" options={{ title: 'Wallet Detail' }} />
    </Stack>
  );
}
