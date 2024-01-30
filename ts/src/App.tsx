
import './App.css'
import Counnter from './components/Counnter'
import Greeting from './components/Greeting'
import ToDo from './components/ToDo'
import TxtInput from './components/TxtInput'
import Exercise from './components/exercise'

function App() {


  return (
    <>
      <Greeting name='darius' />
      <h1>react ts</h1>
      <Counnter />
      <TxtInput />
      <Exercise />
      <ToDo />
    </>
  )
}

export default App
