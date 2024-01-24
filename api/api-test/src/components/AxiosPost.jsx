import axios from "axios"
import { useState , useEffect } from "react"

const AxiosPost = () => {
  const [post , setPost] = useState([])
  const [error, setError] = useState("")



useEffect(()=>{
  const fetchAxios =  async () => {

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPost(response.data)

    } catch (error){
      setError("erro na busca de dados")
    }

  }
  fetchAxios()
}, [])

return (
  <>
  <h1>post (Axios)</h1>
  {error ? (
    <p>Erro: {error}</p>
  ) : (post.map((post)=> (
    <div key={post.id} >
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ))
)}
  </>
)
}



export default AxiosPost