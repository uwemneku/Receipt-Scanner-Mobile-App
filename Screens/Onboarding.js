import React from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Carousel from './../Components/Carousel';
import {chart, location, receiptsfiles} from '../assets/Images/index';
import Typography from '../Components/Typography';
import CustomButton from '../Components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const W = Dimensions.get('screen').width
const H = Dimensions.get('screen').height
const images = [
        {
            image: receiptsfiles,
            text:'Say goodbye to paper receipts'
        },
        {
            image:chart,
            text: 'Monitor your \n daily spending'
        },
        {
            image:location,
            text:'Easily acess your \n reciepts anywhere'
        },
    ]
const Onboarding = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Carousel>
            {
                images.map((item, index) => (
                    <View key={index} style={styles.images}>
                        <Image source={item.image} />
                        <View style={{paddingHorizontal:10, marginTop:10}} >
                            <Typography 
                                text={item.text} 
                                textAlign="center" 
                                bold  
                                color="white" 
                                fontSize={40} 
                            />
                        </View>
                    </View>
                ))
            }                
            </Carousel>
            <View style={styles.buttons} >
                <TouchableOpacity activeOpacity ={0.8} onPress={()=>navigation.navigate('LoginRegister')} >
                    <CustomButton title='Get Started' />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity ={0.8} onPress={()=>navigation.navigate('LoginScreen')} >
                    <CustomButton title='Login' bgColor='white' outline />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#404CCF',

    },
    images:{
        width: W,
        height: H * 0.6,
        justifyContent:'center',
        alignItems:'center'

    },
    buttons:{
        height: H * 0.2,
        padding:20,
        justifyContent:'space-around',
    }
})
