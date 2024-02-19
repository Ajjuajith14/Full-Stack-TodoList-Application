import axios from "axios";

// export function helloworldretrive()
// {
//       return axios.get('http://localhost:8080/hello-world-bean')

// }
const apiClient = axios.create(
      {
            baseURL: 'http://localhost:8080'
      }
)
export const helloworldretrives = () => apiClient.get('/hello-world-bean')

export const helloworldpathvar = (username) => apiClient.get(`/hello-world/path-variable/${username}`)

// {
//       headers: {
//             Authorization : 'Basic Z2lyaWFqanU6ZHVtbXk='
//           }

// })