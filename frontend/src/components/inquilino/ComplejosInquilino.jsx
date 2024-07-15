import React, { useEffect, useState } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import Inquilino from "./Inquilino";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

// Servicios
import complejosService from "../../service/complejos.service.js";
import tipoComplejosService from '../../service/tipoComplejos.service.js';
import ubicacionesService from "../../service/ubicaciones.service.js";
import alquileresService from "../../service/alquileres.service.js";
import RegistrarAlquiler from "./RegistrarAlquiler.jsx";

export default function ComplejosInquilino() {
  const [rows, setRows] = useState([])
  const [tipos, setTipos] = useState([])
  const [ubis, setUbis] = useState([])
  const location = useLocation()
  const { idInquilino } = location.state || {}


  let navigate = useNavigate()

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

  useEffect(() => {
    getComplejos();
    getTipos();
    getUbis();
  }, [])

  // Filtrar complejos disponibles
  const complejosDisponibles = rows.filter((complejo) => complejo.estadoAlquiler === false);

  const estadoString = (estado) => {
    return estado ? "Alquilado" : "Disponible"
  };

  const tipoComplejoNombre = (id) => {
    const tipoComplejo = tipos.find(item => item.idTipoComplejo === id);
    return tipoComplejo ? tipoComplejo.nombre : "Desconocido"
  };

  const ubicacionPorId = (id) => {
    const ubicacion = ubis.find(e => e.idUbicacion === id)
    return ubicacion ? `${ubicacion.provincia} - ${ubicacion.ciudad} - ${ubicacion.barrio} - ${ubicacion.altura}` : "Desconocido"
  }

  // HTML

  return (
    <>
      <Inquilino/>
  
      <div className="card-body">
        <h2 className="card-title text-center mb-4" style={{margin:'30px'}}>Complejos en Alquiler</h2>
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
                                <button type="button" className="btn btn-outline-success" onClick={() => {navigate('/inquilino/registrarAlquiler', { state: { nombreComplejo: complejo.nombre, tipoComplejo:tipoComplejoNombre(complejo.idTipoComplejo), idComplejo: complejo.idTipoComplejo, precioPorNoche: complejo.precioPorNoche, idInquilino: idInquilino}})}}>Reservar</button>
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