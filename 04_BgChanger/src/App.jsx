import { useState } from 'react'
import './App.css'

function App() {
  const[color, setColor] = useState('black');

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 bg-white justify-center px-2 py-2 rounded-xl border border-black'>

          <button 
          className='rounded-xl px-4 py-1 border-black border'
          style={{backgroundColor:'red'}}
          onClick={() => setColor('red')}
          >Red</button>

          <button 
          className='rounded-xl px-4 py-1 border-black border'
          style={{backgroundColor:'orange'}}
          onClick={() => setColor('orange')}
          >Orange</button>

          <button 
          className='rounded-xl px-4 py-1 border-black border'
          style={{backgroundColor:'yellow'}}
          onClick={() => setColor('yellow')}
          >Yellow</button>

          <button 
          className='rounded-xl px-4 py-1 border-black border'
          style={{backgroundColor:'beige'}}
          onClick={() => setColor('beige')}
          >Beige</button>

          <button 
          className='rounded-xl px-4 py-1 border-black border text-white'
          style={{backgroundColor:'black'}}
          onClick={() => setColor('black')}
          >Black</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
