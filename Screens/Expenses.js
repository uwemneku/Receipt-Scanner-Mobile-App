import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import ExpenseItem from '../Components/ExpenseItem'
import { Ionicons } from '@expo/vector-icons';
import Typography from '../Components/Typography';

const expensesData = [
    {
        date: 'Jul 26',
        reciepts:[
            {
                tag: 'Others',
                imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
                merchant:'Movie house',
                amount: 'N16,444'
            },
            {
                tag: 'Meal and Entertainment',
                imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
                merchant:'Chicken Republic',
                amount: 'N16,444'
            },
            {
                tag: 'Movies',
                imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
                merchant:'Chicken Republic',
                amount: 'N16,444'
            },
        ]
    },
    {
        date: 'Jul 28',
        reciepts:[
            {
                tag: 'Meal and Entertainment',
                imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
                merchant:'Chicken Republic',
                amount: 'N16,444'
            },
            {
                tag: 'Meal and Entertainment',
                imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
                merchant:'Chicken Republic',
                amount: 'N16,444'
            },
            {
                tag: 'Meal and Entertainment',
                imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
                merchant:'Chicken Republic',
                amount: 'N16,444'
            },
        ]
    },
    {
        date: 'Jul 30',
        reciepts:[
            {
                tag: 'Meal and Entertainment',
                imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
                merchant:'Chicken Republic',
                amount: 'N16,444'
            },
            {
                tag: 'Meal and Entertainment',
                imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
                merchant:'Chicken Republic',
                amount: 'N16,444'
            },
            {
                tag: 'Meal and Entertainment',
                imageUri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540uwemneku%252FReceipt_scanner/ImagePicker/b5807c56-a0dc-4009-b5da-610066410a99.jpg",
                merchant:'Chicken Republic',
                amount: 'N16,444'
            },
        ]
    }
]

const Expenses = () => {
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor='white' />
            <View style={styles.input }>
                <TextInput style={{flex:1}} placeholder='Search' />
                <Ionicons name="md-mic-sharp" size={24} color="gray" />
            </View>
            <View>
                <ScrollView contentContainerStyle={{padding:20, paddingBottom:100}} >
                    {
                        expensesData.map((item, index) => (
                            <View key={index} style={{marginBottom:30}} >
                                <Typography text={item.date} bold />
                                {
                                    item.reciepts.map((item, index) => (
                                        <View key={index}  style={{marginVertical:5}} >
                                            <ExpenseItem tag={item.tag} amount={item.amount} merchant={item.merchant} imageUri={item.imageUri} />
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
        backgroundColor:'white',
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
