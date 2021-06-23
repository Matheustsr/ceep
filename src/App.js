import React, { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListadeNotas from './components/ListaDeNotas';

class App extends Component{
  render(){
    return(
      <div>
        <FormularioCadastro/>
        <ListadeNotas/>
      </div>
    )
  }
}
export default App;
