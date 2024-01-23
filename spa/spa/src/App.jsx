import Banner from "./components/Banner/Banner";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './App.css';
function App() {
	return (
<>
	<Header/>
	< Banner  image="home"/>
	<Container>
	<h1>Hello World!</h1>
	<p>Olá Mundo! Estou aprendendo React JS!</p>
	</Container>
	<Footer />
</>
	);
}

export default App;
