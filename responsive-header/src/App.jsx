
import { Suspense } from 'react'
import './App.css'
import Header from './components/header/Header'
import PriceCards from './components/priceCards/PriceCards'
import Rechart from './components/Rechart/Rechart'



const fetchPrice = fetch('/priceingPlans.json')
  .then(res => res.json())

function App() {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span> }>
        {/* <PriceCards fetchPrice={fetchPrice}></PriceCards> */}
        <PriceCards fetchPrice={fetchPrice}></PriceCards>
      </Suspense>
      <Rechart></Rechart>
    </>
  )
}

export default App
