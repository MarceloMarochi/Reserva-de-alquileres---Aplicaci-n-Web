import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import cuentaService from '../service/usuarios.service.js'
import usuariosService from "../service/usuarios.service.js"

export default function CrearCuenta() {
    const { register, handleSubmit, formState: { errors }, reset} = useForm()
    let navigate = useNavigate()
    const [ rows, setRows ] = useState([])

    const onSubmit = async (datos) => {
        const nuevaCuenta = {
            nombreUsuario: datos.nombreUsuario,
            contrasenia: datos.contrasenia,
            correo: datos.correo,
            nroTelefono: datos.nroTelefono,
        }
        await usuariosService.crearUsuario(nuevaCuenta)
        
        const confirmacionInicioSesion = window.confirm('Usuario creado exitosamente! ¿Desea iniciar sesión ahora?');
        
        if (confirmacionInicioSesion) {
            reset()
            navigate('/')
        } else {
            reset()
        }

        const usuariosActualizados = await usuariosService.getAllUsuarios()
        setRows(usuariosActualizados)
    }

    const volverALogin = () => {
        navigate('/')
    } 

    return (

        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Registrar nuevo usuario</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${errors.nombreUsuario ? `is-invalid` : ''}`}
                                id="nombreUsuario"
                                placeholder="Nombre de usuario"
                                {...register('nombreUsuario', { required: 'Campo obligatorio' })}
                            />
                            <label htmlFor="nombreUsuario">Nombre de usuario</label>
                            {errors.nombreUsuario && (<div className="invalid-feedback">{errors.nombreUsuario.message}</div>)}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                className={`form-control ${errors.contrasenia ? `is-invalid` : ''}`}
                                id="contrasenia"
                                placeholder="Contraseña"
                                {...register('contrasenia', { required: 'Campo obligatorio' })}
                            />
                            <label htmlFor="contrasenia">Contraseña</label>
                            {errors.contrasenia && (<div className="invalid-feedback">{errors.contrasenia.message}</div>)}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className={`form-control ${errors.correo ? `is-invalid` : ''}`}
                                id="correo"
                                placeholder="correo"
                                {...register('correo', { required: 'Campo obligatorio' })}
                            />
                            <label htmlFor="correo">Correo</label>
                            {errors.correo && (<div className="invalid-feedback">{errors.correo.message}</div>)}
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="number"
                                className={`form-control ${errors.nroTelefono ? `is-invalid` : ''}`}
                                id="nroTelefono"
                                placeholder="Número de Telefono"
                                {...register('nroTelefono', { required: 'Campo obligatorio' })}
                            />
                            <label htmlFor="nombreUsuario">Número de telefono</label>
                            {errors.nroTelefono && (<div className="invalid-feedback">{errors.nroTelefono.message}</div>)}
                        </div>

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success">Registrar</button>
                            <button className="btn btn-secondary" onClick={volverALogin}>Volver</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}