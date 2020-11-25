import React, {useState} from 'react';

const Edit = props => {

  let [Status, setStatus] = useState({
    nome: '',
    QtdeChar: 0
  });
  
  function trataonchange(novo) {
    setStatus({
      nome: novo,
      QtdeChar: novo.length
    });
  }

  return(
    <div className="edit">
      <input type="text" 
             title={props.dica} 
             onChange={event => trataonchange(event.target.value)}>
      </input>
      <p><label>Este texto contém {Status.QtdeChar} caracteres</label></p>
    </div>
  );
}

export default Edit;