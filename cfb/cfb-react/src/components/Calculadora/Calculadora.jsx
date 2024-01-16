//  feito em apenas uma pagina, apenas pratica de exercicio 


import { useState } from "react";

export default function App(){
   const [valorTela,setValorTela] = useState("");
   const [resultado , setResultado] = useState(0);
   const [acumulador, setAcumulador] = useState(0);
   const [operado, setOperado] = useState(false);

//  componentes
  const Tela = (valor,res) => {
    return (
      <div  style={cssTela} >
          <span style={cssTelaOper} >{valor}</span>
          <span style={cssTelaRes} >{res}</span>
      </div>
    )
  }

  const Btn=(label,onClick)=> {

    return(
      <button style={cssBTn} onClick={onClick}>{label}</button>
    )

  }
  // funções
    const addDigitoTela = (d) => {
      if ((d== '+' || d== '-' || d== '*' || d=='/' &&operado)){
        setOperado(false)
        setValorTela(resultado + d)
        return
      }

      if(operado){
        setValorTela(d)
        setOperado(false)
        return
      }
      const valorDigitadoNaTela= valorTela+d
      setValorTela(valorDigitadoNaTela)
    }
    const limparMemoria = () =>{
      setOperado(false)
      setValorTela('')
      setResultado(0)
      setAcumulador(0)
      return
    }

    const Operacao = (oper) => {
      if (oper === 'bs') {
        let vTela = valorTela;
        vTela = vTela.substring(0, vTela.length - 1);
        setValorTela(vTela);
        setOperado(false);
        return;
      }
    
      try {
        const expression = new Function('return ' + valorTela);
        const r = expression();
        setAcumulador(r);
        setResultado(r);
        setOperado(true);
      } catch (error) {
        setResultado('Error');
      }
    };
    


  //  styles
  const cssContainer = {
    display:'flex',
    justifyContent:'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    border: '1px solid #000'
  }

  const cssBotoes = {
    flexDirection:'row',
    flexWrap: 'wrap'
  }

  const cssTela ={
    display: 'flex',
    paddingLeft: 20,
    paddingRight:20,
    justifyContent:'center',
    alignItems: 'flex-start',
    backgroundColor:'#444',
    flexDirection:'column',
    window:260
  }

  const cssTelaOper ={
    fontSize:25,
    color: '#fff',
    height:20
  }
  const cssTelaRes ={
    fontSize:50,
    color: '#fff',
  }

const cssBTn = {
  fontSize:30,
  height:75,
  padding:20,
  backgroundColor:'#000',
  color:'#fff',
  textAlign:'center',
  outline:'none'
}

  return (
    <>
      <section style={cssContainer} >
        <h3>Calculadora</h3>
        {
          Tela(valorTela,resultado)
        }
       <div style={cssBotoes}>
        {Btn("AC", limparMemoria)}
        {Btn('(', () => addDigitoTela('('))}
        {Btn(')', () => addDigitoTela(')'))}
        {Btn('7', () => addDigitoTela('7'))}
        {Btn('8', () => addDigitoTela('8'))}
        {Btn('9', () => addDigitoTela('9'))}
        {Btn('/', () => addDigitoTela('/'))}
        {Btn('4', () => addDigitoTela('4'))}
        {Btn('5', () => addDigitoTela('5'))}
        {Btn('6', () => addDigitoTela('6'))}
        {Btn('*', () => addDigitoTela('*'))}
        {Btn('1', () => addDigitoTela('1'))}
        {Btn('2', () => addDigitoTela('2'))}
        {Btn('3', () => addDigitoTela('3'))}
        {Btn('-', () => addDigitoTela('-'))}
        {Btn('0', () => addDigitoTela('0'))}
        {Btn('.', () => addDigitoTela('.'))}
        {Btn('=', () => Operacao('='))}
        {Btn('+', () => addDigitoTela('+'))}
        {Btn('BS', () => Operacao('bs'))} {/* Backspace */}
      </div>
      </section>
    
    </>
  );

}