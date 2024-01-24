import { useState } from "react"

// import { useState } from "react"

export default function Condicional(){
  function enviarEmail(e){
    e.preventDefault()
    console.log("testandi")
    setUserEmail(email)
    console.log(userEmail)
    console.log(useState)
  }

  const [email, setEmail] = useState()
  const [userEmail, setUserEmail] = useState()
  console.log(email)
  return (
   <div>
   <h2>cadastre-se</h2>
   <form action="
   ">  
   <input type="email" name="" id="" placeholder="digite seu email" onChange={(e)=> setEmail(e.target.value)} />
   <button type="submit" onClick={enviarEmail} >Enviar</button>
   </form>
   {userEmail && (
    <div>
      <p>P email é {userEmail}</p>

    </div>
   )}
   </div>
  )
}