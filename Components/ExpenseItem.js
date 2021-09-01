import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Typography from './Typography'

const ExpenseItem = ({merchant, amount, tag, imageUri, id, date}) => {
    const navigation = useNavigation()
    const handleNavigation = () => {
        navigation.navigate('ViewReciept', {imageUri, id, date})
    }
    
    return (
        <Pressable onPress={handleNavigation} style={styles.container} >
            <View style={{width:'30%', height:'100%', padding:10, borderRightWidth:2, borderRightColor:'whitesmoke'}} >
                <Image style={{width:'100%', height:'100%'}} source={{uri:imageUri}} />
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
        </Pressable>
    )
}

export default React.memo(ExpenseItem)

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
