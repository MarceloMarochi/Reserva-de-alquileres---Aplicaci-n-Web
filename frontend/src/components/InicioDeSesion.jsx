import React from "react"
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import usuariosService from "../service/usuarios.service"

// Services
import servicio from '../service/usuarios.service'

export default function InicioDeSesion() {
    let navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()

    
    const onSubmit = async (user) => {
        const usuarioLogin = { nombreUsuario: user.nombreUsuario, contrasenia: user.contrasenia }
        const existeUsuario = await servicio.validarUsuario(usuarioLogin)
        
        if (existeUsuario) {
            const tipoUsuario = await servicio.validarRolUsuario(usuarioLogin)
            if (tipoUsuario) {
                const datosInquilino = await usuariosService.findUsuarioInquilino(usuarioLogin.nombreUsuario)
                navigate('/inquilino',{ state:{idInquilino: datosInquilino.idInquilino}})
                console.log(datosInquilino.idInquilino)
            } else {
                navigate('/administrador')
            } 
        } else {
            alert('¡Usuario o Contraseña incorrecta!')
            navigate('/')
        }
    }

    const registrarCuenta = () => {
        navigate('/crearCuenta')
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Inicio de Sesión</h2>

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

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success">Confirmar</button>
                            <button className="btn btn-secondary" onClick={registrarCuenta}>Crear Cuenta</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}