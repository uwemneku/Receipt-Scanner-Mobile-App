import React, { useState } from 'react'
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {secondaryLogo, primaryLogo} from '../assets/Images'
import CustomButton from '../Components/CustomButton'
import Typography from '../Components/Typography'
import { Entypo } from '@expo/vector-icons';

const H = Dimensions.get('window').height
const RegisterScreen = () => {
    return (
        <ScrollView style={{flex:1, backgroundColor:'white'}} contentContainerStyle={{height:H, padding:20}} showsVerticalScrollIndicator={false} >
            <View style={styles.container} >
                <Image  source={secondaryLogo} style={{marginVertical:60}} />
                <View style={styles.inputContainer }>
                    <Typography text="Full Name" color='grey' fontSize={14} />
                    <TextInput style={styles.textInput} textContentType='name'   />
                </View>
                <View style={styles.inputContainer }>
                    <Typography text="Email Address" color='grey' fontSize={14} />
                    <TextInput style={styles.textInput} textContentType='emailAddress' />
                </View>
                <View style={styles.inputContainer }>
                    <Typography text="Phone Number" color='grey' fontSize={14} />
                    <TextInput style={styles.textInput} numberOfLines={1} textContentType='telephoneNumber' keyboardType='numeric' />
                </View>
                <PassWordInput />
            </View>
            <View style={{width:'100%'}} >
                <TouchableOpacity activeOpacity={0.8} >
                    <CustomButton title='Continue' bgColor='#404CCF' />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

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

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        // justifyContent:'center',
        alignItems:'center'
    },
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
