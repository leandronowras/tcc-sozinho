import { MongoClient } from 'mongodb'

export default class Mongo {
  client: MongoClient;

  constructor(url: string) {
    this.client = new MongoClient(url)
    this.connect()
  }

  async connect(): Promise<any> {
    await this.client.connect
    console.log('connected succesfully to server')
    const db = this.client.db('tcc');
    const collection = db.collection('documents');
    
    // console.log(collection)
    
    // const findResult = await collection.find({}).toArray();
    // console.log('Found documents =>', findResult);
  }
}
