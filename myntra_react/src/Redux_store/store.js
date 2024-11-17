import {configureStore} from '@reduxjs/toolkit'
import itemSlice from './itemSlice';
import fetchSlice from './fetchSlice';
import bagSlice from './bagSlice';



 export const itemStore=configureStore({
    reducer:
    {items:itemSlice.reducer,
    fetchStatus:fetchSlice.reducer,
    bags:bagSlice.reducer
}
})



