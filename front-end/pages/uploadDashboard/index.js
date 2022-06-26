import AppController from "../webapi/appController"
import ConnectionManager from "../webapi/connectionManager"

import axios from 'axios'

// Faz uma requisição a um usuarío com um ID expecifico
axios.get('http://localhost:3001')
  .then(function (response) {
    // manipula o sucesso da requisição
    console.log(response);
  })
  .catch(function (error) {
    // manipula erros da requisição
    console.error(error);
  })
  .then(function () {
    // sempre será executado
  });

export default function Dashboard() {
  return(
    <div>oi</div>
  )
}

// -------------------- //

// const API_URL = "http://localhost:3000"

// const appController = new AppController({
//   connectionManager: new ConnectionManager({
//     apiUrl: API_URL
//   })
// })

// try {
//   await appController.initialize()
// } catch(error) {
//   console.error('error on initializing', error)
// }
