import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css'

function App() {
  const[length, setLength] = useState(8);
  const[allowNum, setallowNum] = useState(false);
  const[allowChar, setallowChar] = useState(false);
  const[password, setPassword] = useState("");

  const passwordref = useRef(null);

  let passwordGen = useCallback(() => {
    let pin = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(allowNum) str += "1234567890";
    if(allowChar) str += "!@#$%^&*()_+-=`~";

    function randchar(str) {
      for(let i = 1; i <= length; i++){
        const randIdx = Math.floor(Math.random() * str.length);
        pin = pin + str[randIdx] ;
      }
      return pin;
    }
    randchar(str);

    setPassword(pin);
  }, [length, allowNum, allowChar, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,30);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    passwordGen()
  },[length,allowChar,allowNum,passwordGen])

  return (
    <div className='ctnr'>
      <div className='input'>
      
        <input type="text" 
        value={password}
        placeholder='Password'
        ref={passwordref}
        readOnly
        />

        <button
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>

      <div className='buttons'>
        <input type="range" className='bar'
        min ={6}
        max ={30}
        value={length}
        onChange={(e) => {setLength(e.target.value)}}
        /> <label className='barlabel'>Lenght : {length}</label>
      
        <div className='check check1'>
          <input type="checkbox" 
          defaultChecked={allowNum}
          onChange={() => setallowNum((prev) => !prev)} 
          /> 
          <label>Include Numbers</label>
        </div>

        <div className='check'>
          <input type="checkbox" 
          defaultChecked={allowChar}
          onChange={() => setallowChar((prev) => !prev) }
        /> 
          <label>Include Characters</label>
        </div>  
        
      </div>
    </div>
  );
}

export default App; 