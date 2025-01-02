import { MongoClient } from 'mongodb';
import 'dotenv/config';

class dbClient {
  constructor() {
    const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=pet-adoption`;
    this.client = new MongoClient(queryString);
    this.conectarDB();
  }

  async conectarDB() {
    try {
      await this.client.connect();
      this.db = this.client.db('adoption-biz');
      console.log("Connected to DB server");
    } catch (e) {
      console.log(e);
    }
  }
}

export default new dbClient();