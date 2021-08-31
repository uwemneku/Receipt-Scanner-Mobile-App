import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Scan from '../Screens/Scan'
import BottomSheetNavigation from './BottomSheetNavigation'

const Stack = createStackNavigator()
const screens = [
    {
        name: 'BottomNavigation',
        component: BottomSheetNavigation
    },
    {
        name: 'Camera',
        component: Scan
    }
]

const RootNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='BottomNavigation'
            screenOptions={{
                headerShown:false
            }}
        >
            {
                screens.map((item, index) => {
                    return(
                        <Stack.Screen 
                            key={index}
                            name={item.name}
                            component = {item.component}
                        />
                    )
                })
            }
        </Stack.Navigator>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
