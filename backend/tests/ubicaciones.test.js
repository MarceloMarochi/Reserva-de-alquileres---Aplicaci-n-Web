import  request  from 'supertest'
import app from '../app.js'


//Test endpoind method: GET
describe('Test para ubicaciones -GET-', () => {
    test ('Test GET', async() => {
        const resultados = await request(app).get('/app/ubicaciones')
        expect(resultados.status).toBe(200)
    })
})

//Test endpoint method: POST
describe('Test para ubicaciones -POST- ', () => {
    test ('Test POST', async() => {
        const objeto =  { idUbicacion : 9, provincia: 'Chaco' , ciudad: 'Las Piedritas', barrio: 'Piedritas', altura: '60'}
        const resultados = await request(app).post('/app/ubicaciones').send(objeto)
        expect(resultados.status).toBe(201)
    })
})

describe('Test para ubicaciones -DELETE-', () => {
    test ('Test DELETE', async() => {
        const id = 9
        const resultados = await request(app).delete(`/app/ubicaciones/${id}`)
        expect(resultados.status).toBe(202)
    })
})