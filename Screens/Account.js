import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux';
import CustomButton from '../Components/CustomButton';
import { switchTheme } from '../reducers/themeSlice';

const Account = () => {
    const [darkModeisEnabled, setDarkModeisEnabled] = useState(false)
    const dispatch = useDispatch();
    const handleThemeChange = () => {
        setDarkModeisEnabled(!darkModeisEnabled)
        dispatch(switchTheme(darkModeisEnabled ? 'light' : 'dark'))
    }
    return (
        <View style={[styles.container]} >
            <TouchableOpacity onPress={handleThemeChange} >
                <CustomButton title='Switch to dark mode' />
            </TouchableOpacity>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:20
    }
})
