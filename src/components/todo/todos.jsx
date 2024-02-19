import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import './todos.css'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import TodoslistComponent from './TodoslistComponent'
import ErrorComponent from './ErrorComponent'
import WelcomeComponent from './WelocomeComponent'
import AuthProvider,{useAuth} from './security/AuthContext'
import TodoComponent from "./TodoComponent"
import { Children } from "react"


function AuthenticatedRoute({children})
{
      const authContext = useAuth()
      if(authContext.isAuthenticated)
      return children

      return <Navigate to="/"/>

}
export default function TodoApp()
{
      return(
            <div className="TodoApp">
                  <AuthProvider>
                  <BrowserRouter>
                  <HeaderComponent/>
                        <Routes>
                          <Route path='/' element={<LoginComponent/>}></Route>
                          <Route path='/login' element={<LoginComponent/>}></Route>
                          
                          <Route path='/welcome/:username' element={
                              <AuthenticatedRoute>
                                    <WelcomeComponent/>
                              </AuthenticatedRoute>}
                          />

                         
                          <Route path='/todos' element={
                              <AuthenticatedRoute>
                                    <TodoslistComponent/>
                              </AuthenticatedRoute>}
                          
                          />

                          <Route path='/todo/:id' element={
                              <AuthenticatedRoute>
                                    <TodoComponent/>
                              </AuthenticatedRoute>}
                          
                          />

                          
                          <Route path='/logout' element={
                               <AuthenticatedRoute>
                                   <LogoutComponent/>
                               </AuthenticatedRoute>}
                         />
                          <Route path='*' element={<ErrorComponent/>}></Route>
                        </Routes>
                      
                  </BrowserRouter>
                  <FooterComponent/>
                  </AuthProvider>
                  

            </div>
      )
}








