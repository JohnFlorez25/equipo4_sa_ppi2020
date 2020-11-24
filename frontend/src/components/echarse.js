import React from "react";
import { link, withRouter } from "react-router-dom";
import "../css/echarse.css";

const echarse = (props) => {
  const { history } = props;
  return (
    <div>
      <center>
        <h1 className="Titulor">Echarse</h1>
      </center>
      
      <center><div class="card2">
      <div class="card-body">
        <p class="card-text">
          E
        </p>
      </div>
      </div></center>

      <button
            type="submit"
            className="btn3 btn-primary"
            onClick={() => history.push("necesidades")}
          >
            SIGUIENTE
          </button>

    </div>
  );
};

export default echarse;
