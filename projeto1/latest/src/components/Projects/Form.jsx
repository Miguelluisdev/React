import styles from "../Projects/Form.module.css"
import Inputs from "../form/Inputs"
import Select from "../form/Select"
import Submit from "../form/Submit"
export default function Form({btnText}){

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
  />

    < Submit
      text={btnText}
    />
      
    </form>
  )

}