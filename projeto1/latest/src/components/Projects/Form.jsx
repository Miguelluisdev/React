/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

import styles from "../Projects/Form.module.css"
import Inputs from "../form/Inputs"
import Select from "../form/Select"
import Submit from "../form/Submit"
export default function Form({ handleSubmit,btnText, projectData}){
  const [categories, setCategories] = useState([])
  const [project, setProject] = useState(projectData || {})

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

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }
  function handleChange(e){
    setProject({...project, [e.target.name]: e.target.value})
  }
  function handleCategory(e){
    setProject({...project, category:{
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    }})
  }
  return (
    <form onSubmit={submit}  className={styles.form} >
      < Inputs
      type="text"
      text="nome do projeto"
      name="name"
      placeholder="nome do projeto"
      handleOnChange={handleChange}
      />
      
      < Inputs
      type="number"
      text="orçamento do projeto"
      name="budget"
      placeholder="orçamento total"
      handleOnChange={handleChange}
      />
  < Select
    name="category_id"
    text="selecione a categoria"
    options={categories}
    value={project.category ? project.category.id : ''}
    handleOnChange={handleCategory}
  />

    < Submit
      //  text={btnText}
    />
      
    </form>
  )

}