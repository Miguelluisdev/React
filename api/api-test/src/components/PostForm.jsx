import { useState } from "react"
import axios from "axios"

const PostForm = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"  
      value={title} 
      placeholder="digite o titulo" 
      onChange={(e)=> setTitle(e.target.value)} 
      />
      <div>
        <textarea
         name="a" 
         id="b" 
         cols="30"
        rows="10 "
        value={body}
        placeholder="digite o texto"
        onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" >Enviar</button>
    </form>
    
    </>
  )
}

export default PostForm