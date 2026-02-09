import { colors } from '@/constants/colors';
import type { InputProps } from '@/interfaces';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  secureTextEntry = false,
  showPasswordToggle = false,
  keyboardType = 'default',
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.inputWrap, error ? styles.inputWrapError : null]}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          secureTextEntry={secureTextEntry === true && !isPasswordVisible}
          keyboardType={keyboardType}
          autoCapitalize={secureTextEntry ? 'none' : undefined}
          autoCorrect={!secureTextEntry}
        />
        {secureTextEntry && showPasswordToggle && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((v) => !v)}
            style={styles.toggle}
            activeOpacity={0.7}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Ionicons name={isPasswordVisible ? 'eye-off' : 'eye'} size={22} color={colors.white} />
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 6,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.grey + '30',
  },
  inputWrapError: {
    borderColor: colors.error,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.white,
  },
  toggle: {
    padding: 12,
  },
  error: {
    fontSize: 12,
    color: colors.error,
    marginTop: 4,
  },
});

export default Input;
