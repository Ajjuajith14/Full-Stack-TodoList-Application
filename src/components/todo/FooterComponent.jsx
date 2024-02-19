 import { useContext } from "react"
 import { AuthContext } from "./security/AuthContext"
 
 function FooterComponent()
{

      const authContext = useContext(AuthContext)
      console.log(authContext.number)

      return(
            <footer className="Footer">
                  <div className="container">
                        
                  </div>
            </footer>
      )
}

export default FooterComponent

