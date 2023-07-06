import './App.css'
import {Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Login from './components/Login';
import Registro from './components/Registro';
import ProtectedRoute from './auth/ProtectedRoute';

import { UserProvider } from './UserContext.jsx';

function App() {

  return (
    <UserProvider>
      <Routes>
      
      <Route element={<ProtectedRoute/>}>
        <Route exact path='/' element={<Inicio/>}/>
      </Route>
        <Route exact path="/nosotros" element={<Nosotros/>} />
        <Route exact path="/contacto" element={<Contacto/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/registro" element={<Registro/>} />
      </Routes>
    </UserProvider>
  )
}
export default App
