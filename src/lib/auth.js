import { betterAuth, github } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db("bookshop");

const socialProviders =
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },

        github: {
          clientId: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
      }
    : undefined;

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  trustedOrigins: [
    "https://bookshop-rouge.vercel.app",
  ],

  emailAndPassword: {
    enabled: true,
  },

  socialProviders,
});