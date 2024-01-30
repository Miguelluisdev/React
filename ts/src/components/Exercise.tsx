import { useState, useEffect } from "react"

const Exercise = () => {
  const [usuario, setUsuario] = useState<string>("")
  const [senha, setSenha] = useState<string>("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    alert(`login efetuado valores ${usuario} ${senha} `)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usuario">Nome do usuario</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div>
        <label htmlFor="usuario">Senha:</label>
        <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>
      <button type="submit" >entrar</button>
    </form>
  )
}

export default Exercise