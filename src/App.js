import './App.css';
import Formulario from './components/formulario/formulario';
import Header from './components/header/header';
import MiOrg from './components/miOrg';

function App() {
  return (
    <div className="App">
      <Header/>
      <Formulario/>
      <MiOrg/>
    </div>
  );
}

export default App;
