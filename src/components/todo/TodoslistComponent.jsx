import { useEffect, useState } from "react";
import { deleteTodoApi, retriveAllTodoUsers } from "./security/api/TodoAppApiService";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "./security/AuthContext";

function TodoslistComponent()
{
      const today = new Date();

      // const authContext = useAuth()

      // const username = authContext.username

      const targetdate = new Date(today.getFullYear(), today.getMonth()+3, today.getDate()+5)

      const [todos,setTodos] = useState([])

      const [message, setMessage] = useState(null)

      const navigate = useNavigate()

      // const todos = [
            
      //       {id: 1, description: 'Learn AWS', done: false,target: targetdate},
      //       {id: 2, description: 'Learn Java', done: false, target: targetdate + today.getday()+2},
      //       {id: 3, description: 'Learn Deveops', done: false, target: targetdate}
      // ]

      

      function refresh()
      {
           
            retriveAllTodoUsers('giriajju')
            .then(response => {setTodos(response.data)})
            .catch(error => console.log(error))
      }
      
      

      function deleteTodo(id)
      {

            deleteTodoApi('giriajju',id)
            .then(
                  () => {
                        setMessage(`Delete of Todo with id = ${id} is Success`)
                        refresh()
                  }

            )
            .catch(error => console.log(error))
      }

      function updateTodo(id)
      {
            console.log('clicked' + id)
            navigate(`/todo/${id}`)

      }

      function addTodo()
      {
            navigate(`/todo/-1`)
      }

      useEffect(
            () => { refresh() }, []
      );


      return (
            <div className="Todotable">
            <div className="container">
                  <h1>Welcome to TodoList</h1>
                  
                  {message && <div className="alert alert-warning">{message}</div>
 }
                  <div >
                        <table className="table">
                              <thead>
                                    <tr>
                                          <th>Description</th>
                                          <th>Pending</th>
                                          <th>target</th>
                                          <th>Delete</th>
                                          <th>Update</th>

                                    </tr>

                              </thead>
                              <tbody>

                                    {
                                          todos.map(
                                                todo=>(
                                                      <tr key={todo.id}>
                                                            
                                                            <td>{todo.description}</td>
                                                            <td>{todo.done.toString()}</td>
                                                            <td>{todo.targetDate}</td>
                                                            <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                                            <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>


                                                      </tr>

                                          )

                                          ) 
                                    }
                                    
                              </tbody>
                        </table>
                        
                  </div>
                  <div className="btn btn-success m-5" onClick={addTodo}>Add New Todo</div>
            </div>
            </div>

      )
}

export default TodoslistComponent