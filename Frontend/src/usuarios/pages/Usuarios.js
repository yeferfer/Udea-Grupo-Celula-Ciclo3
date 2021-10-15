/* eslint-disable jsx-a11y/anchor-is-valid */
import TablaGestorUsuario from "./TablaGestorUsuario";
import { useState } from "react";
import CrearUsuario from "./CrearUsuario";

const Usuarios = () => {
  const [tab, setTab] = useState("CrearUsuario");
  function changetab(name) {
    setTab(name);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <p
                  className="nav-link active"
                  onClick={() => changetab("CrearUsuario")}
                >
                  Crear Usuarios
                </p>
              </li>

              <li className="nav-item">
                <p
                  className="nav-link"
                  onClick={() => changetab("GestorUsuario")}
                >
                  Listar{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {tab === "GestorUsuario" ? <TablaGestorUsuario /> : null}
      {tab === "CrearUsuario" ? <CrearUsuario /> : null}
    </>
  );
};
export default Usuarios;
