import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useLocation } from "react-router-dom"
import detalleAlquileresService from "../../service/detallealquileres.service.js"
import alquileresService from "../../service/alquileres.service.js"
import Inquilino from "./Inquilino"


export default function RegistrarAlquiler() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    const { nombreComplejo, tipoComplejo, idComplejo, precioPorNoche, idInquilino } = location.state || {}

    const fechaDesde = watch('fechaDesde')
    const fechaHasta = watch('fechaHasta')
    const cantidadNoches = watch('cantidadNoches')
    const precioTotal = watch('precioTotal')

    const calcularPrecioTotal = () => {
        //console.log(precioPorNoche)
        //console.log(validarCantidadNoches())
        const cantNoches = validarCantidadNoches()

        if (precioPorNoche && cantNoches) {
            const total = parseFloat(precioPorNoche * cantNoches)
            //console.log(total)
            return total
        }
        return 0
    }

    const onSubmit = async (datos) => {
        console.log("idInquilino before submitting:", idInquilino)
        const nuevoDetalleAlquiler = {
            idInquilino:  idInquilino,  
            precioTotal:  parseFloat(calcularPrecioTotal()),
            cantidadNoches: parseInt(validarCantidadNoches()),
        }
        console.log(nuevoDetalleAlquiler)
        const ultDetalleAlquiler = await detalleAlquileresService.crearDetalle(nuevoDetalleAlquiler)

        console.log('Detalle Alquiler id nro:', ultDetalleAlquiler)
        const nuevoAlquiler = {
            fechaDesde: datos.fechaDesde,
            fechaHasta: datos.fechaHasta,
            idComplejo: idComplejo,
            idDetalleAlquiler: ultDetalleAlquiler.idDetalleAlquiler,
        }
        console.log(nuevoAlquiler)
        const ultAlquiler = await alquileresService.crearAlquiler(nuevoAlquiler)

        console.log('UltAlquiler' + ultAlquiler)

        volverAInquilino()
    }

    const volverAInquilino = () => {
        navigate('/inquilino')
    }

    const validarCantidadNoches = () => {
        if (fechaDesde && fechaHasta) {
            const fechaDesdeMs = new Date(fechaDesde).getTime()
            const fechaHastaMs = new Date(fechaHasta).getTime()
    
            const diff = fechaHastaMs - fechaDesdeMs;
            const diffDays = Math.ceil(diff / (1000 * 3600 * 24)) // Convertir a días
    
            if (diffDays <= 0) {
                return 'La fecha de salida debe ser posterior a la fecha de ingreso.'
            }
    
            return diffDays
        }
        return 0
    }

    return (
        <>
            <Inquilino />
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4" style={{ width: '35rem' }}>
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Registrar nuevo alquiler</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input className="form-control mb-3 text-center" type="text" value={nombreComplejo + ' (' + tipoComplejo + ')'} disabled readOnly style={{height:'60px'}}/>
                                </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="date"
                                    className={`form-control ${errors.fechaDesde ? 'is-invalid' : ''}`}
                                    id="fechaDesde"
                                    placeholder="Fecha de ingreso"
                                    {...register('fechaDesde', { required: 'Campo obligatorio' })}
                                />
                                <label htmlFor="fechaIngreso">Fecha de ingreso</label>
                                {errors.fechaDesde && (<div className="invalid-feedback">{errors.fechaDesde.message}</div>)}
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="date"
                                    className={`form-control ${errors.fechaHasta ? 'is-invalid' : ''}`}
                                    id="fechaHasta"
                                    placeholder="Fecha de salida"
                                    {...register('fechaHasta', { required: 'Campo obligatorio' })}
                                />
                                <label htmlFor="fechaSalida">Fecha de salida</label>
                                {errors.fechaHasta && (<div className="invalid-feedback">{errors.fechaHasta.message}</div>)}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="cantidadNoches" className="form-label">Cantidad de noches</label>
                                <input
                                    type="text"
                                    className={`form-control ${validarCantidadNoches() === false ? 'is-invalid' : ''}`}
                                    id="cantidadNoches"
                                    value={validarCantidadNoches()}
                                    readOnly
                                />
                                {validarCantidadNoches() === false && (<div className="invalid-feedback">La salida debe ser posterior al ingreso.</div>)}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="precioTotal" className="form-label">Precio total</label>
                                <input
                                    type="text"
                                    className={`form-control ${calcularPrecioTotal() === false ? 'is-invalid' : ''}`}
                                    id="precioTotal"
                                    value={calcularPrecioTotal()}
                                    readOnly
                                />
                                {calcularPrecioTotal() === false && (<div className="invalid-feedback">Precio Total.</div>)}
                            </div>

                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-success">Confirmar Alquiler</button>
                                <button className="btn btn-secondary" onClick={() => {navigate('/inquilino')}}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

