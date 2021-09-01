import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Onboarding from '../Screens/Onboarding';
import LoginRegister from '../Screens/LoginRegister';
import RegisterScreen from '../Screens/RegisterScreen';
import {createStackNavigator, TransitionPresets, TransitionSpecs} from '@react-navigation/stack'
import LoginScreen from '../Screens/LoginScreen';
import VerifyOTP from '../Screens/VerifyOTP';
import Scan from '../Screens/Scan';

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
    {
        name: 'VerifyOTP',
        component: VerifyOTP
    },
    {
        name: 'Scan',
        component: Scan
    },
]
const OnboardingNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName = 'onBoarding'
            screenOptions = {{
                headerShown:false,
                transitionSpec:{
                    open: TransitionSpecs.BottomSheetSlideInSpec,
                    close: TransitionSpecs.RevealFromBottomAndroidSpec,
                },
                ...TransitionPresets.SlideFromRightIOS,

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

export default OnboardingNavigation

const styles = StyleSheet.create({})
