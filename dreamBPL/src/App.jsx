
import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/availablePlayers/AvailablePlayers'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers'


const fetchDate = async () => {
  const res = await fetch('/playerDate.json')
  return res.json()
}
const fetchPlayers = fetchDate()
function App() {

  const [toggle, setToggle] = useState(true)
  const [balance, setBalance] = useState(10000000)
  return (
    <>

      <Header balance={balance}></Header>
      <Banner></Banner>
      <div className="max-w-350 mx-auto mt-15">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-[#131313] font-bold">
            {
              toggle === true ? `Available Players`: `Selected Player`
            }
          </h3>
          <div className="flex items-center gap-2">
            <button onClick={() => setToggle(true)} 
            className={`${toggle === true ? 'bg-red-500': ''} px-8 py-2 rounded-sm border border-gray-300`}>
              Available
            </button>
            <button onClick={() => setToggle(false)}
              className={`${toggle === false ? 'bg-red-500' : ''} px-8 py-2 rounded-sm border border-gray-300`}>
              Selected
              <span>
                (0)
              </span>
            </button>
          </div>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<h1>Loading...</h1>}>
          <AvailablePlayers balance={balance} setBalance={setBalance} fetchPlayers={fetchPlayers}></AvailablePlayers>
      </Suspense>: <SelectedPlayers></SelectedPlayers>
      }

    </>
  )
}

export default App
