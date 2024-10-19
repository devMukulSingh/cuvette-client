import { IinitialState } from "../lib/types"
import {createSlice} from "@reduxjs/toolkit"

const initialState:IinitialState = {
    userData:null
}


const rootReducer  = createSlice({
    initialState,
    name:'root',
    reducers: {
        setUserData : (state,action) => {
            state.userData = action.payload;
        },
        removeUserData: (state) => {
            state.userData = null
        }
    }
})

export default rootReducer.reducer;

export const { setUserData, removeUserData } = rootReducer.actions;
