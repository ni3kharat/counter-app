import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0);

  return (
    <>
    <h3>Welcome To React Hooks State</h3>
     <button style={{
      backgroundColor: "#FF5733"
     }} onClick={()=>{
      if(count==10){
        alert('Cant Incremet Beyond 10');
      }else{
      setCount(count+1);
      }
     }}>Increment </button>
     <br></br>
     <div>
      <p>Counter is {count}</p>
     </div>
          <button style={{
      backgroundColor: "#FF5733"
     }} onClick={()=>{
      if(count==0){
        alert('Cant Decrement Below 0');
      }else{
        setCount(count-1);
      }
 
     }}>Decrement </button>
    </>
  )
}

export default App
