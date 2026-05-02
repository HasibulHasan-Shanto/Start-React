
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'
const fetchCountries = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {
  return (
    <div>
      <Suspense fallback={<h1>All countries are loading ...</h1>}>
        <Countries fetchCountries={fetchCountries}></Countries>
      </Suspense>
    </div>
  )
}

export default App
