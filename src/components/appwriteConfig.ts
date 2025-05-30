import { Client, Databases, Account } from "appwrite";

// Import type models for Appwrite
// import { type Models } from "appwrite"

export const client: Client = new Client();
const projectId = process.env.REACT_APP_PROJECT_ID;
client.setEndpoint("https://fra.cloud.appwrite.io/v1").setProject(projectId!); // My project ID

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

// You then use the imported type definitions like this
// const authUser: Models.Session = await account.createEmailPasswordSession(email, password)
