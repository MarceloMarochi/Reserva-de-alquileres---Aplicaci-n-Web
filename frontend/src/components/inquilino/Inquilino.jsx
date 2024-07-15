import React from "react"
import { Link } from "react-router-dom"

// navbar de inquilinos
export default function Inquilino() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Portal de Inquilino
                    </a>

                    <div className="navbar-nav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                            <Link className="nav-link" to="/" style={{ textDecoration: "none" }}>
                                Cerrar Sesión
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}