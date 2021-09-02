import React from 'react'
import { StyleSheet, View } from 'react-native'
import Typography from './Typography'

/**
 * This renders a custom button
 * @param {object} props
 * @param {string} props.title      The text on gthe button
 * @param {string} props.bgColor    The background color of the button
 * @param {boolean} props.outline   If true buttons background color will be transparent with a border
 */
const CustomButton = ({title = '', bgColor='white', outline}) => {
    return (
        <View 
            style={[
                    styles.container, 
                    {
                        backgroundColor: outline ? 'transparent' : bgColor, 
                        borderColor:bgColor, 
                        borderWidth:outline ? 2 : 0
                    }
                ]}
        >
            <Typography 
                text={title} 
                textAlign="center" 
                color={outline ? 'white' : bgColor === 'white' ? '#404CCF' : 'white'} 
            />
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
       borderRadius:12,
       paddingVertical:14,
    }
})
