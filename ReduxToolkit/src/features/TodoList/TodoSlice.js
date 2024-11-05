import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todoList : []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todoList.push(todo);
    },

        deleteTodo:(state, action) => {
            state.todoList = state.todoList.filter((prev) => {
                prev.id !== action.payload;
            })
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions; 

export default todoSlice.reducer