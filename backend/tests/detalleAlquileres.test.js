import  request  from 'supertest'
import app from '../app.js'


//Test endpoind method: GET
describe('Test para detalle alquileres -GET-', () => {
    test ('Test GET', async() => {
        const resultados = await request(app).get('/app/detalles')
        expect(resultados.status).toBe(200)
    })
})

//Test endpoint method: POST
describe('Test para detalle alquileres -POST- ', () => {
    test ('Test POST', async() => {
        const objeto =  { idDetalleAlquiler : 9, idInquilino: 9 , precioTotal: 300020, cantidadNoches: 10}
        const resultados = await request(app).post('/app/detalles').send(objeto)
        expect(resultados.status).toBe(201)
    })
})


//Test endpoint method: Delete
describe('Test para  detalle alquileres -DELETE- ', () => {
    test ('Test DELETE}', async() => {
        const DetalleAlquilerIdExiste = 9
        const resultados = await request(app).delete(`/app/detalles/${DetalleAlquilerIdExiste}`)
        expect(resultados.status).toBe(202)
    })
    test('Test DELETE -404-', async() => {
        const DetalleAlquilerIdNoExiste = 9999
        const resultados = await request(app).delete(`/app/detalles/${DetalleAlquilerIdNoExiste}`)
        expect (resultados.status).toBe(404)
    })
})

