import Header from './Header'
import Body from './Body'
import { UserContext } from '../UserContext.jsx';
import {useContext} from 'react';
function Inicio() {
const { user } = useContext(UserContext);
    return (
    <>
        <Header/>
        
        <h1>Inicio</h1>
        <div>
      {user ? <h2>Hola {user.name}!!</h2> : <h2>Hola!!</h2>}
        </div>
        <Body/>
       
        </>
    )
}

export default Inicio