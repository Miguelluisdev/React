import { useReducer } from "react"

import { counterReducer } from "./CounterReducer"

const Contador = () => {
  const [count, dispatch] = useReducer(counterReducer, 0)
  return (
    <div className="text-xl via-blue-900 from-blue-600">
      Contador: {count}
      <button onClick={() => dispatch({ type: "increment" })} >Incrementar</button>
      <button onClick={() => dispatch({ type: "decrement" })} ></button>
    </div>
  )
}

export default Contador