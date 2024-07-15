import React, { useState, useEffect } from "react";
import Administrador from "./Administrador";

// Servicios
import servicioAlquileres from '../../service/alquileres.service.js'
import servicioComplejos from '../../service/complejos.service.js'
import detallesServicio from  '../../service/detallealquileres.service.js'

export default function AlquileresAdmin() {
    const [ rows, setRows ] = useState([])
    const [ detal, setDetals ] = useState([])
    const [ complejos, setComplejos ] = useState([])

    async function getAlquileres() {
        const alquileres = await servicioAlquileres.getAllAlquileres()
        setRows(alquileres)
    }

    async function getDetalles() {
        const detalles = await detallesServicio.getAllDetallesAlquileres()
        setDetals(detalles)
    }
    
    async function getComplejos() {
        const complejos = await servicioComplejos.getAllComplejos()
        setComplejos(complejos)
    }

    useEffect(() => { getAlquileres(); getComplejos(); getDetalles()}, [])
    
    const formatoFecha = (fecha) => {
        const fechaFormat = new Date(fecha)
        return fechaFormat.toLocaleDateString('es-ES',  {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    }

    const borrarAlquiler = async (id) => {
        if (window.confirm(`¿Seguro que desea eliminar el alquiler con ID N°${id} de los registros?`))
            await servicioAlquileres.deleteUnAlquiler(id)
    }

    const findMontoDetalle = (id) => {
        const detalle = detal.find(e => e.idDetalleAlquiler === id)
        return detalle ? detalle.precioTotal : "Desconocido"
    }

    const findComplejo = (id) => {
        const complejoEncontrado = complejos.find(e => e.idComplejo === id)
        return complejoEncontrado ? complejoEncontrado.nombre : "Desconocido"
    }

    return (
        <>
            <Administrador />

            <div className="card-body" style={{margin:'30px'}}>
                <h2 className="card-title text-center mb-4">Alquileres</h2>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Fecha desde</th>
                        <th scope="col">Fecha hasta</th>
                        <th scope="col">Complejo</th>
                        <th scope="col">Monto total</th>
                        <th scope="col">Borrar</th>
                    </tr>
                </thead>

                <tbody>
                    {rows && rows.map((alquiler) => {
                        return (
                            <tr key={alquiler.idAlquiler}>
                                    <td>{formatoFecha(alquiler.fechaDesde)}</td>
                                    <td>{formatoFecha(alquiler.fechaHasta)}</td>
                                    <td>{findComplejo(alquiler.idComplejo)}</td>
                                    <td>{findMontoDetalle(alquiler.idDetalleAlquiler)}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {borrarAlquiler(alquiler.idAlquiler)}}>-</button>
                                    </td>
                            </tr>
                    )})}
                </tbody>
            </table>
        </>
    )
}