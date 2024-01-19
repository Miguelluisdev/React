import { useContext } from "react";
import { Contexts } from "../contexts/Contexts";


const valorComponente = () => {
  const {mensagem} = useContext(Contexts)
  return (
    <div>o valor é {mensagem}</div>
  )
}

export default valorComponente