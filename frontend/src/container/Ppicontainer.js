import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Registro from "../components/Registro";
import Sesion from "../components/Sesion";
import Inicio from "../components/Inicio";

export default function Ppiconainer() {
  return (
    <BrowserRouter>
      <Route path="/Registro" exact component={Registro} />
      <Route path="/Sesion" exact component={Sesion} />
      <Route path="/" exact component={Inicio} />
    </BrowserRouter>
  );
}
