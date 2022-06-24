import express from 'express'
import cors from 'cors'
import CadastrarUsuario from './application/useCases/cadatro_user/CadastrarUsuario'
import UserRepositoryDatabase from './infra/repository/UserRepositoryDatabase'
import Mongo from './infra/database/Mongo'
import CadastrarUsuarioInput from './application/useCases/cadatro_user/CadastrarUsuarioInput'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/cadastro', (request, response) => {
  const testInput: CadastrarUsuarioInput = {
    name: 'leandrl', password: '123', email: 'leandro@gmail.com', role: 'student'
  }

  const mongo = new Mongo('mongodb+srv://leandro:tcc@cluster0.4zdsr.mongodb.net/?retryWrites=true&w=majority')
  const cadastro = new CadastrarUsuario(new UserRepositoryDatabase(mongo))
  console.log(cadastro.execute(testInput))
  response.send('usuario cadastrado')
})

app.listen(5000, () => { console.log('rodando 5000')})