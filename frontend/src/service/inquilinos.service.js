const inquilinosURL = 'http://localhost:3001/app/inquilinos'

async function getAllInquilinos() {
    try {
        const inquilinos = await fetch(inquilinosURL)
        return await inquilinos.json()
    } catch (error) {
        console.log('NO se pudieron traer los Inquilinos de la BD', error)
    }    
}

async function findInquilino(id) {
    try {
        const inquilinoEncontrado = await fetch(`${inquilinosURL}/${id}`)
        return inquilinoEncontrado.json()
        
    } catch (error) {
        console.log('NO se pudieron buscar los Inquilinos en la BD', error)
    }
}

async function crearInquilino(nuevo) {
    try {
        const nuevoInquilino = await fetch(`${inquilinosURL}`, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(nuevo)
        })

        return nuevoInquilino.json()
    } catch (error) {
        console.log('NO se pudo cargar el Inquilino', error)
    }
}

export default { getAllInquilinos, findInquilino, crearInquilino }