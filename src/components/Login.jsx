import Header from "./Header"
import {useEffect, useRef, useState} from 'react';

function Login() {

  const initialUrl = "https://648b137217f1536d65ea4c77.mockapi.io/api/users"

const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //Acá seteo los users como objeto de js
      //Guardo los users en 
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers(initialUrl);
  }, []);
  
  //constante REF, donde enviamos las notificaciones
  const notificacionRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault()
  
    let loginUser = {
      name: e.target.nombre.value,
      password : e.target.password.value
    }

    //primero nos aseguramos que el user existe
    let userFound = users.find(user => user.name === loginUser.name)

    //segundo nos aseguramos que el password coincide
    if(userFound.password === loginUser.password){
      notificacionRef.current.style.color = 'green';
      notificacionRef.current.innerHTML = "Usuario Logueado"
      
    } else {
      notificacionRef.current.style.color = 'red';
      notificacionRef.current.innerHTML = "Datos Incorrectos"
    }

    e.target.reset()
  }

    return (
      <>
      <Header/>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" />

        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password"/>

      <p id="notificacion" ref={notificacionRef}> </p>

        <button type="submit">Enviar</button>
    </form>
      </>
    )
  }
  
  export default Login