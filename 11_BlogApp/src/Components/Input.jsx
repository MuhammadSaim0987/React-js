import React from 'react'
import { useId } from 'react'

const Input = React.forwardRef(({
    label,
    type = 'text',
    classname = "",
    ...props
} ,ref) => {
    const id = useId();
    return (
        <div>
            {label && <label 
            htmlFor={id}
            className='inline-block mb-1 pl-1'>
                {label}
            </label>}
            <input 
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full${classname}`}/>
            ref={ref}
            {...props}
            id={id}
        </div>
    )
})

export default Input  