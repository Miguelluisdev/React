
import './App.css'
import Contador from './components/Contador'
import Counnter from './components/Counnter'
import Greeting from './components/Greeting'
import ToDo from './components/ToDo'
import TxtInput from './components/TxtInput'
import Exercise from './components/Exercise'
import { TemaProvider } from './contexts/TemaContext'
import BarraFerramentas from './components/BarraFerramentas'
import ExibirPostagens from './components/ExibirPostagens'
import PasswordInput from './components/PasswordInput/PasswordInput'
import Contact from './components/Contact/Contact'
import Form from './components/Form/Form'

function App() {


  return (
    <>
      <Greeting name='darius' />
      <h1>react ts</h1>
      <Counnter />
      <TxtInput />
      <Exercise />
      <ToDo />
      < Contador />
      <TemaProvider>
        <BarraFerramentas />
      <Form/>
      </TemaProvider>
      <ExibirPostagens />
      <PasswordInput />
      <Contact />
    </>
  )
}

export default App
