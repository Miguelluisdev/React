import React, { useRef, useState } from 'react'


const Contact: React.FC = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [enviado, setEnviado] = useState<boolean>(false)

  const emailRef = useRef<HTMLInputElement>(null);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!emailRef.current?.value.includes("@")) {
      alert("email invalido")
      return
    }
    setEnviado(true)

    setNome("")
    setEmail("")
    setMensagem("")
  }

  return (
    <form onSubmit={handleSubmit} action="" className='flex flex-col w-full max-w-md mx-auto'>
      <h2 className='text-2xl font-bold mb-4' >Contato</h2>
      <div className='mb-4' >
        <label htmlFor="nome" className='block mb-2 text-gray-700' >Nome</label>
        <input
          type="text"
          id='nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className='bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-full '
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-gray-700">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-full"
        />

      </div>
      <div className="mb-4">
        <label htmlFor="mensagem" className="block mb-2 text-gray-700">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-full h-24"
        />
      </div>
      <button
        type='submit' className='bg-blue-500 hover:bg-blue-950 rounded text-white font-bold py-2 px-4 w-full' >Enviar
      </button>
      {enviado && (
        <p className='mt-4 text-green-500' >MEnsagem Enviada com sucesso</p>
      )}
    </form>
  )
}

export default Contact