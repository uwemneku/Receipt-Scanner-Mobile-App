import {createSlice} from '@reduxjs/toolkit'
import { Image } from 'react-native'
import { receiptsImage } from '../assets/Images'

const demoImage = Image.resolveAssetSource(receiptsImage).uri
const slice = createSlice({
    name:'recieptSlice',
    initialState:[
        {
            date: 'Jul 26',
            reciepts:[
                {
                    tag: 'Others',
                    imageUri: demoImage,
                    merchant:'Movie house',
                    amount: 'N16,444',
                    id:1
                },
                {
                    tag: 'Meal and Entertainment',
                    imageUri: demoImage,
                    merchant:'Chicken Republic',
                    amount: 'N16,444',
                    id:12
                },
                {
                    tag: 'Movies',
                    imageUri: demoImage,
                    merchant:'Chicken Republic',
                    amount: 'N16,444',
                    id:13
                },
            ]
        },
        {
            date: 'Jul 28',
            reciepts:[
                {
                    tag: 'Meal and Entertainment',
                    imageUri: demoImage,
                    merchant:'Chicken Republic',
                    amount: 'N16,444',
                    id:14
                },
                {
                    tag: 'Meal and Entertainment',
                    imageUri: demoImage,
                    merchant:'Chicken Republic',
                    amount: 'N16,444',
                    id:15
                },
                {
                    tag: 'Meal and Entertainment',
                    imageUri: demoImage,
                    merchant:'Chicken Republic',
                    amount: 'N16,444',
                    id:16
                },
            ]
        },
        {
            date: 'Jul 30',
            reciepts:[
                {
                    tag: 'Meal and Entertainment',
                    imageUri: demoImage,
                    merchant:'Chicken Republic',
                    amount: 'N16,444',
                    id:17
                },
                {
                    tag: 'Meal and Entertainment',
                    imageUri: demoImage,
                    merchant:'Chicken Republic',
                    amount: 'N16,444',
                    id:18
                },
                {
                    tag: 'Meal and Entertainment',
                    imageUri: demoImage,
                    merchant:'Chicken Republic',
                    amount: 'N16,444',
                    id:19
                },
            ]
        }
    ],
    reducers:{
        addReciept:(state, action)=>{
            const {newData, date} = action.payload
            const index = state.findIndex((item) => item.date === date )
            index !== -1 ?
                state[index].reciepts.push(newData) 
                :
                state.unshift(
                    {
                        date: date,
                        reciepts:[newData]
                    }
                )
        },
        deleteReciept:(state, action) => {
            const {id, date} = action.payload
            const index = state.findIndex((item) => item.date === date )
            if(index !== -1) {
                const newData = state[index].reciepts.filter(item => item.id !== id)
                newData.length > 0 ?
                    state[index].reciepts = newData
                    :
                    state.splice(index, 1)
            }
        }
    }
})

export const { addReciept, deleteReciept } = slice.actions
export default  slice.reducer