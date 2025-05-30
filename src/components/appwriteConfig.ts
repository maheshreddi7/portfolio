import { Client, Databases, Account } from "appwrite"

// Import type models for Appwrite
// import { type Models } from "appwrite"

export const client: Client = new Client()
const projectid = import.meta.env.VITE_APPWRITE_PROJECT_ID
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(projectid) // My project ID

export const account: Account = new Account(client)
export const database: Databases = new Databases(client)

// You then use the imported type definitions like this
// const authUser: Models.Session = await account.createEmailPasswordSession(email, password)