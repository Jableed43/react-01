import './App.css'
import Body from './components/Body'
import Contacto from './components/Contacto'
import Login from './components/Login'
import Registro from './components/Registro'
import Nosotros from './components/Nosotros'
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
    {/* Routes contiene el listado de rutas y cada Route es una ruta que creamos */}
    {/* Route, necesita un path, direccion/url y un element que es el componente  */}
    <Routes>
      <Route exact path="/" element={<Body/>} />
      <Route exact path="/contacto" element={<Contacto/>} />
      <Route exact path="/nosotros" element={<Nosotros/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/registro" element={<Registro/>} />
    </Routes>
    </>
  )
}

export default App
