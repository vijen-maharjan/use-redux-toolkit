import { createSlice} from '@reduxjs/toolkit'

const fetchSlice=createSlice({
    name:'fetchStatus',
    initialState:{
        fetchDone:false,
        fetching:false,
    },
    reducers:{
        fetchingDone:(state,action)=>{
            return state.fetchDone=true;
        },
        fetchingStarted:(state,action)=>{
            return state;
        },
        fetchingFinished:(state,action)=>{
            return state;
        }
    }
})
export default fetchSlice
export const fetchActions=fetchSlice.actions;