import  request  from 'supertest'
import app from '../app.js'

//Test endpoind method: GET
describe('Test para administradores -GET-', () => {
    test ('Test GET', async() => {
        const resultados = await request(app).get('/app/administradores')
        expect(resultados.status).toBe(200)
    })
})

//Test endpoint method: POST
describe('Test para administradores -POST- ', () => {
    test ('Test POST}', async() => {
        const objeto = {idAdmin: 3, idUsuario: 9}
        const resultados = await request(app).post('/app/administradores').send(objeto)
        expect(resultados.status).toBe(201)
    })
})

//Test endpoint method: Delete
describe('Test para administradores -DELETE- ', () => {
    test ('Test DELETE}', async() => {
        const administradorExiste = 3
        const resultados = await request(app).delete(`/app/administradores/${administradorExiste}`)
        expect(resultados.status).toBe(202)
    })
    test('Test DELETE -404-', async() => {
        const administradorNoexiste = 9999
        const resultados = await request(app).delete(`/app/administradores/${administradorNoexiste}`)
        expect (resultados.status).toBe(404)
    })
})




