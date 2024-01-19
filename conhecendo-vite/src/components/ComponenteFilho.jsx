import {useContext} from 'react'
import { Contexts } from '../contexts/Contexts'

const ComponenteFilho = () => {

  const {mensagem, setMensagem} = useContext(Contexts)


  return (
    <>
    <div>{mensagem}</div>
      <button onClick={ () => setMensagem("nova mensagem")} >
          atualizar mensagem
        </button>    
    
    </>
  )
}

export default ComponenteFilho