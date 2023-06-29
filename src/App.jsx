import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Login from './components/Login';
import Registro from './components/Registro';
function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="/nosotros" element={<Nosotros/>} />
        <Route exact path="/contacto" element={<Contacto/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/registro" element={<Registro/>} />
      </Routes>
  )
}
export default App
