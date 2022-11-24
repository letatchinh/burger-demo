import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    totalBill : 1,
    salad : 0,
    bacon : 0,
    cheese : 0,
    meat : 0

}
 export const burgerSlice = createSlice({
   name : 'burgerSlice',
     initialState,
     reducers : {
        incrementByAmount: (state, action) => {
            state[action.payload] += 1
          },
        decrementByAmount: (state, action) => {
            state[action.payload] -= 1
          },
        
      
     }
 })
 export const  {incrementByAmount , decrementByAmount} = burgerSlice.actions
 export default burgerSlice.reducer

