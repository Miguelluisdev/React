import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from "../layout/Footer.module.css" 

export default function Footer(){
  return (
    <footer className={styles.footer} >
      <ul className={styles.social_list} >
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaLinkedin/></li>
      </ul>
        <p className={styles.copy_right}><span>Preços 2023</span> &copy </p>
    </footer>
  )
}