import { createSlice } from '@reduxjs/toolkit'


const initialState= {value: 0}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   addConut:(state)=>{
     state.value =state.value
   },
   increament:(state)=>{
     state.value =state.value+1
   }
   ,
   decreament:(state)=>{
     state.value =state.value-1
   }
   
   
  },
})


export const {addConut,increament, decreament} = counterSlice.actions

export default counterSlice.reducer