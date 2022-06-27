import Login from "../../domain/entities/Login";
import LoginRepository from "../../domain/repositories/LoginRepository";
import Mongo from "../database/Mongo";

export default class LoginRepositoryDatabase implements LoginRepository {
  constructor( readonly mongo: Mongo) {}
  async logar(credentials: Login): Promise<void> {
    // fazer query no banco e ver se tem algum match com o input do usuario
    console.log('credentials', credentials)
    const result = await this.mongo.client.db('tcc').collection('documents')
      .find({email: credentials.email, password: credentials.password}).toArray();
    console.log('result repository database', result)
  }
}