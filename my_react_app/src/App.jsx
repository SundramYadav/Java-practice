import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import New from './component/assignment'

function App() {
  const [count, setCount] = useState(0)
  let data = 10000

  function fun(){
    data = data - 2000;
    alert("inside Function "+ data)
  }

  return (
    <>
      <h2>representation of state of variables</h2>
      <h3>{data}</h3>
      <button onClick={fun}> click </button>
    </>
  )
}

export default App
