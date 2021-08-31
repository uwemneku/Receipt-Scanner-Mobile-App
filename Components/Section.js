import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Typography from './Typography'
import { FontAwesome } from '@expo/vector-icons';

const Section = ({title, titleIcon, children}) => {
    return (
        <View style={styles.section} >
            <View style={styles.title} >
                <Typography
                    text={title}
                    bold
                    fontSize={25}
                />
                {titleIcon}
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}

export default Section

const styles = StyleSheet.create({
    section:{
        paddingHorizontal:20,
        paddingVertical:5,
        backgroundColor:'white'
    },
    title:{
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
})

