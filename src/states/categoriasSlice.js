import { createSlice } from '@reduxjs/toolkit'

const generateColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: {
    categorias: [
      {
        id: 1,
        color: generateColor()
      },
      {
        id: 2,
        color: generateColor()
      },
      {
        id: 3,
        color: generateColor()
      }
    ],
  },
  reducers: {
    addCategoria: (state,action) => {
      const newCategoria = {
        id: state.categorias[state.categorias.length-1].id + 1,
        color: generateColor()
      };
      state.categorias.push(newCategoria);
    },
    resetCategorias: state => {
      state.categorias = state.categorias.filter(categoria=> categoria.id < 4);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCategoria, resetCategorias } = categoriasSlice.actions

export default categoriasSlice.reducer