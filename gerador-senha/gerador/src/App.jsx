import { useState } from "react"
function App() {
  const [password,setPassword] = useState("")
  const [copy,  setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  function generate(){
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
        const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]

    }
    setPassword(newPassword)
    setCopyText("copiar")
  }

  
	function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }


    return (
      <div>
        <h1>Gerador de senha</h1>
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <input 
          type="number"
           id="passwordSize"
            min={1}
            onChange={(ev) => setPasswordSize(ev.target.value)}
            />
        </div>
        <button onClick={generate} >Gerar senha de {passwordSize} caracteres</button>
        <button onClick={copyToClipboard} >{copy}</button>
        <div>{password}</div>
      </div>
    )
}

export default App
