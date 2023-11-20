import Subtitle from "./subtitle"

export default function App() {
  function soma(a,b){
      return a + b
  }

  const tech = "react is coll"
    const one =  "faker is goat"
  const playersT1 = [" faker ", " guma ", " keria"]

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
    </div>
  )
}