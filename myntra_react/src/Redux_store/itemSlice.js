import { createSlice} from '@reduxjs/toolkit'


const itemSlice=createSlice({
    name:'items',
    initialState: [],
    reducers:{
        addItems:(state,action)=>{
            //console.log(action.payload) checking if the values are passed 
            return action.payload
            

        }
    }
})
export default itemSlice
export const itemActions=itemSlice.actions;