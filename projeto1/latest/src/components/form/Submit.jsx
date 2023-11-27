/* eslint-disable react/prop-types */
import styles from "../form/Submit.module.css"

export default function Select({text}){
  return (
    <div >
        <button className={styles.btn} > type={text}</button>
    </div>
  )
}