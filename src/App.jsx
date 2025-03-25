import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import Bangladesh from './Bangladesh'

function App() {
  const [count, setCount] = useState(0)
  // event handling first way
  function handleClick(){
    alert('clicked')
  }
  // most useable way of event handling is Arrow function if we dont hv to pass any parameter
  const handleClick3 = () => {
    alert('clicked click3')
  }
  // if the event handling has to pass any parameter
  const handleClick4 = (num) => {
    const newNum = num + 4
    alert(newNum)
  }

  return (
    <>
      
      <h1>React Core Concept Part 2</h1>

      {/* set count using useState */}
      <Bangladesh></Bangladesh>
      <Count></Count>

      {/* event handling */}
      {/* **1st way */}
      <button onClick={handleClick}>Click Me</button>

      {/* **2nd way */}
      <button onClick={function handleClick2(){
        alert('clicked click2')
      }}>Click Me2</button>

      {/* 3rd way */}
      <button onClick={handleClick3}>click me3</button>
      {/* 4th way if have aurguments */}
      <button onClick={() => handleClick4(4)}>click me4</button>
    </>
  )
}

export default App
