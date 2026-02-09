import type { AuthState } from '@/interfaces/store';
import { create } from 'zustand';

export const useAuthStore = create<AuthState>((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  login: () => set({}), 
}));
