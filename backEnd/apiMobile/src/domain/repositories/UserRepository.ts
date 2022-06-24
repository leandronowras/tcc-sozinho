import User from '../entities/User'

export default interface UserRepository {
  cadastrar(user: User): Promise<void> 
}