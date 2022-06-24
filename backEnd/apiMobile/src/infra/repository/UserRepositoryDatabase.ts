import User from "../../domain/entities/User";
import UserRepository from "../../domain/repositories/UserRepository";
import Mongo from "../database/Mongo";
import Query from "../database/remover";

export default class UserRepositoryDatabase implements UserRepository {
  constructor( readonly mongo: Mongo) {}

  async cadastrar(user: User): Promise<void> {
    const result = await this.mongo.client.db('tcc').collection('documents').find({}).toArray();
    console.log('result repository database', result)
  }
}