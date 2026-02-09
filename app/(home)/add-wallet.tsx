import MainContainer from '@/components/common/MainContainer';
import BackButton from '@/components/ui/BackButton';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import { colors } from '@/constants/colors';
import { CURRENCIES } from '@/data/currencies';
import type { WalletFormErrors } from '@/interfaces';
import { useWallets } from '@/store/wallets';
import { validateWalletForm } from '@/utils/validations';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AddWalletScreen() {
  const router = useRouter();
  const addWallet = useWallets().addWallet;
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');
  const [errors, setErrors] = useState<WalletFormErrors>({});

  const handleSubmit = () => {
    const { valid, errors: next } = validateWalletForm(name, currency);
    setErrors(next);
    if (!valid) return;
    addWallet({ name: name.trim(), currency });
    router.back();
  };

  const clearNameError = () => setErrors((e) => ({ ...e, name: undefined }));
  const clearCurrencyError = () => setErrors((e) => ({ ...e, currency: undefined }));

  return (
    <MainContainer style={styles.sheet} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <BackButton />
      </View>
      <Input
        label="Wallet name"
        placeholder="e.g. Savings"
        value={name}
        onChangeText={(t) => { setName(t); clearNameError(); }}
        error={errors.name}
      />

      <View style={styles.field}>
        <Text style={styles.label}>Currency</Text>
        <View style={styles.currencyRow}>
          {CURRENCIES.map((c) => (
            <TouchableOpacity
              key={c}
              style={[styles.chip, currency === c && styles.chipSelected]}
              onPress={() => { setCurrency(c); clearCurrencyError(); }}
              activeOpacity={0.8}>
              <Text style={[styles.chipText, currency === c && styles.chipTextSelected]}>{c}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {errors.currency ? <Text style={styles.errorText}>{errors.currency}</Text> : null}
      </View>

      <View style={styles.actions}>
        <Button title="Add Wallet" onPress={handleSubmit} />
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  sheet: {
    paddingHorizontal: 0,
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  content: {
    flexGrow: 0,
    paddingHorizontal: 24,
    paddingVertical: 24,
    paddingBottom: 24,
    width: '100%',
    maxWidth: '100%',
  },
  field: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 12,
  },
  currencyRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1c1c1e',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
  },
  chipTextSelected: {
    color: colors.white,
    fontWeight: '700',
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 8,
  },
  actions: {
    marginTop: 32,
  },
});
