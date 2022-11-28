import { createSlice } from '@reduxjs/toolkit'

export const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: {
    currentIdCounter: 0,
    categorias: [],
  },
  reducers: {
    add: (state,action) => {
      action.payload.id = state.currentIdCounter;
      state.categorias.push(action.payload);
      state.currentIdCounter ++;
    },
  },
})

// Action creators are generated for each case reducer function
export const { add } = categoriasSlice.actions

export default categoriasSlice.reducer