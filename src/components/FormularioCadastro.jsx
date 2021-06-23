import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Titulo" />
          <textarea placeholder="Escreva sua nota"></textarea>
          <button>Criar nota</button>
        </form>
      </div>
    );
  }
}

export default FormularioCadastro;
