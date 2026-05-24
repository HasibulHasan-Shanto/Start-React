
import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/availablePlayers/AvailablePlayers'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers'


const fetchDate = async () => {
  const res = await fetch('/playerDate.json')
  return res.json()
}
function App() {

  const fetchPlayers = fetchDate()
  return (
    <>
    
    <Header></Header>
    <Banner></Banner>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AvailablePlayers fetchPlayers={fetchPlayers}></AvailablePlayers>
      </Suspense>
    <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
