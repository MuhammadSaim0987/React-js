import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <div className='fullScreen'
    style={{backgroundColor: color}}
    >
      <div className='bar'>
        <div className='btnCont'>
            <button className='btn'>
    
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
