import React from "react"
import { Link } from "react-router-dom"

// Navbar para el portal de administradores
export default function Administrador() {
  return (
 
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Portal de Administrador
        </a>
        <div className="navbar-nav">
          <ul className="navbar-nav me-auto">
            
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/administrador"
                style={{ textDecoration: "none" }}
              >
                Inicio
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/administrador/complejosAdmin"}
                style={{ textDecoration: "none" }}
              >
                Complejos
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/administrador/alquileresAdmin"
                style={{ textDecoration: "none" }}
              >
                Alquileres
              </Link>
            </li>

          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{ textDecoration: "none" }}
              >
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
