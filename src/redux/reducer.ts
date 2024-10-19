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
        }
    }
})

export default rootReducer.reducer;

export const { setUserData } = rootReducer.actions;
