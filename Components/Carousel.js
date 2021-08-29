import React, { useEffect } from 'react'
import {Dimensions, Image, StyleSheet, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const W = Dimensions.get('screen').width

const Carousel = ({children}) => {
    const scrollX = useSharedValue(0)

    const scrollHandler = useAnimatedScrollHandler({
        onScroll:(_, ctx) => {
            scrollX.value = _.contentOffset.x
        }
    })
    return (
        <View  style={styles.container} >
            <View>
                <Animated.ScrollView
                    horizontal={true}
                    snapToInterval={W}
                    decelerationRate='normal'
                    scrollEventThrottle= {16}
                    disableIntervalMomentum={true}
                    onScroll ={scrollHandler}                    
                >
                    {children}
                </Animated.ScrollView>
            </View>
            <View style={styles.sliderDotsContainer} >
                    {
                        children.map((item, index) => (
                            <SliderDots key={index} index={index} animatedValue={scrollX} />
                        ))
                    }
            </View>
        </View>
    )
}

const SliderDots = ({animatedValue, index}) => {
    const animatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(animatedValue.value,
                [(index-1) * W, (index) * W, (index+1) * W],
                [0.5, 1, 0.5],
                Extrapolate.CLAMP
            )
    }))
    return (
        <Animated.View style={[styles.sliderDots, animatedStyle]} />
    )
}


export default Carousel

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between'
    },
    sliderDotsContainer:{
        flexDirection:'row',
        justifyContent:'center'
    },
    sliderDots:{
        width:10,
        height:10,
        borderRadius:100,
        marginHorizontal:5,  
        backgroundColor:'white',
    },
    
})
