import Users from './Users'
import Header from './Header'
// importarlos -useEffect -useState
import {useEffect, useState} from 'react';
function Body() {

//UseState actualiza el componente al modificarse el estado, su valor inicial es [];
// Ustatate tiene dos variables el primero es un estado (dato) que vamos a guardar (variable, objeto, array, booleano) en el ejemplo es users
//El segundo variables es una funcion llamada setUsers, setea el estado, le asigna , modifica, agrega un valor de dicho estado
//useState tiene como parametro el valor de entrada o por defecto que tendra mi estado donde luego ingresaré mi estado o los datos

    const [users, setUsers] = useState([]);

    const [show, setShow] = useState(true);

    const initialUrl = "https://648b137217f1536d65ea4c77.mockapi.io/api/users"

    const fetchUsers = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        //Acá seteo los users como objeto de js
        //Guardo los users en 
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    /* useEffect permite ejecutar codigo cuando el componente se monta en el dom y cuando cambian las dependencias */
    useEffect(() => {
        fetchUsers(initialUrl);
      }, []);

    //Mostrar / ocultar listado
    // show puede tener como valor true o false

    //mostrar un mensaje en el boton
    const message = show ? 'Ocultar' : 'Mostrar';

    //modificar la clase actual del contenedor de las cards de usuarios
    const containerClassName = show ? 'show' : 'hide';

    //se activa al hacer click en el botón, es un disparador
    const handleClick = () => {
      //invierte el valor actual de show
      //si es true, lo vuelve false
      //si es false lo vuelve true
        setShow(!show)
    }


    return (
      <>
        <button  onClick={handleClick}> {message} </button>

        <div className={containerClassName}>
          <section className='card-container'>
            <Users users={users}/>
          </section>
        </div>
      </>
    )
  }
  
  export default Body