import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Carousel from './../Components/Carousel';
import {chart, location, receiptsfiles} from '../assets/Images/index';
import Typography from '../Components/Typography';
import CustomButton from '../Components/CustomButton';

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
                <CustomButton title='Get Started' />
                <CustomButton title='Login' bgColor='white' outline />
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
