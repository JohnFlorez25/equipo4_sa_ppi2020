import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/comenzar.css";

const Comenzar = (props) => {
  const { history } = props;
  return (
    <div class="container">
      <div class="title">
        <h1>¿Comenzamos?</h1>
      </div>
      <div class="buttons">
        <button class="btn">Entrenamiento basico</button>
        <button class="btn">Entrenamiento avanzado</button>
      </div>
    </div>
  );
};

export default withRouter(Comenzar);
