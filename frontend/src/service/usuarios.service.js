import inquilinoService from "./inquilinos.service.js"
import administradoresService from "./administradores.service.js"

const usuariosURL = 'http://localhost:3001/app/usuarios'

async function getAllUsuarios() {
    try {
        const usuarios = await fetch(usuariosURL)
        return await usuarios.json()
    } catch (error) {
        console.log('NO se pudieron traer los Usuarios de la BD', error)
    }    
}

async function findUsuarioInquilino(nombreUsuario){
    try {
        const usuarioEncontrado = await fetch(`${usuariosURL}/${nombreUsuario}`)
        const encontrado = await usuarioEncontrado.json()
        
        const datosInquilino = await inquilinoService.findInquilino(encontrado.idUsuario)
        
        if (datosInquilino) {
            return datosInquilino
        } 
    } catch (error) {
        console.log('No se pudo encontrar el Usuario', error)
    }
}

function validarContrasenia(usuarioAPI, usuarioFRONT) {
    //console.log('API PASS: ', usuarioAPI.contrasenia)
    //console.log('FRONT PASS: ', usuarioFRONT.contrasenia)
    
    if (usuarioAPI.contrasenia === usuarioFRONT.contrasenia) {
        console.log('contraseña correcta')
        return true
    } else {
        console.log('contraseña incorrecta')
        return false
    }
}

async function validarUsuario(nombreBuscar) {
    
    try {
        const usuarioEncontrado = await fetch(`${usuariosURL}/${nombreBuscar.nombreUsuario}`)
        const encontrado = await usuarioEncontrado.json()

        if(encontrado) {
            // true (existe y es válida la contraseña) / false (existe pero no es válida la contraseña)
            return validarContrasenia(encontrado, nombreBuscar)
        }
        else {
            return false
        }
    } catch (error) {
        console.log('No se pudo validar el Usuario', error)
    }  
}

async function validarRolUsuario(usuario) {
    // Usuario FRONT: usuario
    // Usuario BACK: encontrado
    
    const usuarioEncontrado = await fetch(`${usuariosURL}/${usuario.nombreUsuario}`)
    const encontrado = await usuarioEncontrado.json()

    const datosInquilino = await inquilinoService.findInquilino(encontrado.idUsuario)
    const datosAdministrador = await administradoresService.findAdministrador(encontrado.idUsuario)
    
    if (encontrado.idUsuario == datosInquilino.idUsuario) {
        // es inquilino
        return true
    } else {
        // es administrador
        return false
    }
}
/*
async function ultimoUsuario() {
    try {
        const usuarios = await getAllUsuarios()
        const ultimoRegistro = usuarios[usuarios.length - 1]
        //console.log(ultimoRegistro)

        return ultimoRegistro
    } catch (error) {
        console.log('No se pudo traer el último registro', error)
    }
}
*/
async function crearUsuario(nuevoUsuario) {
    try {
        const usuario = await fetch(`${usuariosURL}`, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(nuevoUsuario)
        })
        
        const ultUsuario = await usuario.json()
        const nuevoInquilinoData = {idUsuario: ultUsuario.idUsuario}

        await inquilinoService.crearInquilino(nuevoInquilinoData)

        return ultUsuario
    } catch (error) {
        console.log('No se pudo crear el nuevo Usuario', error)

    }
}

export default { getAllUsuarios, findUsuarioInquilino, validarUsuario, validarRolUsuario, crearUsuario }