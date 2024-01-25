import axios from "axios"
import { useState , useEffect } from "react"
import PostForm from "./PostForm"

const PostManager = () => {
  const [post , setPost] = useState([])
  const [error, setError] = useState("")

  const handleSucess = (post, operation) => {
    if (operation === "add"){
      setPost((currentPosts) => [post , ...currentPosts])
    }
  }


useEffect(()=>{
  const fetchAxios =  async () => {

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPost(response.data.slice(0,5))

    } catch (error){
      setError("erro na busca de dados")
    }

  }
  fetchAxios()
}, [])

  return (
    <>
    <PostForm  onSuccess={handleSucess} />
    <h1>postagens</h1>
  {(post.map((post)=> (
    <div key={post.id} >
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button>Editar</button>
    </div>
  )))}
    </>
  )
}

export default PostManager