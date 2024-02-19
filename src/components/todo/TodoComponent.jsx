import { useNavigate, useParams } from "react-router-dom"
import { createTodoApi, retriveTodoApi, updateTodoApi } from "./security/api/TodoAppApiService"
import { useEffect, useState } from "react"
import { Formik, Form, Field, ErrorMessage} from "formik"
import moment from "moment"

export default function TodoComponent()
{


      const [description, setDescription] = useState('')
      const [targetDate, setTargetDate] = useState('')
      const {id} = useParams()

      const navigate = useNavigate()
      useEffect( () => retriveTodos(), [id])
      function retriveTodos()
      {
            if(id != -1)
            {
                  retriveTodoApi('giriajju', id)
                  .then(response => {
                        setDescription(response.data.description)
                        setTargetDate(response.data.targetDate)
                  })
                 
                  .catch(error => console.log(error))

            }
            

      }

      function onSubmit(values)
      {
            console.log(values)
            const todo ={
                  id: id,
                  username: 'giriajju',
                  description: values.description,
                  targetDate: values.targetDate,
                  done: false
            }
            if(id == -1)
            {
                  createTodoApi('giriajju', todo)
                  .then(response => navigate('/todos'))
                 
                  .catch(error => console.log(error))
            }
            else{
                  updateTodoApi('giriajju',id,todo)
                  .then(response => navigate('/todos'))
                 
                  .catch(error => console.log(error))

            }
            
      }

      function validate(values)
      {
            let errors = {}

            if(values.description.length < 5)
            {
                  errors.description = 'Enter atleast 5 characters'
            }

            if(values.targetDate == null || values.targetDate == '')
            {
                  errors.targetDate = 'Enter a valid Timeline'
            }
            console.log(values)
            return errors
      }
      return(
            <div className="container">
            <h1>Updateing the Todos</h1>
            <div>
                  <Formik initialValues={{description, targetDate}}
                   enableReinitialize={true}
                   onSubmit={onSubmit}
                   validate={validate}
                   validateOnBlur={false}
                   validateOnChange={false}
                   >
                   
                        {
                              (props) => (
                                    <Form>
                                          <ErrorMessage
                                               name="description"
                                               component="div"
                                               className="alert alert-warning"
                                          
                                          />

                                          <ErrorMessage
                                               name="targetDate"
                                               component="div"
                                               className="alert alert-warning"
                                          
                                          />
                                          <fieldset className= "form-group">
                                                <label>Description</label>
                                                <Field type="text" className="form-control" name="description"/>

                                          </fieldset>
                                          <fieldset className= "form-group">
                                                <label>Target Date</label>
                                                <Field type="date" className="form-control" name="targetDate"/>

                                          </fieldset>

                                          <div>
                                                <button className="btn btn-success m-3" type="submit">Save</button>
                                          </div>
                                    </Form>
                              )
                        }
                  </Formik>
            </div>
      </div>

      )
      
}