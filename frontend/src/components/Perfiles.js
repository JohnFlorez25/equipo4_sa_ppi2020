import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../css/Perfiles.css";

const Perfiles = () => {

  return(
    <div> 

        <h1>Mis mascotas:</h1>
        <div className="Continer">
            <div className="info-hobby1">
                <Link title="index" to="/"><img src="img/perro1.jpg" alt="index"/></Link>
                <h2>Toby</h2>
            </div>
            <div className="info-hobby2">
                <a title="index" href="index.html"><img src="img/perro2.png" alt="index"/></a>
                <h2>Luna</h2>
            </div>
            <div className="info-hobby3">
                <a title="index" href="index.html"><img src="img/perro3.jpg" alt="index"/></a>
                <h2>Apolo</h2>
            </div>
            <div className="info-hobby4">
                <a title="index" href="index.html"><img src="img/perro4.jpg" alt="index"/></a>
                <h2>Pachanga</h2>
            </div>
            <p>
              <Link
                className="btn btn-primary btn-lg"
                to="/Sesion"
                role="button"
              >
                Cerrar sesión.
              </Link>
            </p>
            <div className="info-hobby5">

            <button className="info-hobby5">+</button>
            
            </div>


    </div>
    </div>
  );
  };

  export default Perfiles;
