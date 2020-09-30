import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Registro from "../components/Registro";
import Sesion from "../components/Sesion";
import Inicio from "../components/Inicio";
import Perros from "../components/Perros";
import Perfiles from "../components/Perfiles";

export default function Ppiconainer() {
  return (
    <BrowserRouter>
      <Route path="/Registro" exact component={Registro} />
      <Route path="/Sesion" exact component={Sesion} />
      <Route path="/Inicio" exact component={Inicio} />
      <Route path="/Perros" exact component={Perros} />
      <Route path="/Perfiles" exact component={Perfiles} />
    </BrowserRouter>
  );
}
