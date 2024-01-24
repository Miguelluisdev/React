import { useState , useEffect } from "react"

const FetchPost = () => {
  const [post , setPost] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchPost = async () => {

      try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
        )
        const data = await response.json()
        setPost(data)
      } catch (error){
        setError(error.messafe)
      }
    }
    fetchPost()
    
  }, [])



  return (
    <>
    <h1>post (Fetch)</h1>
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

export default FetchPost