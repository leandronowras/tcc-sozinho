export default class CadastrarUsuarioInput {
  constructor(
    readonly name: string,
    readonly password: string,
    readonly email: string,
    readonly role: string,
  ){}
}