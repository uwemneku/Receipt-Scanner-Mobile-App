import {configureStore} from '@reduxjs/toolkit'
import authenticationReducer from './reducers/authenticationSlice'
import recieptReducer from './reducers/recieptSlice'
import themeReducer from './reducers/themeSlice'

export default configureStore({
    reducer:{
        authecationSlice : authenticationReducer,
        recieptSlice: recieptReducer,
        themeSlice: themeReducer
    }
})
