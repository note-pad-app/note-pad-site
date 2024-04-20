import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './slices/DarkMode'
import authReducer from './slices/auth'

export const store = configureStore({
    reducer: {
        theme: darkModeReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch