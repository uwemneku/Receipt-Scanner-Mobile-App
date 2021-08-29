import React, { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Typography from './Typography'
import { Entypo } from '@expo/vector-icons';

const PassWordInput = React.memo(() => {
    const [passWordVisibility, setPassWordVisibility] = useState(false)
    const togglePassword = () => {
        setPassWordVisibility(!passWordVisibility)
    }
    return(
        <View style={[styles.inputContainer, {borderBottomColor:'gray', borderBottomWidth:2}]}>
            <Typography text="Password" color='grey' fontSize={14} />
            <View style={styles.password} >
                <TextInput style={[styles.textInput, {flex:1, borderWidth:0}]} textContentType='password' secureTextEntry={passWordVisibility}  />
                <Pressable onPress={togglePassword} >
                    <Entypo name={passWordVisibility ? "eye-with-line" : "eye"} size={24} color="black" />
                </Pressable>
            </View>
        </View>      
    )
}) 

export default PassWordInput

const styles = StyleSheet.create({
    textInput:{
        borderColor:'white',
        borderBottomColor:'gray',
        borderWidth:2,
        paddingVertical:5,
        color:'#404CCF',
    },
    inputContainer:{
        marginVertical:10,
        width:'100%',
        color:'red'
    },
    password:{
        flexDirection:'row',
        width:'100%'
    }
})