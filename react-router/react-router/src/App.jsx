import { Routes , Route , Link , NavLink } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
export default function App() {


  return (

    <>
    <nav>
      <ul>
        <li  ><Link to="/" >Inicio</Link></li>
        <li><Link to="/about" >Sobre</Link></li>
        <li> <Link to="/contact" >Contato</Link></li>
        <li><NavLink  className={({isActive}) => (isActive ? "active-link" : "")} to="/contact" ></NavLink></li>
        <li><Link to="/login" >Login</Link></li>
        <li><Link to="/dashboard" >dashboard</Link></li>
    </ul>
    </nav>


      <Routes>
        < Route  path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
        < Route  path="/Contact" element={<Contact/>}  />
        < Route path="/login" element={<Login/>} />
        < Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    
    
    </>
  )
}