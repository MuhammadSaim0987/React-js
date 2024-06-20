import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let addbtn = document.querySelectorAll("#addbtn");
 let cutbtn = document.querySelectorAll("#cutbtn");

 let [count, setCount] = useState(0);


const countInc = () => {
  if(count < 20){
  setCount(count + 1);
  }
}


const countDec = () => {
  if(count > 0){
  setCount(count - 1);
  }
}

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter : {count}</h2>
      <button id='addbtn' onClick={countInc}>Add</button>
      <button id='cutbtn' onClick={countDec}>Remove</button>
    </>
  )
}

export default App
