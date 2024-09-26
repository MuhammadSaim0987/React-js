import { useState, useCallback,useEffect,useRef } from 'react'


function App() {
  const [length, setLenght] = useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowSym, setAllowSym] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  const passwordGenerator = useCallback(() => {
    let pin = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if(allowNum) str += "12345678905346789"
    if(allowSym) str += "!@#$%^&*()_+"

    for(let i = 1; i < length; i++){
      const char = Math.floor(Math.random() * str.length);
      pin += str.charAt(char)
    }

    setPassword(pin);

  },[length, allowNum, allowSym])

  const copy = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select();
  }

  useEffect(() => {passwordGenerator()},[length, allowNum, allowSym])

  return (
    <>
    <div className='flex items-center w-screen h-screen bg-black justify-center'>
      <div className='flex justify-center flex-col items-center w-3/5 px-3 py-4 rounded-lg bg-gray-600 text-black'>

        <h1 
        className='text-center pb-6 font-semibold text-2xl '
        >Password Generator
        </h1>

        <div className='text-sm'>
          <input 
          className=' px-2 py-1 w-64 text-black'
          type="text"
          placeholder='Password'
          value={password}
          ref={passwordRef}
          readOnly
          />
          <button
          className='bg-gray-900 px-2 py-1 mr-10 text-white font-medium'
          onClick={copy}
          >copy</button>
        </div>

        <div className='flex items-center justify-center text-sm pt-7 ml-2 pb-3 gap-7 font-medium'>

          <div>
            <input 
            type="range" 
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLenght(e.target.value)}
            className='cursor-pointer'
            />
            <label
            htmlFor="Length"
            className='pl-1'
            >Length : {length}</label>
          </div>

          <div>
            <input
            type="checkbox"
            defaultChecked = {allowNum}
            onChange={() =>{
              setAllowNum((prev) => !prev )
            }}

            />
            <label 
            htmlFor="Numbers"
            className='pl-1'
            >Numbers</label>
          </div>

          <div>
            <input
            type="checkbox"
            defaultChecked = {allowSym}
            onChange={() =>{
              setAllowSym((prev) => !prev )
            }}

            />
            <label 
            htmlFor="Symbol"
            className='pl-1'
            >Symbol</label>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default App
