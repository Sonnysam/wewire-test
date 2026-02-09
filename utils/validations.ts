import type { WalletFormErrors } from '@/interfaces/forms';

export function validateWalletForm(
  name: string,
  currency: string
): { valid: boolean; errors: WalletFormErrors } {
  const errors: WalletFormErrors = {};
  if (!name.trim()) errors.name = 'Wallet name is required';
  else if (name.trim().length < 2) errors.name = 'Wallet name must be at least 2 characters';
  if (!currency) errors.currency = 'Please select a currency';
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
