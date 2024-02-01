import { useContext } from "react";
import { TemaContext } from "../contexts/TemaContext";

const BarraFerramentas = () => {
  const contextoTema = useContext(TemaContext);

  if (!contextoTema) {
    return null;
  }

  return (
    <div style={{ background: contextoTema.tema === "claro" ? "#FFF" : "#000", color: contextoTema.tema === "claro" ? "#000" : "#FFF" }}>
      <button onClick={contextoTema.alternarTema}>Alterar Tema</button>
      <h1 className="text-3xl font-normal underline text-red-800 ">
        Hello world!
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Funcionar
      </button>

    </div>
  );
};

export default BarraFerramentas;
