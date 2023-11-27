/* eslint-disable react/prop-types */
import styles from "../form/Select.module.css"

export default function Inputs({text,name, options, handleOnChange,value}){
  return (
    <div className={styles.form_control} >
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
      </select>
    </div>
  )
}