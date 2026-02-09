import { colors } from '@/constants/colors';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}>
        <Stack.Screen name="(auth)/index" />
        <Stack.Screen name="(home)" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}
