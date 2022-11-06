import './App.css'
import NavbarComponent from './components/navbar/NavbarComponent';
import SobreComponent from './pages/sobre/SobreComponent';
import HomeComponent from './pages/home/HomeComponent';
import ExpComponent from './pages/experiencias/ExpComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
      <SobreComponent />
      <ExpComponent />
    </div>
  );
}

export default App
