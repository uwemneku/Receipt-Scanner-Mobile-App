import React, { useEffect } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useSelector } from 'react-redux'

/**
 * Renders a modal with a spinning circle whenever showLoadingModal (a redux state) is true
 */
const LoadingModal = () => {
    const animtedValue = useSharedValue(0)
    const visibility = useSelector(state => state.authecationSlice.showLoadingModal)

    const spinningStyle = useAnimatedStyle(() => ({
        transform:[{rotate: `${animtedValue.value}deg`}]
    }))

    useEffect(() => {
        //This effect is used because withReapet causes the app to crash
        let y = 10
        const timer = setInterval(() => {
            y += 10
            animtedValue.value = withTiming(y, {duration:100})
        }, 100);

        return () => clearInterval(timer)
    }, [])
    
    return (
        <Modal
            visible={visibility}
            transparent={true}
        >
            <View style={styles.container} >
                <Animated.View style={[styles.loading, spinningStyle]} />
            </View>

        </Modal>
    )
}

export default LoadingModal

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(10, 10, 10, 0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    loading:{
        width:50,
        height:50,
        borderRadius:100,
        borderWidth:5,
        borderTopColor:'#404CCF',
        borderColor:'white',
        backgroundColor:'white'
    }
})
