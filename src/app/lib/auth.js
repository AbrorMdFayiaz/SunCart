import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_CLIENT);
const db = client.db("SunCart");


export const auth = betterAuth({
      emailAndPassword: { 
    enabled: true, 
  }, 
  baseURL: process.env.BETTER_AUTH_URL, 
  socialProviders: { 
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
  }, 
    database: mongodbAdapter(db, { client }),
});