import { useState } from "react"

export default function Bangladesh(){
    const bdStyle = {
        background: 'gray',
        color: 'white',
        border: '2px solid gray',
        borderRadius: '16px',
        marginBottom: '20px',
        padding: '20px'
    }
    const btnStyle = {
        marginRight: '10px',
        background: 'white',
        color: 'black',
        fontWeight: 'bold'
    }
    // count up 
    const [countUp, setCountUp]= useState(0);
    // count Down
    const [countDown, setCountDown] = useState(140)
    // count Balls
    const [countBall, setCountBall] = useState(120)
    const handle1 = () => {
        const newScore = countUp + 1
        const newRem = countDown - 1
        const remBall = countBall - 1
        setCountUp(newScore)
        setCountDown(newRem)
        setCountBall(remBall)
    }
    const handle2 = () => {
        const newScore = countUp + 2
        const newRem = countDown - 2
        const remBall = countBall - 1
        setCountUp(newScore)
        setCountDown(newRem)
        setCountBall(remBall)
    }
    const handle3 = () => {
        const newScore = countUp + 3
        const newRem = countDown - 3
        const remBall = countBall - 1
        setCountUp(newScore)
        setCountDown(newRem)
        setCountBall(remBall)
    }
    const handle4 = () => {
        const newScore = countUp + 4
        const newRem = countDown - 4
        const remBall = countBall - 1
        setCountUp(newScore)
        setCountDown(newRem)
        setCountBall(remBall)
    }
    const handle5 = () => {
        const newScore = countUp + 5
        const newRem = countDown - 5
        const remBall = countBall - 1
        setCountUp(newScore)
        setCountDown(newRem)
        setCountBall(remBall)
    }
    const handle6 = () => {
        const newScore = countUp + 6
        const newRem = countDown - 6
        const remBall = countBall - 1
        setCountUp(newScore)
        setCountDown(newRem)
        setCountBall(remBall)
    }
    return <div style={bdStyle}>
        <h1>Bangladesh</h1>
        {
            countUp >50 && <p>Bangladesh reaches At 50 runs</p>
        }
        <p style={{fontSize:'24px', fontWeight: 'bold'}}>Score Runs: {countUp}</p>
        <p style={{fontSize:'24px', fontWeight: 'bold'}}>Bangladesh Needs {countDown} Runs Off {countBall} Balls</p>
        <button style={btnStyle} onClick={handle1}>1</button>
        <button style={btnStyle} onClick={handle2}>2</button>
        <button style={btnStyle} onClick={handle3}>3</button>
        <button style={btnStyle} onClick={handle4}>Four</button>
        <button style={btnStyle} onClick={handle5}>5</button>
        <button style={btnStyle} onClick={handle6}>Six</button>
    </div>
}