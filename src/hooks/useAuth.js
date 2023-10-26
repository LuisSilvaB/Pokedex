import { useContext } from "react"; 
import { AuthContext } from '../context/AuthContext' 

// Usamos el arrow funcion para que cuando se use el hook se tenga que ejecutar 
// Este hook lo que hace es acceder al contexto, extrae el valor y lo devuelve.  
export default () => useContext(AuthContext); 