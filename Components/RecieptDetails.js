import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Typography from './Typography'

/**
 * Renders details of reciepts on the Home Screen 
 */
const RecieptDetails = ({date, amount, merchant}) => {
    return (
        <View style={styles.receipts} >
            <Typography text={date} />
            <View>
                <Typography text={amount} bold fontSize={20} />
                <Typography text={merchant} fontSize={12} />
            </View>
        </View>
    )
}

export default RecieptDetails

const styles = StyleSheet.create({
    receipts:{
        width:120,
        height:138,
        elevation:2,
        marginHorizontal:5,
        borderRadius:10,
        padding:10,
        paddingVertical:20,
        justifyContent:'space-between',
        backgroundColor:'white',
    },
})
