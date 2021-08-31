import React, { useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Typography from '../Components/Typography'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const VerifyOTP = () => {
    const [OTP, setOTP] = useState(['', '', '', ''])
    const navigation = useNavigation()

    const handleTextInput = (e) => {
        e.length <= 4 && setOTP([...e.split('')])
        
    }

    return (
        <View style={styles.container} >
            {/* Header starts here */}
                <View style={[styles.rowCenter, styles.header]} >
                    <Pressable onPress={() => navigation.goBack()} >
                        <Ionicons name="arrow-back" size={24} color="black" style={{paddingRight:20}} />
                    </Pressable>
                    <Typography text="OTP Verification" bold color='#404CCF' fontSize={20} />
                </View>
            {/* Header ends here */}

            <View style={{flex:1}} >
                <View style={{paddingVertical:10}} >
                    <View style={{marginBottom:10}} >
                        <Typography 
                            text={'Please Enter \nOTP Verification'}
                            bold
                            fontSize={30}
                        />
                    </View>
                    <Typography 
                        text={'Code was sent to +234 7085 689 ***'}
                        fontSize={14}
                    />
                    <View style={{flexDirection:'row', alignItems:'center'}} >
                        <Typography 
                            text={'This code will expire in'}
                            fontSize={14}
                        />
                        <View style={{marginHorizontal:10}} >
                            <Typography 
                                text={'03:23'}
                                fontSize={18}
                                bold
                                color='red'
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.codeContainer} >
                    <Code content={OTP[0]}/>
                    <Code content={OTP[1]}/>
                    <Code content={OTP[2]}/>
                    <Code content={OTP[3]}/>
                    <TextInput 
                        autoFocus={true} 
                        value={OTP.join('')} 
                        onChangeText={handleTextInput} 
                        style={{position:'absolute', zIndex:10, opacity:0, width:'100%', height: '150%'}} 
                        keyboardType='numeric'
                         
                    />
                </View>

                <View style={[styles.rowCenter, {justifyContent:'space-between'}]} >
                    <Typography text="Didn’t receive an OTP?" fontSize={14}  />
                    <Pressable onPress={()=>setOTP([])} style={styles.rowCenter}>
                        <AntDesign name="reload1" size={24} color="#404CCF" style={{paddingHorizontal:10}} />
                        <Typography text="Resend" bold color="#404CCF"  />
                    </Pressable>
                </View>
            </View>

            <CustomButton title='Verify and Create Account' bgColor='#404CCF' />
        </View>
    )
}

const Code = React.memo(({content=''}) => {
    const [textVisibility, setTextVisibility] = useState(true)

    useEffect(() => {
        setTextVisibility(true)

        const timer = setTimeout(() => {
            setTextVisibility(false)
        }, 500);

        return () => clearTimeout(timer)
    }, [content])
    return (
        <View style={styles.code} >
            {
              content !== '' &&  (textVisibility ? <Typography text={content} bold fontSize={30} /> : <View style={styles.dots} />)
            }
            
        </View>
    )
})

export default VerifyOTP

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'white'
    },
    header:{
        paddingVertical:30
    },
    code:{
        width:64,
        height:62,
        borderRadius:16,
        zIndex:-1,
        backgroundColor: 'whitesmoke',
        alignItems:'center',
        justifyContent:'center'
    },
    codeContainer:{
        paddingVertical:20,
        flexDirection:'row',
        justifyContent:'space-around',
        position:'relative'
    },
    dots:{
        backgroundColor:'black',
        width:15,
        height:15,
        borderRadius:20
    },
    rowCenter:{
        flexDirection:'row',
        alignItems:'center'
    }
})
