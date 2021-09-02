import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import Typography from './Typography'
import {useSelector} from 'react-redux'

/**
 * This renders the expenses inside the scrollview in the expense screen
 */
const ExpenseItem = ({merchant, amount, tag, imageUri, id, date}) => {
    const navigation = useNavigation()
    const {text:textColor, background:backgroundColor}  = useSelector(state => state.themeSlice)

    const handleNavigation = () => {
        // imageUri, id and date are sent to the ViewReciept to help identify the reciept if the user want to delete it
        navigation.navigate('ViewReciept', {imageUri, id, date})
    }
    
    return (
        <Pressable onPress={handleNavigation} style={[styles.container, {backgroundColor:backgroundColor, borderColor:textColor, borderWidth:backgroundColor=='black'?1:0,}]} >
           
            {/* Image preview starts here */}
            <View style={{width:'30%', height:'100%', padding:10, borderRightWidth:2, borderRightColor:'whitesmoke'}} >
                <Image style={{width:'100%', height:'100%'}} source={{uri:imageUri}} />
            </View>
            {/* Image preview ends here */}

            <View style={{flex:1, alignSelf:'flex-end', padding:10}} >
                <Typography text={merchant} fontSize={14} color={textColor}  /> 
                <Typography text={amount} bold color={textColor}  /> 
            </View>

            {/* Tag starts here */}
            <View style={{position:'absolute', right:0}} >
                <View style={{padding:5, paddingHorizontal:10, borderColor:textColor, borderWidth:1, borderRadius:50, margin:5, }} >
                    <Typography text={tag} fontSize={12} color={textColor}  />
                </View>
            </View>
            {/* Tag ends here */}
        </Pressable>
    )
}

export default React.memo(ExpenseItem)

const styles = StyleSheet.create({
    container:{
        elevation:2,
        height:100,
        borderRadius:10,
        overflow:'hidden',
        flexDirection:'row'
    }
})
