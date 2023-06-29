import { Link } from 'react-router-dom';
function Header() {


    return (
      <>
        <header>
          <nav>
            <ul className='navList'>
              <li> <Link to="/">Inicio</Link> </li>
              <li> <Link to="/nosotros">Nosotros</Link> </li>
              <li> <Link to="/contacto">Contacto</Link> </li>
              <li> <Link to="/login">Login</Link> </li>
              <li> <Link to="/registro">Registro</Link> </li>
              <input className='navSearch' type="text" placeholder="Buscar..." />
            </ul>
          </nav>
        </header>
      </>
    )
  }
  
  export default Header