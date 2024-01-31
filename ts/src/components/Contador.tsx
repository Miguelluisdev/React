import { useReducer } from "react"

import { counterReducer } from "./CounterReducer"

const Contador = () => {
  const [count, dispatch] = useReducer(counterReducer, 0)
  return (
    <div>
      Contador: {count}
      <button onClick={() => dispatch({ type: "increment" })} >Incrementar</button>
      <button onClick={() => dispatch({ type: "decrement" })} ></button>
    </div>
  )
}

export default Contador