import { useEffect, useState } from "react"

import styles from "../Projects/Form.module.css"
import Inputs from "../form/Inputs"
import Select from "../form/Select"
import Submit from "../form/Submit"
export default function Form({btnText}){
  const [categories, setCategories] = useState([])

  useEffect(()=> {
    
  fetch("http://localhost:5000/categories" , {
    method: "GET",
    headers: {
      "Content-Type": "aplication/json"
    },
  })
  .then((resp) => resp.json())
  .then((data) => setCategories(data))
  .catch((err) => console.log(err))
  }, [])
  return (
    <form className={styles.form} >
      < Inputs
      type="text"
      text="nome do projeto"
      name="name"
      placeholder="nome do projeto"
      />
      
      < Inputs
      type="number"
      text="orçamento do projeto"
      name="budget"
      placeholder="orçamento total"
      />
  < Select
    name="category_id"
    text="selecione a categoria"
    options={categories}
  />

    < Submit
      // text={btnText}
    />
      
    </form>
  )

}