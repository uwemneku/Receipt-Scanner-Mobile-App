import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Typography from './Typography'

const ExpenseItem = ({merchant, amount, tag, imageUri}) => {
    return (
        <View style={styles.container} >
            <View style={{width:'30%', height:'100%'}} >
                <Image style={{width:'100%', height:'100%'}} source={{uri:"file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg"}} />
            </View>
            <View style={{flex:1, alignSelf:'flex-end', padding:10}} >
                <Typography text={merchant} fontSize={14} /> 
                <Typography text={amount} bold /> 
            </View>
            <View style={{position:'absolute', right:0}} >
                <View style={{padding:5, paddingHorizontal:10, borderColor:'black', borderWidth:1, borderRadius:50, margin:5, }} >
                    <Typography text={tag} fontSize={12}  />
                </View>
            </View>
        </View>
    )
}

export default ExpenseItem

const styles = StyleSheet.create({
    container:{
        elevation:2,
        // margin:5,
        // marginHorizontal:20,
        height:100,
        borderRadius:10,
        overflow:'hidden',
        backgroundColor:'white',
        flexDirection:'row'
    }
})
