import Login from '../../../domain/entities/Login'
import LoginRepository from '../../../domain/repositories/LoginRepository'
import LogarUsuarioInput from './LogarUsuarioInput'

export default class CadastrarUsuario {
  constructor( 
    readonly loginRepository: LoginRepository
  ) {}

  async execute(input: LogarUsuarioInput) {
    const login = new Login(input.email, input.password)
    this.loginRepository.logar(login)
  }
}
