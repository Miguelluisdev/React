import { useState } from 'react';
import './App.css';
import Local from "./components/locaStorage"
import Calc from "./components/Calc"
function App() {

  const [form, setForm] = useState({
    "Nome": "",
    "cursos": "",
    "ano": ""
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === 'fnome') {
      setForm({ ...form, "Nome": value });
    } else if (name === 'fcurso') {
      setForm({ ...form, "cursos": value });
    } else if (name === 'fano') {
      setForm({ ...form, "ano": value });
    }
  };

  return (
    <>
      <label>Nome</label>
      <input type="text" name='fnome' value={form.Nome} onChange={(e) => handleFormChange(e)} />

      <label>curso</label>
      <input type="text" name='fcurso' value={form.cursos} onChange={(e) => handleFormChange(e)} />

      <label>ano</label>
      <input type="text" name='fano' value={form.ano} onChange={(e) => handleFormChange(e)} />

      <p>Nome Digitado: {form.Nome}</p>
      <p>Curso Digitado: {form.cursos}</p>
      <p>Ano Digitado: {form.ano}</p>

      <Local/>

      <Calc/>
    </>
  );
}

export default App;
