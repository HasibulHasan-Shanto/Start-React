
import './App.css'
import CounterUp from './counterUp'

function App() {
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
    </>
  )
}

export default App
