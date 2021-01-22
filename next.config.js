const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */
      env: {
        "BASE_URL": "http://localhost:3000",
        /*"BASE_URL": "https://ed-english.vercel.app",*/
        "MONGODB_URL": "mongodb+srv://VitaliSantalau:CyrZLqhnd61eWgR6@cluster0.efytr.mongodb.net/ed-database?retryWrites=true&w=majority",
      }
    }
  }

  return {
    /* config options for all phases except development here */
  }
}