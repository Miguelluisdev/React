const CardProduct: React.FC<{ produto: Produto }> = ({ produto }) => {
  const [selecionado, setSelecionado] = useState<boolean>(false);

  const handleClick = () => {
    setSelecionado(true);
    // Adiciona o produto ao carrinho
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={produto.imagem} alt={produto.nome} className="w-full h-40 object-cover" />
      <h3 className="mt-4 text-lg font-bold">{produto.nome}</h3>
      <p className="mt-2 text-gray-500">{produto.descricao}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-lg font-bold">R${produto.preco}</span>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${selecionado ? "disabled" : ""
            }`}
          onClick={handleClick}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
