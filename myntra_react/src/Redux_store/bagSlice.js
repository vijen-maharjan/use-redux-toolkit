import { createSlice} from '@reduxjs/toolkit'


const bagSlice=createSlice({
    name:'bags',
    initialState: ['002','004'],
    reducers:{
        addToBag:(state,action)=>{
            //console.log(action.payload)   //checking wiring
            state.push(action.payload)
        },
        deleteFromBag:(state,action)=>{
            return state.filter(state=>state !== action.payload) //here state contains array of ID
        }
    }
})
export default bagSlice
export const bagActions=bagSlice.actions;