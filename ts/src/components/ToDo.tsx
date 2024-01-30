import { useState } from "react"

type Item = {
  id: number;
  nome: string;
}

const ToDo = () => {

  const [itens, setItens] = useState<Item[]>([])
  const [novoItem, setNovotItem] = useState<string>("")


  const adicionarItem = () => {
    const item: Item = {
      id: itens.length + 1,
      nome: novoItem
    }
    setItens([...itens, item])
    setNovotItem("")
  }
  return (
    <div>
      <input
        type="text"
        value={novoItem}
        onChange={(e) => setNovotItem(e.target.value)}
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
    </div>
  )

}

export default ToDo