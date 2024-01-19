import { createContext , useState } from "react";

export const Contexts = createContext()

export const ContextsProvider = ( {children}) =>{
  const [mensagem, setMensagem] = useState("Hello")

  const valorContext = {
    mensagem ,
    setMensagem,
  };

  return (
    <Contexts.Provider value={valorContext}>
      {children}
    </Contexts.Provider>
  )
}