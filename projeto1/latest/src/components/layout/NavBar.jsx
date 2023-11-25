import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "../layout/NavBar.module.css"
import logo from "../../assets/logo.png"
export default function NavBar(){
  return (
    <Container>
    <nav className={styles.navbar} >
      <Link to="/" >
        <img src={logo} alt="container" className={styles.imgLogo} />
      </Link>
      <ul className={styles.list}>
        <li className={styles.item} > <Link to="/" >Home</Link></li>
        <li className={styles.item} > <Link to="/projects" >Projetos</Link></li>
        <li className={styles.item} > <Link to="/contact" >Contact</Link></li>
        <li className={styles.item} ><Link to="/company" >Empresa</Link></li>
      </ul>
      </nav>
    </Container>
  )

}