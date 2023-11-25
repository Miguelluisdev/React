import styles from "../Home/Home.module.css"
import control from "../../assets/control.svg"
import Linke from "../layout/Link"
export default  function Home(){
  return (
    <section className={styles.home_container} >  
      <h1>Bem-Vindo ao <span>PReços</span></h1>
      <p>Comece a gerenciar os seus projetos agora mesmo</p>
     <Linke to="/newproject" text="Criar Projeto" ></Linke>
      <img src={control} alt="preços" className={styles.imgControl}  />
    </section>
  )
}