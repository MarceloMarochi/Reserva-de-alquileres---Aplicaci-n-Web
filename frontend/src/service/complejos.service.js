const complejosURL = 'http://localhost:3001/app/complejos'

async function getAllComplejos() {
    try {
        const complejos = await fetch(complejosURL)
        return await complejos.json()
    } catch (error) {
        console.log('NO se pudieron traer los Complejos de la BD', error)
    }    
}

async function findOneComplejo(id) {
    try {
        const complejo = await fetch(`${complejosURL}/${id}`)
        return complejo.json()
    } catch (error) {
        console.log('NO se pudieron traer el Complejo con el id especificado', error)
    }    
}

async function crearComplejo(nuevoComplejo){
    try {
        const complejo = await fetch(`${complejosURL}`, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(nuevoComplejo)
        })
        
        const ultComplejo = await complejo.json()

        return ultComplejo
    } catch (error) {
        console.log('NO se pudo crear el complejo', error)
    }
}

async function eliminarComplejo(id){
    try {
        const complejoEliminado = await fetch(`${complejosURL}/${id}`, {method: 'DELETE'})
        return await complejoEliminado.json()
    } catch (error) {
        console.log('No es posible su eliminación', error)
    }
}

export default { getAllComplejos, findOneComplejo, crearComplejo, eliminarComplejo }