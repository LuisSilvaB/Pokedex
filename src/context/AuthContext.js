import { useState, createContext } from "react"

export const AuthContext = createContext({
 // Especificamos que datos va a tener este contexto 
 auth: undefined, 
 login: () => {}, 
 logout: () => {}, 
}); 

// Definimos nuestro provider, estas serán todas las acciones que puede hacer nuestro contexto 
export function AuthProvider(props){
 const { children } = props; 
 const [ auth, setAuth ] = useState(undefined);
 const login = (userData) => {
  setAuth(userData); 
}
 const logout = () => {
  setAuth(undefined); 
}

 const valueContext = {
  auth, 
  login, 
  logout, 
 }
 return(
   <AuthContext.Provider value={valueContext}>
    { children }
   </AuthContext.Provider>
   
  )
}