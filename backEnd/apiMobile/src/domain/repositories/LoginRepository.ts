import Login from '../entities/Login'

export default interface LoginRepository {
  logar(credentials: Login): Promise<void> 
}