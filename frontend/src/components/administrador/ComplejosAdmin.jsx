import React, { useEffect, useState } from "react"
import Administrador from "./Administrador"
import { useNavigate, Link } from "react-router-dom" 

//Servicios
import complejosService from "../../service/complejos.service"
import tipoComplejosService from '../../service/tipoComplejos.service.js'
import ubicacionesService from "../../service/ubicaciones.service.js"

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function ComplejosAdmin() {
  let navigate = useNavigate()
  // useEffect()
  const [rows, setRows] = useState([])
  const [tipos, setTipos] = useState([])
  const [ubis, setUbis] = useState([])

  async function getComplejos() {
    const complejos = await complejosService.getAllComplejos()
    setRows(complejos)
  }

  async function getTipos() {
    const tipos = await tipoComplejosService.getAllTipoComplejos()
    setTipos(tipos)
  }

  async function getUbis() {
    const ubicaciones = await ubicacionesService.getAllTipoUbicaciones()
    setUbis(ubicaciones)
  }


  useEffect(() => {getComplejos();
    getTipos();
    getUbis();
  }, [])

  const estadoString = (estado) => {
    if (estado) {
      return "Alquilado"
    } else {
      return "Disponible"
    }
  }

  const borrarComplejo = async (idcomp, idubi) => {
    if (window.confirm(`¿Seguro que desea eliminar el complejo?`))
        await complejosService.eliminarComplejo(idcomp)
        await ubicacionesService.eliminarUbicacion(idubi)

  }
  

  const tipoComplejoNombre = (id) => {
    const tipoComplejo = tipos.find(item => item.idTipoComplejo === id);
    return tipoComplejo ? tipoComplejo.nombre : "Desconocido"
  }

  const ubicacionPorId = (id) => {
    const ubicacion = ubis.find(e => e.idUbicacion === id)
    return ubicacion ? `${ubicacion.provincia} - ${ubicacion.ciudad} - ${ubicacion.barrio} - ${ubicacion.altura}` : "Desconocido"
  }

  const registrarComplejo = () => {
    navigate('/administrador/complejosAdmin/crearComplejo')
  }

  // HTML
  return (
    <>
      <Administrador />

      <div className="card-body">
        <h2 className="card-title text-center mb-4" style={{margin:'30px'}}>Complejos</h2>
      </div>
      <div className="d-flex justify-content-center" style={{margin:'30px'}}>
        <button className="btn btn-primary" onClick={registrarComplejo}>Registrar nuevo Complejo</button>
      </div>
      <div>
                <Container>
                <Row>
                {rows && rows.map((complejo) => {
                return(
                        <Col key={complejo.idComplejo} xs={12} sm={6} md={4} lg={3}>
                            <div>
                            <Card style={{ width: '100%', margin: '10px 0'  }}>
                              <Card.Img variant="top" src= {"https://i.blogs.es/ad5d00/ubicacion-google/1366_2000.jpeg"} />
                              <Card.Body key={complejo.idComplejo}>
                                <Card.Title>{complejo.nombre}</Card.Title>
                                <Card.Subtitle>Tipo: {tipoComplejoNombre(complejo.idTipoComplejo)} </Card.Subtitle>
                                <Card.Subtitle>{estadoString(complejo.estadoAlquiler)}</Card.Subtitle>
                                <Card.Subtitle>Precio por Noche: ${complejo.precioPorNoche}</Card.Subtitle>
                                <Card.Subtitle>Capacidad: Para {complejo.capacidad} personas</Card.Subtitle>
                                <Card.Text>{ubicacionPorId(complejo.idUbicacion)}</Card.Text>
                                <Button variant="danger" onClick={() => {borrarComplejo(complejo.idComplejo, complejo.idUbicacion)}}>Eliminar</Button>
                              </Card.Body>
                            </Card>
                            </div>
                        </Col>
                )})}
                </Row>
                </Container>
            </div>
    </>
  )
}