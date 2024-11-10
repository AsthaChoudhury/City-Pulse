// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default prisma;

// import { MongoClient } from "mongodb";

// const uri = process.env.DATABASE_URL;
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Connection error:", error);
//   } finally {
//     await client.close();
//   }
// }

// run();
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.DATABASE_URL);
let db;

export async function connectToDatabase() {
  if (!db) {
    try {
      const client = new MongoClient(process.env.DATABASE_URL);
      await client.connect();
      console.log("Connected to MongoDB");
      db = client.db("iwp");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  }
  return db;
}

export default connectToDatabase;
