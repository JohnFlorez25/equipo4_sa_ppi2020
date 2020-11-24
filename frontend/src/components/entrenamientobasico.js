import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/entrenamientobasico.css";

const entrenamientobasico = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1 className="Tituloe">Entrenamiento básico</h1>
      </center>

      <div class="buttons">
        <li>
          <ul>
            <button className="botones" onclick="">
              Reconocer nombre
            </button>
          </ul>
          <ul>
            <button className="botones1" onclick="">
              Echarse
            </button>
          </ul>
          <ul>
            <button className="botones" onclick="">
              Donde hacer sus necesidades
            </button>
          </ul>
          <ul>
            <button className="botones1" onclick="">
              Dormir en su lugar
            </button>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default withRouter(entrenamientobasico);
