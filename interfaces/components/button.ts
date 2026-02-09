import { TextStyle, ViewStyle } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  keyboardType?: 'default' | 'email-address';
}
