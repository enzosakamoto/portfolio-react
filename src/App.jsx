import './App.css'
import NavbarComponent from './components/navbar/NavbarComponent';
import SobreComponent from './pages/sobre/SobreComponent';
import HomeComponent from './pages/home/HomeComponent';
import ExpComponent from './pages/experiencias/ExpComponent';
import ProjetosComponent from './pages/projetos/Projetos';
import ContatoComponent from './pages/contato/Contato';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
      <SobreComponent />
      <ExpComponent />
      <ProjetosComponent />
      <ContatoComponent />
      <Footer />
    </div>
  );
}

export default App
