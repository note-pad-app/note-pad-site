import {createSlice} from '@reduxjs/toolkit'
import { getCookie } from '../../helpers/getCookieValue';
interface DarkState {
    value: boolean
}
export const darkModeSlice = createSlice({
    name: 'theme', 
    initialState: <DarkState>{value: getCookie('dark') ?? false},
    reducers: {
        changeTheme: (state) => {
            document.cookie = 'dark='+(state.value = !state.value);
        }
    }
})

export const {changeTheme} = darkModeSlice.actions; 

export default darkModeSlice.reducer; 