import { useEffect, useState } from "react"
import axios from "axios"

// eslint-disable-next-line react/prop-types
const PostForm = ({ post ,onSuccess}) => {


  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");


  useEffect(() => {
    if (post){
      setTitle(post.title);
    setBody(post.body);
    }
  }, [post]);
  

   const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {title, body, userId: 1}

    try {
      if (post) {
      
        const updateUrl = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
    console.log("Update URL:", updateUrl);

    const response = await axios.put(updateUrl, newPost);
    onSuccess(response.data, "update");
      } else {

        // Adicionar nova postagem
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          newPost
        );
        onSuccess(response.data, "add");
      }
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Erro ao enviar postagem:", error);
    }
  };
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