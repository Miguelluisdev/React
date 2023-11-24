import Subtitle from "./subtitle"
import SayMyName from "./components/SayMyname"
import List from "./components/List"
import Form from "./components/Form/form"
import Condicional from "./components/Condicional/Condicional"
import Lista from "./components/List/Lista"
export default function App() {
  function soma(a,b){
      return a + b
  }

  const tech = "react is coll"
    const one =  "faker is goat"
  const playersT1 = [" faker ", " guma ", " keria"]

  const meusItens = ["darius", "dick", "liz", "lahot11"]

  return (
    <div style={{ backgroundColor: "#2c2c2d",
    display: "grid",
    minHeight: "100vh",
    placeContent: "center",
    textAlign: "center" }} >
      <h1> {tech} , React is awesome!</h1>
      <p> soma è {soma(25,25)}</p>
      <p>{one}</p>
      <p>T1 players: {playersT1}</p>
      < Subtitle/>
      <SayMyName nome="DArius" />

      < Lista itens={meusItens} />
    <List />

    < Condicional />

    < Form/>
    </div>
  )
}