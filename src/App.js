import './App.css';
import React, {useState} from 'react';
import Edit from './edit';
import Logado from './logado';

function App() {

  let [Status, setStatus] = useState({
    EstaDentro: false
  });

  return (
    <div className="App">
     
      {Status.EstaDentro ? 
       <div>Comece a digitar algo <Edit dica='digite seu nome'></Edit></div> : 
       <div></div>}

      <div><Logado avisarLogin={(novoValor) => setStatus({EstaDentro: novoValor})}></Logado></div> 
    </div>
  );
}

export default App;
