import  request  from 'supertest'
import app from '../app.js'


//Test endpoind method: GET
describe('Test para complejos -GET-', () => {
    test ('Test GET', async() => {
        const resultados = await request(app).get('/app/complejos')
        expect(resultados.status).toBe(200)
    })
})

//Test endpoint method: POST
describe('Test para complejos -POST- ', () => {
    test ('Test POST', async() => {
        const objeto =  { idComplejo : 21, nombre: 'Cerro', estadoAlquiler: 0, precioPorNoche: 15000, capacidad: 7, idTipoComplejo: 3, idUbicacion: 5}
        const resultados = await request(app).post('/app/complejos').send(objeto)
        expect(resultados.status).toBe(201)
    })
})


//Test endpoint method: Delete
describe('Test para complejos -DELETE- ', () => {
    test ('Test DELETE}', async() => {
        const complejoIdExiste = 21
        const resultados = await request(app).delete(`/app/complejos/${complejoIdExiste}`)
        expect(resultados.status).toBe(202)
    })
    test('Test DELETE -404-', async() => {
        const complejoIdNoexiste = 9999
        const resultados = await request(app).delete(`/app/complejos/${complejoIdNoexiste}`)
        expect (resultados.status).toBe(404)
    })
})
