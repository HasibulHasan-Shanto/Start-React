
import { Suspense } from 'react'
import './App.css'
import BatsMan from './BatsMan'
import CounterUp from './counterUp'
import PracticeApi from './PracticeApi'
import Todos from './Todos'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
const posts = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
  return posts.json()
}

function App() {
  const postsPromise = posts()
  // first method
  function firstBtn() {
    alert('clicked me first')
  }
  // third method
  const thirdBtn = () => {
    alert('clicked me three')
  }
  return (
    <>
      <Suspense fallback={<h1>All todos are loading...</h1>}>
        <Todos postsPromise={postsPromise}></Todos>
      </Suspense>
      {/* akta button ke click korar jonno amra koekta method use korte pari like */}
      <button onClick={firstBtn}>firstBtn</button>
      {/* second method */}
      <button onClick={function () {
        alert('clicked me second')
      }}>secondBtn</button>
      {/* third method */}
      <button onClick={thirdBtn}>thirdBtn</button>
      {/* fourth method */}
      <button onClick={() => { alert('clicked me  four') }}>fourthBtn</button>
      <CounterUp></CounterUp>
      <BatsMan></BatsMan>
      {/* <Suspense fallback={<p>Data is loading...</p>}>
        <PracticeApi fetchUsers={fetchUsers}></PracticeApi>
      </Suspense> */}
    </>
  )
}

export default App
