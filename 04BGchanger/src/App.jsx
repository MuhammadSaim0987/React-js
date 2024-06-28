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
            <button className='btn redbtn'
            onClick={ () => setColor("red")}>
                Red
            </button>

            <button className='btn bluebtn'
            onClick={ () => setColor("blue")}>
                Royalblue
            </button>

            <button className='btn bibtn'
            onClick={ () => setColor("bisque")}>
                Biege
            </button>

            <button className='btn greenbtn'
            onClick={ () => setColor("green")}>
                Green
            </button>

            <button className='btn orgbtn'
            onClick={ () => setColor("orange")}>
                Orange
            </button>

            <button className='btn viobtn'
            onClick={ () => setColor("violet")}>
                Violet
            </button>
                
            <button className='btn lavbtn'
            onClick={ () => setColor("lavender")}>
                Lavender
            </button>

            <button className='btn yellbtn'
            onClick={ () => setColor("yellow")}>
                Yellow
            </button>

            <button className='btn dgbtn'
            onClick={ () => setColor("darkgreen")}>
                Darkgreen
            </button>

            <button className='btn whitebtn'
            onClick={ () => setColor("white")}>
                White
            </button>

            <button className='btn blbtn'
            onClick={ () => setColor("black")}>
                Black
            </button>

            <button className='btn lcbtn'
            onClick={ () => setColor("lightcoral")}>
                Lightcoral
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
