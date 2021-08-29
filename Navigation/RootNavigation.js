import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Onboarding from '../Screens/Onboarding';
import LoginRegister from '../Screens/LoginRegister';
import RegisterScreen from '../Screens/RegisterScreen';
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator()

const screens = [
    {
        name: 'onBoarding',
        component: Onboarding
    },
    {
        name: 'LoginRegister',
        component: LoginRegister
    },
    {
        name: 'RegisterScreen',
        component: RegisterScreen
    },
    {
        name: 'LoginScreen',
        component: LoginScreen
    },
]
const RootNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName = 'onBoarding'
            screenOptions = {{
                headerShown:false
            }}
        >
            {
                screens.map((item, index) => {
                    return (
                        <Stack.Screen 
                            key={index}
                            name={item.name}
                            component={item.component}
                        />
                    )
                })
            }
        </Stack.Navigator>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
