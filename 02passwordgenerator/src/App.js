import { useState, useCallback, useEffect, useRef} from 'react';
import './App.css';
 

function App() {

  const [length , setLength]=useState(8);
  const[numberAllowed,setNumberAllowed ] = useState(false);
  const[charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(
    () => {
     let pass =""
     let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed) str += "0123456789"
     if(charAllowed) str += "!@#^&*~_-+="
      
     for (let i = 1; i<=length; i++) {
      let char =Math.floor(Math.random()  * str.length + 1)
      pass += str.charAt(char)
      
     }
     setPassword(pass)

    },[length, numberAllowed, charAllowed, setPassword])
  
    useEffect(() => {
      passwordGenerator()
    }
    , [length, numberAllowed, charAllowed, passwordGenerator])

   //useref
   const passwordref = useRef(null);

   const copyPassword= useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
   },[password])

  return (
  <div>
    <div className="app">
      <h1>Password Generator</h1>
      <input type="text" placeholder='Password' value={password} readOnly ref={passwordref} />
      <button onClick={copyPassword}>copy</button>
      
    </div>

    <div className="filter">
      <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)} }   /><label>Length :
        ({length})
      </label>

    </div>
    <div className="checkbox">
      <input type="checkbox"  defaultChecked={numberAllowed} onChange={ ()=>{setNumberAllowed((prev)=>!prev)}} /> <label >Numbers</label>
      <input type="checkbox"  defaultChecked={charAllowed} onChange={ ()=>{setcharAllowed((prev)=>!prev)}} /> <label >Characters</label>
    </div>
    </div>

  );
}

export default App;
