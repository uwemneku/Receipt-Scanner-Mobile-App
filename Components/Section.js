import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Typography from './Typography'
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

const Section = ({title, titleIcon, children}) => {
    const {text:textColor} = useSelector(state => state.themeSlice)
    return (
        <View style={styles.section} >
            <View style={styles.title} >
                <Typography
                    text={title}
                    bold
                    fontSize={25}
                    color={textColor}
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
    },
    title:{
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
})

