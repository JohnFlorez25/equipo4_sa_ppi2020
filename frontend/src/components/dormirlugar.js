import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/dormirlugar.css";

const dormirlugar = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1 className="Titulor">Dormir en su lugar</h1>
      </center>
      
      <center><div class="card4">
      <div class="card-body">
        <p class="card-text">
          E
        </p>
      </div>
      </div></center>

      <button
            type="submit"
            className="btn5 btn-primary"
            onClick={() => history.push("Perfiles")}
          >
            SIGUIENTE
          </button>

    </div>
  );
};

export default dormirlugar;