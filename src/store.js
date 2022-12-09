import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from './states/todoListSlice'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import categoriasSlice from './states/categoriasSlice';

const persistConfig = {
    key: 'todos',
    version: 1,
    storage
}

const reducer = combineReducers({
    todoList: todoListSlice,
    categoriasSlice: categoriasSlice
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})