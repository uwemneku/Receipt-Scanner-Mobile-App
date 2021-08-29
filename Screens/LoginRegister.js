import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {primaryLogo} from '../assets/Images'
import CustomButton from '../Components/CustomButton'
import Typography from '../Components/Typography'

const LoginRegister = () => {
    return (
        <View style={styles.container} >
            <View style={{marginBottom:40}} >
                <Image source={primaryLogo} />
                <Typography text="No more paper receipt!" color='white' textAlign='center' />
            </View>
            <View style={styles.buttons} >
                <CustomButton title="Login" outline />
                <CustomButton title="Register" />
            </View>
        </View>
    )
}

export default LoginRegister

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#404CCF',
        alignItems:'center',
        justifyContent:'center'
    },
    buttons:{
        width:'100%',
        padding:20,
        height: 200,
        justifyContent:'space-around'
    }
})
