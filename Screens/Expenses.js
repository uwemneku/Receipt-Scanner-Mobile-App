import React, { useEffect, useState } from 'react'
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import ExpenseItem from '../Components/ExpenseItem'
import { Ionicons } from '@expo/vector-icons';
import Typography from '../Components/Typography';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

// const allReciepts = [
//     {
//         date: 'Jul 26',
//         reciepts:[
//             {
//                 tag: 'Others',
//                 imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
//                 merchant:'Movie house',
//                 amount: 'N16,444'
//             },
//             {
//                 tag: 'Meal and Entertainment',
//                 imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
//                 merchant:'Chicken Republic',
//                 amount: 'N16,444'
//             },
//             {
//                 tag: 'Movies',
//                 imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
//                 merchant:'Chicken Republic',
//                 amount: 'N16,444'
//             },
//         ]
//     },
//     {
//         date: 'Jul 28',
//         reciepts:[
//             {
//                 tag: 'Meal and Entertainment',
//                 imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
//                 merchant:'Chicken Republic',
//                 amount: 'N16,444'
//             },
//             {
//                 tag: 'Meal and Entertainment',
//                 imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
//                 merchant:'Chicken Republic',
//                 amount: 'N16,444'
//             },
//             {
//                 tag: 'Meal and Entertainment',
//                 imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
//                 merchant:'Chicken Republic',
//                 amount: 'N16,444'
//             },
//         ]
//     },
//     {
//         date: 'Jul 30',
//         reciepts:[
//             {
//                 tag: 'Meal and Entertainment',
//                 imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
//                 merchant:'Chicken Republic',
//                 amount: 'N16,444'
//             },
//             {
//                 tag: 'Meal and Entertainment',
//                 imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
//                 merchant:'Chicken Republic',
//                 amount: 'N16,444'
//             },
//             {
//                 tag: 'Meal and Entertainment',
//                 imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
//                 merchant:'Chicken Republic',
//                 amount: 'N16,444'
//             },
//         ]
//     }
// ]

const Expenses = () => {
    const navigation = useNavigation()
    const initialState = useSelector(state => state.recieptSlice)
    const [allReciepts, setAllReciepts] = useState(initialState)
    const {primary:primaryColor, 
        secondary:secondaryColor, 
        text:textColor,
        background:backgroundColor}  = useSelector(state => state.themeSlice)

    useEffect(() => {
        setAllReciepts(initialState)
    }, [initialState])

    const handleSearch = (e) => {
        console.log(initialState.map(item =>  ({
            date: item.date,
            reciepts: item.reciepts.filter(j => j.merchant.toLowerCase().includes(e.toLowerCase()) )
        }) ))

        setAllReciepts(
            initialState.map(item =>  ({
                date: item.date,
                reciepts: item.reciepts.filter(j => j.merchant.toLowerCase().includes(e.toLowerCase()) )
            }) )
        )
    }

    
    return (
        <View style={[styles.container, {backgroundColor:backgroundColor}]} >
            <StatusBar backgroundColor='white' />
            <View style={styles.input }>
                <TextInput onChangeText={handleSearch} style={{flex:1}} placeholder='Search Merchant' />
                <Ionicons name="md-mic-sharp" size={24} color="gray" />
            </View>
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
