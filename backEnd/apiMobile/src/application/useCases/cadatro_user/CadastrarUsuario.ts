import User from '../../../domain/entities/User'
import UserRepository from '../../../domain/repositories/UserRepository'
import CadastrarUsuarioInput from './CadastrarUsuarioInput'

export default class CadastrarUsuario {
  constructor( 
    readonly userRepository: UserRepository
  ) {}

  async execute(input: CadastrarUsuarioInput) {
    const user = new User(input.name, input.password, input.email, input.role)
    this.userRepository.cadastrar(user)
  }
}
