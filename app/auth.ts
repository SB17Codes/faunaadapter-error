import NextAuth from "next-auth"
import { Client } from "fauna"
import { FaunaAdapter } from "@auth/fauna-adapter"
import GoogleProvider from "next-auth/providers/google"
 
const client = new Client({
  secret: process.env.FAUNA_SECRET,
  endpoint: new URL(process.env.AUTH_FAUNA_CLIENT)
})
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })],
  adapter: FaunaAdapter(client),
  debug: true
})

