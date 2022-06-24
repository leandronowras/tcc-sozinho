export default class User {
  constructor(
    readonly name: string,
    readonly password: string,
    readonly email: string,
    readonly role: string,
  ) { }
}