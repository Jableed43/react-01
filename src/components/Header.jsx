import { Link } from 'react-router-dom';
import { useContext } from "react";
import UserSearch from './UserSearch'
import { UserContext } from '../UserContext';
function Header() {

  const { user } = useContext(UserContext);
console.log(user)

    return (
      <>
        <header>
          <nav>
            
            {user ? (
              <><ul className='navList'>
                <li> <Link to="/">Usuarios</Link> </li>
                <li> <Link to="/nosotros">Nosotros</Link> </li>
                <li> <Link to="/contacto">Contacto</Link> </li>
                <li> <Link to="/login">Logout</Link> </li>
              </ul><UserSearch /></>
              ) : ( 
              
              <ul className='navList'>
              <li> <Link to="/nosotros">Nosotros</Link> </li>
              <li> <Link to="/contacto">Contacto</Link> </li>
              <li> <Link to="/login">Login</Link> </li>
              <li> <Link to="/registro">Registro</Link> </li>
              
            </ul>
            ) }
          </nav>
        </header>
      </>
    )
  }
  
  export default Header