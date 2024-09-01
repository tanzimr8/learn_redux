import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      value: 7,
    }, {
      id: 2, 
      value: 0,
    }
  ];
  
const CountersSlice = createSlice({
    name:'counters',
    initialState,
    reducers:{
        increament: (state,action) =>{
            const counterIndex = state.findIndex((c)=>{
              return c.id === action.payload;
            })
            state[counterIndex].value++;
        },
        decreament: (state,action) =>{
          const counterIndex = state.findIndex((c)=>{
            return c.id === action.payload;
          })
          state[counterIndex].value--;
        },
    }
})

export default CountersSlice.reducer;
export const {increament,decreament} = CountersSlice.actions;