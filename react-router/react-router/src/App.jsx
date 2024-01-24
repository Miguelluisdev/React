import { Routes , Route , Link , NavLink } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
export default function App() {


  return (

    <>
    <nav>
      <ul>
        <li  ><Link to="/" >Inicio</Link></li>
        <li><Link to="/about" >Sobre</Link></li>
        <li> <Link to="/contact" >Contato</Link></li>
    </ul>
    </nav>


      <Routes>
        < Route  path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
        < Route  path="/Contact" element={<Contact/>}  />
      </Routes>
    
    
    </>
  )
}