const tipoComplejoURL = 'http://localhost:3001/app/tipoComplejos'

async function getAllTipoComplejos() {
    try {
        const tipos = await fetch(tipoComplejoURL)
        return await tipos.json()
    } catch (error) {
        console.log('NO se pudieron traer los Tipos de Complejos de la BD', error)
    }    
}

export default { getAllTipoComplejos }
