
import { Suspense } from 'react'
import './App.css'
import Header from './components/header/Header'
import PriceCards from './components/priceCards/PriceCards'



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
    </>
  )
}

export default App
