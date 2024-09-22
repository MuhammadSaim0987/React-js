import { useState } from 'react'
import './App.css'

function App() {
  
const[count, setCount] = useState(0);

const addValue = () => {
  setCount(count + 1);
}

const removeValue = () => {
  if(count > 0){
  setCount(count - 1);
  }
}

  return (
    <>
    <h1>Counter project with react</h1>
    <h4>Counter value: {count}</h4>
    <button
    onClick={addValue}
    >Add value</button> 
    {" "}
    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App
