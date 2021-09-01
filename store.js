import {configureStore} from '@reduxjs/toolkit'
import authenticationReducer from './reducers/authenticationSlice'

export default configureStore({
    reducer:{
        authecationSlice : authenticationReducer
    }
})
