// API
import express from "express"
import cors from "cors"

// Manejo de la base de datos
import bodyParser from "body-parser"
import sequelize from "./data/db.js"

// Rutas
import complejosRoutes from "./routes/complejos.routes.js"
import tipoComplejosRoutes from "./routes/tipoComplejos.routes.js"
import ubicacionesRoutes from "./routes/ubicaciones.routes.js"
import usuariosRoutes from "./routes/usuarios.routes.js"
import inquilinosRoutes from "./routes/inquilinos.routes.js"
import administradoresRoutes from "./routes/administradores.routes.js"
import detallesAlquileresRoutes from "./routes/detallesAlquileres.routes.js"
import alquileresRoutes from "./routes/alquileres.routes.js"

// Inserción a la base de datos
import { insertarTipoComplejos } from "./data/db-init.js/tipoComplejos.init.js"
import { insertarUbicaciones } from "./data/db-init.js/ubicaciones.init.js"
import { insertarComplejos } from "./data/db-init.js/complejos.init.js"
import { insertarUsuarios } from "./data/db-init.js/usuarios.init.js"
import { insertarInquilinos } from "./data/db-init.js/inquilinos.init.js"
import { insertarAdministradores } from "./data/db-init.js/administradores.init.js"
import { insertarDetallesAlquileres } from "./data/db-init.js/detallesAlquileres.init.js"
import { insertarAlquileres } from "./data/db-init.js/alquileres.init.js"

// Datos Harcodeados
import { tipoComplejosJSON } from "./data/db-init.js/instancias.js"
import { ubicacionesJSON } from "./data/db-init.js/instancias.js"
import { complejosJSON } from "./data/db-init.js/instancias.js"
import { usuariosJSON } from "./data/db-init.js/instancias.js"
import { inquilinosJSON } from "./data/db-init.js/instancias.js"
import { administradoresJSON } from "./data/db-init.js/instancias.js"
import { detallesAlquileresJSON } from "./data/db-init.js/instancias.js"
import { alquileresJSON } from "./data/db-init.js/instancias.js"

const app = express()
const puerto = 3001

app.use(cors())
app.use(bodyParser.json())

app.use('/app', complejosRoutes)
app.use('/app', tipoComplejosRoutes)
app.use('/app', ubicacionesRoutes)
app.use('/app', usuariosRoutes)
app.use('/app', inquilinosRoutes)
app.use('/app', administradoresRoutes)
app.use('/app', detallesAlquileresRoutes)
app.use('/app', alquileresRoutes)

app.get('/', async(req, res) => {
    res.json({ message: 'Página principal de la API!' })
})

sequelize
  .sync()
  .then(() => {
    console.log("Conexión con la base de datos establecida exitosamente.")
    app.listen(puerto, () => {
      console.log(`Servidor escuchando en el puerto ${puerto}`)
    })
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err)
  })

async function iniciarBase() {
  try {
    await insertarTipoComplejos(tipoComplejosJSON)
    await insertarUbicaciones(ubicacionesJSON)
    await insertarComplejos(complejosJSON)
    await insertarUsuarios(usuariosJSON)
    await insertarInquilinos(inquilinosJSON)
    await insertarAdministradores(administradoresJSON)
    await insertarDetallesAlquileres(detallesAlquileresJSON)
    await insertarAlquileres(alquileresJSON)
  } catch (error) {
    console.log(
      "NO se pudo cargar la base de datos con los datos iniciales",
      error
    )
  }
}

// Comentamos porque la base ya fue cargada con los datos harkodeados
//iniciarBase()

export default app
