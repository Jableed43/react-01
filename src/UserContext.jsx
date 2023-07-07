import React, { createContext, useState, useEffect } from 'react';

//El contexto es necesario porque de esa forma manejamos una sesion global de nuestro usuario en toda nuestra aplicacion
//Creamos contexto para nuestro usuario
const UserContext = createContext();

// { children } representa a todo componente hijo de userProvider
// UserProvider englobal el estado user y las funciones handle

const UserProvider = ({ children }) => {
  //este estado de usuario va a ser del contexto global
  const [user, setUser] = useState(null);

  //guardo usuario cuando hace login
  const handleLogin = (loggedInUser) => {
    //guardo en el estado del contexto global
    setUser(loggedInUser);
    // Almacenar el usuario en localStorage
    //setItem crea o guarda en localstorage el usuario, (nombre de item, data en string)
    localStorage.setItem('user', JSON.stringify(loggedInUser)); 
  };

  //me permite tener una sesion activa porque verifica cada vez que se renderiza el componente
  useEffect(() => {
    // Recuperar el usuario almacenado en localStorage (si existe)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

//Destruimos sesion
  const handleLogout = () => {
    //borra el estado del usuario
    setUser(null);
    // Eliminar el usuario de localStorage
    localStorage.removeItem('user'); 
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
