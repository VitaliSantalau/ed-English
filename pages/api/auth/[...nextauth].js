import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Email({
      server: {
        host: 'smtp.gmail.com',
        port: 587, /*465*/
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    })
  ],
  database: process.env.DATABASE_URL,
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
  jwt: true, 
  // Seconds - How long until an idle session expires and is no longer valid.
  maxAge: 30 * 24 * 60 * 60, // 30 days
  // Seconds - Throttle how frequently to write to database to extend a session.
  // Use it to limit write operations. Set to 0 to always update the database.
  // Note: This option is ignored if using JSON Web Tokens 
  updateAge: 24 * 60 * 60, // 24 hours
  },
}

export default (req, res) => NextAuth(req, res, options)