import Header from './Header'
import Body from './Body'
import { UserContext } from '../UserContext.jsx';
import {useContext} from 'react';
function Inicio() {
const { user } = useContext(UserContext);
    return (
    <>
        <Header/>
        <div>
      {user ? <h2> ¡Bienvenido {user.name}!</h2> : <h2>¡Bienvenido!</h2>}
        </div>
        <Body/>
       
        </>
    )
}

export default Inicio