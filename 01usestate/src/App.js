import './App.css';
import { useState } from 'react';





function App() {
  let [counter, setCounter]= useState(18);
  const addValue=()=>{
    setCounter(counter +1);
  }
  const removeValue =() =>{
    setCounter(counter -1);
  }


  return (
    <div className='box'>
     <h1  className='heading'>Counter Value {counter}</h1>
   <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}
  >Remove Value</button>
  </div> 
  );
}

export default App;
