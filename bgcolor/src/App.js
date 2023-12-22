
import './App.css';
import {useState , useEffect} from 'react'




function App() {
const [color, setColor] = useState("yellow");
const click = color =>{
  setColor(color)
}

useEffect(() => {
document.body.style.backgroundColor= color
}, [color])




  return (
    <div className="App"  style={{ width: '100vw', height: "100vh"}}> {color}
    <button onClick={()=>{click("red")}} style={{width:"50px", height:"50px"}} > </button>
   
    </div>
  );
}

export default App;
