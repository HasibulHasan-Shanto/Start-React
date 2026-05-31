
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
  const [count, setCount] = useState(0)
  const [selectedPlayers, setSelectedPlayers] = useState([])
  console.log(selectedPlayers);
  const handleClick = () => {
    const newCount = count + 1
    if(newCount > 6){
      alert(`You already Choose six players`)
      return true
    }
    setCount(newCount)
  }

  return (
    <>

      <Header balance={balance}></Header>
      <Banner></Banner>
      <div className="max-w-350 mx-auto mt-15">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-[#131313] font-bold">
            {
              toggle === true ? `Available Players` : `Selected Player (${count}/6)`
            }
          </h3>
          <div className="flex items-center gap-2">
            <button onClick={() => setToggle(true)}
              className={`${toggle === true ? 'bg-red-500' : ''} px-8 py-2 rounded-sm border border-gray-300`}>
              Available
            </button>
            <button onClick={() => setToggle(false)}
              className={`${toggle === false ? 'bg-red-500' : ''} px-8 py-2 rounded-sm border border-gray-300`}>
              Selected
              <span>
                ({count})
              </span>
            </button>
          </div>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<h1>Loading...</h1>}>
          <AvailablePlayers
            fetchPlayers={fetchPlayers}
            balance={balance}
            setBalance={setBalance}
            handleClick={handleClick}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></AvailablePlayers>
        </Suspense> : <SelectedPlayers
          selectedPlayers={selectedPlayers}
        ></SelectedPlayers>
      }

    </>
  )
}

export default App
