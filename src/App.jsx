import logo from './logo.svg';
import styles from './App.module.css';
import Cover from './components/cover/mark';

import prologo from './components/chapters//list/cap0.json';
import Capitulo from './components/chapters/Capitulo';

function App() {
  return (
    <div className="App">
      <Cover />
      <Capitulo 
        title={prologo.title}
        data={prologo.date}
        text={prologo.text}
      />
    </div>
  );
}

export default App;
