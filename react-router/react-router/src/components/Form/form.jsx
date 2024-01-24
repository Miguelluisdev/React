import { useState } from "react"

function cadastrarUsuario(e){
  e.preventDefault()
  console.log("cadastrou o usuario")
}
export default function Form(){

  const [name, setName] = useState("darius")
  console.log(name)
  return (
    <>
    <h1>Meu cadastro:</h1>
    <form action="" onSubmit={cadastrarUsuario} >
      <div>
        <label htmlFor="name">Name</label>
        <input type="text"  id="name" name="name" placeholder="digite seu nome" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" placeholder="digite sua senha" />
      </div>
      <div>
        <input type="submit" value="cadastrar" />
      </div>
    </form>

    </>
  )
}