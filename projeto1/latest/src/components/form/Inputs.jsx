/* eslint-disable react/prop-types */
import styles from "../form/Input.module.css"

export default function Inputs({type,text,name,placeholder,handleOnChange,value}){
  return (
    <div className={styles.form_control} >
      <label htmlFor={name}>{text}</label>
      <input 
      type={type} 
      name={name} 
      id={name} 
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value} 
      />
    </div>
  )
}