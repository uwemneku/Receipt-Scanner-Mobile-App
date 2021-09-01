
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name:'themeSlice',
    initialState:{
        primary:'#404CCF',
        secondary: '#0BB4EF',
        background: 'white',
        text:'black'
    },
    reducers:{
        switchTheme: (state, action) => {
            console.log(action.payload);
            switch (action.payload) {
                case 'dark':
                    state.background = 'black'
                    state.text = 'white'
                    break;
                    
                case 'light':
                    state.primary = '#404CCF'
                    state.secondary = '#0BB4EF'
                    state.background = 'white'
                    state.text = 'black'
                    break;
                default:
                    break;
            }
        }
    }

})

export const { switchTheme} = slice.actions
export default slice.reducer