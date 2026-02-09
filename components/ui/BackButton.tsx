/* eslint-disable @typescript-eslint/no-unused-vars */
import { colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

const backButtonBg = colors.primary + '90';

export default function BackButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.back()}
      activeOpacity={0.8}
      accessibilityLabel="Go back"
    >
      <Ionicons name="chevron-back" size={28} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    // backgroundColor: backButtonBg,
    // borderRadius: 6,
    // borderTopRightRadius: 6,
    // borderBottomLeftRadius: 6,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
