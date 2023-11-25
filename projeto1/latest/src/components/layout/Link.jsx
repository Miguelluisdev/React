/* eslint-disable react/prop-types */
import styles from "./Link.module.css"
import { Link } from "react-router-dom"
export default function Linke({to, text}){

  return ( 
      <Link to={to} className={styles.btn} >
      {text}
      </Link>


   )
}