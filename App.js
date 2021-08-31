import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'react-native-unimodules';
import RootNavigation from './Navigation/RootNavigation';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#404CCF' />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:Constants.statusBarHeight
  },
});
