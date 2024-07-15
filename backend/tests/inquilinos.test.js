import  request  from 'supertest'
import app from '../app.js'

//Test endpoind method: GET
describe('Test para inquilinos -GET-', () => {
    test ('Test GET', async() => {
        const resultados = await request(app).get('/app/inquilinos')
        expect(resultados.status).toBe(200)
    })
})

//Test endpoint method: POST
describe('Test para inquilinos -POST- ', () => {
    test ('Test POST}', async() => {
        const objeto = {idInquilino: 9, idUsuario: 11}
        const resultados = await request(app).post('/app/inquilinos').send(objeto)
        expect(resultados.status).toBe(201)
    })
})

//Test endpoint method: Delete
describe('Test para inquilinos -DELETE- ', () => {
    test ('Test DELETE', async() => {
        const inquilinoExiste = 9
        const resultados = await request(app).delete(`/app/inquilinos/${inquilinoExiste}`)
        expect(resultados.status).toBe(202)
    })
    test('Test DELETE -404-', async() => {
        const inquilinoNoexiste = 9999
        const resultados = await request(app).delete(`/app/inquilinos/${inquilinoNoexiste}`)
        expect (resultados.status).toBe(404)
    })
})

describe('Test para inquilinos -GET by Id-', () => {
    test ('Test GET Id', async() => {
        const id = 1
        const resultados = await request(app).get(`/app/inquilinos/${id}`)
        expect (resultados.status).toBe(200)
    })
})