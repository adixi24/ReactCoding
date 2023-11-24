import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const chatSlice=createSlice(
    {
        name:'chat',
        initialState:{
            messages:[]
        },
        reducers:{
            addMessage:(state,action)=>{
                //Remove the chat after certain number of chat reached
                state.messages.splice(LIVE_CHAT_COUNT,1)
                state.messages.push(action.payload);
            }
        }
    }
)
export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;