import { createSlice } from "@reduxjs/toolkit";
const searchSlice=createSlice(
    {
        name:'search',
        initialState:{

        },
        reducers:{
            cacheResults:(state,action)=>{
                //suppose if the serach results are like 
                //{"ip":["iphone","iphone1"]}
                //it merge the payload asweel as my state
                //javascript es6 spread operator
                state=Object.assign(state,action.payload)
            },
        },
    });

    export const {cacheResults}=searchSlice.actions;
    export default searchSlice.reducer;