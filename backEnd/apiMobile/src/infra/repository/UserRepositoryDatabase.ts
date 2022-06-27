import User from "../../domain/entities/User";
import UserRepository from "../../domain/repositories/UserRepository";
import Mongo from "../database/Mongo";

export default class UserRepositoryDatabase implements UserRepository {
  constructor( readonly mongo: Mongo) {}

  async cadastrar(user: User): Promise<void> {
    console.log(user)
    const result = await this.mongo.client.db('tcc').collection('documents')
      .insertOne(user);
    console.log('Inserted document =>', result);
  }
}