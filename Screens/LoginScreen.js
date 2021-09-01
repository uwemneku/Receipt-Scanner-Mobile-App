import React from 'react'
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import {secondaryLogo} from '../assets/Images'
import CustomButton from '../Components/CustomButton'
import Typography from '../Components/Typography'
import PassWordInput from '../Components/PasswordInput'
import { useNavigation } from '@react-navigation/native'
import useAuthenticateUser from '../hooks/useAuthenticateUser'

const H = Dimensions.get('window').height
const LoginScreen = () => {
    const navigation = useNavigation()
    const login = useAuthenticateUser()

    const handleLogin = () => {
        login()
    }
    return (
        <ScrollView style={{flex:1, backgroundColor:'white'}} contentContainerStyle={{height:H, padding:20, justifyContent:'center'}} showsVerticalScrollIndicator={false} >
            <View style={styles.container} >
                <Image  source={secondaryLogo} style={{marginVertical:60}} />
                <View style={styles.inputContainer }>
                    <Typography text="Email Address" color='grey' fontSize={14} />
                    <TextInput style={styles.textInput} textContentType='emailAddress' />
                </View>
                <PassWordInput />
            </View>
            <View style={{width:'100%', marginVertical:40}} >
                <TouchableOpacity activeOpacity={0.8} onPress={handleLogin} >
                    <CustomButton title='Login' bgColor='#404CCF' />
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center'}} >
                <Typography text='Forgot Password' fontSize={14} textAlign="center" />
                <View style={{flexDirection:'row', justifyContent:'center'}} >
                    <Typography text='New User?   ' fontSize={14} textAlign="center" />
                    <Pressable onPress={()=>navigation.navigate('RegisterScreen')} >
                        <Typography text='Create Account' fontSize={14} textAlign="center" color="#404CCF" bold />
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}


export default LoginScreen

const styles = StyleSheet.create({
    container:{
        // flex:1,
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
