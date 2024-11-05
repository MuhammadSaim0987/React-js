import React from 'react'
import { useSelector } from 'react-redux'

function TodoField() {

    const todoList = useSelector(state => {return state.todoReducers.todoList});

return (

    <div className='w-1/2 bg-black text-white mt-1'>
        {todoList.map((todo) => (
            <div key={todo.id}>{todo.text}</div>
        ))}
    </div>
)
}

export default TodoField