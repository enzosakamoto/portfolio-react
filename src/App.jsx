import './App.css'
import NavbarComponent from './components/navbar/NavbarComponent';
import SobreComponent from './pages/sobre/SobreComponent';
import HomeComponent from './pages/home/HomeComponent';
import ExpComponent from './pages/experiencias/ExpComponent';
import ProjetosComponent from './pages/projetos/Projetos';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
      <SobreComponent />
      <ExpComponent />
      <ProjetosComponent />
    </div>
  );
}

export default App
