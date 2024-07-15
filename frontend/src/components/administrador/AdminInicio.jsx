import React from "react";
import { useNavigate } from "react-router-dom";

import Administrador from "./Administrador.jsx";

export default function AdminInicio() {
    let navigate = useNavigate()

    return (
        <>
            <Administrador />

            <div className="d-flex flex-column align-items-center vh-100" style={{ marginTop: '30px' }}>
                <h2 className="card-title text-center mb-4">Inicio</h2>

                <div className="col-sm-6 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Complejos</h5>
                            <p className="card-text">Consulta, registra y/o elimina un complejo.</p>
                            <button className="btn btn-primary" onClick={() => { navigate('/administrador/complejosAdmin') }}>Continuar</button>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Alquileres</h5>
                            <p className="card-text">Consulta y/o elimina los alquileres registrados.</p>
                            <button className="btn btn-primary" onClick={() => { navigate('/administrador/alquileresAdmin') }}>Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}