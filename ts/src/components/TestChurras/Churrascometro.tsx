import React, { useState } from 'react';


interface Item {
  nome: string;
  preco: number;
}

const Churrascometro: React.FC = () => {
  const [homens, setHomens] = useState<number>(0);
  const [mulheres, setMulheres] = useState<number>(0);
  const [criancas, setCriancas] = useState<number>(0);
  const [carne, setCarne] = useState<Item>({ nome: '', preco: 0 });
  const [salada, setSalada] = useState<Item>({ nome: '', preco: 0 });
  const [bebida, setBebida] = useState<Item>({ nome: '', preco: 0 });
  const [acompanhamento, setAcompanhamento] = useState<Item>({ nome: '', preco: 0 });

  const calcularTotal = (): number => {
    const totalHomensMulheres = homens * 1.5 + mulheres;
    const totalCriancas = criancas * 0.5;
    const totalPessoas = totalHomensMulheres + totalCriancas;
    const totalItens = carne.preco + salada.preco + bebida.preco + acompanhamento.preco;
    return totalPessoas * totalItens;
  };

  const estimarDuracao = (): number => {
    // Estimativa simples de 2 horas para cada 10 pessoas
    const totalPessoas = homens + mulheres + criancas;
    return Math.ceil(totalPessoas / 10) * 2;
  };

  return (
    <div className="App">
      <h1>Churrascometro</h1>
      <div>
        <label>
          Homens:
          <input type="number" value={homens} onChange={(e) => setHomens(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Mulheres:
          <input type="number" value={mulheres} onChange={(e) => setMulheres(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Crianças:
          <input type="number" value={criancas} onChange={(e) => setCriancas(parseInt(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Tipo de Carne:
          <input type="text" value={carne.nome} onChange={(e) => setCarne({ nome: e.target.value, preco: 0 })} />
        </label>
      </div>
      <div>
        <label>
          Salada:
          <input type="text" value={salada.nome} onChange={(e) => setSalada({ nome: e.target.value, preco: 0 })} />
        </label>
      </div>
      <div>
        <label>
          Bebida:
          <input type="text" value={bebida.nome} onChange={(e) => setBebida({ nome: e.target.value, preco: 0 })} />
        </label>
      </div>
      <div>
        <label>
          Acompanhamento:
          <input
            type="text"
            value={acompanhamento.nome}
            onChange={(e) => setAcompanhamento({ nome: e.target.value, preco: 0 })}
          />
        </label>
      </div>
      <div>
        <h2>Total: R${calcularTotal()}</h2>
        <h2>Duração estimada: {estimarDuracao()} horas</h2>
      </div>
    </div>
  );
};

export default Churrascometro;
