const detAlquileresURL = 'http://localhost:3001/app/detalles'

async function getAllDetallesAlquileres() {
    try {
        const detAlquileres = await fetch(detAlquileresURL)
        return await detAlquileres.json()
    } catch (error) {
        console.log('NO se pudieron traer los Detalles Alquileres de la BD', error)
    }    
}

async function findDetalle(id) {
    try {
        const detalleEncontrado = await fetch(`${detAlquileresURL}/${id}`)
        return detalleEncontrado.json()
        
    } catch (error) {
        console.log('NO se pudieron buscar los Detalles de Alquiler en la BD', error)
    }
}

async function crearDetalle(nuevoDetalle) {
    try {
        const detalle = await fetch(`${detAlquileresURL}`, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(nuevoDetalle)
        })
        const ultDetalle = await detalle.json()
        return ultDetalle
        
    } catch (error) {
        console.error('Error al guardar el Detalle en la BD:', error)
    }
}

export default { getAllDetallesAlquileres, findDetalle ,crearDetalle }
