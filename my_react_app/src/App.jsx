import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import New from './component/assignment'

function App() {
  const [count, setCount] = useState(0)

  function fun(){
    alert ("alert")
  }

  const handleClick=(fruitName)=>{
    alert ("fruitname")
  }

  return (
    <>
    <h1> Example of click event </h1>
    <button onClick={fun}>click</button>
   <button onClick={() => handleClick("Apple")}>APPLE</button>
      <button onClick={() => handleClick("Banana")}>BANANA</button>
      <button onClick={() => handleClick("Guava")}>GUAVA</button>
    </>
  )
}

export default App
