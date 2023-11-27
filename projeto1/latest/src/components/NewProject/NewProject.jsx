import styles from "../NewProject/NewProject.module.css"
import Form from "../Projects/Form"
export default  function NewPoject(){
  return (
    <div className={styles.newproject_container} >
      <h1>Criar projeto</h1>
      <p>crie seu projeto para depois adicionar os serviços</p>
      < Form btnText="Criar projeto" />
    </div>
  )
}