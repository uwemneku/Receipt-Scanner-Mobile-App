import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Typography from './Typography'

const CustomButton = ({title = '', variant, bgColor='white', outline}) => {
    return (
        <TouchableOpacity 
            style={[styles.container, {backgroundColor: outline ? 'transparent' : bgColor, borderColor:bgColor, borderWidth:outline ? 2 : 0}]}
            activeOpacity ={0.8}
        >
            <Typography text={title} textAlign="center" color={outline ? 'white' : 'black'} />
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
       borderRadius:12,
       paddingVertical:14,
    }
})
