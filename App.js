import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'react-native-unimodules';
import RootNavigation from './Navigation/RootNavigation';
import OnboardingNavigation from './Navigation/OnboardingNavigation';
import { useSelector } from 'react-redux';
import LoadingModal from './Components/LoadingModal';

const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary: '#404CCF'
  }
}
export default function App() {
  const isLoggedIn = useSelector(state => state.authecationSlice.loggedIn)
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#404CCF' />
      <NavigationContainer theme={MyTheme} >
        {
          isLoggedIn ?
          <RootNavigation />
          :
          <OnboardingNavigation />
        }
      </NavigationContainer>
      <LoadingModal />
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
