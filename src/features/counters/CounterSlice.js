import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      value: 0,
    }, {
      id: 2, 
      value: 0,
    }
  ];
  
const counterSLice = createSlice({
    name:'counters',
    initialState,
    reducers:{
        increament: (state,action) =>{

        },
        decreament: (state,action) =>{

        },
    }
})