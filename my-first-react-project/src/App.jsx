
import './App.css'
import Map from './Map'
function App() {
  return (
    <>

      <strong>My in formation</strong>
      <MyInformation></MyInformation>
      <AnotherInformation name='Hasibul Hasan Shanto' CompanyName="Hyundai Bangladesh" tech='JavaScript' position='Jr. Developer' salary='20000'></AnotherInformation>
      <Premium name='Hasibul Hasan Shanto' isPremium={false}></Premium>
      <Map></Map>
    </>
  )
}

function MyInformation() {
  const name = 'Hasibul Hasan Shanto'
  const roll = 751979
  const dept = 'Computer Science & Technology'
  const shift = '2nd'

  return (
    <div className='student'>
      <h1>Name: {name}</h1>
      <p>Roll: {roll}</p>
      <p>Department: {dept}</p>
      <p>Shift: {shift}</p>
    </div>
  )
}
function AnotherInformation(props) {
  return (
    <div className='student'>
      <h1>Company Name: {props.CompanyName}</h1>
      <h1>Name: {props.name}</h1>
      <h1>position: {props.position}</h1>
      <h1>salary: {props.salary}</h1>
    </div>
  )
}

function Premium({name, isPremium}){
 return (
    <div className='premium'>
      <h1>
        Name: {name}
      </h1>
      <p>
        User: {isPremium ? `Your a premium user` : `Your a normal user`}
      </p>
    </div>
  )
}
export default App 
