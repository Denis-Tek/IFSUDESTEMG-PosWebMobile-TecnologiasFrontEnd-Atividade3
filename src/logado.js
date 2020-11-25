import React, {useState} from 'react';

const Logado = props => {

  const images = ["https://image.freepik.com/fotos-gratis/mulher-negra-de-negocios-convidando-alguem-para-vir_1187-6478.jpg", 
                  "JaPodeSair.png"];
  const info   = ["camarada fora", "camarada dentro"];
  const botao  = ["Vamos entrar ?", "Quero sair"];

  let [Status, setStatus] = useState({
    logado: false
  });
  
  function trataonclick(novoValor) {
    setStatus({
      logado: novoValor
    });
    props.avisarLogin(novoValor);
  }

  return(
    <div className="identificaLogado">
      <img className="imagem" 
           src={images[Status.logado ? 1 : 0]} 
           alt={info[Status.logado ? 1 : 0]}>
      </img>
      <p>
        <button onClick={() => trataonclick(!Status.logado)}>
          {botao[Status.logado ? 1 : 0]}
        </button>
      </p>
    </div>
  );
}

export default Logado;