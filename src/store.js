import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from './states/todoListSlice'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'todos',
    version: 1,
    storage
}

const reducer = combineReducers({
    todoList: todoListSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})