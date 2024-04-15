import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './slices/DarkMode'

export const store = configureStore({
    reducer: {
        theme: darkModeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch