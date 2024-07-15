const ubicacionesURL = 'http://localhost:3001/app/ubicaciones'


async function getAllTipoUbicaciones() {
    try {
        const ubicaciones = await fetch(ubicacionesURL)
        return await ubicaciones.json()
    } catch (error) {
        console.log('NO se pudieron traer las Ubicaciones de la BD', error)
    }    
}


async function crearUbicacion(nuevaUbicacion) {
    try {
        const ubicacion = await fetch(`${ubicacionesURL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevaUbicacion)
        })

        const ultUbicacion = await ubicacion.json()
        //console.log(ultUbicacion)
        
        return ultUbicacion
    } catch (error) {
        console.error('Error al guardar la Ubicación en la BD:', error)
    }
}
    

async function eliminarUbicacion(id){
    try {
        const ubicacionEliminada = await fetch(`${ubicacionesURL}/${id}`, {method: 'DELETE'})
        return await ubicacionEliminada.json()
    } catch (error) {
        console.log('No es posible su eliminación', error)
    }
}

export default { getAllTipoUbicaciones, crearUbicacion, eliminarUbicacion}