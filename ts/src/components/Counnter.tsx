import { useEffect, useState } from "react"

const Counnter = () => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    console.log(`valor do contador ${count}`)
  }, [count])

  return (
    <div>
      Counnter{count}
      <button onClick={() => setCount((prev) => prev + 1)} >incrementa</button>
      <button onClick={() => setCount((prev) => prev - 1)} >decremento</button>
    </div>

  )
}

export default Counnter