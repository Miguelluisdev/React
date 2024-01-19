import ComponenteFilho from "./components/ComponenteFilho";
import Timer from "./components/Timer";
import { Contexts } from "./contexts/Contexts";

export default function App(){
 return (
  <div className="app">
      < Timer/>

      < Contexts.Provider>
      <ComponenteFilho/>
      </Contexts.Provider>
  </div>
 ) 
}