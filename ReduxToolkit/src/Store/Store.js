import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../features/TodoList/TodoSlice.js'

export const store = configureStore({
    reducer:{todoReducers}
});