import axios from "axios"
import { useState , useEffect } from "react"
import PostForm from "./PostForm"

const PostManager = () => {
  const [post , setPost] = useState([])
  const [error, setError] = useState("")
  const [selectedPost , setSelectedPost] = useState(null)
  const [isEditing , setIsEditing] = useState(false)

  const handleSucess = (post, operation) => {
    if (operation === "add"){
      setPost((currentPosts) => [post , ...currentPosts])
    } else if (operation === "uptade") {

      setPost((currentPosts) =>
       currentPosts.map((p) => p.id === post.id ? post : p))

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

const handleEdit = (post) => {
  setSelectedPost(post)
  setIsEditing(true)
}

const handleEditCancel = () => {
  setSelectedPost(null)
  setIsEditing(false)
}

  return (
    <>
    <PostForm post={isEditing ? selectedPost : null} onSuccess={handleSucess} />
    {isEditing && <button onClick={handleEditCancel} >Cancelar edição</button>}
    <h1>postagens</h1>
  {(post.map((post)=> (
    <div key={post.id} >
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => handleEdit(post)}  >Editar</button>
    </div>
  )))}
    </>
  )
}

export default PostManager