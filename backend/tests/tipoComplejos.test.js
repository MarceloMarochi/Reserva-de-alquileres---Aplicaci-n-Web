import  request  from 'supertest'
import app from '../app.js'

//Test endpoind method: GET
describe('Test para Tipo de Complejos -GET-', () => {
    test ('Test GET', async() => {
        const resultados = await request(app).get('/app/tipoComplejos')
        expect(resultados.status).toBe(200)
    })
})

//Test endpoint method: POST
describe('Test para Tipo de Complejos -POST- ', () => {
    test ('Test POST}', async() => {
        const objeto = {idTipoComplejo: 8, nombre: 'Quincho'}
        const resultados = await request(app).post('/app/tipoComplejos').send(objeto)
        expect(resultados.status).toBe(201)
    })
})

//Test endpoint method: Delete
describe('Test para Tipo de Complejos -DELETE- ', () => {
    test ('Test DELETE}', async() => {
        const tipoComplejoExiste = 8
        const resultados = await request(app).delete(`/app/tipoComplejos/${tipoComplejoExiste}`)
        expect(resultados.status).toBe(202)
    })
    test('Test DELETE -404-', async() => {
        const tipoComplejosNoexiste = 9999
        const resultados = await request(app).delete(`/app/tipoComplejos/${tipoComplejosNoexiste}`)
        expect (resultados.status).toBe(404)
    })
})
