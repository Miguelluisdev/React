import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/pages/Home";
// import Company from "./components/pages/Company";
// import Contact from "./components/pages/Contact";
// import NewProject from "./components/pages/NewProject";
// import Container from "./components/layout/Container";
import './App.css'
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Company from "./components/company/Company";
import NewPoject from "./components/NewProject/NewProject";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer"
import Project from "./components/Projects/Project"

function App() {
  return  (
    <Router>
     <NavBar/>
      <Container customClass="min-height" > 
        <Routes>
          < Route path="/" element={<Home/>} ></Route>
          < Route path="/projects" element={<Project/>} ></Route>
          < Route path="/contact" element={<Contact/>} ></Route>
          < Route path="/company" element={<Company/>} ></Route>
          < Route path="newproject" element={<NewPoject/>} ></Route>
        </Routes>
       </Container> 

      <Footer/>
    </Router>
  )
}

export default App
