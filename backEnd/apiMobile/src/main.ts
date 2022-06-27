import express from 'express'
import cors from 'cors'
import CadastrarUsuario from './application/useCases/cadatro_user/CadastrarUsuario'
import LogarUsuario from './application/useCases/login_user/LogarUsuario'
import UserRepositoryDatabase from './infra/repository/UserRepositoryDatabase'
import Mongo from './infra/database/Mongo'
import CadastrarUsuarioInput from './application/useCases/cadatro_user/CadastrarUsuarioInput'
import LogarUsuarioInput from './application/useCases/login_user/LogarUsuarioInput'
import LoginRepositoryDatabase from './infra/repository/LoginRepositoryDatabase'

const app = express()
app.use(cors())
app.use(express.json())
try {
  var mongo = new Mongo('mongodb+srv://leandro:tcc@cluster0.4zdsr.mongodb.net/?retryWrites=true&w=majority')
  
} catch (error) {
  console.log('conexao com o banco de dados falhou')
}

app.get('/login', (request, response) => {
  const testLoginInput: LogarUsuarioInput = {
    email: 'leandrl', password: '123'
  }

  const login = new LogarUsuario(new LoginRepositoryDatabase(mongo))
  console.log(login.execute(testLoginInput))
  response.send('usuario cadastrado')
})

app.get('/cadastroAluno', (request, response) => {
  const testInput: CadastrarUsuarioInput = {
    name: 'leandrl', password: '123', email: 'leandro@gmail.com', role: 'student'
  }

  const cadastro = new CadastrarUsuario(new UserRepositoryDatabase(mongo))
  console.log(cadastro.execute(testInput))
  response.send('usuario cadastrado')
})

app.get('/cadastroProfessor', (request, response) => {
  const testInput: CadastrarUsuarioInput = {
    name: 'leandrl', password: '123', email: 'leandro@gmail.com', role: 'professor'
  }

  const cadastro = new CadastrarUsuario(new UserRepositoryDatabase(mongo))
  console.log(cadastro.execute(testInput))
  response.send('usuario cadastrado')
})


app.listen(5000, () => { console.log('rodando 5000')})

/* 

todo:
front:
corrigir o fetch para ser post 

login:
corrigir rota de get para post em login
fazer a verificacao no banco de dados


*/