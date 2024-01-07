import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook";
const crypto = require('crypto');

// const secret = crypto.randomBytes(64).toString('hex');

export default NextAuth({
    secret: process.env.FACEBOOK_CLIENT_SECRET,

    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
})