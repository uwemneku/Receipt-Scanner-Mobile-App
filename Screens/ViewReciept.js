import React, { useEffect } from 'react'
import { Alert, Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import Typography from '../Components/Typography'
import { Ionicons } from '@expo/vector-icons';
import Divider from '../Components/Divider';
import { useNavigation } from '@react-navigation/native';
import {receiptsImage} from '../assets/Images'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

const H = Dimensions.get('window').height
const ViewReciept = () => {
    const navigation = useNavigation()
    const bottomOffset = useSharedValue(-500)

    useEffect(() => {
        //setting the value without a timeout crashes the app
        setTimeout(() => {
            bottomOffset.value = 0
        }, 250);
    }, [])
    const contentAnimatedStyle = useAnimatedStyle(() => ({
        bottom: withTiming(bottomOffset.value, {duration:500})
    }))

    const handleImagePress = () => {
        bottomOffset.value = -500
    }
    const handleUpIconPress = () => {
        bottomOffset.value = 0
    }
    const handleNavigation = () => {
        navigation.goBack()
    }
    const handleRecieptDelete = () => {
        // Alert.
    }
    return (
        <View style={styles.container} >
            {/* Header starts here */}
            <View style={styles.header} >
                <Pressable onPress={handleNavigation} >
                    <Ionicons name="ios-arrow-back-outline" size={30} color="#404CCF" style={{marginRight:10}}  />
                </Pressable>
                <Typography text='Reciept' bold fontSize={25} color="#404CCF" />
            </View>
            {/* Header ends here */}

            <View style={styles.content} >
                <Pressable style={{height:'100%', paddingHorizontal:20}} onPress={handleImagePress} >
                    <Image resizeMode='contain' style={{width:'100%', height:'100%'}}  source={receiptsImage} />
                </Pressable>
                <Animated.View  style={[styles.details, contentAnimatedStyle]} >
                    <ScrollView contentContainerStyle={{padding:10}} >
                        <Info title='Merchant' info='Chicken Republic' />
                        <Info title='Date' info='July 23, 2020' />
                        <Info title='Description'  />
                        <Info title='Category' info='Meal & Entertainment'  />
                        <Info title='Method of paymnet' info='Card'  />
                    </ScrollView>
                    <View style={{padding:20}} >
                        <Typography text="Delete Reciept" bold color='red' textAlign='center' />
                    </View>
                </Animated.View>
                <Pressable onPress={handleUpIconPress}  style={styles.circle} >
                    <Ionicons name="ios-arrow-up-outline" size={30} color="black" style={{marginRight:10}}  />
                </Pressable>
            </View>
        </View>
    )
}

const Info = ({title, info}) => {
    return (
        <View style={{margin:10, marginHorizontal:5}} >
            <Typography text={title} color='#323232' fontSize={12} />
            <View style={{marginVertical:5}} >
                <Typography text={info} color="#0D135A" />
            </View>
            <Divider bgcolor='#C4C4C4' verticalMargin={2} />
        </View>
    )
}
export default ViewReciept

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        padding:20
    },
    content:{
        flex:1,
        margin:20,
        marginBottom:0,
        elevation:2,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        backgroundColor:'white'
    },
    details:{
        position:'absolute', 
        width:'100%', 
        height:H*0.6, 
        backgroundColor:'white', 
        elevation:3
    },
    circle:{
        position:'absolute',
        width:50,
        height:50,
        borderRadius:100,
        bottom:0,
        right:0,
        zIndex:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    }
})
