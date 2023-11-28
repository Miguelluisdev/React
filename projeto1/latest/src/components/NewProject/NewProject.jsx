import { useNavigate} from 'react-router-dom'
import styles from "../NewProject/NewProject.module.css"
import Form from "../Projects/Form"
export default  function NewPoject(){
  
    const navigate = useNavigate()

    function createPost(project){
      // initialize preços and sefvices
      project.preco = 0
      project.services

      fetch("http://localhost:5000/projects", {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(project)
      }) 
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate("/projects", { message: "Projeto criado com sucesso!" })
      }).catch(err => console.log(err))
    }

  return (

    <div className={styles.newproject_container} >
      <h1>Criar projeto</h1>
      <p>crie seu projeto para depois adicionar os serviços</p>
      < Form handleSubmit={createPost}  btnText="Criar projeto" />
    </div>
  )
}