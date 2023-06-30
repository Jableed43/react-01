import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../UserContext';
function Header() {

  const { user } = useContext(UserContext);
console.log(user)

    return (
      <>
        <header>
          <nav>
            
            {user ? (
              <ul className='navList'>
              <li> <Link to="/usuarios">Usuarios</Link> </li>
              <li> <Link to="/nosotros">Nosotros</Link> </li>
              <li> <Link to="/contacto">Contacto</Link> </li>
              <li> <Link to="/login">Logout</Link> </li>
              <input className='navSearch' type="text" placeholder="Buscar..." />
              </ul>
              ) : ( 
              
              <ul className='navList'>
              <li> <Link to="/nosotros">Nosotros</Link> </li>
              <li> <Link to="/contacto">Contacto</Link> </li>
              <li> <Link to="/login">Login</Link> </li>
              <li> <Link to="/">Registro</Link> </li>
              
            </ul>
            ) }
          </nav>
        </header>
      </>
    )
  }
  
  export default Header