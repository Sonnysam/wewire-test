import { colors } from '@/constants/colors';
import type { MainContainerProps } from '@/interfaces';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  style,
  contentContainerStyle,
}) => (
  <SafeAreaView style={[styles.container, style]}>
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}>
      <ScrollView
        contentContainerStyle={[styles.scrollContent, contentContainerStyle]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 15 : 10,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: Platform.OS === 'ios' ? 0 : 20,
    paddingBottom: 50,
  },
});

export default MainContainer;