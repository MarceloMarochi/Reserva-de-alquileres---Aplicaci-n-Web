import  request  from 'supertest'
import app from '../app.js'


//Test endpoind method: GET
describe('Test para alquileres -GET-', () => {
    test ('Test GET', async() => {
        const resultados = await request(app).get('/app/alquileres')
        expect(resultados.status).toBe(200)
    })
})

//Test endpoint method: POST
describe('Test para alquileres -POST- ', () => {
    test ('Test POST', async() => {
        const objeto =  { idAlquiler : 9, fechaDesde: '2024-11-01 00:00:00.000 +00:00' , fechaHasta: '2024-11-11 00:00:00.000 +00:00', idComplejo: 15, idDetalleAlquiler: 6}
        const resultados = await request(app).post('/app/alquileres').send(objeto)
        expect(resultados.status).toBe(201)
    })
})


//Test endpoint method: Delete
describe('Test para administradores -DELETE- ', () => {
    test ('Test DELETE}', async() => {
        const alquilerIdExiste = 9
        const resultados = await request(app).delete(`/app/alquileres/${alquilerIdExiste}`)
        expect(resultados.status).toBe(202)
    })
    test('Test DELETE -404-', async() => {
        const alquilerIdNoexiste = 9999
        const resultados = await request(app).delete(`/app/alquileres/${alquilerIdNoexiste}`)
        expect (resultados.status).toBe(404)
    })
})
