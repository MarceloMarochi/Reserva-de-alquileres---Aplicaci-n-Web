import { BrowserRouter, Routes, Route } from "react-router-dom"

// Estilos Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

// Componentes
import InicioDeSesion from "./components/InicioDeSesion.jsx"
import CrearCuenta from "./components/CrearCuenta.jsx"
import ComplejosInquilino from "./components/inquilino/ComplejosInquilino.jsx"
import AlquileresAdmin from "./components/administrador/AlquileresAdmin.jsx"
import ComplejosAdmin from "./components/administrador/ComplejosAdmin.jsx"
import RegistrarAlquiler from "./components/inquilino/RegistrarAlquiler.jsx"
import CrearComplejo from "./components/administrador/CrearComplejo.jsx"
import AdminInicio from "./components/administrador/AdminInicio.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioDeSesion />}></Route>
        <Route path="/crearCuenta" element={<CrearCuenta />}></Route>
        <Route path="/inquilino" element={<ComplejosInquilino />}></Route>
        <Route path="/administrador" element={<AdminInicio />}></Route>
        <Route path="/administrador/alquileresAdmin" element={<AlquileresAdmin />}></Route>
        <Route path="/administrador/complejosAdmin" element={<ComplejosAdmin />}></Route>
        <Route path="/inquilino/registrarAlquiler" element={<RegistrarAlquiler />}></Route>
        <Route path="/administrador/complejosAdmin/crearComplejo" element={<CrearComplejo />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
