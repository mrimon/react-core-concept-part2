import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './count'
import Bangladesh from './Bangladesh'
import Users from './users'
import Friends from './friends'

// 1st way to fetch API
const fetchUsers =
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    
// 2nd way of fetching API
const fetchFriends = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

function App() {
  const friendsData = fetchFriends()
  const [count, setCount] = useState(0)
  // event handling first way
  function handleClick() {
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
      <Suspense fallback={<h3 style={{padding: '22px', margin: '10px'}}>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3 style={{padding: '22px', margin: '10px'}}>Friends are coming for treats...</h3>}>
        <Friends friendsData={friendsData}></Friends>
      </Suspense>
      <Bangladesh></Bangladesh>
      <Count></Count>

      {/* event handling */}
      {/* **1st way */}
      <button onClick={handleClick}>Click Me</button>

      {/* **2nd way */}
      <button onClick={function handleClick2() {
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
