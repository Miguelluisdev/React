import { useEffect, useState } from "react"
import axios from "axios"

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ExibirPostagens = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    const buscarPostagens = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        )
        setPosts(response.data.slice(0, 5))
      } catch (erro) {
        console.log(erro)
      }
      finally {
        setCarregando(false)
      }
    }
    buscarPostagens()
  }, [])

  return (
    <div>
      <h2>lista postagens</h2>
      {carregando ? <p>CArregando posts</p> : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExibirPostagens