import React from "react";
import { Link, withRouter } from "react-router-dom";

const Inicio = () => {
  return (
    <div>
      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <img className="Logo" src="img/logo_actual.jpeg.jpg" alt="Logo" />
            <p>
              En este video vamos aprender más de nuestra aplicación y de su
              uso.
            </p>
            <p>
              <Link
                className="btn btn-primary btn-lg"
                to="/Sesion"
                role="button"
              >
                Iniciar sesión.
              </Link>
            </p>
            <p>
              <Link
                className="btn btn-primary btn-lg"
                to="/Registro"
                role="button"
              >
                Registrarte.
              </Link>
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
            </div>
          </div>
          <hr />
        </div>
      </main>
    </div>
  );
};

export default withRouter(Inicio);
