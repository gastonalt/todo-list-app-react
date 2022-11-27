import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    currentIdCounter: 0,
    todos: [],
  },
  reducers: {
    add: (state,action) => {
      action.payload.id = state.currentIdCounter;
      state.todos.push(action.payload);
      state.currentIdCounter ++;
    },
    toggleEstado: (state,action) => {
      //console.log(state.todos[action.payload.id].completado)
      //state.todos[action.payload.id].completado = !action.payload.completado;
      return { 
        ...state, 
        todos: state.todos.map(
            (content, i) => content.id === action.payload.id ? {...content, completado: !action.payload.completado}
                                    : content
        )
     }
    },
    deleteById: (state, action)=>{
      state.todos = state.todos.filter(filtered=> action.payload.id !== filtered.id);
      if(state.todos.length === 0) state.currentIdCounter = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, toggleEstado, deleteById } = todoListSlice.actions

export default todoListSlice.reducer