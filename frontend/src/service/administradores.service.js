const administradoresURL = 'http://localhost:3001/app/administradores'

async function getAllAdministradores() {
    try {
        const administradores = await fetch(administradoresURL)
        return await administradores.json()
    } catch (error) {
        console.log('NO se pudieron traer los Administradores de la BD', error)
    }    
}

async function findAdministrador(id) {
    try {
        const administradorEncontrado = await fetch(`${administradoresURL}/${id}`)
        return administradorEncontrado.json()
        
    } catch (error) {
        console.log('NO se pudieron buscar los Administradores en la BD', error)
    }
}

async function crearAdministrador(nuevo) {
    try {
        const nuevoAdmin = await fetch(`${administradoresURL}/${nuevo}`, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(nuevo)
        })
    } catch (error) {
        console.log('NO se pudo cargar el Administrador', error)
    }
}

export default { getAllAdministradores, findAdministrador, crearAdministrador }