import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
   
    increment: (state, {payload}) => {
      state.value += payload
    },
  },
})

export const {incrementByAmount } = exampleSlice.actions

export default exampleSlice.reducer