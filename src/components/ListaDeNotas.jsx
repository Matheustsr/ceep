import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <section>
        <ul>
          {Array.of("Trabalho", "Estudos").map((categoria) => {
            return (
              <li>
                <div> {categoria}
                  <CardNota />
                </div>
              </li>
            );
          })}
          <CardNota />
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
