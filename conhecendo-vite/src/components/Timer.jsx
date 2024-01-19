import { useEffect, useState } from "react";

function Timer(){
    const [segundos, setSegundos] = useState(0);

    useEffect( () => {
      const intervaloId = setInterval(() => {
        setSegundos((segundos) => segundos + 1)
      }, 1000)


      return () => clearInterval(intervaloId)
    }, [])

    return <div>Timer: {segundos} segundos</div>
}

export default Timer;