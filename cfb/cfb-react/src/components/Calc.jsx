import {useState} from "react";
import Tabela from "./Tabela";

export default function App(){
  const [peso, setPeso] = useState("0");
  const [altura , setAltura] = useState("0");

  const Peso = () => {
    return (
    <div>
      <label>Informe seu peso</label>
      <input 
      type="number"
      value={peso}
      onChange={(e)=>setPeso(e.target.value)} 
        />
    </div>
    )
  }

  const Altura = () => {
    return (
      <div>
          <label>Informe a Altura</label>
          <input 
          type="number" 
          value={altura} 
          onChange={(e)=> setAltura(e.target.value)} 
          />
      </div>
    )
  }

  const Calcular = (altura, peso) => {
    const calc = (Number(peso)/Number(altura) ** 2)
    return calc
  }

  const btnCalc = ()=> {
    return (
      <div>
        <button onClick={()=> Calcular(altura, peso)} >Calcular</button>
      </div>
    )
  }

  const Res = (Calcular) => {
    return (
      <div>
        <p>Resultado IMC: {Calcular(altura,peso).toFixed(1)}</p>
      </div>
    )
  }
  return (

    <section style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      {Peso()}
      <br />
      {Altura()}
      <br />
      {btnCalc(altura,peso)}
      {Res(Calcular)}
      <Tabela/>
      </section>
  )
}