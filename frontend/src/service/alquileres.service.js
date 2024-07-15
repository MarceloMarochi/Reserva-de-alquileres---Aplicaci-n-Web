const alquileresURL = 'http://localhost:3001/app/alquileres'

async function getAllAlquileres() {
    try {
        const alquileres = await fetch(alquileresURL)
        return await alquileres.json()
    } catch (error) {
        console.log('NO se pudieron traer los Alquileres de la BD', error)
    }
}

async function crearAlquiler(nuevoAlquiler){
    try {
        const alquiler = await fetch(`${alquileresURL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoAlquiler)
        })

        const ultAlquiler = await alquiler.json()
        console.log(ultAlquiler)
        
        return ultAlquiler
    } catch (error) {
        console.error('Error al guardar el Alquiler en en la BD:', error)
    }

}

async function deleteUnAlquiler(id) {
    try {
        const alquilerBorrado = await fetch(`${alquileresURL}/${id}`, {
            method: 'DELETE'
        })
        if (alquilerBorrado) {
            console.log(`Alquiler borrado de los registros`)
        } else {
            console.log('Error al eliminar el alquiler!')
        }

        return await alquilerBorrado.json()
    } catch (error) {
        console.log('NO se pudo eliminar el Alquileres de la BD', error)
    }
}

async function modificarEstadoDisponibilidad(id) {
    try {
        const estadoModificado = await fetch(`${alquileresURL}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(estadoModificado)
        })

        if (estadoModificado) {
            const alquilerActualiz = await estadoModificado.json()
            console.log(`Alquiler con ID N°${id} actualizado`)
            return alquilerActualiz
        } else {
            console.log('Error al actualizar el alquiler')
        }
    } catch (error) {
        console.log('NO se pudo modificar el estado de Alquiler en la BD', error)
    }
}

export default { getAllAlquileres, crearAlquiler, deleteUnAlquiler, modificarEstadoDisponibilidad }