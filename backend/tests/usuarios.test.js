import request from "supertest"
import app from '../app.js'

//Test Usuarios GET
describe('Test para usuarios -GET-', () => {
    test ('Test GET', async() => {
        const resultados = await request(app).get('/app/usuarios')
        expect(resultados.status).toBe(200)
    })
})

describe('Test para usuarios -POST-', () => {
    test('Test POST', async()=>{
        const objeto = {idUsuario: 11, nombreUsuario: 'Richardlison123', contasenia: 'abc123', correo: 'richardlisonperez@example.com', nroTelefono: '3325676332'}
        const resultados = await request(app).post('/app/usuarios').send(objeto)
        expect(resultados.status).toBe(201)
    })
})

describe('Test para usuarios -DELETE-', () =>{
    test('Test DELETE Encuentra', async()=>{
        const idEliminar = 11
        const resultados = await request(app).delete(`/app/usuarios/${idEliminar}`)
        expect(resultados.status).toBe(202)
    })

    test('Test DELETE No encuentra', async()=>{
        const idEliminar = 99999
        const resultados = await request(app).delete(`/app/usuarios/${idEliminar}`)
        expect(resultados.status).toBe(404)
    })
})

describe('Test para usuarios -GET by id-',() =>{
    test('Test GET by Nombre', async()=>{
        const nombreBuscar = 'juanperez'
        const resultado = await request(app).get(`/app/usuarios/${nombreBuscar}`)
        expect(resultado.status).toBe(200)
    })
})