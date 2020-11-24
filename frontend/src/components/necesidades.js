import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/necesidades.css";

const necesidades = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1 className="Titulor">Donde hacer sus necesidades</h1>
      </center>
      
      <center><div class="card3">
      <div class="card-body">
        <p class="card-text">
          E
        </p>
      </div>
      </div></center>

      <button
            type="submit"
            className="btn4 btn-primary"
            onClick={() => history.push("dormirlugar")}
          >
            SIGUIENTE
          </button>

    </div>
  );
};

export default necesidades;
