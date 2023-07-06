import {useContext } from "react";
import { UserContext } from "../UserContext.jsx";
import { Outlet, Navigate } from "react-router-dom";

//si o si debe ser asincrona, de lo contrario no llegará a cargar el usuario y te redirige a /register
async function useAuth(){
    const { user } = await useContext(UserContext);
  return user;
};
 
function ProtectedRoute(){
  const isAuth = useAuth();
  return isAuth ? <Outlet/> : <Navigate to="/registro" />;
};

export default ProtectedRoute;