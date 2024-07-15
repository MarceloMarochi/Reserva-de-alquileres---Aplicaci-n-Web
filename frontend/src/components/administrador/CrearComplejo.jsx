import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import complejosService from "../../service/complejos.service.js"
import tipoComplejosService from "../../service/tipoComplejos.service.js"
import ubicacionesService from "../../service/ubicaciones.service.js"
import Administrador from './Administrador.jsx'

export default function CrearComplejo() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const navigate = useNavigate()
    const [tiposComplejos, setTiposComplejos] = useState([])

    useEffect(() => {
        async function fetchTiposComplejos() {
            try {
                const tipos = await tipoComplejosService.getAllTipoComplejos()
                setTiposComplejos(tipos)
            } catch (error) {
                console.error("Error al obtener tipos de complejos:", error)
            }
        }


        fetchTiposComplejos()
    }, [])

    const onSubmit = async (complejo) => {
        const nuevaUbicacion = {
            provincia: complejo.provincia,
            ciudad: complejo.ciudad,
            barrio: complejo.barrio,
            altura: complejo.altura
        }

        const ultUbicacion = await ubicacionesService.crearUbicacion(nuevaUbicacion)
        console.log(ultUbicacion)

        const nuevoComplejo = {
            nombre: complejo.nombre,
            estadoAlquiler: false, // Lo ponemos como disponible
            precioPorNoche: parseFloat(complejo.precioPorNoche),
            capacidad: parseInt(complejo.capacidad),
            idTipoComplejo: parseInt(complejo.idTipoComplejo), // Utilizando idTipoComplejo seleccionado
            idUbicacion: ultUbicacion.idUbicacion
        }

        const ultComplejo = await complejosService.crearComplejo(nuevoComplejo)
        console.log(ultComplejo)

        volverAComplejos()
    }

    const volverAComplejos = () => {
        navigate('/administrador/complejosAdmin')
    }

    return (

        <>
            <Administrador />

            <div className="d-flex justify-content-center align-items-center vh-100" style={{marginTop:'90px'}}>
                <div className="card p-4" style={{ width: '25rem' }}>
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Registrar Nuevo Complejo</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                                    id="nombre"
                                    placeholder="Nombre de Complejo"
                                    {...register('nombre', { required: 'Campo obligatorio' })}
                                />
                                <label htmlFor="nombre">Nombre de Complejo</label>
                                {errors.nombre && <div className="invalid-feedback">{errors.nombre.message}</div>}
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    step="any"
                                    className={`form-control ${errors.precioPorNoche ? 'is-invalid' : ''}`}
                                    id="precioPorNoche"
                                    placeholder="Precio por Noche"
                                    {...register('precioPorNoche', { required: 'Campo obligatorio' })}
                                />
                                <label htmlFor="precioPorNoche">Precio por Noche</label>
                                {errors.precioPorNoche && <div className="invalid-feedback">{errors.precioPorNoche.message}</div>}
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    className={`form-control ${errors.capacidad ? 'is-invalid' : ''}`}
                                    id="capacidad"
                                    placeholder="Capacidad"
                                    {...register('capacidad', { required: 'Campo obligatorio' })}
                                />
                                <label htmlFor="capacidad">Capacidad</label>
                                {errors.capacidad && <div className="invalid-feedback">{errors.capacidad.message}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="idTipoComplejo" className="form-label">Tipo de Complejo</label>
                                <select
                                    className={`form-select ${errors.idTipoComplejo ? 'is-invalid' : ''}`}
                                    style={{height:'60px'}}
                                    id="idTipoComplejo"
                                    {...register('idTipoComplejo', { required: 'Campo obligatorio' })}
                                >
                                    <option value="" disabled>Seleccione un tipo de complejo</option>
                                    {tiposComplejos.map(tipo => (
                                        <option key={tipo.id} value={tipo.idTipoComplejo}>{tipo.nombre}</option>
                                    ))}
                                </select>
                                {errors.idTipoComplejo && <div className="invalid-feedback">{errors.idTipoComplejo.message}</div>}
                            </div>


                            <div className="form-group mb-3">
                                <label className="text-center d-block">Ubicación</label>
                                {errors.idUbicacion && <div className="invalid-feedback">{errors.idUbicacion.message}</div>}
                            </div>

                            <div className="form-group mb-3">
                                <label>Detalles de Ubicación</label>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.provincia ? 'is-invalid' : ''}`}
                                        id="provincia"
                                        placeholder="Provincia"
                                        {...register('provincia', { required: 'Campo obligatorio' })}
                                    />
                                    <label htmlFor="provincia">Provincia</label>
                                    {errors.provincia && <div className="invalid-feedback">{errors.provincia.message}</div>}
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.ciudad ? 'is-invalid' : ''}`}
                                        id="ciudad"
                                        placeholder="Ciudad"
                                        {...register('ciudad', { required: 'Campo obligatorio' })}
                                    />
                                    <label htmlFor="ciudad">Ciudad</label>
                                    {errors.ciudad && <div className="invalid-feedback">{errors.ciudad.message}</div>}
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.barrio ? 'is-invalid' : ''}`}
                                        id="barrio"
                                        placeholder="Barrio"
                                        {...register('barrio', { required: 'Campo obligatorio' })}
                                    />
                                    <label htmlFor="barrio">Barrio</label>
                                    {errors.barrio && <div className="invalid-feedback">{errors.barrio.message}</div>}
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className={`form-control ${errors.altura ? 'is-invalid' : ''}`}
                                        id="altura"
                                        placeholder="Altura"
                                        {...register('altura', { required: 'Campo obligatorio' })}
                                    />
                                    <label htmlFor="altura">Altura</label>
                                    {errors.altura && <div className="invalid-feedback">{errors.altura.message}</div>}
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <button type="submit" className="btn btn-success">Registrar</button>
                                <button type="button" className="btn btn-secondary" onClick={volverAComplejos}>Volver</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )

}
