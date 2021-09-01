import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'authecationSlice',
    initialState: {
        loggedIn: false,
        showLoadingModal: false
    },
    reducers : {
        logUserIn: (state, action) => {
            state.loggedIn = true
        },
        logUserOut: (state, action) => {
            state.loggedIn = false
        },
        toggleLoadingModal:(state, action)=>{
            state.showLoadingModal = action.payload
        }
    }
})

export const {logUserIn, logUserOut, toggleLoadingModal} = slice.actions
export default slice.reducer