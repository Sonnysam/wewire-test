import { colors } from '@/constants/colors';
import type { ButtonProps } from '@/interfaces';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled = false, style, textStyle }) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.disabled, style]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.8}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
