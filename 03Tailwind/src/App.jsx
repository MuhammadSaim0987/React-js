import './App.css'
import Card from './Components/card'

function App() {
  return (
  <>
    <h1 className=' bg-blue-600 p-5 text-center text-black font-bold w-96 rounded-xl' >Hellow World</h1>
    <Card Name="Raiden Shogun" Region="Inazuma"/>
    <Card Name="Furina" Region="Fontaine" />
  </>
  )
}

export default App
