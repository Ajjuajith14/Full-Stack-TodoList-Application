import { useParams, Link} from "react-router-dom"
import { useState } from "react"
import { helloworldretrives } from "./security/api/Helloworldretrive"
import im from './images/image1.jpg'
import { AuthContext } from "./security/AuthContext"

function WelcomeComponent()
{

      

      const [message, setMessage] = useState(null)

      function helloworldfun()
       {
            helloworldretrives()
           // axios.get('http://localhost:8080/hello-world-bean')
           .then((response) => successmsg(response))
           .catch((error) => errormsg(error))
           .finally(() => console.log('cleanup'))

      // helloworldpathvar('Giri')
      // //      axios.get('http://localhost:8080/hello-world-bean')
      //      .then((response) => successmsg(response))
      //      .catch((error) => errormsg(error))
      //      .finally(() => console.log('cleanup'))
      }

      function successmsg(response){
            console.log(response)
            setMessage(response.data.message)

      }

      function errormsg(error)
      {

            console.log(error)
      }


      const {username} = useParams()
      console.log(username)
      return(
            
            <div>
            
            <div className="WelcomeComponent">

                 <h1>Welcome to Website {username}</h1>
                 <img  style={{ width:"100%", height:"100%" , objectFit: "cover"}} src={im} alt=""></img>


                 <div className="wc">
                      Manage Your Todo List <Link to ='/todos'>Todo Lists</Link>
                 </div>
                 
                 <div>
                     <button className="btn btn-success m-5" onClick={helloworldfun}>Hello-World</button>
                 </div>
            </div>
            
            </div>
      )
}

export default WelcomeComponent