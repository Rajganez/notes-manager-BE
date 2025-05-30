import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config();

const uri = process.env.DB_URI;

const client = new MongoClient(uri);

const db = client.db("test");

const connectToDB = async () => {
  try {
    await client.connect();
    console.log("Connected To DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDB;
export { db };
