import {  useNavigate, } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "./security/AuthContext"
import image from './images/6310507.jpg'

function LoginComponent()
{


      const[username, setUsername] = useState('')
      const[password, setPassword] = useState('')
      const [showerrorMesggae, setshowerrorMesggae] = useState(false)

      const navigate = useNavigate();

      const authContext = useAuth()

      function handleUser(event)
      {
            setUsername(event.target.value)
      }

      function handlePassword(event)
      {
            setPassword(event.target.value)
      }

      function handleSubmit()
      {
            if(authContext.login(username,password))
            {
                  
                  navigate(`/welcome/${username}`)
                  
            }
            else{

                  setshowerrorMesggae(true)
                  
            }
      }

      // function SuccessMessage()
      // {
      //       if(showsuccessMesssge)
      //       {
      //             return <div className="succesMessage">Authenticated Successfully</div>
      //       }
      //       return null
      // }

      // function ErrorMessage()
      // {
      //       if(showerrorMesggae)
      //       {
      //             return <div className="ErrorMessage">Authentication Failed! please check your credentials</div>
      //       }
      //       return null
      // }
      
      return(
            <div className="Login">
                  <h1>Time to Dive into Website</h1>
                  <img className="im1" style={{ width: 300, height: 300 }} src={image} alt="" max-width="100%"/>
                  
                  {showerrorMesggae && <div className="ErrorMessage">Authentication Failed! please check your credentials</div>}
                  
                  <div className="LoginForm">                  
                        <div>
                              <label>UserName</label>
                              <input type="text" name="username" value ={username} onChange={handleUser}/>
                        </div>
                        <div>
                              <label>Password</label>
                              <input type="password" name="password" value ={password} onChange={handlePassword}/>
                        </div>
                        <div >
                              <button type="button" name="login" onClick={handleSubmit}>Login</button>
                        </div>
                  </div>           
            </div>
      )
}


export default LoginComponent