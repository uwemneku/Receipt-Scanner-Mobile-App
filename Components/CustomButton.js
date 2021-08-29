import React from 'react'
import { StyleSheet, View } from 'react-native'
import Typography from './Typography'

const CustomButton = ({title = '', variant, bgColor='white', outline}) => {
    return (
        <View 
            style={[styles.container, {backgroundColor: outline ? 'transparent' : bgColor, borderColor:bgColor, borderWidth:outline ? 2 : 0}]}
        >
            <Typography text={title} textAlign="center" color={outline ? 'white' : bgColor === 'white' ? '#404CCF' : 'white'} />
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
       borderRadius:12,
       paddingVertical:14,
    }
})
