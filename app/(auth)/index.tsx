import MainContainer from '@/components/common/MainContainer';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { colors } from '@/constants/colors';
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'expo-router';
import { StyleSheet, Text } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();
  const email = useAuthStore((s) => s.email);
  const password = useAuthStore((s) => s.password);
  const setEmail = useAuthStore((s) => s.setEmail);
  const setPassword = useAuthStore((s) => s.setPassword);
  const login = useAuthStore((s) => s.login);

  const handleLogin = () => {
    login();
    router.replace('/home');
  };

  return (
    <MainContainer contentContainerStyle={styles.content}>
      <Text style={styles.title}>Welcome</Text>
      <Input
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        label="Password"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        showPasswordToggle={true}
      />
      <Button title="Login" onPress={handleLogin} />
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 32,
    textAlign: 'center',
  },
});
