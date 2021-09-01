import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home'
import Scan from '../Screens/Scan'
import Expenses from '../Screens/Expenses'
import Account from '../Screens/Account';
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import Typography from '../Components/Typography'
import { useSelector } from 'react-redux'

const BottomSheet = createBottomTabNavigator()
const screens = [
    {
        name: 'Home',
        component: Home,
        icon:(color) => <Entypo name="home" size={24} color={color} />
    },
    {
        name: 'Scan',
        component: Scan,
        icon:(color) => <FontAwesome5 name="camera" size={24} color={color} />
    },
    {
        name: 'Expenses',
        component: Expenses,
        icon:(color) => <Entypo name="text-document" size={24} color={color} />
    },
    {
        name: 'Account',
        component: Account,
        icon:(color) => <FontAwesome5 name="user-alt" size={24} color={color} />
    },
]
const BottomSheetNavigation = () => {
    const {primary:primaryColor, 
        secondary:secondaryColor, 
        text:textColor,
        background:backgroundColor}  = useSelector(state => state.themeSlice)
    return (
        <BottomSheet.Navigator
            initialRouteName = 'Home'
            tabBar = {({navigation, state}) => (
                <View style={[styles.tabBar, {backgroundColor:backgroundColor}]} >
                    {
                        screens.map((item, index)=>{
                            const isFocused = state.index === index
                            const color = isFocused ? primaryColor : 'gray'
                            return (
                            <View key={item.name} >
                                <Pressable onPress={()=>navigation.navigate(item.name === 'Scan' ? 'Camera' : item.name)} style={{justifyContent:'center', alignItems:'center'}}  >
                                    {item.icon(color)}
                                    <Typography text={item.name} color={color} />
                                </Pressable>
                            </View>
                        )})
                    }
                </View>
            )}
            
        >
            {
                screens.map((item, index) => {
                    return (
                        <BottomSheet.Screen 
                            key={index}
                            name={item.name}
                            component = {item.component}
                            options={{
                                tabBarIcon:({focused}) => item.icon(focused?'blue':'gray'),
                                tabBarStyle: {height:70},
                                headerShown:false,

                            }}

                        />
                    )
                })
            }
        </BottomSheet.Navigator>
    )
}

export default BottomSheetNavigation

const styles = StyleSheet.create({
    tabBar:{
        height:70, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-around',
        elevation:30
    },

})
