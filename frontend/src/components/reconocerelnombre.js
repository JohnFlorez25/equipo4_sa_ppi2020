import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/reconocerelnombre.css";

const reconocerelnombre = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1 className="Titulor">Reconocer el nombre</h1>
      </center>
      
      <center><div class="card1">
      <div class="card-body">
        <p class="card-text">
          E
        </p>
      </div>
      </div></center>

      <button
            type="submit"
            className="btn2 btn-primary"
            onClick={() => history.push("echarse")}
          >
            SIGUIENTE
          </button>

    </div>
  );
};

export default reconocerelnombre;
