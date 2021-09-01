import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import {  Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import Section from '../Components/Section'
import Typography from '../Components/Typography'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import RecieptDetails from '../Components/RecieptDetails'
import Animated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'

const H = Dimensions.get('window').height
const reciepts = [
    {
        date: 'March 20',
        amount: 'N1300',
        merchant:'Chicken Republic'
    },
    {
        date: 'April 20',
        amount: 'N3000',
        merchant:'Chicken Republic'
    },
    {
        date: 'June 20',
        amount: 'N4000',
        merchant:'Chicken Republic'
    },
    {
        date: 'August 20',
        amount: 'N3000',
        merchant:'Chicken Republic'
    },
]
const Home = () => {
    const offSetY = useSharedValue(100)

    const scrollHandler = useAnimatedGestureHandler({
        onStart:(_, ctx)=>{
           ctx.startOff = offSetY.value
        },
        onActive: (_, ctx)=> {
            let u = ctx.startOff + _.translationY
            if(u >= -100 && u <= 100){

                offSetY.value= ctx.startOff + _.translationY
            }
        }
    })

    const animatedHeaderStyle = useAnimatedStyle(() => ({
        height: interpolate(
            -offSetY.value,
            [-100, 100],
            [H * 0.5, H*0.3],
            Extrapolate.CLAMP
        )
    }))
    return (
        <PanGestureHandler activeOffsetX={50} activeOffsetY={[-5, 5]}  onGestureEvent={scrollHandler} >
            <Animated.View>

                <Animated.View style={[styles.header, animatedHeaderStyle]}>
                    <LinearGradient
                        colors={['#404CCF', '#0BB4EF']}
                        locations={[0.5, 1]}
                        style={{width:'100%', height:'100%', padding:20}}
                        
                    >
                        <View style={{marginBottom:40, alignSelf:'flex-start'}} >
                            <Typography 
                                text={'Welcome back, \nIsrael !'}
                                bold
                                color='white'
                                fontSize={35}
                            />
                        </View>
                        <View style={styles.card} >
                            <Typography 
                                text='Today’s Expenditure'
                                color='#404CCF'
                                fontSize={14}
                            />
                                <View style={{flexDirection:'row', alignItems:'flex-end'}} >
                                    <View style={{alignSelf:'flex-start', opacity:0.8}} >
                                        <Typography 
                                            text='N'
                                            color='#404CCF'
                                            bold
                                        />
                                    </View>
                                    <View style={{height:50, alignItems:'flex-end', justifyContent:'flex-end'}} >
                                        <Typography 
                                            text='220252'
                                            color='#404CCF'
                                            bold
                                            fontSize={30}
                                        />
                                    </View>
                                    <View>
                                        <Typography 
                                            text='.36'
                                            color='#404CCF'
                                            bold
                                        />
                                    </View>
                                </View>
                            <View>

                            </View>
                        </View>
                        <View style={[styles.card, {height:'10%', marginTop:-10, width:'80%', backgroundColor:'#22D566', zIndex:1}]} />
                    </LinearGradient>
                </Animated.View>
                <View style={{height:H * 0.5}} >
                    {/* <PanGestureHandler activeOffsetX={1000} activeOffsetY={-5, 5} onGestureEvent={scrollHandler} > */}
                        <Animated.View style={{paddingBottom:100, backgroundColor:'white'}} >
                            <Section title="Reminder" titleIcon={<Ionicons name="add-outline" size={24} color="gray"/>}>
                                <View style={styles.list} >
                                    <View style={styles.circles} />
                                    <View style={{flex:1, paddingHorizontal:10}} >
                                        <Typography 
                                            text ="Get Reciepts up-to-date"
                                            bold
                                            fontSize={20}
                                        />
                                        <Typography 
                                            text ="Due on June 29 2050"
                                            fontSize={14}
                                            color='gray'
                                        />
                                    </View>
                                    <FontAwesome name="star" size={24} color="gold" />
                                </View>
                                <View style={styles.list} >
                                    <View style={styles.circles} />
                                    <View style={{flex:1, paddingHorizontal:10}} >
                                        <Typography 
                                            text ="Export Expense Stats"
                                            bold
                                            fontSize={20}
                                        />
                                        <Typography 
                                            text ="Due on June 29 2050"
                                            fontSize={14}
                                            color='gray'
                                        />
                                    </View>
                                </View>
                            </Section>
                            
                            <Section title="Receipts" >
                                <ScrollView
                                    horizontal={true}
                                    contentContainerStyle={{paddingVertical:10}}
                                >
                                    <View style={styles.receipts } >
                                        <Ionicons name="ios-camera-outline" size={40} color="white" />
                                        <Typography text='Upload reciepts' fontSize={12} color="white" />
                                    </View>
                                    {
                                        reciepts.map((item, index) => {
                                            return(
                                                <RecieptDetails key={index} amount={item.amount} date={item.date} merchant={item.merchant} />
                                            )
                                        })
                                    }
                                </ScrollView>
                            </Section>
                        </Animated.View>
                    {/* </PanGestureHandler> */}
            
                </View>
        
            </Animated.View>
        </PanGestureHandler>
    )
}

export default Home

const styles = StyleSheet.create({
    header:{
       
        justifyContent:'center',
        alignItems:'center',
        // padding:20
    },
    card:{
        backgroundColor:'white',
        height:'40%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        zIndex:2
    },
    section:{
        padding:20
    },
    receipts:{
        width:120,
        height:138,
        elevation:2,
        backgroundColor:'gray',
        marginHorizontal:5,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    circles:{
        width:24,
        height:24,
        borderRadius:30,
        borderWidth:2,
        borderColor:'gray',
        backgroundColor:'white'
    },
    list:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
    }
})
