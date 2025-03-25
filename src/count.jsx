import { useState } from "react"

export default function Count(){
    // count up
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        const newCount = count + 1
        setCount(newCount)
    }

    // count Down 
    const [sub, setSub] = useState(20)
    const handleSub = () => {
        if(sub>0){
            const newSub = sub -1
            setSub(newSub)
        }
    }

    const countStyle = {
        border: '2px solid salmon'
    }
    return <div style={countStyle}>
        <h3>Count: {count}</h3>
        <h3>Count: {sub}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>sub</button>
    </div>
}