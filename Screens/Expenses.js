import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import ExpenseItem from '../Components/ExpenseItem'
import { Ionicons } from '@expo/vector-icons';
import Typography from '../Components/Typography';
import { useSelector } from 'react-redux';


const Expenses = () => {
    const initialState = useSelector(state => state.recieptSlice)
    const [allReciepts, setAllReciepts] = useState(initialState)
    const {text:textColor, background:backgroundColor} = useSelector(state => state.themeSlice)
         

    useEffect(() => {
        setAllReciepts(initialState)
    }, [initialState])

    const handleSearch = (e) => {
        setAllReciepts(
            initialState.map(item =>  ({
                date: item.date,
                reciepts: item.reciepts.filter(j => j.merchant.toLowerCase().includes(e.toLowerCase()) )
            }) )
        )
    }

    
    return (
        <View style={[styles.container, {backgroundColor:backgroundColor}]} >

            {/* Text input starts here */}
            <View style={styles.input }>
                <TextInput placeholderTextColor={textColor} onChangeText={handleSearch} style={{flex:1, color:textColor}} placeholder='Search Merchant' />
                <Ionicons name="md-mic-sharp" size={24} color="gray" />
            </View>
            {/* Text Input end here */}

            <View>
                <ScrollView  contentContainerStyle={{padding:20, paddingBottom:100}} >
                    {
                        allReciepts.map((section, index) => (
                            <View key={index} style={{marginBottom:30}} >
                                <Typography text={section.date} bold color={textColor} />
                                {
                                    section.reciepts.map((item, index) => (
                                        <View key={index}  style={{marginVertical:5}}  >
                                            <ExpenseItem tag={item.tag} amount={item.amount} merchant={item.merchant} imageUri={item.imageUri} id={item.id} date={section.date} />
                                        </View>
                                    ))
                                }
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Expenses

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    input:{
        padding:10,
        borderColor:'gray',
        flexDirection:'row',
        borderRadius:100,
        borderWidth:1,
        margin:20
    }
})
