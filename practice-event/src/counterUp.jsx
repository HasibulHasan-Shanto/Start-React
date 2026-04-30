
import { useState } from 'react'
import './App.css'
export default function CounterUp() {
    const [count, setCount] = useState(0)
    const addBtn = () => {
        console.log('clicked')
        let newCount = count + 1
        setCount(newCount)
    }
    return (
        <>

            <div className='dev'>

                <p>
                     Count: {count}
                </p>
                <button onClick={addBtn}>Count</button>
            </div>
        </>
    )
}