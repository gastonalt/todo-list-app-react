import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from './states/todoListSlice'

export default configureStore({
    reducer: {
        todoList: todoListSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
})