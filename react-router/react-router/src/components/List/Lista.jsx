/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

export default function Lista({itens}){
  return (
    <>
    
    <h3>Lista</h3>
    {itens.map((item,index) => (
        <p key={index} >{item}</p>
     ) )
    }
    
    </>
  )
}