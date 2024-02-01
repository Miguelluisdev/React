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
      <div className="container bg-gray-600 text-yellow-400 backdrop:border-r-blue-900" >
        <label htmlFor="usuario" className="font-serif font text-2xl" >Nome do usuario</label>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      </div>
      <div>
        <label htmlFor="usuario" className="font-serif font text-2xl" >Senha:</label>
        <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </div>
      <button type="submit" >entrar</button>
    </form>
  )
}

export default Exercise