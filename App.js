import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginRegister from './Screens/LoginRegister';
import Onboarding from './Screens/Onboarding';

export default function App() {
  return (
    <View style={styles.container}>
        <LoginRegister />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
