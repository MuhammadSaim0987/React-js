import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/TodoList/TodoSlice';

function InputForm() {
    const [input, setInput] = useState('');

    const submitHandler = (e) => {
        e.prevent.default;
        useDispatch(addTodo(input));
        setInput('');
    };

return (
    <form onSubmit={submitHandler}>
    <input type="text" 
    className='bg-black text-white outline-none mt-5 ml-5 p-1'
    value={input}
    onChange={(e) => setInput(e.target.value)}
    />

    <button
    className='ml-3 bg-black text-white p-1'
    type='submit'
    >
        Add task
    </button>
    </form>
)
}

export default InputForm