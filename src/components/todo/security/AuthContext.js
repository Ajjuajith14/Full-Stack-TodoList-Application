 import { createContext, useContext, useState } from "react";


// export const AuthContext = createContext()

// export default function AuthProvider({childern})
// {
//       const [number, setNumber] = useState(0)
//       return(
//             <AuthContext.Provider value = {{number}}>
//                   {childern}
//             </AuthContext.Provider>
//       )
// }

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)
export default function AuthProvider({ children }) {
 

 const [isAuthenticated, setAuthenticated] = useState(false)

// const [username,setUsername] = useState(null)

 //const valuetoShared = {isAuthenticated, setAuthenticated}
 //setInterval(() => setNumber(number+2), 2000)
 
    function login(username,password){
        if(username==='usergiri' && password==='dummy')
            {
                setAuthenticated(true)
                //setUsername(username)
                return true
            }
            else{
                setAuthenticated(false)
               // setUsername(null)

                return false
            }
    }

    function logout()
    {
        setAuthenticated(false)
    }
return (
        <AuthContext.Provider value={ { isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}