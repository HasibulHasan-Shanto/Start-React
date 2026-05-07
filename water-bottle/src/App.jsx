
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/bottles/Bottles'

const fetchBottle = fetch('/bottle.json')
.then(res => res.json())

function App() {
  return (
    <>
      <Suspense fallback={<h1>
        All bottles are loading ...
      </h1>}>
        <Bottles fetchBottle={fetchBottle}></Bottles>
      </Suspense>
    </>
  )
}

export default App
