import { configureStore } from '@reduxjs/toolkit'
import filteredSlice from './filteredSlice'


export const store = configureStore({
  reducer: {
    filter: filteredSlice
},
})
